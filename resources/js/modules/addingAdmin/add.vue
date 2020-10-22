<template>
    <div class=" container div">
        <center> <h1>Add Products, Categories and Add-ons</h1><br></center>
        
        <template>
            <v-bottom-navigation style="background-color:#ff5b04" >
                 <button type="button" ref="cate" class="btn navButton borderStyle" @click="category($event)">Categories</button>
                <button type="button" ref="pro" class="btn navButton btnBorderStyle1" @click="product($event)">Product</button>
                <button type="button" ref="on" class="btn navButton btnBorderStyle1" @click="addOnsShow($event)">Add-ons</button>
                <button type="button" ref="cup" class="btn navButton btnBorderStyle1" @click="addCupType($event)">Cup Type</button>
                <button type="button" ref="size" class="btn navButton btnBorderStyle1" @click="cupSize($event)">Cup Size </button>
            </v-bottom-navigation>
        </template>
        <div>
          
            <center>
               

                <!-- Table for Cup Size -->
                <div v-if="size" class="my-custom-scrollbar" >
                     <v-data-table :headers="headersForCupSize" :items="cupSizeData" :items-per-page="5" :search="search" class="elevation-3">
                        <template v-slot:top>
                            <v-toolbar class="mb-1" color="blue darken-1" dark flat>
                                <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA CUP SIZE</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <v-text-field
                                    v-model="search"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-magnify"
                                label="Search"
                                ></v-text-field>
                                <v-divider class="mx-4" vertical></v-divider>
                              <v-btn color="primary"  v-if="size" type="button" class="btn btn-primary btnModal" dark @click="dialogForCupSize = true">+ CUP SIZE</v-btn>
                            
                            </v-toolbar>
                        </template>
                       
                          <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
                        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
                    </template>
                    </v-data-table>
                    
                </div>

                <!-- Table for Category -->
                <div v-if="cat">
                    <v-data-table :headers="headersForCategory" :items="categoryData" :items-per-page="5" :search="search" class="elevation-3">
                        <template v-slot:top>
                            <v-toolbar class="mb-1" color="blue darken-1" dark flat>
                                <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA CATEGORY</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <v-text-field
                                    v-model="search"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-magnify"
                                label="Search"
                                ></v-text-field>
                                <v-divider class="mx-4" vertical></v-divider>
                               <v-btn color="primary"  v-if="cat" type="button" class="btn btn-primary btnModal" dark @click="dialogForCategory = true">+ CATEGORY</v-btn>
                            
                            </v-toolbar>
                        </template>
                        <template v-slot:item.image="{ item }">
                        <v-img :src="item.image" style="width:50px;hieght:50px"></v-img>
                        </template>
                         <template v-slot:item.actions="{ item }">
                        <v-icon small class="mr-2" @click="editCategories(item)">mdi-pencil</v-icon>
                        <!-- <v-icon small @click="deleteItem(item)">mdi-delete</v-icon> -->
                    </template>
                    </v-data-table>
                </div>
                    

                <!-- Table for product -->
                <div v-if="prod">
                    <v-data-table :headers="headersForProduct" :items="productData" :items-per-page="5" :search="search" class="elevation-3">
                        <template v-slot:top>
                            <v-toolbar class="mb-1" color="blue darken-1" dark flat>
                                <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA PRODUCT</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <v-text-field
                                    v-model="search"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-magnify"
                                label="Search"
                                ></v-text-field>
                                <v-divider class="mx-4" vertical></v-divider>
                                <v-btn v-if="prod" type="button" color="primary" @click="showProduct">+ PRODUCT</v-btn>
                            
                            </v-toolbar>
                        </template>
                        <template v-slot:item.image="{ item }">
                        <v-img :src="item.image" style="width:50px;hieght:50px"></v-img>
                        </template>
                        <template v-slot:item.actions="{ item }">
                            <v-icon small class="mr-2" @click="editProduct(item)">mdi-pencil</v-icon>
                            <v-icon v-if="item.status === 'Available'" small  @click="productStatusUpdate(item.id)">mdi-window-close</v-icon>
                            <v-icon v-else class="btn btn-warning"  small @click="productStatusAvailable(item.id)">mdi-check</v-icon>
                        </template>
                    </v-data-table>
                </div>
                    
                   
                <!-- Table for Add ons -->
                 <div v-if="ons">
                     <v-data-table :headers="headersForAddOns" :items="datas" :items-per-page="5" :search="search" class="elevation-3">
                        <template v-slot:top>
                            <v-toolbar class="mb-1" color="blue darken-1" dark flat>
                                <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA ADDONS</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <v-text-field
                                    v-model="search"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-magnify"
                                label="Search"
                                ></v-text-field>
                                <v-divider class="mx-4" vertical></v-divider>
                               <v-btn color="primary"  v-if="ons" type="button" class="btn btn-primary btnModal" dark @click="dialogForAddOns = true">+ ADD ONS</v-btn>
                            
                            </v-toolbar>
                        </template>
                         <template v-slot:item.image="{ item }">
                            <v-img :src="item.image" style="width:50px;hieght:50px"></v-img>
                            </template>
                            <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" @click="editAddOns(item)">mdi-pencil</v-icon>
                                <v-icon v-if="item.status === 'Available'" small @click="NAStatusUpdate(item.id)">mdi-delete</v-icon>
                                <v-icon v-else class="btn btn-warning" small  @click="availableStatusUpdate(item.id)">mdi-pencil</v-icon>
                    </template>
                    </v-data-table>
                </div>
                  
                <!-- Table for Cup Type -->
                <div v-if="cup">
                    <v-data-table  :headers="headersForCupType" :items="cupData" :search="search"  :items-per-page="5" class="elevation-3">
                        <template v-slot:top>
                            <v-toolbar class="mb-1" color="blue darken-1" dark flat>
                                <v-toolbar-title class="col pa-3 py-4 white--text">MILK TEA PRODUCT</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <v-text-field
                                    v-model="search"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-magnify"
                                label="Search"
                                ></v-text-field>
                                <v-divider class="mx-4" vertical></v-divider>
                                  <v-btn color="primary"  v-if="cup" type="button" class="btn btn-primary btnModal" dark @click="dialogForCupType = true">+ CUP TYPE</v-btn>
                            
                            </v-toolbar>
                        </template>
                           <template v-slot:item.actions="{ item }">
                                <v-icon small class="mr-2" @click="editCup(item)">mdi-pencil</v-icon>
                                <v-icon v-if="item.status === 'Available'" small @click="NACupUpdate(item.id)">mdi-delete</v-icon>
                                <v-icon v-else class="btn btn-warning" small  @click="availableCupUpdate(item.id)">mdi-pencil</v-icon>
                        </template>
                    </v-data-table>
                   
                </div>
                       
            </center>
        </div>
        
        <!-- Modal -->

