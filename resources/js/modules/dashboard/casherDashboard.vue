<template>
  <v-container class="pa-4 text-center">
    <v-row
      class="fill-height" >
      <template v-for="(item, i) in items">
        <v-col :key="i" cols="12" md="3">
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }"  height="320" max-width="320">
              <v-img :src="item.img" height="320px" @click="goTo(item.link)" ></v-img>
            </v-card> 
          </v-hover>
        </v-col>
      </template>
      
    </v-row>
  </v-container>
</template>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
         
      items: [
        {
          img: 'https://www.freeiconspng.com/thumbs/walking-icon/walking-icon-6.jpg',
          link:'/walkin'
        },
        {
      
          img: 'https://dustinstout.com/wp-content/uploads/2016/04/facebook-icon-1920x1080-920x518.jpg',
           link:'/fb'
        },
        {
       
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKtrva2NAQo7PXmhWITqpeRGDiql1U6u2DIQ&usqp=CAU',
           link:'/grab'
        },
        {
        
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbzIv9yJMCwep7bOqWOMiW9mcY9jh6o-UttA&usqp=CAU',
           link:'/foodpanda'
        },
      ],
      transparent: 'rgba(255, 255, 255, 0)',

        }
    },
    methods: {
        redirect(type){
            if(type !== 'fb'){
                let parameter ={
                    customerType: type,
                }
                this.$axios.post(AUTH.url + 'addCustomer', parameter).then(res => {
                    localStorage.setItem('customerId', res.data.customerDetails.id)
                    localStorage.setItem('customerType', res.data.customerDetails.customerType)
                    ROUTER.push('/productCategory/' + res.data.customerDetails.customerType).catch(()=>{})
                })
            }else{
                ROUTER.push('/productCategory/'+param).catch(()=>{})
            }
        },
        goTo(link){
          this.$router.push(link);
        }
    }
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>