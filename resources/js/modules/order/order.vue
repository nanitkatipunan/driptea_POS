<template>
    <div class="sudlanan">
        <center>
            <h1 style="margin-top: 2%;">{{itemSelected}}</h1>
            <div class="row">
                <div class="col-md-4">
                    <center>
                        <h3>Cup's Size</h3>
                        <button class="btn color" ref='lowD' @click="getCupSize('lowDose', $event)">Low Dose</button>
                        <button class="btn" @click="getCupSize('normalDose', $event)">Normal Dose</button>
                        <button class="btn" @click="getCupSize('overDose', $event)">Over Dose</button>
                        <h3 class="cupType">Cup Type</h3>
                        <button class="btn" @click="getCupType('normal', $event)">Normal</button>
                        <button class="btn" @click="getCupType('reusable', $event)">Reusable</button>
                    </center>
                </div>
                <div class="col-md-4">
                    <center>
                        <h3>Sugar Level</h3>
                        <button class="btn" @click="getSugarLevel('0%', $event)">0%</button>
                        <button class="btn" @click="getSugarLevel('25%', $event)">25%</button>
                        <button class="btn" @click="getSugarLevel('50%', $event)">50%</button>
                        <button class="btn" @click="getSugarLevel('75%', $event)">75%</button>
                        <button class="btn" @click="getSugarLevel('100%', $event)">100%</button>

                        <h3 class="quantity">Quantity of Order</h3>
                        <input type="number" class="form-control" min="1" v-model="quantity">

                        <button class="btn addCart" @click="addToCart">Add to Cart</button>
                    </center>
                </div>
                <div class="col-md-4">
                    <center>
                        <h3>Add-ons</h3>
                        <button class="btn" @click="addAddOns('pearl', $event)">Pearl</button>
                        <button class="btn" @click="addAddOns('pudding', $event)">Pudding</button>
                        <button class="btn" @click="addAddOns('nataJelly', $event)">Nata Jelly</button>
                        <button class="btn" @click="addAddOns('mousse', $event)">Mousse</button>
                        <button class="btn" @click="addAddOns('coffeeJelly', $event)">Coffee Jelly</button>
                        <button class="btn" @click="addAddOns('crushedOreo', $event)">Crushed Oreo</button>
                        <button class="btn" @click="addAddOns('crushedCookies', $event)">Crushed Cookies</button>
                    </center>
                </div>
            </div>
        </center>
    </div>
</template>
<style scoped>
.addCart{
    margin-top: 20% !important;
    background-color: #89AFE8 !important;
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
            cupSize: 'lowDose',
            sugarLevel: null,
            addOns: [],
            cupType: null,
            cupEvent: '',
            sugarEvent: '',
            cupTypeEvent: '',
            addOnsEvent: '',
            addOnsAmount: 0,
            subTotal: 0,
            total: null
        }
    },
    mounted(){
        this.getProduct()
        this.$refs.lowD.click()
    },
    methods: {
        getProduct(){
            this.$axios.post(AUTH.url + 'retrieveOneProduct', {id: this.itemId}).then(response => {
                this.itemSelected = response.data.product[0].productName
                this.total = response.data.product[0].price
            })
        },
        getCupSize(params, event){
            this.subTotal = this.total
            let a = 0
            if(this.cupEvent !== event.target){
                event.target.classList.remove('normalColor')
                event.target.classList.add('color')
                this.cupSize = params
                if(params === 'normalDose'){
                    a = 10
                }else if(params === 'overDose'){
                    a = 20
                }
                if(this.cupEvent !== ''){
                    this.cupEvent.classList.add('normalColor')
                    this.cupEvent.classList.remove('color')
                }
            }
            this.subTotal += a
            console.log(this.subTotal)
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
                this.cupType = params
                if(this.cupTypeEvent !== ''){
                    this.cupTypeEvent.classList.add('normalColor')
                    this.cupTypeEvent.classList.remove('color')
                }
            }
            this.cupTypeEvent = event.target
        },
        addAddOns(params, event){
            if(this.addOns.includes(params)){
                event.target.classList.remove('color')
                this.addOns.splice(this.addOns.indexOf(params), 1)
                this.addOnsAmount -= 10
            }else{
                event.target.classList.add('color')
                this.addOns.push(params)
                this.addOnsAmount += 10
            }
            console.log(this.addOnsAmount)
        },
        addToCart(){
            if(this.quantity > 0 && this.cupSize !== null && this.sugarLevel !== null && this.cupType !== null){
                let parameter = {
                    customerId: localStorage.getItem('customerId'),
                    productId: this.itemId,
                    quantity: this.quantity,
                    size: this.cupSize,
                    sugarLevel: this.sugarLevel,
                    choosenPrice: (this.subTotal === 0? this.total : this.subTotal),
                    cupType: this.cupType,
                    status: 'pending',
                    addOns: this.addOns,
                    subTotal: this.quantity * ((this.subTotal === 0? this.total : this.subTotal) + this.addOnsAmount)
                }
                this.$axios.post(AUTH.url + 'addOrder', parameter).then(response => {
                    ROUTER.push('/productCategory/'+localStorage.getItem('customerType')).catch(()=>{})
                })
            }
        }
    }
}
</script>


