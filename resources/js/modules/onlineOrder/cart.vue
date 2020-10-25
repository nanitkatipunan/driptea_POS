<template>
    <div>
        <table class="table table-responsive table-bordered" id="myTable">
            <tr>
                <th style="width: 45%;">Product Name</th>
                <th>Add&nbsp;ons</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th style="width: 15px;">❌</th>
            </tr>
            <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <td>{{item.order_product[0].productName}}</td>
                    <td>{{getAddOns(item.same_order)}}</td>
                    <td>{{item.choosenPrice}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.subTotal}}</td>
                    <td>
                        <button style="font-size: 10px" type="button" aria-expanded="false" @click="deleteOrder(item.id)">❌</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <center>
            <button type="button" class="btn btn-success" @click="orderNow()">Order Now</button>
        </center>
    </div>
</template>
<style scoped>

</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
            tableData: null
        }
    },
    mounted(){
        this.retrieveProduct()
    },
    methods: {
        retrieveProduct(){
            let params = {
                id: localStorage.getItem('customerId')
            }
            this.$axios.post(AUTH.url + 'retrieveCustomerOrder', params).then(res => {
                this.tableData = res.data.order
                console.log(res.data.order)
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
                status: 'pending'
            }
            this.$axios.post(AUTH.url + 'updateStatus', params).then(res => {
                this.retrieveProduct()
            })
        }
    }
}
</script>