<!-- Modalfor adding cup type doNE -->
    <div>
        <template>
        <v-row justify="center">
            <v-dialog v-model="dialogForCupType" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                    <span class="headline">ADD CUP TYPE</span>
                    </v-card-title>
                    <v-card-text>
                       <v-form>
                           <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
                            <v-container>
                            <v-row>
                                <v-text-field label="Cup Type Name" outlined dense v-model="inputCup" type="text" id="cupName"></v-text-field>
                            </v-row>
                            <v-row>    
                                <v-text-field label="Quantity" outlined dense v-model="inputCupQuantity" type="number"></v-text-field>
                            </v-row>  
                            <v-row>    
                                <v-text-field label="Quantity Price" outlined dense v-model="inputCupPrice" type="number" min="1"  id="price"></v-text-field> 
                            </v-row>
                        </v-container>
                       </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialogForCupType = false"> Close</v-btn>
                        <v-btn color="blue darken-1" text v-if="dialogForCupType" type="button" class="btn btn-primary" @click="addingCupType">Add Cup Type</v-btn>
                        <v-btn color="blue darken-1" text  v-if="btnEditCupType" type="button" class="btn btn-primary" @click="editingCupType">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </template>
    </div>
    

<!-- Modal for adding addons  -->

    <div>
         <template>
        <v-row justify="center">
            <v-dialog v-model="dialogForAddOns" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                    <span class="headline">ADD ADD ONS</span>
                    </v-card-title>
                    <v-card-text>
                       <v-form>
                           <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
                            <v-container>
                            <v-row>
                                <v-text-field label="Add Ons Name" outlined dense v-model="inputAddOns" type="text" id="cupName"></v-text-field>
                            </v-row>
                            <v-row>    
                                <v-text-field label="Addons Price" outlined dense v-model="addOnsPrice" type="number"></v-text-field>
                            </v-row>  
                        </v-container>
                       </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialogForAddOns = false"> Close</v-btn>
                        <v-btn color="blue darken-1" text v-if="dialogForAddOns" type="button" class="btn btn-primary" @click="addAddOns">Add Add Ons</v-btn>
                        <v-btn color="blue darken-1" text  v-if="editAddOnsShow" type="button" class="btn btn-primary" @click="editAddOnsData">Edt Add Ons</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </template>
    </div>
   

   
