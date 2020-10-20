<template>
    <v-div class="container">
        <v-div class="row" style="margin-top: 15%">
            <v-div class="col-md-6" style="text-align: right">
                <img style="width: 300px; height: 200px; border: solid 1px black" src="@/assets/walkin.jpg" @click="redirect('walkin')">
            </v-div>
            <v-div class="col-md-6">
                <img style="width: 300px; height: 200px;" data-toggle="modal" data-target="#viewDetails" src="@/assets/fb.jpeg" @click="redirect('fb')">
            </v-div>
        </v-div>
        <v-div class="row">
            <v-div class="col-md-6" style="text-align: right">
                <img style="width: 300px; height: 200px; margin-top: 5%; border: solid 1px black" src="@/assets/foodpanda.png" @click="redirect('foodpanda')">
            </v-div>
            <v-div class="col-md-6">
                <img style="width: 300px; height: 200px; margin-top: 5%;" src="@/assets/grab.png" @click="redirect('grab')">
            </v-div>
        </v-div>
        <v-div class="modal fade" id="viewDetails" role="dialog">
            <v-div class="modal-dialog modal-lg">
            <!-- Modal content-->
                <v-div class="modal-content">
                    <v-div class="modal-header">
                        <h3>Customer Information</h3>
                        <button type="button" class="close" data-dismiss="modal">&times;</button><br>
                    </v-div>
                    <v-div class="modal-body">
                        <v-div>
                            <form>
                                <v-div class="form-group">
                                    <label for="fName" style="font-size: 15px; font-weight: bold;">Fullname:</label>
                                    <input class="form-control" type="text" v-model="fullName">
                                </v-div>
                                <v-div class="form-group">
                                    <label for="address" style="font-size: 15px; font-weight: bold;">Address:</label>
                                    <input class="form-control" type="text" v-model="address">
                                </v-div>
                                <v-div class="form-group">
                                    <label for="contactNumber" style="font-size: 15px; font-weight: bold;">Contact Number:</label>
                                    <input class="form-control" type="text" v-model="contactNumber">
                                </v-div>
                            </form>
                        </v-div>
                    </v-div>
                    <v-div class="modal-footer">
                        <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button> -->
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="continueFb()">Continue</button>
                    </v-div>
                </v-div>
            </v-div>
        </v-div>
       
    </v-div>
</template>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
            fullName: null,
            address: null,
            contactNumber: null
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