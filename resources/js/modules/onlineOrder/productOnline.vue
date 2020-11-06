<template>
    <div class="sudlanan">
        <center>
            <div v-if="data !== null" class="row">
                <div>
                    <h1>Mao ni</h1>
                    <div class="my-custom-scrollbar">
                        <table class="table table-bordered table-striped categoryTable" id="myTable">
                            <thead class="thead-light">
                                <tr class="header">
                                    <th scope="col">#</th>
                                    <th scope="col">lowDose</th>
                                    <th scope="col">highDose</th>
                                    <th scope="col">overDose</th>
                                    <th scope="col">total</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template>
                                    <tr v-for="(item, index) in finalData" :key="index">
                                        <td scope="row">Customer {{index+1}}</td>
                                        <td>{{getLowDose(item)}}</td>
                                        <td>{{getHighDose(item)}}</td>
                                        <td>{{getOverDose(item)}}</td>
                                        <td style="font-weight: bold">{{getTotal(item)}}</td>
                                        <td>
                                            <div style="text-align: left">
                                                <button class="btn btn-primary" @click="showData()">Sample</button>
                                            </div>
                                        </td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-else class="secRow">
                <center>
                    <img class="noImage" src="@/assets/data.png">
                    <h2>No Product Yet</h2>
                    <button class="btn btn-primary">Sample</button>
                </center>   
            </div>
        </center>
    </div>
</template>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 1px;
}

.noImage{
    margin-top: 10%;
    height: 200px;
    width: 30%;
}

.imgItem{
    height: 200px;
    width: 80%;
}
.row{
    width: 80%;
    /* height: 650px; */
    overflow-y: scroll;
}
.secRow{
    width: 80%;
    height: 650px;
    overflow-y: scroll;
}
.sudlanan{
    font-family: Roboto Slab;
}
.imageSize{
    height: 250px;
    margin-top: 2%;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
            chosenCat: this.$route.params.itemChosen,
            data: null,
            success: null,
            size: null,
            sugarLevel: null,
            addOns: null,
            quantity: null,
            finalData: [],
            productData:null,
            categoryData:null,
        }
    },
    mounted(){
        this.retrieveProduct()
        this.getAllProducts()
        this.getAllCategory()

    },
    methods: {
        getTotal(item){
            let total = 0
            item.forEach(el => {
                total += el.quantity
            })
            return total
        },
        getLowDose(item){
            let total = 0
            item.forEach(el => {
                if(el.size === 'lowDose'){
                    total += el.quantity
                }
            })
            return total
        },
        getHighDose(item){
            let total = 0
            item.forEach(el => {
                if(el.size === 'highDose'){
                    total += el.quantity
                }
            })
            return total
        },
        getOverDose(item){
            let total = 0
            item.forEach(el => {
                if(el.size === 'overDose'){
                    total += el.quantity
                }
            })
            return total
        },
        showData(){
            // console.log(this.finalData)
        },
        dataMethod(item){
            Object.keys(item).forEach(element => {
                this.finalData.push(item[element])
            })
        },
        retrieveProduct(){
            this.$axios.post(AUTH.url + 'retrieveAllCheckouts').then(res => {
                this.data = res.data.storeOrder
                this.dataMethod(res.data.storeOrder)
            })
        },
        getAllProducts(){
             this.$axios.post(AUTH.url + 'retrieveAllProduct').then(res => {
                this.productData = res.data.product
            })

        },
        getAllCategory(){
            this.$axios.post(AUTH.url + 'retrieveCategory').then(res => {
                this.categoryData = res.data.addCategory

            })

        },


    }
}
</script>
