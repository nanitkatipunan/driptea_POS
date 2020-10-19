<template>
<<<<<<< HEAD
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
=======
    <div class="container">
        <div class="row" style="margin-top: 15%">
            <div class="col-md-6" style="text-align: right">
                <img style="width: 300px; height: 200px; border: solid 1px black" src="@/assets/walkin.jpg" @click="redirect('walkin')">
            </div>
            <div class="col-md-6">
                <img style="width: 300px; height: 200px;" data-toggle="modal" data-target="#viewDetails" src="@/assets/fb.jpeg" @click="redirect('fb')">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6" style="text-align: right">
                <img style="width: 300px; height: 200px; margin-top: 5%; border: solid 1px black" src="@/assets/foodpanda.png" @click="redirect('foodpanda')">
            </div>
            <div class="col-md-6">
                <img style="width: 300px; height: 200px; margin-top: 5%;" src="@/assets/grab.png" @click="redirect('grab')">
            </div>
        </div>
        <div class="modal fade" id="viewDetails" role="dialog">
            <div class="modal-dialog modal-lg">
            <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <h3>Customer Information</h3>
                        <button type="button" class="close" data-dismiss="modal">&times;</button><br>
                    </div>
                    <div class="modal-body">
                        <div>
                            <form>
                                <div class="form-group">
                                    <label for="fName" style="font-size: 15px; font-weight: bold;">Fullname:</label>
                                    <input class="form-control" type="text" v-model="fullName">
                                </div>
                                <div class="form-group">
                                    <label for="address" style="font-size: 15px; font-weight: bold;">Address:</label>
                                    <input class="form-control" type="text" v-model="address">
                                </div>
                                <div class="form-group">
                                    <label for="contactNumber" style="font-size: 15px; font-weight: bold;">Contact Number:</label>
                                    <input class="form-control" type="text" v-model="contactNumber">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button> -->
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="continueFb()">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
>>>>>>> 64d6e4548306d01f8320910215af55fc68b92ae2
</template>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
<<<<<<< HEAD
         
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

=======
            fullName: null,
            address: null,
            contactNumber: null
>>>>>>> 64d6e4548306d01f8320910215af55fc68b92ae2
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
            }
        },
<<<<<<< HEAD
        goTo(link){
          this.$router.push(link);
=======
        continueFb(){
            let param = {
                customerType: 'fb',
                customerName: this.fullName,
                customerAddress: this.address,
                customerContactNumber: this.contactNumber
            }
            this.$axios.post(AUTH.url + 'addCustomer', param).then(response => {
                localStorage.setItem('customerId', response.data.customerDetails.id)
                localStorage.setItem('customerType', response.data.customerDetails.customerType)
                ROUTER.push('/productCategory/fb').catch(()=>{})
            })
>>>>>>> 64d6e4548306d01f8320910215af55fc68b92ae2
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