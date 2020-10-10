<template>
    <div class="sudlanan">
        <center>
            <h1 style="margin-top: 2%;">{{itemSelected}}</h1>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <h3>Cup's Size</h3>
                        <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
                        <button class="btn" @click="getCupSize('lowDose', $event)">Low Dose</button>
                        <button class="btn" @click="getCupSize('highDose', $event)">High Dose</button>
                        <button class="btn" @click="getCupSize('overDose', $event)">Over Dose</button>
                        <h3 class="cupType">Cup Type</h3>
                        <span class="errorColor" v-if="errorMessage1 !== null">{{errorMessage1}}</span>
                        <button class="btn" v-for="(item, index) in cupData" :key="index" @click="getCupType(item, $event)">{{item.cupTypeName}}</button>
                        <!-- <button class="btn" @click="getCupType('reusable', $event)">Reusable</button> -->
                    </center>
                </div>
                <div class="col-md-4">
                    <center>
                        <h3>Sugar Level</h3>
                        <span class="errorColor" v-if="errorMessage2 !== null">{{errorMessage2}}</span>
                        <button class="btn" @click="getSugarLevel('0%', $event)">0%</button>
                        <button class="btn" @click="getSugarLevel('25%', $event)">25%</button>
                        <button class="btn" @click="getSugarLevel('50%', $event)">50%</button>
                        <button class="btn" @click="getSugarLevel('75%', $event)">75%</button>
                        <button class="btn" @click="getSugarLevel('100%', $event)">100%</button>

                        <h3 class="quantity">Quantity of Order</h3>
                        <span class="errorColor" v-if="errorMessage3 !== null">{{errorMessage3}}</span>
                        <input type="number" class="form-control" min="1" v-model="quantity">

                        <button class="btn addCart" @click="addToCart">Add to Cart</button>
                    </center>
                </div>
                <div class="col-md-4">
                    <center>
                        <h3>Add-ons</h3>
                        <button class="btn" v-for="(item, index) in addOnsData" :key="index" @click="addAddOns(item, $event)">{{item.addons_name}}</button>
                        <!-- <button class="btn" @click="addAddOns('pudding', $event)">Pudding</button>
                        <button class="btn" @click="addAddOns('nataJelly', $event)">Nata Jelly</button>
                        <button class="btn" @click="addAddOns('mousse', $event)">Mousse</button>
                        <button class="btn" @click="addAddOns('coffeeJelly', $event)">Coffee Jelly</button>
                        <button class="btn" @click="addAddOns('crushedOreo', $event)">Crushed Oreo</button>
                        <button class="btn" @click="addAddOns('crushedCookies', $event)">Crushed Cookies</button> -->
                    </center>
                </div>
            </div>
        </center>
    </div>
