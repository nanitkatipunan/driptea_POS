<template>
    <div class="container">
        <center>
            <img :src="image" class="image_size" @click="redirect('login')">
        </center>
    </div>
</template>
<style>
.image_size{
    height: 600px;
    width: auto;
    margin-top: 7%;
}
</style>

<script>
import image from '../../assets/logo.png'
import ROUTER from '../router'
export default {
    data(){
        return{
            image: image
        }
    },
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        },
    }
}
</script>
