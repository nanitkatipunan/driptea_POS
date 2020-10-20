<template>
    <div>
            <!-- <img class="dripteaImage" :src="image" > -->
        <v-card class="overflow-hidden">
            <v-app-bar
            absolute
            color="orange"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="#scrolling-techniques-3"
            >
            <!-- <template v-slot:img="{ props }">
                <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>
            </template> -->

            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Title</v-toolbar-title> -->

            <v-spacer></v-spacer>

            <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->

            <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn> -->

            <!-- <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn> -->

            <template v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab v-for="(item, index) in data" :key="index"><a :href="'#'+item.productCategory" style="color: white;">{{item.productCategory}}</a></v-tab>
                </v-tabs>
            </template>
            </v-app-bar>
            <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
            height="100%"
            max-height="900"
            >
            <v-container style="margin-top: 200px;">
                <div :id="item.productCategory" class="categoryStorage" v-for="(item, index) in data" :key="index">
                    <!-- <img class="imgItem" :src="item.image" @click="redirect(item.productCategory)"> -->
                    <h3>{{item.productCategory}}</h3>
                    <div v-if="productData !== null && data.length > 0" class="row">
                        <div v-if="item.productCategory === items.productCategory" class="col-md-3 imageSize" v-for="(items, ind) in productData" :key="ind">
                            <center>
                                <img class="imgItem" data-toggle="modal" data-target="#viewDetails" :src="items.image" @click="showModal(items)">
                                <h4>{{items.productName}}</h4>
                            </center>
                        </div>
                    </div>
                    <div v-else class="secRow">
                        <center>
                            <img class="noImage" src="@/assets/data.png">
                            <h2>No Product Yet</h2>
                        </center>   
                    </div>
                </div>
            </v-container>
            </v-sheet>
        </v-card>
        <div class="modal fade" id="viewDetails" role="dialog">
            <div class="modal-dialog modal-lg">
            <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div v-if="success !== null" class="alert alert-success" role="alert">
                          {{success}}
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <center>
                                    <img class="imageSize2" :src="image">
                                    <div><br>
                                        <h3>(₱ {{price}})</h3>
                                        <h3>{{productName}}</h3>
                                        <p class="productDescription">Description</p>
                                    </div>
                                </center>
                            </div>
                            <div class="col-md-6">
                                <div class="modalDiv">
                                    <form>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Size : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <select class="form-control" v-model="size">
                                                <option value="lowDose">Low Dose</option>
                                                <option value="highDose">High Dose</option>
                                                <option value="overDose">Over Dose</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="cupType" style="font-size: 15px; font-weight: bold">Cup Type : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <select class="form-control" v-model="cupType">
                                                <option v-for="(item, index) in cupData" :key="index" :value="item.cupTypeName">{{item.cupTypeName}}</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="sugarLevel" style="font-size: 15px; font-weight: bold">Sugar Level: &nbsp;&nbsp;</label>
                                            <select class="form-control" v-model="sugarLevel">
                                                <option value="extra">100%(Normal Sugar)</option>
                                                <option value="normal">75%(Three fourth Sugar)</option>
                                                <option value="less">50%(Half Sugar)</option>
                                                <option value="half">25%(One fourth Sugar)</option>
                                                <option value="no">0%(No Sugar)</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Add&nbsp;Ons(Optional):</label><br>
                                            <div class="checkboxStyle">
                                                <div v-for="(item, index) in addOnsData" :key="index">
                                                    <input type="checkbox" :id="item.addons_name" :value="item.addons_name" v-model="addOns" @click="addTotalPrice($event)">
                                                    <label :for="item.addons_name">{{item.addons_name}}</label><br>
                                                </div>
                                                <!-- <input type="checkbox" id="coffeeJelly" value="coffeeJelly" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="coffeeJelly">Coffee Jelly</label><br>
                                                <input type="checkbox" id="oreo" value="oreo" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="oreo">Crushed Oreo</label><br>
                                                <input type="checkbox" id="tapioca" value="tapioca" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="tapioca">Tapioca</label><br>
                                                <input type="checkbox" id="pudding" value="pudding" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="pudding">Pudding</label><br>
                                                <input type="checkbox" id="nataJelly" value="nataJelly" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="nataJelly">Nata Jelly</label><br> -->
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <center>
                            <div style="text-align: center;">
                                <label for="quantity" style="font-size: 15px; font-weight: bold; display: inline;">Quantity:</label>
                                <input v-model="quantity" type="number" @change="addQuantity" min="1" style="width:100px; display: inline;" class="form-control">
                            </div>
                        </center>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
                        <center><button type="submit" class="btn btn-success btnRegister" @click="addToCart">Add to Cart - Php price</button></center>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.categoryStorage{
    margin-top: 3%;
    border-radius: 5px;
    box-shadow: 5px 5px gray;
}
.imageSize{
    height: 250px;
    margin-top: 2%;
}
.imageSize2{
    height: 300px;
    width: 300px;
    margin-top: 2%;
}
.dripteaImage{
    width: 100%;
    height: 300px;
}
/* .imgItem{
    height: 150px;
    width: 100%;
} */
.imgItem{
    height: 170px;
    width: 70%;
}
@media screen and (max-width: 900px) {
    .imageSize2{
        height: 300px;
        width: 200px;
        margin-top: 2%;
    }
}
@media screen and (max-width: 1000px) {
    .imageSize2{
        height: 300px;
        width: 200px;
        margin-top: 2%;
    }
}
@media screen and (max-width: 400px) {
    .imgItem{
        height: 170px;
        width: 50%;
    }
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
// import image from '../../../assets/home.jpeg'
export default {
    data(){
        return{
            data: null,
            productData: null,
            image: null,
            success: null,
            size: null,
            cupType: null,
            sugarLevel: null,
            addOns: [],
            quantity: null,
            productName: null,
            price: null,
            addOnsData: null,
            cupData: null
        }
    },
    mounted(){
        this.retrieveCategory()
        this.retrieveProduct()
        this.retrieveAddOns()
        this.retrieveCupType()
    },
    methods: {
        retrieveCupType(){
            this.$axios.post(AUTH.url + "retrieveCupType").then(response => {
                this.cupData = response.data.cupType
            });
        },
        retrieveAddOns() {
            this.$axios.post(AUTH.url + "retrievingAddOns").then(response => {
                this.addOnsData = response.data.addons;
            });
        },
        retrieveCategory(){
            this.$axios.post(AUTH.url + 'retrieveCategoryAscending').then(res => {
                this.data = res.data.addCategory
            })
        },
        redirect(param){
            ROUTER.push('/productOnline/'+param).catch(()=>{})
        },
        retrieveProduct(){
            this.$axios.post(AUTH.url + 'retrieveAllProductAscending').then(res => {
                this.productData = res.data.product
            })
        },
        addTotalPrice(event){
            if(event.target.checked){
                this.totalPrice += 20
                this.mainPrice += 20
            }else{
                this.mainPrice -= 20
                this.totalPrice -= 20
            }
            this.addQuantity()
        },
        addQuantity(){
            let pr = 0
            for (let i = 1; i <= this.quantity; i++) {
                pr += this.totalPrice
            }
            this.mainPrice = pr
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
                this.$axios.post(AUTH.url + 'addOrder', parameter).then(response => {
                    ROUTER.push('/productCategory/'+localStorage.getItem('customerType')).catch(()=>{})
                })
            }
        },
        cancel(){
            // this.sinkers = []
            this.addOns = []
        },
        showModal(item){
            this.price = item.onlinelowPrice
            this.productName = item.productName
            this.image = item.image
        }
    }
}
</script>

