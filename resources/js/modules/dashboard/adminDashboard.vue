<template>
  <div>
    <div class="row body">
      <div class="col-sm-6">
        <div class="form-group">
          <select
            class="form-control"
            v-model="thefilter"
            name="filter"
            id="filters"
            v-on:change="onFilter()"
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Semi-Annual">Semi-Annual</option>
            <option value="Annual">Annual</option>
          </select>
        </div>
        <div class="form-group firstOpt" v-show="ok">
          <input
            class="form-control"
            type="month"
            v-model="thedate"
            id="calendar"
            v-on:change="onChangeDate()"
          >
        </div>
        <div class="form-group secondOpt" v-show="ok2">
          <select class="form-control" v-on:change="onChangeYear()" v-model="yrvalue">
            <option
              v-for="year in years"
              v-bind:value="year.value"
              v-bind:key="year.value"
            >{{ year.text }}</option>
          </select>
        </div>
        <div>
          <salesChart
            class="chart"
            ref="realtimeChart"
            type="line"
            :options="options"
            :series="series"
          ></salesChart>
        </div>
      </div>
      <div class="col-sm-6 top3">
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </div>
    <!-- <div>
      <button @click="getPoints">click</button>
    </div>-->
  </div>
</template>

<style>
.chart {
  width: 100%;
}
.body {
  margin: 5%;
}
.top3 {
  width: 20%;
  height: 90%;
  border-style: solid;
}
</style>

<script>
import salesChart from "vue-apexcharts";
import Axios from "axios";
import AUTH from "../../services/auth";
// import $ from 'jquery';

