<template>
    <v-card>
        <div class="my-custom-scrollbar">
            <center><h2 style="width:100%; background-color: #ff5b04; color:white; margin-bottom: 0%; padding: 7px; margin-top: 7%;">Sales Inventory</h2></center>
            <table class="table categoryTable" id="myTable">
                <thead bgcolor="#ff5b04" style="color: white; padding: 10px;">
                    <tr class="header">
                        <th scope="col">Date</th>
                        <th scope="col" v-for="(item, index) in categoryData" :key="index">{{item.productCategory}}</th>
                        <th scope="col">Add Ons</th>
                        <th scope="col">Delivery Fee</th>
                        <th scope="col">Cup Type</th>
                        <th scope="col">Total Sales</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in storage2" :key="index">
                        <td>{{getDate(index)}}</td>
                        <td scope="row" v-for="(i, ind) in item" :key="ind">₱ {{i.value}}</td>
                        <td>₱ {{getAddOns(index)}}</td>
                        <td>₱ {{getDeliveryFee(index)}}</td>
                        <td>₱ {{getCupType(index)}}</td>
                        <td>₱ {{getTotal(index)}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </v-card>
</template>
<script>
import AUTH from '../../services/auth'
import VueJsonToCsv from 'vue-json-to-csv'
import loading from '../../basic/loading.vue';
import moment from 'moment'
export default {
    data(){
        return{
            categoryData: [],
            search: '',
            loadingShow: false,
            store: [],
            storage: [],
            storage2: [],
            storeAmount: [],
            dataAddOns: [],
            cupType: []
        }
    },
    mounted(){
        this.retrieveCategory()
        this.retrieveCupType()
        this.retrieveSale()
        this.retrieveAddOns()
    },
    components: {
        VueJsonToCsv,
        loading
    },
    methods:{
        getTotal(index){
            let amount = 0
            let id = 0
            this.store[index].forEach(el => {
                if(el.get_checkouts[0].id !== id){
                    id = el.get_checkouts[0].id
                    amount +=  parseInt(el.get_checkouts[0].total)
                }
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getCupType(index){
            let amount = 0 
            this.store[index].forEach(el => {
                this.cupType.forEach(cup => {
                    if(el.cupType === cup.cupTypeName){
                        if(el.customerType !== 'fb' && el.customerType !== 'walkin'){
                            amount += (cup.inputCupOnlinePrice * el.quantity)
                        }else{
                            amount += (cup.cupTypePrice * el.quantity)
                        }
                    }
                })
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getDeliveryFee(index){
            let amount = 0
            this.store[index].forEach(el => {
                amount +=  el.get_checkouts[0].deliveryFee
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getAddOns(index){
            let amount = 0
            this.store[index].forEach(el => {
                el.same_order.forEach(e => {
                    this.dataAddOns.forEach(add => {
                        if(e.addOns === add.addons_name){
                            if(el.customerType !== 'fb' && el.customerType !== 'walkin'){
                                amount += (add.onlineAddOnsPrice * el.quantity)
                            }else{
                                amount += (add.addons_price * el.quantity)
                            }
                        }
                    })
                })
            })
            return parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        retrieveCupType(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllCupType", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.cupType = response.data.cupType
                this.loadingShow = false
            });
        },
        retrieveAddOns() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllAddOns", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.dataAddOns = response.data.addons
                this.loadingShow = false
            });
        },
        getDate(index){
            return moment(this.store[index][0].created_at).format('MM/DD/YYYY')
        },
        retrieveCategory(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveCategoryAscending', {}, AUTH.config).then(res => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.loadingShow = false
                this.categoryData = res.data.addCategory
            })
        },
        retrieveSale(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllSales", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.loadingShow = false
                let store = []
                Object.keys(response.data.storeOrder).forEach(element => {
                    store.push(response.data.storeOrder[element])
                });
                this.store = store.reverse()
                this.storage2 = []
                this.store.forEach(el => {
                    this.storage = []
                    this.categoryData.forEach(cat => {
                        let amount = 0
                        el.forEach(e => {
                            if(e.order_product[0].productCategory === cat.productCategory){
                                amount += (e.choosenPrice * e.quantity)
                            }
                        })
                        this.storage.push({'category': cat.productCategory, 'value': parseInt(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')})
                    })
                    this.storage2.push(this.storage)
                })
            });
        }
    }
}
</script>