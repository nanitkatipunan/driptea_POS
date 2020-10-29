<template>
  <div>
    <v-toolbar flat>
      <template v-slot:extension>
        <v-tabs dark background-color="#ff5b04" fixed-tabs>
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            @click="tableForUpcomingCups"
          >Incoming Cups</v-tab>
          <v-tab
            @click="tableForCupsOnrack"
          >Cups Onrack</v-tab>
          <v-tab
           @click="tableForUsedCups"
          >Used Cups</v-tab>
          <v-tab
             @click="tableForRemainingCups"
          >Remaining Cups</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>


    <v-data-table
      :headers="headersForCup"
      :items="dataInDB"
      :search="search"
      :items-per-page="5"
      class="elevation-3">
      <template v-slot:top>
        <v-toolbar class="mb-2" color="#ff5b04" dark flat>
          <v-toolbar-title class="col pa-3 py-4 white--text">{{cupName}}</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            prepend-inner-icon="mdi-magnify"
            class="mt-7"
            label="Search"
          ></v-text-field>
          <v-divider class="mx-4" vertical></v-divider>
           <VueJsonToCsv
                      :json-data="dataInDB"
                      :csv-title="'myCups'"
                  >
                      <v-btn color="success" class="mr-6">
                            Export <i class="mdi mdi-export-variant" aria-hidden="true"></i>
                      </v-btn>
                      </VueJsonToCsv>
        </v-toolbar>
      </template>
    </v-data-table>






<!-- <v-data-table :headers="headersForCups" :items="dataInDB" :items-per-page="5" :search="search" class="elevation-3">
                        <template v-slot:top>
                            <v-toolbar class="mb-1" color="#ff5b04" dark flat>
                                <v-toolbar-title class="col pa-3 py-4 white--text">CUPS INVENTORY</v-toolbar-title>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <v-text-field
                                class="mt-7"
                                    v-model="search"
                                clearable
                                flat
                                solo-inverted
                                prepend-inner-icon="mdi-magnify"
                                label="Search"
                                ></v-text-field>
                                <v-divider class="mx-4" vertical></v-divider>
                                 <VueJsonToCsv
                      :json-data="dataInDB"
                      :csv-title="'myCups'"
                  >
                      <v-btn color="success" class="mr-6">
                            Export <i class="mdi mdi-export-variant" aria-hidden="true"></i>
                      </v-btn>
                      </VueJsonToCsv>
                            
                            </v-toolbar>
                        </template>
                        <template v-slot:item.totalIncoming="{ item }">
                          {{item.incomingHighDose+item.incomingLowDose+item.incomingOverDose}}
                        </template>
                        <template v-slot:item.totalOnRack="{ item }">
                          {{item.onRockLowDose+item.onRockHighDose+item.onRockOverDose}}
                        </template>
                        <template v-slot:item.totalUsed="{ item }">
                          {{item.usedCupsLowDose+item.usedCupsHighDose+item.usedCupsOverDose}}
                        </template>
                        <template v-slot:item.totalRemaining="{ item }">
                          {{item.remainingHighDose+item.remainingLowDose+item.remainingOverDose}}
                        </template>
                       
                           
                    </v-data-table> -->

                   
                  

  <!-- <v-simple-table class='table table-bordered hover responsive'>
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
    
  </v-simple-table> -->
  </div>
</template>
<script>
import AUTH from '../../services/auth'
import VueJsonToCsv from 'vue-json-to-csv'


