<template>
<<<<<<< HEAD

    
</template>
<script>
export default {

    
}
</script>
=======
    <div>
      <table class="table">
        <thead>
          <tr>
            <th v-for="(row, rindex) in category" :key="rindex">
            {{row.productCategory}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(total, index) in totalPerCategory" :key="index" >

            <td v-for="(row, rindex) in category" :key="rindex" >{{total.subTotal}}</td>

          </tr>
        </tbody>
      </table>
       
    
    </div>
    
</template>

<script>
import AUTH from "../../services/auth";

export default {
    data(){
        return{
          category:[],
          totalPerCategory:[],
          headerForSalesReport:[
            {text: "Date" , value: "created_at"},
            {text: "Date" , value: "created_at"},


          ]

        }
    },
    mounted(){
      this.retrieveSalesReport()
      this.retrieveCategory()
      
    },
    methods:{
      retrieveSalesReport(){
         this.$axios
        .post(AUTH.url + "retrieveSalesReportPerCategory").then(response => {
          this.totalPerCategory = response.data.totalSalesPerCategory

        });
      },
      retrieveCategory(){
         this.$axios
        .post(AUTH.url + "retrieveCategoryForSales").then(response => {
          this.category = response.data.addCategory
          // response.data.addCategory.forEach(element =>{
          //   this.category.push(element.productCategory)
          // })

        });

      }
    }
}
</script>
>>>>>>> cc6f6672d6c4e7bce98b159635dc27bb30fab83d
