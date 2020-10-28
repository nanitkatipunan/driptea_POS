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
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    methods: {
        retrieve(){
            let parameter = {
                id: res.data.storeCheckouts.id,
            }
            this.$axios.post(AUTH.url + 'retrieveCheckouts', parameter).then(response => {
                this.receiptData = response.data.storeOrder
                this.receiptShow = true
            })
        }
    }
}
</script>
