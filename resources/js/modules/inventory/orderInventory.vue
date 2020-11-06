<template>
    <v-card>
        <div class="my-custom-scrollbar">
            <v-toolbar flat>
                <template v-slot:extension>
                    <v-tabs dark background-color="#ff5b04" fixed-tabs>
                        <v-tabs-slider></v-tabs-slider>
                        <v-tab
                            v-for="(items, indexes) in categoryData" :key="indexes"
                            @click="changeCategory(items.productCategory)"
                        >{{items.productCategory}}</v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            <!-- <button class="btn btn-primary" v-for="(items, indexes) in categoryData" :key="indexes" @click="changeCategory(items.productCategory)">{{items.productCategory}}</button> -->
            <center><h2 style="width:100%; background-color: #ff5b04; color:white; margin-bottom: 0%; padding: 7px;">{{categoryName}}</h2></center>
            <div class="zui-wrapper">
                <div class="zui-scroller">
                    <table class="zui-table" id="table">
                        <thead>
                            <tr>
                                <th style="text-align: center" rowspan="3" class="zui-sticky-col">#</th>
                                <th style="text-align: center" rowspan="3" class="zui-sticky-col2">Date</th>
                                <th style="text-align: center" rowspan="3" class="zui-sticky-col3">Name</th>
                                <th style="text-align: center" rowspan="3" class="zui-sticky-col4">Address</th>
                                <th :colspan="oneProd.length" style="text-align: center" v-for="(item, index) in category" :key="index">{{item}}
                                    <tr>
                                        <th style="text-align: center" v-if="categoryName === i.productCategory" v-for="(i, ind) in productData" :key="ind">{{i.productName}}</th>
                                    </tr>
                                </th>
                                <th rowspan="3" class="zui-sticky-col5">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(items, indexes) in finalData" :key="indexes">
                                <td style="text-align: center" class="zui-sticky-col">{{items[0].customerId}}</td>
                                <td style="text-align: center" class="zui-sticky-col2">{{getDate(items[0].get_customer[0].created_at)}}</td>
                                <td style="text-align: center" class="zui-sticky-col3">{{items[0].get_customer[0].customerName ? items[0].get_customer[0].customerName : '&nbsp;'}}</td>
                                <td style="text-align: center" class="zui-sticky-col4">{{items[0].get_customer[0].customerAddress ? items[0].get_customer[0].customerAddress : '&nbsp;'}}</td>
                                <!-- <td style="text-align: center" v-for="(item, index) in prod" :key="index">{{item.id}}</td> -->
                                <td style="text-align: center" v-for="(item, index) in prod" :key="index">{{getAllValue(item, items, index)}}</td>
                                <td class="zui-sticky-col5" style="text-align: center; font-weight: bold">{{getTotal(items)}} quantity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <loading v-if="loadingShow"></loading>
    </v-card>
