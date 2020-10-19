<template>
    <div class="sudlanan">
        <div class="row firstRow">
            <div class="col-md-6">
                <center>
                    <div class="firstCol">
                        <center>
                            <img v-if="customerType === 'walkin'" style="width: 70px; height: 50px; border: solid 1px black" src="@/assets/walkin.jpg">
                            <img v-if="customerType === 'foodpanda'" style="width: 70px; height: 50px;" src="@/assets/foodpanda.png">
                            <img v-if="customerType === 'grab'" style="width: 70px; height: 50px;" src="@/assets/grab.png">
                            <img v-if="customerType === 'fb'" style="width: 70px; height: 50px;" src="@/assets/fb.jpeg"><br>
                            <span v-if="error" style="color: red; font-style: italic">All data are required!</span>
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
                        </center>
                        <div class="row">
                            <div class="col-md-6"></div>
                            <div class="col-md-6" style="text-align:left;">
                                <p v-if="customerType === 'fb'" style="display: inline;">Subtotal:&emsp;&emsp;&emsp;</p>
                                <p v-if="customerType === 'fb'" style="display: inline;">₱ {{getSubTotal()}}</p><br>
                                <p v-if="customerType === 'fb'" style="display: inline;">Delivery&nbsp;Fee:&emsp;</p>
                                <input v-if="customerType === 'fb'" style="display: inline;" type="number" placeholder="₱ 0.00" v-model="fee">
                                <p style="display: inline;" class="pStyle">Total:&emsp;&emsp;&emsp;&emsp;</p>
                                <p style="display: inline;" class="pStyle">₱ {{convertTotalPrice()}}</p><br>
                                <p v-if="customerType !== 'fb'" style="display: inline;" class="pStyle">Amount:&emsp;&emsp;&nbsp;&nbsp;&nbsp;</p>
                                <input v-if="customerType !== 'fb'" style="display: inline;" type="number" placeholder="₱ 0.00" v-model="cash"><br>
                                <p v-if="customerType !== 'fb'" style="display: inline;" class="pStyle">Change:&emsp;&emsp;&emsp;</p>
                                <p v-if="customerType !== 'fb'" style="display: inline;" class="pStyle">₱ {{convertChange()}}</p>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-primary checkout" @click="checkoutOrder">Checkout</button>
                </center>
            </div>
            <div class="col-md-6">
                <div class="dataStyle">
                    <div class="row">
                        <div class="col-md-5 secondCol" v-for="(item, index) in data" :key="index">
                            <img class="imgItem" :src="item.image" @click="redirect(item.productCategory)">
                        </div>
                    </div>
                </div>
            </div>
            <receipt v-if="receiptShow" :showData="receiptData"></receipt>
       </div>
    </div>
