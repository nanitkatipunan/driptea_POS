<template>
    <div class="container">
        <center>
            <h1>Your Cart</h1>
            <div v-if="tableData !== null && tableData.length > 0">
                <table class="table table-responsive" id="myTable">
                    <tr>
                        <th style="width: 30%;">Product Name</th>
                        <th>Add&nbsp;ons</th>
                        <th>Cup Type</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th style="width: 15px;">❌</th>
                    </tr>
                    <tbody>
                        <tr v-for="(item, index) in tableData" :key="index">
                            <td>{{item.order_product ? item.order_product[0].productName : ''}}</td>
                            <td>{{item.same_order ? getAddOns(item.same_order) : ''}}</td>
                            <td>{{item.cupType ? item.cupType : ''}}</td>
                            <td>{{item.choosenPrice}}</td>
                            <td>{{item.quantity}}</td>
                            <td>{{item.subTotal}}</td>
                            <td>
                                <button style="font-size: 10px" type="button" aria-expanded="false" @click="deleteOrder(item.id)">❌</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-md-4" style="text-align: left">
                        <p>Subtotal: ₱{{getSubTotal()}}</p>
                        <p>Delivery Fee: ₱{{getDeliveryFee()}}</p>
                        <h5>Total: ₱{{getTotal()}}</h5>
                    </div>
                </div>
                <button type="button" class="btn btn-success" @click="orderNow()">Order Now {{count}}</button>
            </div>
            <div v-else>
                <div class="empty">
                    <i class="fas fa-hourglass-start text-danger"></i>
                    <v-icon color="red darken-2">mdi-database</v-icon>
                    <span class="description text-danger"><b>No Data in you Cart</b></span>
                    <!-- <span style="font-size: 15px;">{{action}}</span> -->
                </div>
            </div>
        </center>
    </div>
</template>
<style scoped>
.table {
    width: 70%;
}
.empty{
    width: 100%;
    margin-top: 25px;
    margin-bottom: 25px;
    float: left;
    min-height: 450px;
    overflow-y: hidden;
    text-align: center;
    border: solid 1px #ddd;
}
.empty i{
    font-size: 100px;
    padding-top: 150px;
}
.empty span{
    width: 100%;
    float: left;
}
.empty .description{
    font-size: 24px;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import config from '../../config.js'
export default {
    data(){
        return{
            tableData: null,
            config: config,
            count: 0,
            subTotal: 0,
            total: 0,
            deliveryFee: 0
        }
    },
    mounted(){
        this.count = 0
        this.retrieveProduct() 
        let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
            cluster: this.config.PUSHER_APP_CLUSTER,
            encrypted: true
        });

          //Subscribe to the channel we specified in our Adonis Application
        let channel = pusher.subscribe('driptea-channel')

        channel.bind('driptea-data', (data) => {
            this.count++
            this.retrieveProduct()
        })
    },
    methods: {
        retrieveProduct(){
            let params = {
                id: localStorage.getItem('customerId')
            }
            this.$axios.post(AUTH.url + 'retrieveCustomerOrder', params).then(res => {
                this.tableData = res.data.order
            })
        },
        getAddOns(item){
            let storeAddOns = ""
            let index = item.length
            item.forEach(el => {
                if(item.indexOf(el) >= (index - 1)){
                    storeAddOns += el.addOns
                }else{
                    storeAddOns += el.addOns + ", "
                }
            })
            return storeAddOns
        },
        deleteOrder(prodId){
            this.$axios.post(AUTH.url + 'deleteOrder', {id: prodId}).then(res => {
                this.retrieveProduct()
            })
        },
        orderNow(){
            let params = {
                id: localStorage.getItem('customerId'),
                status: 'pendingCustomer'
            }
            this.$axios.post(AUTH.url + 'updateStatus', params).then(res => {
                this.retrieveProduct()
            })
        },
        getSubTotal(){
            let total = 0
            this.tableData.forEach(element => {
                total += element.subTotal
            });
            this.subTotal = total
            return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getTotal(){
            let total = 0
            let subTotal = this.subTotal
            total = subTotal + 100
            this.total = total
            return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getDeliveryFee(){
            let deliveryFee = 100
            this.deliveryFee = deliveryFee
            return parseInt(deliveryFee).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
    }
}
</script>

