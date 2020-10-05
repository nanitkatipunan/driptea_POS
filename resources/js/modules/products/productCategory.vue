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
                            <img v-if="customerType === 'fb'" style="width: 70px; height: 50px;" src="@/assets/fb.jpeg">
                            <table class="table table-responsive table-bordered" id="myTable">
                                <tr>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th style="width: 15px;">❌</th>
                                </tr>
                                <tbody>
                                    <tr v-for="(item, index) in tableData" :key="index">
                                        <td>{{item.order_product[0].productName}}</td>
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
                            <div class="col-md-3" style="text-align:left;">
                                <p>Subtotal:</p>
                                <p>Delivery&nbsp;Fee: </p>
                                <p class="pStyle">Total: </p>
                                <p class="pStyle">Incash: </p>
                                <p class="pStyle">Change: </p>
                            </div>
                            <div class="col-md-3" style="text-align:left;">
                                <p>₱ {{getSubTotal()}}</p>
                                <p>₱ {{convertFee()}}</p>
                                <p class="pStyle">₱ {{convertTotalPrice()}}</p>
                                <p class="pStyle">₱ {{convertIncash()}}</p>
                                <p class="pStyle">₱ {{convertChange()}}</p>
                            </div>
                        </div>
                    </div>
                </center>
            </div>
            <div class="col-md-6">
                <div class="row dataStyle">
                    <div class="col-md-5 secondCol" v-for="(item, index) in data" :key="index">
                        <img class="imgItem" :src="item.image" @click="redirect(item.productCategory)">
                    </div>
                </div>
                <div class="row" style="margin-top: 5%;">
                    <div class="col-md-6">
                        <center>
                            <input type="number" placeholder="enter cash paid..." v-model="cash"><br>
                            <button class="btn btn-primary" @click="addingIncash">Add Cash</button>
                        </center>
                    </div>
                    <div class="col-md-6">
                        <center>
                            <input type="number" placeholder="enter delivery fee..." v-model="fee"><br>
                            <button class="btn btn-primary" @click="addingFee">Add Delivery Fee</button>
                        </center>
                    </div>
                </div>
                <center>
                    <button class="btn btn-primary checkout" @click="checkoutOrder">Checkout</button>
                </center>
            </div>
       </div>
    </div>
</template>
<style>
.dataStyle{
    height: 600px;
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
    height: 35px;
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
            fee: null
        }
    },
    mounted(){
        this.retrieveCategory()
        this.retrieveProduct()
    },
    methods: {
        addingFee(){
            this.deliveryFee = this.fee
        },
        addingIncash(){
            this.incash = this.cash
        },                                                      
        convertFee(){
            return  parseInt(this.deliveryFee).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        convertTotalPrice(){
            let total = this.subTotalPrice + parseInt(this.deliveryFee)
            this.totalPrice = total
            return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        convertIncash(){
            return parseInt(this.incash).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        convertChange(){
            if(this.incash > this.totalPrice){
                let amountChange = this.incash - this.totalPrice
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
        deleteOrder(prodId){
            this.$axios.post(AUTH.url + 'deleteOrder', {id: prodId}).then(res => {
                this.retrieveProduct()
            })
        },
        checkoutOrder(){
            let params = {
                id: localStorage.getItem('customerId'),
                status: 'complete'
            }
            this.$axios.post(AUTH.url + 'updateStatus', params).then(res => {
                this.retrieveProduct()
                // localStorage.removeItem('customerId')
                // localStorage.removeItem('customerType')
                // ROUTER.push('/casherDashboard').catch(()=>{})
            })
        }
    }
}
</script>


