<template>

    <div>
         <div class="header" style="background-color:#ff5b04">
            <div class="container" >
                <div class="row">
                    <div class="col-6">
                        DRIPTEA
                    </div>
                    <div class="col-6 text-right">
                    <v-btn icon style="margin-right: 2%;">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    
                    <v-btn icon style="margin-right: 1%;"  @click="home()">
                <v-icon >mdi-home</v-icon>
            </v-btn>
            <v-menu bottom left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item >
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title @click="direct">Order History</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            
           

                    </div>
                </div>
                <!--/row-->
            </div>
             <v-card mb="20px">
                    <v-container fluid>
                         <center>
                            <h1>Your Cart</h1>
                            <div v-if="tableData !== null && tableData.length > 0">
                                <table class="table table-responsive" id="myTable">
                                    <tr>
                                        <th style="width: 30%;">Product Name</th>
                                        <th>Add&nbsp;ons</th>
                                        <th>Cup Type</th>
                                        <th>Unit Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th style="width: 15px;">❌</th>
                                    </tr>
                                    <tbody>
                                        <tr v-for="(item, index) in tableData" :key="index">
                                            <td>{{item.order_product ? item.order_product[0].productName : ''}}</td>
                                            <td>{{item.same_order ? getAddOns(item.same_order) : ''}}</td>
                                            <td>{{item.cupType ? item.cupType : ''}}</td>
                                            <td>{{item.choosenPrice}}</td>
                                            <td>{{item.quantity}}</td>
                                            <td>{{item.subTotal}}</td>
                                            <td>
                                                <button style="font-size: 10px" type="button" aria-expanded="false" @click="deleteOrder(item.id)">❌</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="row">
                                    <div class="col-md-8"></div>
                                    <div class="col-md-4" style="text-align: left">
                                        <p>Subtotal: ₱{{getSubTotal()}}</p>
                                        <p>Delivery Fee: ₱{{getDeliveryFee()}}</p>
                                        <h5>Total: ₱{{getTotal()}}</h5>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-success" @click="orderNow()">Order Now</button>
                            </div>
                            <div v-else>
                                <empty :title="'No Data in you Cart'"></empty>
                            </div>
                        </center>

                    </v-container>
                </v-card>
            <!--container-->
        </div>
         <!-- <v-app-bar
            absolute
            color="orange"
            dark
            shrink-on-scroll
            prominent
            scroll-target="#scrolling-techniques-3"
            > -->
            <!-- <template v-slot:img="{ props }">
                <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                ></v-img>
            </template> -->

            <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

            <!-- <v-spacer></v-spacer> -->

            <!-- <v-btn icon style="margin-right: 2%;">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            -->
            <!-- <v-btn icon @click="direct()" style="margin-right: 2%;">
                <v-icon>mdi-cart</v-icon>
                <span style="margin-left: -3%;">Cart</span>
                <span style="background-color: red; color: white; border-radius: 20%; font-size: 10px; margin-left: -10%; margin-top: -20%;">{{count > 0 ? 'New' : ''}}</span>
            </v-btn> -->
             
               

            <!-- This is a modal for processing -->

            <template>
  <div class="text-center">
    <v-dialog
      v-model="processModal"
      width="500"
    >
        <v-card-title class="headline grey lighten-2">
          Order
        </v-card-title>
                <v-row
                    class="fill-height"
                    align-content="center"
                    justify="center"
                >
                    <v-col
                    class="subtitle-1 text-center"
                    cols="12"
                    >
                    Processing your order .......
                    </v-col>
                    <v-col cols="6">
                    <v-progress-linear
                        color="deep-purple accent-4"
                        indeterminate
                        rounded
                        height="6"
                    ></v-progress-linear>
                    </v-col>
                </v-row>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="processModal = false"
          >
            Okay
          </v-btn>
        </v-card-actions>
    
    </v-dialog>
  </div>
</template>
      
  <loading v-if="loadingShow"></loading>



           </div>
</template>
<style scoped>
.table {
    width: 70%;
}

</style>
<script>
import loading from '../../basic/loading.vue';
import AUTH from '../../services/auth'
import ROUTER from '../../router'
import config from '../../config.js'
import empty from '../../basic/empty.vue'
export default {
    data(){
        return{
            tableData: null,
            config: config,
            count: 0,
            subTotal: 0,
            total: 0,
            deliveryFee: 0,
            processModal:false,
            loadingShow:false,

            items:[
                {
                    title: "Profile"
                },
                {title: "Name"}
            ]
        }
    },
    components: {
        empty,
        loading
    },
    mounted(){
        this.count = 0
        this.retrieveProduct() 
        let pusher = new Pusher(this.config.PUSHER_APP_KEY, {
            cluster: this.config.PUSHER_APP_CLUSTER,
            encrypted: true
        });

          //Subscribe to the channel we specified in our Adonis Application
        let channel = pusher.subscribe('driptea-channel')

        channel.bind('driptea-data', (data) => {
            this.count++
            this.retrieveProduct()
        })
    },
    methods: {
        home(){
            ROUTER.push('/onlineDashboard').catch(()=>{})
        },
        retrieveProduct(){
            this.loadingShow = true
            let params = {
                id: localStorage.getItem('customerOnlineId')
            }
            this.$axios.post(AUTH.url + 'retrieveCustomerOrder', params).then(res => {
                this.tableData = res.data.order
            this.loadingShow = false


            })
        },
        getAddOns(item){
            let storeAddOns = ""
            let index = item.length
            item.forEach(el => {
                if(item.indexOf(el) >= (index - 1)){
                    storeAddOns += el.addOns
                }else{
                    storeAddOns += el.addOns + ", "
                }
            })
            return storeAddOns
        },
        deleteOrder(prodId){
            this.$axios.post(AUTH.url + 'deleteOrder', {id: prodId}).then(res => {
                this.retrieveProduct()
            })
        },
        orderNow(){
            this.loadingShow = true

            let params = {
                id: localStorage.getItem('customerOnlineId'),
                status: 'pendingCustomer'
            }
            this.$axios.post(AUTH.url + 'updateStatus', params).then(res => {
                this.retrieveProduct()
                localStorage.removeItem('customerOnlineId')
            this.loadingShow = false

                this.processModal = true

            })
        },
        getSubTotal(){
            let total = 0
            this.tableData.forEach(element => {
                total += element.subTotal
            });
            this.subTotal = total
            return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getTotal(){
            let total = 0
            let subTotal = this.subTotal
            total = subTotal + 100
            this.total = total
            return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        getDeliveryFee(){
            let deliveryFee = 100
            this.deliveryFee = deliveryFee
            return parseInt(deliveryFee).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        },
        direct(){
            ROUTER.push('/orderHistory').catch(()=>{})


        }
    }
}
</script>

