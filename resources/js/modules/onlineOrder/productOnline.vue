<template>
    <div class="sudlanan">
        <center>
            <h1 style="margin-top: 2%;">{{chosenCat}} Milktea</h1>
            <div v-if="data !== null && data.length > 0" class="row">
                <div class="col-md-3 imageSize" v-for="(item, index) in data" :key="index">
                    <center>
                        <img class="imgItem" data-toggle="modal" data-target="#viewDetails" :src="item.image" @click="showModal(item.id)">
                        <h4>{{item.productName}}</h4>
                    </center>
                </div>
            </div>
            <div v-else class="secRow">
                <center>
                    <img class="noImage" src="@/assets/data.png">
                    <h2>No Product Yet</h2>
                </center>   
            </div>
        </center>
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
                                <!-- <img class="imageSizeModal" :src="image"> -->
                            </div>
                            <div class="col-md-6">
                                <h2>Product</h2>
                                <h4>Price</h4>
                                <div>
                                    <p class="productDescription">Description</p>
                                </div>
                                <div class="modalDiv">
                                    <form>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Size : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <select class="form-control" v-model="size">
                                                <option value="small">Regular</option>
                                                <option value="large">Large</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Sugar Level: &nbsp;&nbsp;</label>
                                            <select class="form-control" v-model="sugarLevel">
                                                <option value="extra">100%(Normal Sugar)</option>
                                                <option value="normal">75%(Three fourth Sugar)</option>
                                                <option value="less">50%(Half Sugar)</option>
                                                <option value="half">25%(One fourth Sugar)</option>
                                                <option value="no">0%(No Sugar)</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Add&nbsp;Ons(Optional):<span class="spanStyle2">+20&nbsp;each</span></label><br>
                                            <div class="checkboxStyle">
                                                <input type="checkbox" id="mousse" value="mousse" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="mousse">Mousse</label><br>
                                                <input type="checkbox" id="coffeeJelly" value="coffeeJelly" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="coffeeJelly">Coffee Jelly</label><br>
                                                <input type="checkbox" id="oreo" value="oreo" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="oreo">Crushed Oreo</label><br>
                                                <input type="checkbox" id="tapioca" value="tapioca" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="tapioca">Tapioca</label><br>
                                                <input type="checkbox" id="pudding" value="pudding" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="pudding">Pudding</label><br>
                                                <input type="checkbox" id="nataJelly" value="nataJelly" v-model="addOns" @click="addTotalPrice($event)">
                                                <label for="nataJelly">Nata Jelly</label><br>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="quantity" style="font-size: 15px; font-weight: bold;">Quantity:</label>
                                            <input v-model="quantity" type="number" @change="addQuantity" min="1" style="width:70px" class="form-control">
                                        </div>
                                    </form>
                                </div>
                                <center><button type="submit" class="btn btnRegister" @click="addToCart">Add to Cart - Php price</button></center>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
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
    height: 650px;
    overflow-y: scroll;
}
.secRow{
    width: 80%;
    height: 650px;
    overflow-y: scroll;
}
.sudlanan{
    height: 92.8vh;
    overflow: hidden;
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
            quantity: null
        }
    },
    mounted(){
        this.retrieveProduct()
    },
    methods: {
        retrieveProduct(){
            this.$axios.post(AUTH.url + 'retrieveProduct', {type: this.chosenCat}).then(res => {
                this.data = res.data.product
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
            if(this.auth.authenticateForAll()){
                setTimeout(() => {
                    let parameter = {
                        accountId: this.auth.user.userId,
                        productId: this.productId,
                        quantity: this.quantity,
                        size: this.size,
                        sugarLevel: this.sugarLevel,
                        iceLevel: this.iceLevel,
                        status: 'pending',
                        // sinkers: this.sinkers,
                        subTotal: this.mainPrice,
                        addOns: this.addOns
                    }
                    this.$axios.post(AUTH.url+'addOrder', parameter).then(response => {
                        this.success = 'successfully added to cart'
                        setTimeout(() => ROUTER.push('/userDashboard').catch(()=>{}), 1000);
                    })},
                2000);
            }
        },
        cancel(){
            // this.sinkers = []
            this.addOns = []
        },
        showModal(id){

        }
        // redirect(param){
        //     ROUTER.push('/order/product/'+param).catch(()=>{})
        // }
    }
}
</script>
