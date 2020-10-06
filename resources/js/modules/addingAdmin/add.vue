<template>
    <div class=" container div">
        <div>
            <center><br>
                <h1>Add Products, Categories and Add-ons</h1><br>
                <button v-if="ons" type="button" class="btn btn-primary btnModal" @click="showAddOns">+ Add ons</button>
                <button v-if="prod" type="button" class="btn btn-primary btnModal" @click="showProduct">+ Product</button>
                <button v-if="cat" type="button" class="btn btn-primary btnModal" @click="showCategory">+ Categories</button>
                <button v-if="cup" type="button" class="btn btn-primary btnModal" @click="showCupType">+ Cup Type</button>
            </center>
        </div><br><br>
        <div>
            <button type="button" ref="cate" class="btn navButton borderStyle" @click="category($event)">Categories</button>
            <button type="button" ref="pro" class="btn navButton btnBorderStyle1" @click="product($event)">Product</button>
            <button type="button" ref="on" class="btn navButton btnBorderStyle1" @click="addOnsShow($event)">Add-ons</button>
            <button type="button" ref="cup" class="btn navButton btnBorderStyle1" @click="addCupType($event)">Cup Type</button>
        </div>
        <div>
            <center>
                <div v-if="cat" class="my-custom-scrollbar">
                    <table class="table table-bordered table-striped categoryTable" id="myTable">
                        <thead class="thead-light">
                            <tr class="header">
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template>
                                <tr v-for="(item, index) in categoryData" :key="index">
                                    <td scope="row">{{index+1}}</td>
                                    <td><img :src="item.image"></td>
                                    <td>{{item.productCategory}}</td>
                                    <td>
                                        <div style="text-align: left">
                                            <button class="btn btn-success" @click="editCategories(item)">Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div v-if="prod" class="my-custom-scrollbar">
                    <table class="table table-bordered table-striped productTable" id="myTable">
                        <thead class="thead-light">
                            <tr class="header">
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Category</th>
                                <th scope="col">Name</th>
                                <th scope="col">Low Dose Price</th>
                                <th scope="col">High Dose Price</th>
                                <th scope="col">Over Dose Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template>
                                <tr v-for="(item, index) in productData" :key="index">
                                    <td scope="row">{{index+1}}</td>
                                    <td><img :src="item.image"></td>
                                    <td>{{item.productCategory}}</td>
                                    <td>{{item.productName}}</td>
                                    <td>{{item.lowPrice}}</td>
                                    <td>{{item.highPrice}}</td>
                                    <td>{{item.overPrice}}</td>
                                    <td>{{item.status}}</td>
                                    <td>
                                        <div style="text-align: left">
                                            <button class="btn btn-success" @click="editProduct(item)">Edit</button>
                                            <button v-if="item.status === 'Available'" class="btn btn-warning" style="color: red; display: inline-block;" @click="productStatusUpdate(item.id)">N/A</button>
                                            <button v-else class="btn btn-warning" style="color: red; display: inline-block;" @click="productStatusAvailable(item.id)">Available</button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div v-if="ons" class="my-custom-scrollbar">
                    <table class="table table-bordered table-striped addOnsTable" id="myTable">
                        <thead class="thead-light">
                            <tr class="header">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template>
                                <tr v-for="(item, index) in datas" :key="index">
                                    <td scope="row">{{index+1}}</td>
                                    <td>{{item.addons_name}}</td>
                                    <td>{{item.addons_price}}</td>
                                    <td>{{item.status}}</td>
                                    <td>
                                        <div style="text-align: left">
                                            <button class="btn btn-success" @click="editAddOns(item)">Edit</button>
                                            <button v-if="item.status === 'Available'" class="btn btn-warning" style="color: red; display: inline-block;" @click="NAStatusUpdate(item.id)">N/A</button>
                                            <button v-else class="btn btn-warning" style="color: red; display: inline-block;" @click="availableStatusUpdate(item.id)">Available</button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div v-if="cup" class="my-custom-scrollbar">
                    <table class="table table-bordered table-striped addOnsTable" id="myTable">
                        <thead class="thead-light">
                            <tr class="header">
                                <th scope="col">#</th>
                                <th scope="col">Cup Type</th>
                                <th scope="col">Additional Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template>
                                <tr v-for="(item, index) in cupData" :key="index">
                                    <td scope="row">{{index+1}}</td>
                                    <td>{{item.cupTypeName}}</td>
                                    <td>{{item.cupTypePrice}}</td>
                                    <td>{{item.status}}</td>
                                    <td>
                                        <div style="text-align: left">
                                            <button class="btn btn-success" @click="editCup(item)">Edit</button>
                                            <button v-if="item.status === 'Available'" class="btn btn-warning" style="color: red; display: inline-block;" @click="NACupUpdate(item.id)">N/A</button>
                                            <button v-else class="btn btn-warning" style="color: red; display: inline-block;" @click="availableCupUpdate(item.id)">Available</button>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
        
        <!-- Modal -->
        <div v-if="showCupTypeModal" id="modal" class="blurred-background">
            <div class="alert-box">
                <center>
                    <h1>Adding Cup Type</h1>
                </center><hr>
                <form action>
                    <div class="form-group">
                        <label for="addOns">Cup Type :</label>
                        <br>
                        <input v-model="inputCup" type="text" class="form-control" id="addOns">
                    </div>
                    <div class="form-group">
                        <label for="price">Additional Price :</label>
                        <br>
                        <input v-model="inputCupPrice" type="number" min="1" class="form-control" id="price">
                    </div>
                </form>
                <div style="text-align: right">
                    <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                    <button v-if="btnCupType" type="button" class="btn btn-primary" @click="addingCupType">Add Cup Type</button>
                    <button v-if="btnEditCupType" type="button" class="btn btn-primary" @click="editingCupType">Edit Cup Type</button>
                </div>
            </div>
        </div>
        <div v-if="showAddOnsModal" id="modal" class="blurred-background">
            <div class="alert-box">
                <center>
                    <h1>Adding Add-ons</h1>
                </center><hr>
                <form action>
                    <div class="form-group">
                        <label for="addOns">Add-ons :</label>
                        <br>
                        <input v-model="inputAddOns" type="text" class="form-control" id="addOns">
                    </div>
                    <div class="form-group">
                        <label for="price">Price :</label>
                        <br>
                        <input v-model="addOnsPrice" type="number" min="1" class="form-control" id="price">
                    </div>
                </form>
                <div style="text-align: right">
                    <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                    <button v-if="addonsShow" type="button" class="btn btn-primary" @click="addAddOns">Add Add-ons</button>
                    <button v-if="editAddOnsShow" type="button" class="btn btn-primary" @click="editAddOnsData">Edit Add-ons</button>
                </div>
            </div>
        </div>
        <div v-if="showProductModal" id="modal" class="blurred-background">
            <div class="alert-box3">
                <center>
                    <h1>Adding Product</h1>
                </center><hr>
                <form @submit="formSubmitProduct" enctype="multipart/form-data" action>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="pCat">Product Category:</label>
                                <br>
                                <select class="form-control" v-model="prodType">
                                    <option v-for="(item, index) in categoryData" :key="index" :value="item.productCategory">{{item.productCategory}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="pname">Product name:</label>
                                <br>
                                <input type="text" class="form-control" v-model="productName" required>
                            </div>
                        </div>
                    </div>
                    <button type="button" ref="norm" v-if="priceEvent === ''" class="btn borderStyle1" style="margin-left: 1%; background-color: #ffffff; cursor: pointer" @click="normalPrice($event)">Normal Price</button>
                    <button type="button" ref="norm" v-else class="btn" style="margin-left: 1%; background-color: #ffffff; cursor: pointer" @click="normalPrice($event)">Normal Price</button>
                    <button type="button" ref="online" class="btn btnBorderStyle" style="display: inline-block; background-color: #ffffff; cursor: pointer" @click="onlinePrice($event)">Online Price</button>
                    <div v-if="!online" style="border: 1px solid #d8dce3; margin-top: -0.5%;"> 
                        <div class="row" style="margin-top: 5%;">
                            <div class="col-md-6">
                                <div class="form-group" style="margin-left: 3%;">
                                    <label for="lowPrice">Low Dose Price:</label>
                                    <br>
                                    <input type="number" min="0" class="form-control" v-model="lowPrice" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group" style="margin-right: 3%;">
                                    <label for="highPrice">High Dose Price:</label>
                                    <br>
                                    <input type="number" min="0" class="form-control" v-model="highPrice" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" style="margin-left: 3%;">
                                    <label for="overPrice">Over Dose Price:</label>
                                    <br>
                                    <input type="number" min="0" class="form-control" v-model="overPrice" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="online" style="border: 1px solid #d8dce3; margin-top: -0.5%;"> 
                        <div class="row" style="margin-top: 5%;">
                            <div class="col-md-6">
                                <div class="form-group" style="margin-left: 3%;">
                                    <label for="onlinelowPrice">Online Low Dose Price:</label>
                                    <br>
                                    <input type="number" min="0" class="form-control" v-model="onlinelowPrice" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group" style="margin-right: 3%;">
                                    <label for="onlinehighPrice">Online High Dose Price:</label>
                                    <br>
                                    <input type="number" min="0" class="form-control" v-model="onlinehighPrice" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group" style="margin-left: 3%;">
                                    <label for="onlineoverPrice">Online Over Dose Price:</label>
                                    <br>
                                    <input type="number" min="0" class="form-control" v-model="onlineoverPrice" required>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <center>
                            <img class="addOnsImage" :src="imgURL"><br>
                            <input type="file" class="fileStyle" v-on:change="onImgChange" required><br>
                        </center>
                    </div>
                    <div style="text-align: right">
                        <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                        <button v-if="productAdd" type="submit" class="btn btn-primary">Add Product</button>
                        <button v-if="productEdit" type="button" class="btn btn-primary" @click="updateProduct($event)">Edit Product</button>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="showCategoryModal" id="modal" class="blurred-background">
            <div class="alert-box2">
                <center>
                    <h1>Adding Category</h1>
                </center><hr>
                <form @submit="formSubmit" enctype="multipart/form-data" action>
                    <div class="form-group">
                        <label for="addOns">Product Category:</label>
                        <br>
                        <input type="text" class="form-control" v-model="productType" required>
                    </div>
                    <div class="form-group">
                        <center>
                            <img class="addOnsImage" :src="imageURL"><br>
                            <input type="file" class="fileStyle" v-on:change="onImageChange" required><br>
                        </center>
                    </div>
                    <div style="text-align: right">
                        <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                        <button type="submit" class="btn btn-primary">Add Category</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
::-webkit-scrollbar {
  width: 2px;
}
.my-custom-scrollbar[data-v-62e92aac] {
    position: relative;
    height: 500px;
    width: 100%;
    overflow: auto;
}
.fileStyle{
    font-size: 17px !important;
    width: 97px;
    margin-top: 3%;
    margin-bottom: 3%;
}
.addOnsImage{
    width: 250px !important; 
    height: 250px !important; 
    margin-top: 2% !important; 
}
.navButton{
    float: left;
    width: 200px;
}
.borderStyle1{
    border-left: 1px solid #d8dce3;
    border-top: 1px solid #d8dce3;
    border-right: 1px solid #d8dce3;
}
.btnBorderStyle{
    margin-top: -0.7%;
    border-bottom: 1px solid #d8dce3;
}
.borderStyle{
    border-left: 3px solid grey;
    border-top: 3px solid grey;
    border-right: 3px solid grey;
}
.btnBorderStyle1{
    border-bottom: 3px solid grey;
}
.table tr{
   text-align: center;
}
img{
    height: 50px;
    width: 100px;
}
hr{
    border: 1px solid gray;
}
label{
    font-size: 20px !important;
}
.blurred-background {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    text-align: center;
    background: rgb(54, 54, 54, .7);
}
.alert-box {
    width: 400px;
    background: white;
    display: inline-block;
    margin-top: 180px;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 30px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
.alert-box2 {
    width: 550px;
    background: white;
    display: inline-block;
    margin-top: 150px;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 30px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
.alert-box3 {
    width: 550px;
    background: white;
    display: inline-block;
    margin-top: 50px;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 20px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
.productTable {
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
}
.categoryTable{
    width: 70%;
    margin-top: 5%;
    margin-bottom: 5%;
}
.addOnsTable{
    width: 50%;
    margin-top: 5%;
    margin-bottom: 5%;
}
.my-custom-scrollbar {
    position: relative;
    height: 500px;
    width:70%;
    overflow: auto;
}
.table-wrapper-scroll-y {
    display: contents;
}
.div {
    /* border-style: solid; */
    margin-top: 3%;
    margin-bottom: 5%;
}
.btnModal{
    float: right;
    margin-right: 1%;
}
#buttonAdd {
    float: right;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data() {
        return {
            productName: '',
            img: '',
            imgURL: null,
            lowPrice: null,
            highPrice: null,
            overPrice: null,
            onlinelowPrice: null,
            onlinehighPrice: null,
            onlineoverPrice: null,
            prodType: null,
            image: '',
            imageURL: null,
            productType: null,
            inputAddOns: "",
            addOnsPrice: "",
            addOnsStat: null,
            editAddOnsShow: false,
            addonsShow: false,
            idAddOns: null,
            datas: null,
            productData: null,
            categoryData: null,
            showAddOnsModal: false,
            showProductModal: false,
            showCategoryModal: false,
            showCupTypeModal: false,
            btnCupType: false,
            btnEditCupType: false,
            inputCupPrice: null,
            inputCup: null,
            cupStatus: null,
            idCup: null,
            cupData: null,
            prod: false,
            cat: true,
            ons: false,
            cup: false,
            secondEvent: '',
            productAdd: false,
            productEdit: false,
            status: null,
            prodId: null,
            priceEvent: '',
            online: false
        };
    },
    mounted() {
        // this.retrieveAddOns();
        this.$refs.on.click()
        this.$refs.pro.click()
        this.$refs.cate.click()
        this.retrieveProducts()
        this.retrieveCategories()
        this.retrieveAddOns()
        this.retrieveCupType()
    },
    methods: {
        NACupUpdate(id){
            let param = {
                id: id,
                status: 'Not Available'
            }
            console.log(param)
            this.$axios.post(AUTH.url + "updateAvailableCupType", param).then(response => {
                this.retrieveCupType()
            });
        },
        availableCupUpdate(id){
            console.log(param)
            let param = {
                id: id,
                status: 'Available'
            }
            this.$axios.post(AUTH.url + "updateAvailableCupType", param).then(response => {
                this.retrieveCupType()
            });
        },
        retrieveCupType(){
            this.$axios.post(AUTH.url + "retrieveCupType").then(response => {
                this.cupData = response.data.cupType
            });
        },
        addingCupType(){
            let param = {
                cupType: this.inputCup,
                price: this.inputCupPrice,
                status: 'Available'
            };
            this.$axios.post(AUTH.url + "addingCupType", param).then(response => {
                this.retrieveCupType()
                this.hide()
            });
        },
        editingCupType(){
            let param = {
                id: this.idCup,
                cupType: this.inputCup,
                price: this.inputCupPrice,
                status: this.cupStatus
            };
            this.$axios.post(AUTH.url + "editingCupType", param).then(response => {
                this.retrieveCupType()
                this.hide()
            });
        },
        normalPrice(event){
            if(this.priceEvent !== event.target){
                event.target.classList.add('borderStyle1')
                event.target.classList.remove('btnBorderStyle')
                if(this.priceEvent !== ''){
                    this.priceEvent.classList.add('btnBorderStyle')
                    this.priceEvent.classList.remove('borderStyle1')
                }
            }
            this.priceEvent = event.target
            this.online = false
        },
        onlinePrice(event){
            if(this.priceEvent !== event.target){
                event.target.classList.add('borderStyle1')
                event.target.classList.remove('btnBorderStyle')
                if(this.priceEvent !== ''){
                    this.priceEvent.classList.add('btnBorderStyle')
                    this.priceEvent.classList.remove('borderStyle1')
                }
            }
            this.online = true
            this.priceEvent = event.target
        },
        onImgChange(e){
            this.img = e.target.files[0]
            this.imgURL = URL.createObjectURL(e.target.files[0])
        },
        formSubmitProduct(e) {
            e.preventDefault();
            let currentObj = this;

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData();
            formData.append('image', this.img)
            formData.append('productCategory', this.prodType)
            formData.append('productName', this.productName)
            formData.append('status', 'Available')
            formData.append('lowPrice', this.lowPrice)
            formData.append('highPrice', this.highPrice)
            formData.append('overPrice', this.overPrice)
            formData.append('onlinelowPrice', this.onlinelowPrice)
            formData.append('onlinehighPrice', this.onlinehighPrice)
            formData.append('onlineoverPrice', this.onlineoverPrice)
            console.log(formData)
            axios.post('/formSubmit', formData, config).then(function (response) {
                currentObj.success = response.data.success
                currentObj.retrieveCategories()
                currentObj.retrieveProducts()
                currentObj.hide()
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        },
        editProduct(item){
            this.showProductModal = true
            this.productName = item.productName
            this.prodType = item.productCategory
            this.img = item.image
            this.lowPrice = item.lowPrice
            this.highPrice = item.highPrice
            this.overPrice = item.overPrice
            this.onlinelowPrice = item.onlinelowPrice
            this.onlinehighPrice = item.onlinehighPrice
            this.onlineoverPrice = item.onlineoverPrice
            this.imgURL = item.image
            this.productAdd = false
            this.productEdit = true
            this.status = item.status
            this.prodId = item.id
        },
        updateProduct(e){
            e.preventDefault();
            let currentObj = this;

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            let formData = new FormData();
            formData.append('id', this.prodId)
            formData.append('image', this.img)
            formData.append('status', this.status)
            formData.append('productCategory', this.prodType)
            formData.append('productName', this.productName)
            formData.append('lowPrice', this.lowPrice)
            formData.append('higPrice', this.higPrice)
            formData.append('overPrice', this.overPrice)
            formData.append('onlinelowPrice', this.onlinelowPrice)
            formData.append('onlinehigPrice', this.onlinehigPrice)
            formData.append('onlineoverPrice', this.onlineoverPrice)
            axios.post('/updateProduct', formData, config)
            .then(function (response) {
                currentObj.success = response.data.success
                currentObj.retrieveCategories()
                currentObj.retrieveProducts()
                currentObj.hide()
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        },
        productStatusUpdate(id){
            let param = {
                id: id,
                status: 'Not Available'
            }
            this.$axios.post(AUTH.url + "updateStatusProduct", param).then(response => {
                this.retrieveProducts()
                console.log('updated successfully!')
            });
        },
        productStatusAvailable(id){
            let param = {
                id: id,
                status: 'Available'
            }
            this.$axios.post(AUTH.url + "updateStatusProduct", param).then(response => {
                this.retrieveProducts()
                console.log('updated successfully!')
            });
        },
        onImageChange(e){
            this.image = e.target.files[0]
            this.imageURL = URL.createObjectURL(e.target.files[0])
        },
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }

            let formData = new FormData();
            formData.append('image', this.image)
            formData.append('productCategory', this.productType)
            axios.post('/addCategory', formData, config).then(function (response) {
                currentObj.success = response.data.success
                currentObj.retrieveCategories()
                currentObj.retrieveProducts()
                currentObj.hide()
            })
            .catch(function (error) {
                currentObj.output = error;
            });
        },
        product(event){
            if(this.secondEvent !== event.target){
                event.target.classList.add('borderStyle')
                event.target.classList.remove('btnBorderStyle1')
                if(this.secondEvent !== ''){
                    this.secondEvent.classList.add('btnBorderStyle1')
                    this.secondEvent.classList.remove('borderStyle')
                }
            }
            this.secondEvent = event.target
            this.prod = true
            this.cat = false
            this.ons = false
            this.cup = false
        },
        category(event){
            if(this.secondEvent !== event.target){
                event.target.classList.add('borderStyle')
                event.target.classList.remove('btnBorderStyle1')
                if(this.secondEvent !== ''){
                    this.secondEvent.classList.add('btnBorderStyle1')
                    this.secondEvent.classList.remove('borderStyle')
                }
            }
            this.secondEvent = event.target
            this.prod = false
            this.cat = true
            this.ons = false
            this.cup = false
        },
        addOnsShow(event){
            if(this.secondEvent !== event.target){
                event.target.classList.add('borderStyle')
                event.target.classList.remove('btnBorderStyle1')
                if(this.secondEvent !== ''){
                    this.secondEvent.classList.add('btnBorderStyle1')
                    this.secondEvent.classList.remove('borderStyle')
                }
            }
            this.secondEvent = event.target
            this.prod = false
            this.cat = false
            this.ons = true
            this.cup = false
        },
        addCupType(event){
            if(this.secondEvent !== event.target){
                event.target.classList.add('borderStyle')
                event.target.classList.remove('btnBorderStyle1')
                if(this.secondEvent !== ''){
                    this.secondEvent.classList.add('btnBorderStyle1')
                    this.secondEvent.classList.remove('borderStyle')
                }
            }
            this.secondEvent = event.target
            this.prod = false
            this.cat = false
            this.ons = false
            this.cup = true
        },
        showAddOns(){
            this.showAddOnsModal = true
            this.addonsShow = true
            this.inputAddOns = null
            this.addOnsPrice = null
        },
        showProduct(){
            this.showProductModal = true
            this.productAdd = true
            this.productEdit = false
            this.prodType = null
            this.productName = null
            this.lowPrice = null
            this.highPrice = null
            this.overPrice = null
            this.onlinelowPrice = null
            this.onlinehighPrice = null
            this.onlineoverPrice = null
            this.imgURL = null
        },
        showCategory(){
            this.showCategoryModal = true
            this.imageURL = null
            this.productType = null
        },
        showCupType(){
            this.showCupTypeModal = true
            this.btnCupType = true
        },
        editCup(item){
            this.showCupTypeModal = true
            this.btnEditCupType = true
            this.idCup = item.id
            this.inputCup = item.cupTypeName
            this.inputCupPrice = item.cupTypePrice
            this.cupStatus = item.status
        },
        hide(){
            this.showAddOnsModal = false
            this.showProductModal = false
            this.showCategoryModal = false
            this.editAddOnsShow = false
            this.addonsShow = false
            this.showCupTypeModal = false
            this.btnCupType = false
            this.btnEditCupType = false
        },
        redirect(route) {
            ROUTER.push(route).catch(() => {});
        },
        addAddOns() {
            let param = {
                addOns: this.inputAddOns,
                price: this.addOnsPrice,
                status: 'Available'
            };
            this.$axios.post(AUTH.url + "addingAddOns", param).then(response => {
                this.retrieveAddOns()
                this.hide()
            });
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrievingAddOns").then(response => {
                this.datas = response.data.addons;
            });
        },
        editAddOns(item){
            this.showAddOnsModal = true
            this.inputAddOns = item.addons_name
            this.addOnsPrice = item.addons_price
            this.addOnsStat = item.status
            this.editAddOnsShow = true
            this.idAddOns = item.id
        },
        editAddOnsData(){
            let param = {
                id: this.idAddOns,
                addOns: this.inputAddOns,
                price: this.addOnsPrice,
                status: this.addOnsStat
            };
            this.$axios.post(AUTH.url + "updateAddOns", param).then(response => {
                this.retrieveAddOns()
                this.hide()
            });
        },
        NAStatusUpdate(id){
            let param = {
                id: id,
                status: 'Not Available'
            }
            this.$axios.post(AUTH.url + "updateStatusAddOns", param).then(response => {
                this.retrieveAddOns()
            });
        },
        availableStatusUpdate(id){
            let param = {
                id: id,
                status: 'Available'
            }
            this.$axios.post(AUTH.url + "updateStatusAddOns", param).then(response => {
                this.retrieveAddOns()
            });
        },
        retrieveProducts() {
            this.$axios.post(AUTH.url + "retrieveAllProduct").then(response => {
                this.productData = response.data.product;
            });
        },
        retrieveCategories() {
            this.$axios.post(AUTH.url + "retrieveCategory").then(response => {
                this.categoryData = response.data.addCategory;
            });
        }
    }
}
</script>
