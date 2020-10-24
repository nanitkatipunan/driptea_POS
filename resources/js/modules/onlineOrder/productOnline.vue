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