</template>
<style scoped>
.errorColor{
    color: red;
}
.addCart{
    margin-top: 20% !important;
    background-color: #11c408 !important;
}
.quantity{
    margin-top: 9%;
    margin-bottom: 5%;
}
.form-control{
    text-align: center;
    width: 90%;
    font-weight: bold;
    font-size: 20px;
}
::-webkit-scrollbar {
  width: 1px;
}
.cupType{
    margin-top: 25%;
}
.row{
    width: 90%;
    height: 650px;
    overflow-y: scroll;
    margin-top: 3%;
    /* background-color: white; */
}
.btn{
    margin-top: 5%;
    width: 35px;
    width: 90%;
    font-weight: bold;
    font-size: 20px;
    background-color: #edf0ee;
}
.sudlanan{
    background-color: black;
    height: 92.8vh;
    overflow: hidden;
    color:white;
    font-family: Roboto Slab;
}
.color{
    background: #89AFE8;
}
.normalColor{
    background: #edf0ee;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import { compileFunction } from 'vm';
export default {
    data(){
        return{
            itemSelected: null,
            itemId: this.$route.params.item,
            quantity: 1,
            cupSize: null,
            sugarLevel: null,
            addOns: [],
            cupType: null,
            cupEvent: '',
            sugarEvent: '',
            cupTypeEvent: '',
            addOnsEvent: '',
            addOnsAmount: 0,
            subTotal: 0,
            total: null,
            lowPrice: null,
            highPrice: null,
            overPrice: null,
            onlinelowPrice: null,
            onlinehighPrice: null,
            onlineoverPrice: null,
            productData: null,
            addOnsData: null,
            cupData: null,
            addOnsPrice: null,
            cupPrice: null,
            errorMessage: null,
            errorMessage1: null,
            errorMessage2: null,
            errorMessage3: null
        }
    },
    mounted(){
        this.getProduct()
        this.retrieveProducts()
        this.retrieveAddOns()
        this.retrieveCupType()
    },
    methods: {
        retrieveProducts() {
            this.$axios.post(AUTH.url + "retrieveAllProduct").then(response => {
                this.productData = response.data.product;
            });
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrievingAddOns").then(response => {
                this.addOnsData = response.data.addons;
            });
        },
        retrieveCupType(){
            this.$axios.post(AUTH.url + "retrieveCupType").then(response => {
                this.cupData = response.data.cupType
            });
        },
        getProduct(){
            this.$axios.post(AUTH.url + 'retrieveOneProduct', {id: this.itemId}).then(response => {
                this.itemSelected = response.data.product[0].productName
                this.lowPrice = response.data.product[0].lowPrice
                this.highPrice = response.data.product[0].highPrice
                this.overPrice = response.data.product[0].overPrice
                this.onlinelowPrice = response.data.product[0].onlinelowPrice
                this.onlinehighPrice = response.data.product[0].onlinehighPrice
                this.onlineoverPrice = response.data.product[0].onlineoverPrice
            })
        },
        getCupSize(params, event){
            let a = 0
            if(this.cupEvent !== event.target){
                event.target.classList.remove('normalColor')
                event.target.classList.add('color')
                this.cupSize = params
                if(params === 'highDose'){
                    this.total = this.highPrice
                }else if(params === 'overDose'){
                    this.total = this.overPrice
                }else if(params === 'lowDose'){
                    this.total = this.lowPrice
                }
                if(this.cupEvent !== ''){
                    this.cupEvent.classList.add('normalColor')
                    this.cupEvent.classList.remove('color')
                }
            }
            this.cupEvent = event.target
        },
        getSugarLevel(params, event){
            if(this.sugarEvent !== event.target){
                event.target.classList.remove('normalColor')
                event.target.classList.add('color')
                this.sugarLevel = params
                if(this.sugarEvent !== ''){
                    this.sugarEvent.classList.add('normalColor')
                    this.sugarEvent.classList.remove('color')
                }
            }
            this.sugarEvent = event.target
        },
        getCupType(params, event){
            if(this.cupTypeEvent !== event.target){
                event.target.classList.remove('normalColor')
                event.target.classList.add('color')
                this.cupType = params.cupTypeName
                if(this.cupTypeEvent !== ''){
                    this.cupTypeEvent.classList.add('normalColor')
                    this.cupTypeEvent.classList.remove('color')
                }
                this.cupPrice = params.cupTypePrice
            }
            this.cupTypeEvent = event.target
        },
        addAddOns(params, event){
            this.$axios.post(AUTH.url + "retrieveOneAddOn", {id: params.id}).then(response => {
                this.addOnsPrice = response.data.addons.addons_price
                if(this.addOns.includes(params.addons_name)){
                    event.target.classList.remove('color')
                    this.addOns.splice(this.addOns.indexOf(params.addons_name), 1)
                    this.addOnsAmount -= this.addOnsPrice
                }else{
                    event.target.classList.add('color')
                    this.addOns.push(params.addons_name)
                    this.addOnsAmount += this.addOnsPrice
                }
            });
        },
        addToCart(){
            if(this.quantity <= 0){
                this.errorMessage3 = 'quantity must be greater than 0!'
            }
            if(this.cupSize === null){
                this.errorMessage = 'cup size is required!'
            }
            if(this.sugarLevel === null){
                this.errorMessage2 = 'sugar level is required!'
            }
            if(this.cupType === null){
                this.errorMessage1 = 'cup type is required!'
            }
            if(this.quantity > 0 && this.cupSize !== null && this.sugarLevel !== null && this.cupType !== null){
                let parameter = {
                    customerId: localStorage.getItem('customerId'),
                    productId: this.itemId,
                    quantity: this.quantity,
                    size: this.cupSize,
                    sugarLevel: this.sugarLevel,
                    choosenPrice: this.total,
                    cupType: this.cupType,
                    status: 'pending',
                    addOns: this.addOns,
                    subTotal: this.quantity * (this.total + this.addOnsAmount + this.cupPrice)
                }
                console.log(parameter)
                this.$axios.post(AUTH.url + 'addOrder', parameter).then(response => {
                    ROUTER.push('/productCategory/'+localStorage.getItem('customerType')).catch(()=>{})
                })
            }
        }
    }
}
</script>