</template>
<style scoped>
.zui-table {
    border: none;
    /* border-right: solid 1px #DDEFEF; */
    border-collapse: separate;
    border-spacing: 0;
    font: normal 13px Arial, sans-serif;
}
.zui-table thead th {
    /* background-color: #DDEFEF; */
    border: none;
    color: #336B6B;
    padding: 10px;
    text-align: left;
    /* text-shadow: 1px 1px 1px #fff; */
    white-space: nowrap;
}
.zui-table tbody td {
    /* border-bottom: solid 1px #DDEFEF; */
    color: #333;
    padding: 10px;
    /* text-shadow: 1px 1px 1px #fff; */
    white-space: nowrap;
}
.zui-wrapper {
    position: relative;
}
.zui-scroller {
    margin-left: 570px;
    overflow-x: scroll;
    overflow-y: visible;
    padding-bottom: 5px;
    width: 500px;
}
.zui-table .zui-sticky-col {
    /* border-left: solid 1px #DDEFEF; */
    left: 0;
    position: absolute;
    top: auto;
    width: 80px;
}
.zui-table .zui-sticky-col2 {
    /* border-right: solid 1px #DDEFEF; */
    left: 80px;
    position: absolute;
    top: auto;
    width: 110px;
}
.zui-table .zui-sticky-col3 {
    /* border-right: solid 1px #DDEFEF; */
    left: 190px;
    position: absolute;
    top: auto;
    width: 180px;
}
.zui-table .zui-sticky-col4 {
    /* border-right: solid 1px #DDEFEF; */
    left: 370px;
    position: absolute;
    top: auto;
    width: 200px;
}
.zui-table .zui-sticky-col5 {
    /* border-right: solid 1px #DDEFEF; */
    left: 1070px;
    position: absolute;
    top: auto;
    width: 100px;
}
</style>
<script>
import loading from '../../basic/loading.vue';
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import config from '../../config.js'
import moment from 'moment'
export default {
    data(){
        return{
            tableData: [],
            productData: [],
            category: ['Low Dose', 'High Dose', 'Over Dose'],
            loadingShow: false,
            categoryData: [],
            oneProd: [],
            prod: [],
            categoryName: 'Classic',
            finalData: [],
            changeName: 'lowDose'
        }
    },
    components: {
        loading
    },
    mounted(){
        this.retrieveProducts()
        this.retrieveCategory()
        this.retrieveCheckout()
    },
    methods: {
        getAllValue(item, items, index){
            let total = 0
            let category = 'lowDose'
            let lowLength = this.prod.length / 3
            let highLength = lowLength + lowLength
            let overLength = highLength + lowLength
            let a = 0
            for (let i = 0; i < this.prod.length; i++) {
                if(a < lowLength){
                    if(index === a){
                        category = 'lowDose'
                        break
                    }else{
                        a++
                    }
                }else if(a < highLength && a >= lowLength){
                    if(index === a){
                        category = 'highDose'
                        break
                    }else{
                        a++
                    }
                }else if(a < overLength && a >= highLength){
                    if(index === a){
                        category = 'overDose'
                        break
                    }else{
                        a++
                    }
                }
            }
            items.forEach(el => {
                if(el.size === category){
                    if(el.order_product[0].id === item.id){
                        total += el.quantity
                    }
                }
            })
            return total
        },
        getTotal(items){
            let subTotal = 0
            items.forEach(el => {
                subTotal += el.quantity
            })
            return subTotal
        },
        getDate(date){
            return moment(date).format('MM/DD/YYYY')
        },
        retrieveCheckout(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveAllCheckouts', {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.dataMethod(res.data.storeOrder)
                this.loadingShow = false
            })
        },
        dataMethod(item){
            let data = []
            Object.keys(item).forEach(element => {
                data.push(item[element])
            })
            this.finalData = data.reverse()
        },
        retrieveCategory(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveCategoryAscending', {}, AUTH.config).then(res => {
                if(res.data.status){
                    AUTH.deauthenticate()
                }
                this.categoryData = res.data.addCategory
                this.loadingShow = false
            })
        },
        retrieveProducts() {
            this.loadingShow = true
            this.$axios.post(AUTH.url + "retrieveAllProduct", {}, AUTH.config).then(response => {
                if(response.data.status){
                    AUTH.deauthenticate()
                }
                this.productData = response.data.product;
                this.loadingShow = false
                this.getProdLength()
            });
        },
        getProdLength(){
            this.loadingShow = true
            let storeOneProd = []
            this.productData.forEach(e => {
                if(e.productCategory === this.categoryName){
                    storeOneProd.push(e)
                }
            })
            this.oneProd = storeOneProd
            let storeProd = []
            for (let i = 0; i < this.category.length; i++) {
                this.productData.forEach(el => {
                    if(el.productCategory === this.categoryName){
                        storeProd.push(el)
                    }
                });
            }
            this.prod = storeProd
            this.loadingShow = false
        },
        changeCategory(param){
            this.categoryName = param
            this.getProdLength()
        }
    }
}
</script>
