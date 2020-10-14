<template>
    <div class=" container div">
        <div>
            <center><br>
                <h1>Order Record</h1>
            </center>
        </div><br>
        <div v-for="(item, index) in categoryData" :key="index">
            <button type="button" :id="item.productCategory" :ref="item.productCategory" :class="`btn navButton hb ${index===0 ? 'borderStyle' : 'btnBorderStyle1'}`" @click="category($event, item.productCategory)">{{item.productCategory}}</button>
        </div>
        <div>
            <center>
                <div style="margin-top: 5%; text-align: center">
                    <center>
                        <button type="button" ref="cate" class="btn navButton borderStyle" @click="categ($event)">Low Dose</button>
                        <button type="button" ref="pro" class="btn navButton btnBorderStyle1" @click="categ($event)">High Dose</button>
                        <button type="button" ref="on" class="btn navButton btnBorderStyle1" @click="categ($event)">Over Dose</button>
                    </center>
                </div>
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
                    <table class="table table-bordered table-striped cupTable" id="myTable">
                        <thead class="thead-light">
                            <tr class="header">
                                <th scope="col">#</th>
                                <th scope="col">Cup Type</th>
                                <th scope="col">Additional Price</th>
                                <th scope="col">Cup Quantity</th>
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
                                    <td>{{item.cupQuantity}}</td>
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
    </div>
</template>
<style scoped>
.errorColor{
    color: red;
}
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
    /* background-color: #f0f3f5; */
}
.btnBorderStyle1{
    border-bottom: 3px solid grey;
    /* background-color: #d8dce3; */
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
.cupTable{
    width: 60%;
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
            productName: null,
            img: null,
            imgURL: null,
            lowPrice: null,
            highPrice: null,
            overPrice: null,
            onlinelowPrice: null,
            onlinehighPrice: null,
            onlineoverPrice: null,
            prodType: null,
            image: null,
            imageURL: null,
            productType: null,
            inputAddOns: null,
            addOnsPrice: null,
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
            Event: '',
            secondEvent: '',
            productAdd: false,
            productEdit: false,
            status: null,
            prodId: null,
            priceEvent: '',
            online: false,
            errorMessage: null
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
            this.$axios.post(AUTH.url + "updateAvailableCupType", param).then(response => {
                this.retrieveCupType()
            });
        },
        availableCupUpdate(id){
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
            if(this.inputCupPrice !== null && this.inputCup !== null){
                let param = {
                    cupType: this.inputCup,
                    cupQuantity: this.inputCupQuantity,
                    price: this.inputCupPrice,
                    status: 'Available'
                };
                this.$axios.post(AUTH.url + "addingCupType", param).then(response => {
                    this.retrieveCupType()
                    this.hide()
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
        },
        editingCupType(){
            if(this.inputCupPrice !== null && this.inputCup !== null){
                let param = {
                    id: this.idCup,
                    cupType: this.inputCup,
                    cupQuantity: this.inputCupQuantity,
                    price: this.inputCupPrice,
                    status: this.cupStatus
                };
                this.$axios.post(AUTH.url + "editingCupType", param).then(response => {
                    this.retrieveCupType()
                    this.hide()
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
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
            if (this.img !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null){
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
                axios.post('/formSubmit', formData, config).then(function (response) {
                    currentObj.success = response.data.success
                    currentObj.retrieveCategories()
                    currentObj.retrieveProducts()
                    currentObj.hide()
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
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
            if (this.img !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null){
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
            }else{
                this.errorMessage = 'All fields are required!'
            }
        },
        productStatusUpdate(id){
            let param = {
                id: id,
                status: 'Not Available'
            }
            this.$axios.post(AUTH.url + "updateStatusProduct", param).then(response => {
                this.retrieveProducts()
            });
        },
        productStatusAvailable(id){
            let param = {
                id: id,
                status: 'Available'
            }
            this.$axios.post(AUTH.url + "updateStatusProduct", param).then(response => {
                this.retrieveProducts()
            });
        },
        onImageChange(e){
            this.image = e.target.files[0]
            this.imageURL = URL.createObjectURL(e.target.files[0])
        },
        formSubmit(e) {
            if(this.image !== null && this.productType !== null){
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
            }else{
                this.errorMessage = 'All fields are required!'
            }
            
        },
        category(event, category){           
            let buttons = document.getElementsByClassName("hb");
            for (let idx = 0; idx < buttons.length; idx++) {
                let button =  buttons[idx];
                if (button.id === category) {
                        button.classList.add('borderStyle')
                        button.classList.remove('btnBorderStyle1')
                }else{
                        button.classList.remove('borderStyle')
                        button.classList.add('btnBorderStyle1')
                }
            }
            this.Event = event.target
            this.prod = false
            this.cat = true
            this.ons = false
            this.cup = false
        },
        categ(event, category){
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
            this.inputCupPrice = null
            this.inputCup = null
            this.inputCupQuantity = null

        },
        editCup(item){
            this.showCupTypeModal = true
            this.btnEditCupType = true
            this.idCup = item.id
            this.inputCup = item.cupTypeName
            this.inputCupQuantity = item.cupQuantity
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
            if(this.addOnsPrice !== null && this.inputAddOns !== null){
                let param = {
                    addOns: this.inputAddOns,
                    price: this.addOnsPrice,
                    status: 'Available'
                };
                this.$axios.post(AUTH.url + "addingAddOns", param).then(response => {
                    this.retrieveAddOns()
                    this.hide()
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
            
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
            if(this.addOnsPrice !== null && this.inputAddOns !== null){
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
            }else{
                this.errorMessage = 'All fields are required!'
            }
            
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
            this.$axios.post(AUTH.url + "retrieveCategoryAscending").then(response => {
                this.categoryData = response.data.addCategory;
            });
        }
    }
}
</script>
