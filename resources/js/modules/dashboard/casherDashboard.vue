<template>
    <div class="container">
        <div class="row" style="margin-top: 15%">
            <div class="col-md-6" style="text-align: right">
                <img style="width: 300px; height: 200px; border: solid 1px black" src="@/assets/walkin.jpg" @click="redirect('walkin')">
            </div>
            <div class="col-md-6">
                <img style="width: 300px; height: 200px;" src="@/assets/fb.jpeg" @click="redirect('fb')">
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
    </div>
</template>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{

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
        }
    }
}
</script>

