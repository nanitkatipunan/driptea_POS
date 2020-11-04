<template>
    <div class="container">
        <button class="btn btn-primary" v-for="(items, indexes) in categoryData" :key="indexes" @click="changeCategory(items.productCategory)">{{items.productCategory}}</button>
        <center><h3>{{categoryName}}</h3></center>
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
                            <td style="text-align: center" v-for="(item, index) in prod" :key="index">{{getAllValue(item, items)}}</td>
                            <td class="zui-sticky-col5" style="text-align: center; font-weight: bold">{{getTotal(items)}} quantity</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <loading v-if="loadingShow"></loading>
    </div>
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
            count: 0,
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
        getCount(){
            this.count++
        },
        getAllValue(item, items){
            let total = 0
            // this.count++
            // if(this.count === this.prod.length){
            //     this.changeName = 'highDose'
            // }else if(this.count === (this.prod.length * 2)){
            //     this.changeName = 'overDose'
            // }
            items.forEach((el, index) => {
                console.log('hahaha', el)
                if(this.category[this.count] === 'Low Dose'){
                    if(el.order_product[0].id === item.id){
                        console.log('nisulod')
                        total += el.quantity
                    }
                }else if(this.category[this.count] === 'High Dose'){
                    if(el.order_product[0].id === item.id){
                        console.log('jhlhkkjg')
                        total += el.quantity
                    }
                }else if(this.category[this.count] === 'Over Dose'){
                    if(el.order_product[0].id === item.id){
                        console.log('sdf')
                        total += el.quantity
                    }
                }
            })
            this.count++
            if(this.count === 3){
                this.count = 0
            }
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
                this.dataMethod(res.data.storeOrder)
                this.loadingShow = false
            })
        },
        dataMethod(item){
            let data = []
            Object.keys(item).forEach(element => {
                data.push(item[element])
            })
            this.finalData = data
            console.log(this.finalData)
        },
        retrieveCategory(){
            this.loadingShow = true
            this.$axios.post(AUTH.url + 'retrieveCategoryAscending', {}, AUTH.config).then(res => {
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


