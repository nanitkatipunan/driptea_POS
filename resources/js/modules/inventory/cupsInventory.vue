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
        <loading v-if="loadingShow"></loading>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import AUTH from '../../services/auth'
import VueJsonToCsv from 'vue-json-to-csv'
import loading from '../../basic/loading.vue';
export default {
  data(){
    return {
      dataInDB:[],
      search:null,
      cupName:null,
      headersForCup:[],
      loadingShow: false
    }
  },
  components: {
    VueJsonToCsv,
    loading
  },
  mounted(){
    this.tableForUpcomingCups();
  },
  methods:{
    tableForUpcomingCups(){
      this.loadingShow = true
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
          this.loadingShow = false
        })

    },
    tableForCupsOnrack(){
      this.loadingShow = true
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
          this.loadingShow = false
        })

    },
    tableForUsedCups(){
      this.loadingShow = true
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
        this.loadingShow = false
      })

    },
    tableForRemainingCups(){
      this.loadingShow = true
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
        this.loadingShow = false
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

