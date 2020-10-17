<template>
  <div class="row flex-column-reverse flex-sm-row">
    <div class="col-sm-9 affectedSection">
      <div class="card bg-light affectedCard">
        <div class="card-header affectedSearchArea">
          <!-- <input type="text" class="affected-searchtbn form-control" placeholder="Search"> -->
          <div class="row affectedFilters">
            <div class="col-sm-3 affectedSearchAreaFilter">
              <select class="form-control Affectedfilter" v-model="filter" @change="filterBy">
                <option value="yearly" class="">Yearly</option>
                <option value="monthly" class="">Monthly</option>
                <option value="weekly" class="">Weekly</option>
                <option value="daily" class="">Daily</option>
              </select>
            </div>
            <div class="col-sm-3 ">
              <select class="form-control" >
                <option
                  v-for="(item, key) in myYear"
                  :key="key"
                  class=""
                >{{item.year}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-body">
          <topSales
            ref="realtimeChart"
            height="340"
            type="line"
            :options="options"
            :series="series"
          ></topSales>
        </div>
        <div class="card-footer affectedActionBTNS">
          <center>
            <i class="btn btn-primary" @click ="previousData">Previous</i>
            <i class="fas fa-angle-double-left previousBTN">{{currentMonthName}}{{currentYear}}</i>

            <i class="btn btn-primary" @click="nextData">Next</i>
          </center>
        </div>
       </div>
    </div>
    <br>
    <br>
  </div>
</template>
<script>
import AUTH from "../../services/auth";
import topSales from "vue-apexcharts";

export default {
  data() {
    return {
      monthNameString: [
          "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      yearsInD:null,
      daysInDB: [],
      daysInMonth:[],
      totalInDB: [],
      monthInDB: [],
      monthTotalInDB: [],
      lineGraphData: null,
      filter: "daily",
      filterYear: null,
      yearFilter: "",
      datas: [],
      currentYear: null,
      options: {},
      myYear: [],
      myMonthsName: null,
      currentMonthName:[],

      days: [],

      series: [
    
      ]
    };
  },
  mounted() {
    this.filterDataYear();

    this.retrieveDailySales();
    // thi

    // ts.getDataDaily();
    // this.initializeLineGraph(null,null,null);
    // this.filterBy();
  },
  components: {
    topSales
  },
  methods: {
     filterBy() {
      this.lineGraphLastIndex = 0;
      this.lineGraphStartIndex = 0;
      console.log(this.filter);
      switch (this.filter) {
        case "daily":
            this.filterDataYear();
          break;
        case "monthly":
          this.myYear = this.filterYear;
          console.log(this.myYear);
          this.$axios
            .post(AUTH.url + "getDataMonthly", { year: this.myYear })
            .then(response => {
              let series = [];
              let category = [];
              let monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
              response.data.dataMonthly.forEach(element => {
                this.monthInDB.push(element.month);
                this.monthTotalInDB.push(element.total);
              });
              console.log(this.monthInDB);
              for (var i = 0; i < monthNum.length; i++) {
                if (this.monthInDB.includes(monthNum[i])) {
                  series.push(this.monthTotalInDB[i]);
                  let mon = monthNum[i] - 1;
                  category.push(this.monthName[mon]);
                } else {
                  series.push(0);
                  let mons = monthNum[i] - 1;
                  category.push(this.monthName[mons]);
                  this.monthTotalInDB.splice([i], 0, 0);
                }
              }
              console.log(this.monthTotalInDb);
              this.initializeLineGraph(series, category);
            });
          break;
        case "yearly":
          this.$axios.post(AUTH.url + "getDataYearly").then(response => {
            console.log(response.data);

            let series = [];
            let category = [];
            response.data.dataYearly.forEach(element => {
              if (element.year !== null || element.year !== undefined) {
                series.push(element.total);
                // this.myMonths = element.month
                //  this.monthName = date('F', mktime(0, 0, 0, this.myMonths, 10))
                category.push(element.year);
              }
            });
            this.initializeLineGraph(series, category);
          });
          // this.lineGraphLastIndex = (this.filteredYearlyData.length >= 12) ? 12 : this.filteredYearlyData.length
          // this.initializeLineGraph(this.lineGraphStartIndex, this.lineGraphLastIndex, this.filteredYearlyData)
          break;
      }
    },

    filterDataYear() {
      this.current = new Date();
      this.currentYear = this.current.getFullYear();
      this.currentMonth = this.current.getMonth()+1;
      console.log(this.currentYear,this.currentMonth);
      this.daysCountGetter(this.currentMonth);
      this.$axios
        .post(AUTH.url + "retrieveYear"
        )
        .then(response => {
          this.myYear = response.data.filterDate;
        });
              this.currentMonthName = this.monthNameString[this.currentMonth]

    },

    daysCountGetter() {
      let year = this.filterYear;
      let month = this.currentMonth;
      this.days = [];
      let firstDate = new Date(year, month - 1, 1);
      let lastDate = new Date(year, month, 0);
      let numDays = lastDate.getDate();
      console.log(numDays);
      var start = 1;
      for (var i = 1; i <= numDays; ++i) {
        this.days.push(i);
      }
      console.log(this.days);
    },
    retrieveDailySales(){
    //      this.current = new Date();
    //   this.currentYear = this.current.getFullYear();
    //   this.currentMonth = this.current.getMonth()+1;
    //   console.log(this.currentYear,this.currentMonth);
      this.daysCountGetter(this.currentMonth);
      this.daysInDB = [];
      this.totalInDB = [];
      this.$axios
        .post(AUTH.url + "retrieveDailySales", {
          month: this.currentMonth,
          year: this.currentYear
        })
        .then(response => {
          let series = [];
          let category = [];
          response.data.dailyData.forEach(element => {
            this.daysInDB.push(element.date);
            this.totalInDB.push(element.totalSales);
          });
          console.log(this.daysInDB);

          for (var i = 0; i < this.days.length; i++) {
            if (this.daysInDB.includes(this.days[i])) {
              series.push(this.totalInDB[i]);
              category.push(this.days[i]);
              console.log(this.daysInDB[i]);

              console.log("sulod ni klaro kaayu");
            } else {
              series.push(0);
              category.push(this.days[i]);
              console.log(this.days[i]);
              this.totalInDB.splice([i], 0, 0);
            }
          }
          console.log(this.totalInDB);
          this.initializeLineGraph(series, category);
        });


    },


    nextData() {
      console.log('next data');
      switch (this.filter) {
        case "daily":
            this.currentMonth = this.currentMonth + 1
          if(this.currentMonth == 12){
              this.currentMonth = 1
              this.currentYear = this.currentYear + 1
              console.log('if',this.currentMonth,this.currentYear)
              this.daysCountGetter(this.currentMonth)
              this.currentMonthName = this.monthNameString[this.currentMonth]
          }else{
              console.log('Else',this.currentMonth,this.currentYear)
              this.currentMonthName = this.monthNameString[this.currentMonth]


            this.daysCountGetter(this.currentMonth);
            this.retrieveDailySales();
            break;
          }
          
      }
    },
     previousData() {
      console.log('previous data');
      switch (this.filter) {
        case "daily":
            this.currentMonth = this.currentMonth - 1
          if(this.currentMonth == 1){
              this.currentMonth = 12
              this.currentYear = this.currentYear - 1
              console.log('if',this.currentMonth,this.currentYear)
              this.currentMonthName = this.monthNameString[this.currentMonth]

              this.daysCountGetter(this.currentMonth)
          }else{
              console.log('Else',this.currentMonth,this.currentYear)
              this.currentMonthName = this.monthNameString[this.currentMonth]


            this.daysCountGetter(this.currentMonth);
            this.retrieveDailySales();
            break;
          }
          
      }
    },
    // addDate() {
    //     this.receivedData.forEach(element => {
    //         let year = new Date(element.created_at).getFullYear()
    //         let month = new Date(element.created_at).getMonth()
    //         let day = new Date(element.created_at).getDate()
    //         month = (String(month + 1).length < 2) ? ('0' + String(month + 1)) : String(month + 1)
    //         day = (String(day).length < 2) ? ('0' + String(day)) : String(day)
    //         element.date = year + '-' + month + '-' + day
    //     })
    // },
    initializeLineGraph(series, dataCategory) {
      // let series = [];
      // let dataCategory = [];
      // for (var i = start; i < stopper; ++i) {
      //   if (datas[i].date !== null || datas[i].date !== undefined) {
      //     switch (this.filter) {
      //       case "daily":
      //         dataCategory.push(
      //           this.months[new Date(datas[i].date).getMonth()] +
      //             " " +
      //             new Date(datas[i].date).getDate()
      //         );
      //         break;
      //     }
      //   }
      // }
      this.options = {
        chart: {
          id: "topAffected"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        markers: {
          size: [4, 4, 4, 4, 4],
          hover: {
            sizeOffset: 5
          }
        },
        xaxis: {
          categories: dataCategory
        },
        colors: [
          "#dc3545",
          "#28a745",
          "#343a40",
          "#005b96",
          "#ffc107",
          "#081cff",
          "#08ffd2",
          "#ff5a08",
          "#7d0202"
        ]
      };
      this.series = [
        {
          name: "Total Sales",
          data: series
        }
      ];
      dataCategory = [];
      series = [];
    }
  }
};
</script>