export default {
  data(){
   return {
            dataInDB:[],
            search:null,
            cupName:null,
            headersForCup:[
              // {text: "Date" ,value:"created_at"},
              // {text: "Incoming Cups Low Dose (LD)" ,value:"incomingLowDose"},
              // {text: "Incoming Cups High Dose (HD)" ,value:"incomingHighDose"},
              // {text: "Incoming Cups Over Dose (OD)" ,value:"incomingOverDose"},
              // {text: "Total" ,value:"totalIncoming"},


              // {text: "Onrack Cups Low Dose (LD)" ,value:"onRockLowDose"},
              // {text: "Onrack Cups High Dose (HD)" ,value:"onRockHighDose"},
              // {text: "Onrack Cups Over Dose (OD)" ,value:"onRockOverDose"},
              // {text: "Total" ,value:"totalOnRack"},

              // {text: "Used Cups Low Dose (LD)" ,value:"usedCupsLowDose"},
              // {text: "Used Cups High Dose (HD)" ,value:"usedCupsHighDose"},
              // {text: "Used Cups Over Dose (OD)" ,value:"usedCupsOverDose"},
              // {text: "Total" ,value:"totalUsed"},

              // {text: "Remaining Cups Low Dose (LD)" ,value:"remainingLowDose"},
              // {text: "Remaining Cups High Dose (HD)" ,value:"remainingHighDose"},
              // {text: "Remaining Cups Over Dose (OD)" ,value:"remainingOverDose"},
              // {text: "Total" ,value:"totalRemaining"},

            ]
 
    }
  },
  components: {
   VueJsonToCsv
    
  },
  mounted(){
    this.tableForUpcomingCups();
  },
  methods:{
    //  retrieveAllCups(){
    //       this.$axios.post(AUTH.url + "retrieveCupForInventory").then(response => {
    //             this.dataInDB = response.data.quantityCupsInDB

    //             // response.data.retrieveups.forEach(element=>{
    //             //     if(this.dataInDB.onRockLowDose == ''){
    //             //         this.dataInDB.push(response.data.onRockLowDose = 0)
    //             //     }else if(this.dataInDB.onRackHighDose == ''){
    //             //         this.dataInDB.push(response.data.onRockHighDose = 0)
    //             //     }
    //             //     else if(this.dataInDB.onRackOverDose == ''){
    //             //         this.dataInDB.push(response.data.onRockOverDose = 0)
    //             //     }
    //             // })
                        
               
    //         });
    //     },
        tableForUpcomingCups(){
           this.$axios.post(AUTH.url + "retrieveCupForInventory").then(response => {
              this.dataInDB = response.data.quantityCupsInDB
              this.headersForCup = [
              {text: "Date" ,value:"created_at"},
              {text: "Low Dose (LD)" ,value:"incomingLowDose"},
              {text: "High Dose (HD)" ,value:"incomingHighDose"},
              {text: "Over Dose (OD)" ,value:"incomingOverDose"},
              {text: "Total" ,value:"totalIncoming"},
              ]
              this.cupName = "Upcoming Cups"

           })

        },
        tableForCupsOnrack(){
           this.$axios.post(AUTH.url + "retrieveCupForInventory").then(response => {
              this.dataInDB = response.data.quantityCupsInDB
              this.headersForCup = [
                {text: "Date" ,value:"created_at"},
              {text: "Low Dose (LD)" ,value:"onRockLowDose"},
              {text: "High Dose (HD)" ,value:"onRockHighDose"},
              {text: "Over Dose (OD)" ,value:"onRockOverDose"},
              {text: "Total" ,value:"totalOnRack"},
              ]
              this.cupName = "Cups Onrack"

           })

        },
        tableForUsedCups(){
           this.$axios.post(AUTH.url + "retrieveCupForInventory").then(response => {
              this.dataInDB = response.data.quantityCupsInDB
              this.headersForCup = [
                {text: "Date" ,value:"created_at"},
              {text: "Low Dose (LD)" ,value:"usedCupsLowDose"},
              {text: "High Dose (HD)" ,value:"usedCupsHighDose"},
              {text: "Over Dose (OD)" ,value:"usedCupsOverDose"},
              {text: "Total" ,value:"totalUsed"},
              ]
              this.cupName = "Used Cups"

           })

        },
        tableForRemainingCups(){
           this.$axios.post(AUTH.url + "retrieveCupForInventory").then(response => {
              this.dataInDB = response.data.quantityCupsInDB
              this.headersForCup = [
                {text: "Date" ,value:"created_at"},
              {text: "Low Dose (LD)" ,value:"remainingLowDose"},
              {text: "High Dose (HD)" ,value:"remainingHighDose"},
              {text: "Remaining Cups Over Dose (OD)" ,value:"remainingOverDose"},
              {text: "Total" ,value:"totalRemaining"},
              ]
              this.cupName = "Remaining Cups"

           })

        }
  },

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

