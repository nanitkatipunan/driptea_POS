<template>
    <div class="container">
        <center>
            <h1>Your Cart</h1>
            <div v-if="tableData !== null && tableData.length > 0">
                <table class="table table-responsive" id="myTable">
                    <tr>
                        <th style="width: 30%;">Date</th>
                        <th>Add&nbsp;ons</th>
                        <th>Cup Type</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th style="width: 15px;">❌</th>
                    </tr>
                    <tbody>
                        <tr v-for="(item, index) in tableData" :key="index">
                            <td>{{item[0].order_product ? item[0].order_product[0].productName : ''}}</td>
                            <td>{{item[0].same_order ? getAddOns(item[0].same_order) : ''}}</td>
                            <td>{{item[0].cupType ? item[0].cupType : ''}}</td>
                            <td>{{item[0].choosenPrice}}</td>
                            <td>{{item[0].quantity}}</td>
                            <td>{{item[0].subTotal}}</td>
                            <td>
                                <button style="font-size: 10px" type="button" aria-expanded="false" @click="deleteOrder(item.id)">❌</button>
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
        retrieve(){
            let parameter = {
                id: localStorage.getItem('customerId'),
            }
            this.$axios.post(AUTH.url + 'retrieveOnlineCheckouts', parameter).then(response => {
                Object.keys(response.data.storeOrder).forEach(element => {
                    this.tableData.push(response.data.storeOrder[element])
                });
                console.log(this.tableData)
                // this.tableData.forEach(el => {
                //     console.log(el)
                // })
                // this.receiptData = response.data.storeOrder
                // this.receiptShow = true
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
