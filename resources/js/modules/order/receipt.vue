<template>
<div id="modal" class="blurred-background">
    <div class="alert-box">
        <center>
            <img style="width: 80px" src="@/assets/logo.png">
            <h6><b>Driptea</b></h6>
            <h6>A.C. Cortes Avenue Across UCLM, Mandaue City, 6014 Cebu</h6>
           <div id="app" style="font-size:12px" class="float-right">
               {{ datetime }}
            </div>
        </center>
        <table class="table table-responsive" id="myTable">
            <tr>
                <th style="width: 260px; font-size:12px">Product Name</th>
                <th style="width: 260px; font-size:12px">Add-ons</th>
                <th style="font-size:12px">Unit Price</th>
                <th style="font-size:12px">Quantity</th>
                <th style="font-size:12px">Total</th>
            </tr>
            <tr v-for="(item, i) in showData" :key="i">
                <td style="font-size:12px">{{item.order_product}}</td>
                <td style="font-size:12px">{{getAddOns(item)}}</td>
                <td style="font-size:12px">{{item.choosenPrice}}</td>
                <td style="font-size:12px">{{item.quantity}}</td>
                <td style="font-size:12px">{{item.subTotal}}</td>
            </tr>
        </table>
        <div class="col-md-6" id="summary"></div>

        <div style="font-size:12px;" v-for="(items, i) in summary" :key="i">
            <p>Change: {{items.Change}}</p>
            <p>Incash: {{items.Incash}}</p>
            <p>Total: {{items.Total}}</p>
            <p>Delivery Fee: {{items.Delivery_Fee}}</p>
            <p>Subtotal: {{items.Subtotal}}</p>
        </div>
        <button type="button" class="btn btn-primary float-right" @click="hide()">Close</button>

    </div>
</div>
</template>
<style scoped>
hr {
    border: 1px solid gray;
}

label {
    font-size: 20px !important;
}

.blurred-background {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    text-align: center;
    background: rgb(54, 54, 54, .7);
}

.alert-box {
    width: 500px;
    background: white;
    display: inline-block;
    margin-top: 150px;
    font-weight: lighter;
    border-radius: 3px;
    font-size: 30px;
    padding: 20px;
    transition: .2s;
    text-align: left;
    box-shadow: 5px 5px gray;
}
</style>
<script>
import moment from 'moment'
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data() {
        return {
            data: null,
            datetime:moment().format('MMMM Do YYYY, h:mm:ss a'),
            myTable: [{
                    ProductName: 'Okinawa',
                    Unit_price: '79',
                    Qty: '2',
                    Price: '158'
                },
                {
                    ProductName: 'Hokkaido',
                    Unit_price: '79',
                    Qty: '3',
                    Price: '158'
                },
                {
                    ProductName: 'Pearl Milktea',
                    Unit_price: '79',
                    Qty: '4',
                    Price: '158'
                },
            ],
            summary: [{
                Subtotal: '1422',
                Delivery_Fee: '79',
                Total: '9',
                Incash: '1501',
                Change: '0'
            }]
        }
    },
    props: ['showData'],
    mounted() {
    console.log('---------------tae------', this.showData)
    console.log('---------------yakssss------', this.showData.same_order)
    // this.retrieveProduct()
    // localStorage.removeItem('customerId')
    // localStorage.removeItem('customerType')
    // ROUTER.push('/casherDashboard').catch(()=>{})
    },

    methods: {
        hide() {
            console.log('sadfsadfsdaf')
            this.$parent.hideReceipt()
        },
        getAddOns(item){
            console.log('------bolbol', item)
            // let storeAddOns = ""
            // item.forEach(el => {
            //     storeAddOns += el.addOns + ", "
            // })
            // return storeAddOns
        }
    },

}
</script>