<!-- Modal for adding cup size -->
    <div>
        <template>
        <v-row justify="center">
            <v-dialog v-model="dialogForCupSize" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                    <span class="headline">ADD CUP SIZE</span>
                    </v-card-title>
                    <v-card-text>
                       <v-form>
                           <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
                            <v-container>
                            <v-row>
                                <v-text-field label="Low Dose Cup" outlined dense v-model="lowDoseCup" type="number"  min=0 id="lowDoseCup"></v-text-field>
                            </v-row>
                            <v-row>    
                                <v-text-field label="High Dose Cup" outlined dense v-model="highDoseCup" type="number" min=0 id="highDoseCup"></v-text-field>
                            </v-row>  
                            <v-row>    
                                <v-text-field label="Over Dose Cup" outlined dense v-model="overDoseCup" type="number" min=0 id="overDoseCup"></v-text-field> 
                            </v-row>
                        </v-container>
                       </v-form>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialogForCupSize = false"> Close</v-btn>
                        <v-btn color="blue darken-1" text  type="button" class="btn btn-primary" @click="addingCupSize">Add Cup Size</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </template>
    </div>
    

        

<!-- Modal for adding Product -->

   
        <div v-if="showProductModal" id="modal" class="blurred-background">
            <div class="modal-dialog" role="document" style="overflow-y: scroll;max-height:85%;  margin-top: 50px; margin-bottom:50px;">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Adding P</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit="formSubmitProduct" enctype="multipart/form-data" action>
                    <div class="row">
                        <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
                        <button v-if="productAdd" type="submit" class="btn btn-primary">Add Product</button>
                        <button v-if="productEdit" type="button" class="btn btn-primary" @click="updateProduct($event)">Edit Product</button>
                 </div>
                </form>
                </div>
            </div>
        </div>
           
    
       
    <!-- Modal for adding category hide -->
    <div>
          <template>``
        <v-row justify="center">
            <v-dialog v-model="dialogForCategory" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                    <span class="headline">ADDING PRODUCT CATEGORY</span>
                    </v-card-title>
                    <v-card-text>
                       <v-form @submit="formSubmit" enctype="multipart/form-data" action>
                            <span class="errorColor" v-if="errorMessage !== null">{{errorMessage}}</span>
                            <v-container>
                                <v-row>
                                    <v-text-field label="Cup Type Name" outlined dense v-model="productType" type="text" required></v-text-field>
                                </v-row>
                                <v-row>
                                <center>
                                        <v-img class="addOnsImage" :src="imageURL"></v-img><br>
                                        <input type="file" class="fileStyle" v-on:change="onImageChange" required><br>
                                </center>
                                </v-row>  
                            </v-container>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="dialogForCategory = false"> Close</v-btn>
                                    <v-btn color="blue darken-1" text  type="submit" class="btn btn-primary">Add Category</v-btn>
                                </v-card-actions>
                       </v-form>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </template>
    </div>
  
``



    </div>
    </div>