</template>
<style scoped>
.dataStyle{
    height: 700px;
    overflow-y: scroll;
}
.checkout{
    margin-top: 3%;
    height: 40% !important;
    font-size: 20px; width: 200px;
}
.btn{
    height: 33px;
    width: 150px;
}
input{
    /* height: 35px; */
    /* margin-top: -50px; */
    /* margin-bottom: 15px; */
    width: 80px;
    border-radius: 5px;
}
::-webkit-scrollbar {
  width: 1px;
}
.pStyle{
    font-weight: bold;
}
p{
    margin-top: -10%;
}
.firstRow{
    margin-bottom: 5%;
    margin-top: 3%;
}
.sudlanan{
    background-color: black;
    height: 92.8vh;
    overflow: hidden;
}
table{
    height: 450px;
    width: 100%;
}
.table tr{
   text-align: center;
}
th {
   width: 100%;
}
@media screen and (max-width: 800px) {
    input{
        width: 60px;
        margin-left: -15px;
    }
    .firstCol{
        border-radius: 5px;
        box-shadow: 5px 5px gray;
        width: 90%;
        margin-top: 5%;
        background-color:white;
        height: 600px !important;
    }
    table{
        height: 350px;
        width: 100%;
    }
    .dataStyle{
        height: 490px !important;
        overflow-y: scroll;
    }
}
.firstCol{
    border-radius: 5px;
    box-shadow: 5px 5px gray;
    width: 90%;
    margin-top: 5%;
    background-color:white;
    height: 650px;
}
.secondCol{
    border-radius: 5px;
    box-shadow: 5px 5px gray;
    margin-top: 5%;
    margin-right: 2%;
    margin-left: 3%;
    height: 150px;
    background-color: white;
}
.imgItem{
    height: 150px;
    width: 100%;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import receipt from '../order/receipt.vue'
export default {
    data(){
        return{
            data: null,
            tableData: null,
            customerType: this.$route.params.image,
            deliveryFee: 0,
            totalPrice: 0,
            incash: 0,
            change: 0,
            subTotalPrice: 0,
            cash: null,
            fee: '',
            error: false,
            receiptShow: false,
            receiptData: null
        }
    },
    components: {
        receipt
    },
    mounted(){
        this.retrieveCategory()
        this.retrieveProduct()
    },
    methods: {
        hideReceipt(){
            this.receiptShow = false
        },
        addingFee(){
            this.deliveryFee = this.fee
        },
        addingIncash(){
            this.incash = this.cash
        },
        convertTotalPrice(){
            if(this.subTotalPrice === 0){
                this.getSubTotal()
            }
            if(this.fee !== '' || this.fee > 0){
                let total = this.subTotalPrice + parseInt(this.fee)
                this.totalPrice = total
                return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }else{
                let total = this.subTotalPrice
                this.totalPrice = total
                return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        },
        convertChange(){
            if(this.cash > this.totalPrice){
                let amountChange = this.cash - this.totalPrice
                return amountChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }else{
                return this.change.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        },
        retrieveCategory(){
            this.$axios.post(AUTH.url + 'retrieveCategory').then(res => {
                this.data = res.data.addCategory
            })
        },
        getSubTotal(){
            if(this.tableData != null){
                let total = 0
                this.tableData.forEach(element => {
                    total += element.subTotal
                });
                this.subTotalPrice = total
                return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
            }
        },
        redirect(param){
            ROUTER.push('/chosenCategory/'+param).catch(()=>{})
        },
        retrieveProduct(){
            let params = {
                id: localStorage.getItem('customerId')
            }
            this.$axios.post(AUTH.url + 'retrieveOrder', params).then(res => {
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
        checkoutMethod(){
            let params = {
                id: localStorage.getItem('customerId'),
                status: 'complete'
            }
            this.$axios.post(AUTH.url + 'updateStatus', params).then(res => {
                let params = {
                    customerId: localStorage.getItem('customerId'),
                    subTotal: this.getSubTotal(),
                    deliveryFee: this.fee,
                    total: this.convertTotalPrice(),
                    incash: this.cash,
                    change: this.convertChange(),
                    order: this.tableData
                }
                this.$axios.post(AUTH.url + 'addCheckout', params).then(res => {
                    let parameter = {
                        id: res.data.storeCheckouts.id,
                    }
                    this.$axios.post(AUTH.url + 'retrieveCheckouts', parameter).then(response => {
                        console.log(response.data)
                        this.receiptData = response.data.storeOrder
                        this.receiptShow = true
                        // this.retrieveProduct()
                        // localStorage.removeItem('customerId')
                        // localStorage.removeItem('customerType')
                        // ROUTER.push('/casherDashboard').catch(()=>{})
                    })
                })
            })
        },
        checkoutOrder(){
            if(this.customerType !== 'fb'){
                if(this.convertTotalPrice() > 0 && this.cash !== null && this.convertChange() >= 0){
                    this.error = false
                    this.checkoutMethod()
                }else{
                    this.error = true
                }
            }else{
                if(this.getSubTotal() > 0 && this.fee !== '' && this.convertTotalPrice() > 0){
                    this.error = false
                    this.checkoutMethod()
                }else{
                    this.error = true
                }
            }
        }
    }
}
</script>


