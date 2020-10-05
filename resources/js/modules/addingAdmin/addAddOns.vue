<template>
    <div class=" container div">
        <div>
            <center><br>
                <h1>Add Products, Categories and Add-ons</h1><br>
                <button v-if="ons" type="button" class="btn btn-primary btnModal" @click="showAddOns">+ Add ons</button>
                <button v-if="prod" type="button" class="btn btn-primary btnModal" @click="showProduct">+ Product</button>
                <button v-if="cat" type="button" class="btn btn-primary btnModal" @click="showCategory">+ Categories</button>
            </center>
        </div><br><br>
        <div>
            <button type="button" ref="cate" class="btn navButton borderStyle" @click="category($event)">Categories</button>
            <button type="button" ref="pro" class="btn navButton btnBorderStyle1" @click="product($event)">Product</button>
            <button type="button" ref="on" class="btn navButton btnBorderStyle1" @click="addOnsShow($event)">Add-ons</button>
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
                                <th scope="col">Lowest Price</th>
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
                                    <td>{{item.price}}</td>
                                    <td>
                                        <div style="text-align: left">
                                            <button class="btn btn-success" @click="editProduct(item)">Edit</button>
                                            <button class="btn btn-warning" style="color: red; display: inline-block;" @click="productStatusUpdate(item.id)">N/A</button>
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
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template>
                                <tr v-for="(data, index) in datas" :key="index">
                                    <td scope="row">{{index+1}}</td>
                                    <td>{{data.addons_name}}</td>
                                    <td>{{data.addons_price}}</td>
                                    <td>
                                        <button class="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
        
        <!-- Modal -->
        <div v-if="showAddOnsModal" id="modal" class="blurred-background">
            <div class="alert-box">
                <center>
                    <h1>Adding Add-ons</h1>
                </center><hr>
                <form action>
                    <div class="form-group">
                        <label for="addOns">Add-ons :</label>
                        <br>
                        <input v-model="addOns" type="text" class="form-control" id="addOns">
                    </div>
                    <div class="form-group">
                        <label for="price">Price :</label>
                        <br>
                        <input v-model="price" type="number" min="1" class="form-control" id="price">
                    </div>
                </form>
                <div style="text-align: right">
                    <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                    <button type="button" class="btn btn-primary" @click="addAddOns">Add Add-ons</button>
                </div>
            </div>
        </div>
        <div v-if="showProductModal" id="modal" class="blurred-background">
            <div class="alert-box3">
                <center>
                    <h1>Adding Product</h1>
                </center><hr>
                <form @submit="formSubmitProduct" enctype="multipart/form-data" action>
                    <div class="form-group">
                        <label for="pCat">Product Category:</label>
                        <br>
                        <input type="text" class="form-control" v-model="prodType" required>
                    </div>
                    <div class="form-group">
                        <label for="pname">Product name:</label>
                        <br>
                        <input type="text" class="form-control" v-model="productName" required>
                    </div>
                    <div class="form-group">
                        <label for="price">Price:</label>
                        <br>
                        <input type="number" min="0" class="form-control" v-model="price" required>
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
    font-size: 30px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
.productTable {
    width: 90%;
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
            price: null,
            prodType: null,
            image: '',
            imageURL: null,
            productType: null,
            addOns: "",
            price: "",
            datas: [],
            productData: null,
            categoryData: null,
            showAddOnsModal: false,
            showProductModal: false,
            showCategoryModal: false,
            prod: false,
            cat: true,
            ons: false,
            secondEvent: '',
            productAdd: false,
            productEdit: false,
            status: null
        };
    },
    mounted() {
        // this.retrieveAddOns();
        this.$refs.on.click()
        this.$refs.pro.click()
        this.$refs.cate.click()
        this.retrieveProducts()
        this.retrieveCategories()
    },
    methods: {
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
            formData.append('status', this.status)
            formData.append('price', this.price)
            console.log(formData)
            axios.post('/formSubmit', formData, config)
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
        editProduct(item){
            this.showProductModal = true
            this.productName = item.productName
            this.prodType = item.productCategory
            this.img = item.image
            this.price = item.price
            this.imgURL = item.image
            this.productAdd = false
            this.productEdit = true
        },
        updateProduct(e){
            e.preventDefault();
            let currentObj = this;

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            let formData = new FormData();
            formData.append('image', this.img)
            formData.append('status', this.status)
            formData.append('productCategory', this.prodType)
            formData.append('productName', this.productName)
            formData.append('price', this.price)
            console.log(formData)
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
            axios.post('/addCategory', formData, config)
            .then(function (response) {
                currentObj.success = response.data.success
                console.log('gawas xd')
                currentObj.retrieveCategories()
                console.log('gawas ni')
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
        },
        showAddOns(){
            this.showAddOnsModal = true
        },
        showProduct(){
            this.showProductModal = true
            this.productAdd = true
            this.productEdit = false
        },
        showCategory(){
            this.showCategoryModal = true
        },
        hide(){
            this.showAddOnsModal = false
            this.showProductModal = false
            this.showCategoryModal = false
        },
        redirect(route) {
            ROUTER.push(route).catch(() => {});
        },
        addAddOns() {
            let param = { addOns: this.addOns, price: this.price };
            this.$axios.post(AUTH.url + "addingAddOns", param).then(response => {
                console.log("myData", response.data);
            });
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrievingAddOns").then(response => {
                this.datas = response.data.addons;
                console.log(this.datas);
            });
        },
        retrieveProducts() {
            this.$axios.post(AUTH.url + "retrieveAllProduct").then(response => {
                this.productData = response.data.product;
                this.status = response.data.product.status
                console.log('product', this.productData);
            });
        },
        retrieveCategories() {
            this.$axios.post(AUTH.url + "retrieveCategory").then(response => {
                this.categoryData = response.data.addCategory;
                console.log('addCategory', this.categoryData);
            });
        }
    }
}
</script>