</template>
<style scoped>
.v-input__slot {
    margin-bottom: -35px;

}
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
th{
    text-align:center;
    font-size:30px;
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
.table{
    width:90%;
    margin-top:60px;

}
.searchInput{
    width:50%
}#alert-box {
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
#alert-box3 {
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
            showCupSizeModal: false,
            btnCupType: false,
            btnEditCupType: false,
            inputCupPrice: null,
            inputCup: null,
            inputCupQuantity:null,
            cupStatus: null,
            idCup: null,
            cupData: null,
            prod: false,
            cat: true,
            ons: false,
            cup: false,
            size:false,
            secondEvent: '',
            productAdd: false,
            productEdit: false,
            status: null,
            prodId: null,
            priceEvent: '',
            online: false,
            errorMessage: null,
            lowDoseCup:null,
            highDoseCup:null,
            overDoseCup:null,
            cupSizeData:null,
            search:null,
            dialogForCupType:false,
            dialogForCategory:false,
            dialogForAddOns:false,
            dialogForCupSize:false,

            headersForAddOns:[
                {text:'Id',value:'id'},
                {text:'Add Ons Name',value:'addons_name'},
                {text:'Add Ons Price',value:'addons_price'},
                {text:'Status',value:'status'},
                {text: 'ACTION',value:'actions',sortable:false}


            ],
            headersForCupType:[
                {text:'#', value: 'id' },
                {text:'Cup Type', value: 'cupTypeName' },
                {text:'Additional Price', value: 'cupTypePrice' },
                {text:'Cup Quantity', value: 'cupQuantity' },
                {text:'Status', value: 'status' },
                {text: 'ACTION',value:'actions',sortable:false}
                

            ],
            headersForCategory:[
                {text:'#', value: 'id'},
                {text:'images', value: 'image'},
                {text:'Product Category', value: 'productCategory'},
                {text: 'ACTION',value:'actions',sortable:false}

            ],
            
            headersForProduct:[
                {text:'#', value: 'id'},
                {text:'images', value: 'image' },
                {text:'Product Name', value: 'productName'},
                {text:'Product Category', value: 'productCategory'},
                {text:'Low Dose Price', value: 'lowPrice'},
                {text:'High Dose Price', value: 'highPrice'},
                {text:'Over Dose Price', value: 'overPrice'},
                {text:'Status', value: 'status' },
                {text: 'ACTION',value:'actions',sortable:false}
            ],
            headersForCupSize:[
                {text:'Date', value:'created_at'},
                {text:'Low Dose Cup', value:'incomingLowDose'},
                {text:'High Dose Cup', value:'incomingHighDose'},
                {text:'Over Dose Cup', value:'incomingOverDose'},
                {text:'Total IncomingCup', value:'incomingOverDose'+ ''},



            ]
        };
    },
    mounted() {
        // this.retrieveAddOns();
        this.$refs.on.click()
        this.$refs.pro.click()
        this.$refs.cate.click()
        this.$refs.size.click()

        this.retrieveProducts()
        this.retrieveCategories()
        this.retrieveAddOns()
        this.retrieveCupType()
        this. retrieveCupSize()
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
            this.$axios.post(AUTH.url + "retrieveAllCupType").then(response => {
                this.cupData = response.data.cupType
            });
        },
         retrieveCupSize(){
            this.$axios.post(AUTH.url + "retrieveCupSize").then(response => {
               this.cupSizeData = response.data.quantityCupsInDB

            response.data.quantityCupsInDB.forEach( element => {
                console.log(element.incomingLowDose)

            })

                    let totalCup =  response.data.quantityCupsInDB.incomingOverDose
                    console.log(totalCup);

                
                   
                
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
                    this.dialogForCupType = false
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
        },
        addingCupSize(){
            console.log('sud');
            if(this.lowDoseCup !== null && this.highDoseCup !== null && this.overDoseCup !== null){
                let param = {
                    incomingLowDose: this.lowDoseCup,
                    incomingHighDose: this.highDoseCup,
                    incomingOverDose: this.overDoseCup,
                    
                };
                console.log(param)
                this.$axios.post(AUTH.url + "addIncomingCups", param).then(response => {
                    this.retrieveCupSize()
                    this.hide()
                });
            }else{
                console.log('error')
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
                formData.append('highPrice', this.highPrice)
                formData.append('overPrice', this.overPrice)
                formData.append('onlinelowPrice', this.onlinelowPrice)
                formData.append('onlinehighPrice', this.onlinehighPrice)
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
                    this.dialogForCategory=false

                    
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
            
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
            this.size = false

        },
         cupSize(event){
            if(this.secondEvent !== event.target){
                event.target.classList.add('borderStyle')
                event.target.classList.remove('btnBorderStyle1')
                if(this.secondEvent !== ''){
                    this.secondEvent.classList.add('btnBorderStyle1')
                    this.secondEvent.classList.remove('borderStyle')
                }
            }
            this.secondEvent = event.target
            this.size = true
            this.prod = false
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
            this.size = false

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
            this.size = false

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
            this.size = false


        },
        showAddOns(){
            this.showAddOnsModal = true
            this.addonsShow = true
            this.inputAddOns = null
            this.addOnsPrice = null
        },
         showCupSize(){
            this.showCupSizeModal = true
            this.cupSizeShow = true
            this.lowDoseCup = null
            this.highDoseCup = null
            this.overDoseCup = null

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
            this.showCupSizeModal = false
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
                    this.dialogForAddOns=false
                });
            }else{
                this.errorMessage = 'All fields are required!'
            }
            
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrieveAllAddOns").then(response => {
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
            this.$axios.post(AUTH.url + "retrieveCategory").then(response => {
                this.categoryData = response.data.addCategory;
            });
        }
    }
}
</script>