export default {
  data() {
    return {
      ok: true,
      ok2: false,
      yrfrmdb: null,
      yrvalue: null,
      theMonth: null,
      theYear: null,
      lastDate: null,
      thefilter: "Daily",
      xlabels: [],
      options: {
        colors: ["#28a745"],
        chart: {
          id: "sales-summary"
        },
        xaxis: {
          categories: []
        },
        stroke: {
          width: 2,
          curve: "smooth"
        }
      },
      series: [
        {
          name: "Sales",
          data: []
        }
      ],
      points: [],
      thedate: null,
      years: [],
      mnths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
      ],
      quarter: ["Jan-Mar", "Apr-Jun", "Jul-Sept", "Oct-Dec"],
      semi: ["Jan-Jun", "Jul-Dec"],
      firstQ: [],
      secondQ: [],
      thirdQ: [],
      forthQ: [],
      QauterData: [],
      first_Half: null,
      second_Half: null,
      semi_Data: []
    };
  },
  components: {
    salesChart
  },
  mounted() {
    this.yrvalue = new Date().getFullYear();
    this.getYears();
    this.getDate();
    this.xvalues();
    this.getDailySummary();
    this.categories = [];
    // console.log("cat sa mounted " + this.categories);
    this.getTop3()
  },
  methods: {
    getDailySummary() {
      this.points = [];
      // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

      let params = {
        month: this.theMonth,
        year: this.theYear
      };
      let i;
      let dateFrmDBarr = [];
      let totalfrmDB = [];

      // console.log("hoyyy " + this.lastDate);

      // this.categories = this.xlabels;
      // console.log("this exlabels bruh " + this.xlabels);
      let xs = this.xlabels;
      let ldate = this.lastDate;
      // let topoints = [];
      Axios.post(AUTH.url + "getDailySales", params).then(response => {
        // console.log(response.data.total);
        response.data.total.forEach(element => {
          // console.log(element);
          let d = element.date;
          let tots = element.sub;

          dateFrmDBarr.push(d);
          totalfrmDB.push(tots);
        });

        // console.log("ledfrmdb " + dateFrmDBarr);
        // console.log("ttfdb " + totalfrmDB);
        // let counter = 0;
        for (i = 1; i < ldate + 1; i++) {
          if (dateFrmDBarr.includes(i)) {
            response.data.total.forEach(element => {
              if (element.date == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }
        this.series = [
          {
            data: this.points
          }
        ];

        // this.points = topoints;
      });
      this.points = [];
      // console.log("ang points dae " + topoints);
      // this.points = topoints;
      // console.log("ang points ni bruh " + this.points );
    },
    
    getDate() {
      let date = new Date();
      this.theMonth =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      this.theYear = date.getFullYear();
      this.lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.xvalues();
    },
    xvalues() {
      this.xlabels = [];
      let i;
      for (i = 1; i < this.lastDate + 1; i++) {
        this.xlabels.push(i);
      }
      this.categories = this.xlabels;
    },
    // getPoints() {
    //   console.log(this.points);
    // },
    onFilter() {
      if (this.thefilter == "Daily") {
        this.getDate();
        this.xvalues();
        this.getDailySummary();
        this.ok = true;
        this.ok2 = false;
        this.options.xaxis.categories = [];
      } else if (this.thefilter == "Weekly") {
        // this.prefix = "Weekly"
      } else if (this.thefilter == "Monthly") {
        this.categories = this.mnths;
        // this.categories = []
        // this.categories.push("jan")
        this.getMonthlySummary(this.yrvalue);
        this.ok = false;
        this.ok2 = true;
        console.log("categories bruh " + this.categories);
      } else if (this.thefilter == "Quarterly") {
        this.getQuarterlySummary(this.yrvalue);
        this.ok = false;
        this.ok2 = true;
      } else if (this.thefilter == "Semi-Annual") {
        this.getSemi_AnnualSummary(this.yrvalue);
        this.ok = false;
        this.ok2 = true;
      } else if (this.thefilter == "Annual") {
        this.ok = false;
        this.ok2 = true;
      }
    },
    onChangeDate() {
      this.lastDate = null;
      let d = new Date(this.thedate);
      this.theMonth =
        d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1);
      this.theYear = d.getFullYear();
      let lastDate = new Date(this.theYear, this.theMonth, 0).getDate();
      this.lastDate = lastDate;
      this.xvalues();
      this.getDailySummary();
    },
    onChangeYear() {
      if (this.thefilter == "Monthly") {
        this.getMonthlySummary(this.yrvalue);
      } else if (this.thefilter == "Quarterly") {
        this.getQuarterlySummary(this.yrvalue);
      } else if (this.thefilter == "Semi-Annual") {
        this.getSemi_AnnualSummary(this.yrvalue);
      } else if (this.thefilter == "Annual") {
      }
    },
    getYears() {
      let params = {
        year: this.yrvalue
      };
      Axios.post(AUTH.url + "getyears", params).then(response => {
        response.data.years.forEach(element => {
          let yr = element.year;
          this.years.push({ text: yr, value: yr });
        });
      });
    },
    getMonthlySummary(yyyy) {
      this.points = [];
      // this.xlabels = []
      let monthsfrmDB = [];
      let i;
      let params = {
        year: yyyy
      };
      // console.log("len sa month "+ this.xlabels)
      Axios.post(AUTH.url + "getmonthlySales", params).then(response => {
        console.log(response);
        response.data.subtotal.forEach(element => {
          // console.log(element);
          let sub = element.sub;
          let month = element.month;

          // dateFrmDBarr.push(d);
          monthsfrmDB.push(month);
        });
        for (i = 1; i < this.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(element => {
              if (element.month == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }
        // console.log("points bruh"+this.points)
        this.series = [
          {
            data: this.points
          }
        ];
        // console.log(this.xlabels)
      });
    },
    getQuarterlySummary(yyyy) {
      this.points = [];

      let monthsfrmDB = [];

      let i;

      let params = {
        year: yyyy
      };

      Axios.post(AUTH.url + "getQuarterlySales", params).then(response => {
        console.log(response);
        response.data.subtotal.forEach(element => {
          // console.log(element);
          let sub = element.sub;

          let month = element.month;

          // dateFrmDBarr.push(d);
          monthsfrmDB.push(month);
        });
        for (i = 1; i < this.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(element => {
              if (element.month == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }

        for (var i = 0; i < this.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            this.firstQ.push(this.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            this.secondQ.push(this.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            this.thirdQ.push(this.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            this.forthQ.push(this.points[i]);
          }
        }
        // this.points = [];
        this.QauterData = [];

        let one = this.firstQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(one);
        let two = this.secondQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(two);
        let three = this.thirdQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(three);
        let four = this.forthQ.reduce((total, num) => {
          return total + num;
        });
        this.QauterData.push(four);

        this.points = this.QauterData;
        console.log(" ang length gurl " + this.points);
        this.series = [
          {
            data: this.points
          }
        ];
      });

      this.firstQ = [];

      this.secondQ = [];

      this.thirdQ = [];

      this.forthQ = [];

      console.log("ang quarterdata bruh " + this.QauterData);
    },
    getSemi_AnnualSummary(yyyy) {
      this.semi_Data = [];

      this.points = [];

      let monthsfrmDB = [];

      let i;

      let params = {
        year: yyyy
      };

      Axios.post(AUTH.url + "getSemi-AnnualSales", params).then(response => {
        console.log(response);
        response.data.subtotal.forEach(element => {
          // console.log(element);
          let sub = element.sub;

          let month = element.month;

          // dateFrmDBarr.push(d);
          monthsfrmDB.push(month);
        });
        for (i = 1; i < this.mnths.length + 1; i++) {
          if (monthsfrmDB.includes(i)) {
            response.data.subtotal.forEach(element => {
              if (element.month == i) {
                this.points.push(element.sub);
              }
            });
          } else {
            this.points.push(0);
          }
        }

        for (var i = 0; i < this.points.length; i++) {
          if (i == 0 || i == 1 || i == 2) {
            this.firstQ.push(this.points[i]);
          } else if (i == 3 || i == 4 || i == 5) {
            this.secondQ.push(this.points[i]);
          } else if (i == 6 || i == 7 || i == 8) {
            this.thirdQ.push(this.points[i]);
          } else if (i == 9 || i == 10 || i == 11) {
            this.forthQ.push(this.points[i]);
          }
        }
        // this.points = [];
        this.QauterData = [];

        let one = this.firstQ.reduce((total, num) => {
          return total + num;
        });
        // this.QauterData.push(one);
        let two = this.secondQ.reduce((total, num) => {
          return total + num;
        });
        // this.QauterData.push(two);
        let three = this.thirdQ.reduce((total, num) => {
          return total + num;
        });
        // this.QauterData.push(three);
        let four = this.forthQ.reduce((total, num) => {
          return total + num;
        });
        this.first_Half = one + two;
        this.second_Half = three + four;
        this.semi_Data.push(this.first_Half);
        this.semi_Data.push(this.second_Half);
        this.points = this.semi_Data;
        // console.log(" ang length gurl " + this.points);
        this.series = [
          {
            data: this.points
          }
        ];
      });

      this.firstQ = [];

      this.secondQ = [];

      this.thirdQ = [];

      this.forthQ = [];

      this.first_Half = [];

      this.second_Half = [];

      // console.log("ang quarterdata bruh " + this.QauterData);
    },
    getAnnualSummary() {
      Axios.post(AUTH.url + "getAnnualSales", params).then(response => {
        console.log(response);
      });
    },
    getTop3() {
      let params = {
        year: null
      };
      Axios.post(AUTH.url + "getTopProd", params).then(response => {
        console.log(response);
      });
    },
  }
};
</script>

