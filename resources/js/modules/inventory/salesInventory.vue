<template>

  <v-simple-table class='table table-bordered hover responsive'>
     <template v-slot:top>
              <v-toolbar
                flat
                color="white">
                <v-toolbar-title >Cups Inventory</v-toolbar-title>
              </v-toolbar>
            </template>
    <template v-slot:default>
      
      <thead>
        <tr>
          <th class="text-center" colspan="2">
            Date
          </th>
          <th class="text-center" colspan="4">
            Incoming Cups
          </th>
          <th class="text-center" colspan="4">
            Cups Onrack
          </th>
          <th class="text-center" colspan="4">
            Used Cups
          </th>
          <th class="text-center" colspan="4">
            Remaining Cups
          </th>
        </tr>
        <tr>
           <td colspan="2">Date</td>
          <td>Low Dose</td>
          <td>High Dose</td>
          <td>Over Dose</td>
          <td>Total Cups</td>
           <td>Low Dose</td>
          <td>High Dose</td>
          <td>Over Dose</td>
          <td>Total Cups</td>
           <td>Low Dose</td>
          <td>High Dose</td>
          <td>Over Dose</td>
          <td>Total Cups</td>
           <td>Low Dose</td>
          <td>High Dose</td>
          <td>Over Dose</td>
          <td>Total Cups</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in dataInDB"
          :key="item"
        >
        <td colspan="2">{{item.created_at}}</td>
          <td>{{ item.incomingLowDose }}</td>
          <td>{{ item.incomingHighDose }}</td>
          <td>{{item.incomingOverDose}}</td>
          <td>{{item.incomingLowDose+item.incomingHighDose+item.incomingOverDose}}</td>
          <td>{{ item.onRockLowDose }}</td>
          <td>{{ item.onRockHighDose }}</td>
          <td>{{item.onRockOverDose}}</td>
          <td>{{ item.onRockLowDose + item.onRockHighDose + item.onRockOverDose}} </td>
          <td>{{ item.usedCupsLowDose }}</td>
          <td>{{ item.usedCupsHighDose }}</td>
          <td>{{item.usedCupsOverDose}}</td>
          <td>{{ item.usedCupsLowDose+ item.usedCupsHighDose+ item.usedCupsOverDose}}</td>
          <td>{{ item.remainingLowDose }}</td>
          <td>{{ item.remainingHighDose }}</td>
          <td>{{item.remainingOverDose}}</td>
          <td>{{ item.remainingLowDose+ item.remainingHighDose+ item.remainingOverDose}}</td>
        </tr>
      </tbody>
    </template>
    
  </v-simple-table>
</template>
<script>
import AUTH from '../../services/auth'

export default {
  data(){
   return {
            dataInDB:[],
 
    }
  },
  mounted(){
    this.retrieveAllCups();
  },
  methods:{
     retrieveAllCups(){
            this.$axios.post(AUTH.url + "retrieveCupToDisplay").then(response => {
                this.dataInDB = response.data.quantityCupsInDB

                // response.data.retrieveups.forEach(element=>{
                //     if(this.dataInDB.onRockLowDose == ''){
                //         this.dataInDB.push(response.data.onRockLowDose = 0)
                //     }else if(this.dataInDB.onRackHighDose == ''){
                //         this.dataInDB.push(response.data.onRockHighDose = 0)
                //     }
                //     else if(this.dataInDB.onRackOverDose == ''){
                //         this.dataInDB.push(response.data.onRockOverDose = 0)
                //     }
                // })
                        
               
            });
        },
  }
}
  
</script>
<style>
.table{
  margin-left: 50px;
  margin-top: 50px;
  width: 90%;
}
td{
  text-align: center
}
</style>

