<template>
    <div class="sudlanan">
        <center>
            <h1 style="margin-top: 2%;">{{chosenCat}} Milktea</h1>
            <div v-if="data !== null && data.length > 0" class="row">
                <div class="col-md-3 imageSize" v-for="(item, index) in data" :key="index">
                    <center>
                        <img class="imgItem" :src="item.image" @click="redirect(item.id)">
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
    background-color: black;
    height: 92.8vh;
    overflow: hidden;
    color:white;
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
            data: null
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
        redirect(param){
            ROUTER.push('/order/product/'+param).catch(()=>{})
        }
    }
}
</script>
