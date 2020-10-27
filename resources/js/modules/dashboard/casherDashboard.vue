<template>
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

