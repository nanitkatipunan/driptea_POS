<template>
    <div class="container">
        <center>
            <h1>Order History</h1>
            <div v-if="tableData !== null && tableData.length > 0">
                <table class="table table-responsive" id="myTable">
                    <tr>
                        <th style="width: 30%;">Date</th>
                        <th>Order #</th>
                        <th>Product&nbsp;Ordered</th>
                        <th>Total</th>
                        <th style="width: 15px;">Action</th>
                    </tr>
                    <tbody>
                        <tr v-for="(item, index) in tableData" :key="index">
                            <td>{{getDate(item[0])}}</td>
                            <td>{{item[0].get_checkouts ? item[0].get_checkouts[0].customerId : ''}}</td>
                            <td>{{getProduct(item)}}</td>
                            <td>{{item[0].get_checkouts[0].total}}</td>
                            <td>
                                <button class="btn btn-primary">View</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <empty :title="'No History!'"></empty>
            </div>
        </center>
    </div>
</template>
<style scoped>
.table {
    width: 70%;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import config from '../../config.js'
import empty from '../../basic/empty.vue'
import moment from 'moment'
export default {
    data(){
        return{
            tableData: [],
            config: config
        }
    },
    mounted(){
        this.retrieve()
    },
    components: {
        empty
    },
    methods: {
        getDate(item){
            return moment(item.updated_at).format('MM/DD/YYYY')
        },
        getProduct(item){
            let product = ""
            let index = item.length
            item.forEach(el => {
                if(item.indexOf(el) >= (index - 1)){
                    product += el.order_product[0].productName
                }else{
                    product += el.order_product[0].productName + ", "
                }
            })
            return product
        },
        retrieve(){
            let parameter = {
                id: localStorage.getItem('customerId'),
            }
            this.$axios.post(AUTH.url + 'retrieveOnlineCheckouts', parameter).then(response => {
                Object.keys(response.data.storeOrder).forEach(element => {
                    this.tableData.push(response.data.storeOrder[element])
                });
                console.log(this.tableData)
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
    }
}
</script>
