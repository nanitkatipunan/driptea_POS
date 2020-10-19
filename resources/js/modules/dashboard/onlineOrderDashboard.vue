<template>
    <div class="container">
        <div>
            <img :src="image" >
        </div>
        <div class="row">
            <div class="col-md-5 secondCol" v-for="(item, index) in data" :key="index">
                <img class="imgItem" :src="item.image" @click="redirect(item.productCategory)">
                <center>
                    <h3>{{item.productCategory}}</h3>
                </center>
            </div>
        </div>
    </div>
</template>
<style scoped>
.imgItem{
    height: 150px;
    width: 100%;
}
.secondCol{
    border-radius: 5px;
    box-shadow: 5px 5px gray;
    margin-top: 7%;
    margin-right: 2%;
    margin-left: 5%;
    height: 150px;
    background-color: white;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import image from '../../../assets/home.jpeg'
export default {
    data(){
        return{
            data: null,
            image: image
        }
    },
    mounted(){
        this.retrieveCategory()
    },
    methods: {
        retrieveCategory(){
            this.$axios.post(AUTH.url + 'retrieveCategory').then(res => {
                this.data = res.data.addCategory
            })
        },
        redirect(param){
            ROUTER.push('/productOnline/'+param).catch(()=>{})
        }
    }
}
</script>

