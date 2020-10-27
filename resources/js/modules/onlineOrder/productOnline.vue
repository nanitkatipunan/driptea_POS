    <template>
        <div>
            <table class="table">
                <thead>
                    <tr >
                        <th v-for="(item, index) in productData" :key="index" >{{item.productCategory}}</th>
                    </tr>
                    
                        
                   
                </thead>
           </table>
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
    /* height: 650px; */
    overflow-y: scroll;
}
.secRow{
    width: 80%;
    height: 650px;
    overflow-y: scroll;
}
.sudlanan{
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
            data: null,
            success: null,
            size: null,
            sugarLevel: null,
            addOns: null,
            quantity: null,
            finalData: [],
            productData:null,
            categoryData:null,
        }
    },
    mounted(){
        this.retrieveProduct()
        this.getAllProducts()
        this.getAllCategory()

    },
    methods: {
        getTotal(item){
            let total = 0
            item.forEach(el => {
                total += el.quantity
            })
            return total
        },
        getLowDose(item){
            let total = 0
            item.forEach(el => {
                if(el.size === 'lowDose'){
                    total += el.quantity
                }
            })
            return total
        },
        getHighDose(item){
            let total = 0
            item.forEach(el => {
                if(el.size === 'highDose'){
                    total += el.quantity
                }
            })
            return total
        },
        getOverDose(item){
            let total = 0
            item.forEach(el => {
                if(el.size === 'overDose'){
                    total += el.quantity
                }
            })
            return total
        },
        showData(){
            console.log(this.finalData)
        },
        dataMethod(item){
            Object.keys(item).forEach(element => {
               
                this.finalData.push(item[element])
            })
        },
        retrieveProduct(){
            this.$axios.post(AUTH.url + 'retrieveAllCheckouts').then(res => {
                this.data = res.data.storeOrder
                this.dataMethod(res.data.storeOrder)
            })
        },
        getAllProducts(){
             this.$axios.post(AUTH.url + 'retrieveAllProduct').then(res => {
                console.log(res.data.product)
                this.productData = res.data.product
                
            })

        },
        getAllCategory(){
            this.$axios.post(AUTH.url + 'retrieveCategory').then(res => {
                console.log(res.data.addCategory)
                this.categoryData = res.data.addCategory

            })

        },


    }
}
</script>
