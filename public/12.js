(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      monthNameString: ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      yearsInD: null,
      daysInDB: [],
      daysInMonth: [],
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
      currentMonthName: [],
      days: [],
      series: []
    };
  },
  mounted: function mounted() {
    this.filterDataYear();
    this.retrieveDailySales(); // thi
    // ts.getDataDaily();
    // this.initializeLineGraph(null,null,null);
    // this.filterBy();
  },
  components: {
    topSales: vue_apexcharts__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  methods: {
    filterBy: function filterBy() {
      var _this = this;

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
          this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "getDataMonthly", {
            year: this.myYear
          }).then(function (response) {
            var series = [];
            var category = [];
            var monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            response.data.dataMonthly.forEach(function (element) {
              _this.monthInDB.push(element.month);

              _this.monthTotalInDB.push(element.total);
            });
            console.log(_this.monthInDB);

            for (var i = 0; i < monthNum.length; i++) {
              if (_this.monthInDB.includes(monthNum[i])) {
                series.push(_this.monthTotalInDB[i]);
                var mon = monthNum[i] - 1;
                category.push(_this.monthName[mon]);
              } else {
                series.push(0);
                var mons = monthNum[i] - 1;
                category.push(_this.monthName[mons]);

                _this.monthTotalInDB.splice([i], 0, 0);
              }
            }

            console.log(_this.monthTotalInDb);

            _this.initializeLineGraph(series, category);
          });
          break;

        case "yearly":
          this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "getDataYearly").then(function (response) {
            console.log(response.data);
            var series = [];
            var category = [];
            response.data.dataYearly.forEach(function (element) {
              if (element.year !== null || element.year !== undefined) {
                series.push(element.total); // this.myMonths = element.month
                //  this.monthName = date('F', mktime(0, 0, 0, this.myMonths, 10))

                category.push(element.year);
              }
            });

            _this.initializeLineGraph(series, category);
          }); // this.lineGraphLastIndex = (this.filteredYearlyData.length >= 12) ? 12 : this.filteredYearlyData.length
          // this.initializeLineGraph(this.lineGraphStartIndex, this.lineGraphLastIndex, this.filteredYearlyData)

          break;
      }
    },
    filterDataYear: function filterDataYear() {
      var _this2 = this;

      this.current = new Date();
      this.currentYear = this.current.getFullYear();
      this.currentMonth = this.current.getMonth() + 1;
      console.log(this.currentYear, this.currentMonth);
      this.daysCountGetter(this.currentMonth);
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveYear").then(function (response) {
        _this2.myYear = response.data.filterDate;
      });
      this.currentMonthName = this.monthNameString[this.currentMonth];
    },
    daysCountGetter: function daysCountGetter() {
      var year = this.filterYear;
      var month = this.currentMonth;
      this.days = [];
      var firstDate = new Date(year, month - 1, 1);
      var lastDate = new Date(year, month, 0);
      var numDays = lastDate.getDate();
      console.log(numDays);
      var start = 1;

      for (var i = 1; i <= numDays; ++i) {
        this.days.push(i);
      }

      console.log(this.days);
    },
    retrieveDailySales: function retrieveDailySales() {
      var _this3 = this;

      //      this.current = new Date();
      //   this.currentYear = this.current.getFullYear();
      //   this.currentMonth = this.current.getMonth()+1;
      //   console.log(this.currentYear,this.currentMonth);
      this.daysCountGetter(this.currentMonth);
      this.daysInDB = [];
      this.totalInDB = [];
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveDailySales", {
        month: this.currentMonth,
        year: this.currentYear
      }).then(function (response) {
        var series = [];
        var category = [];
        response.data.dailyData.forEach(function (element) {
          _this3.daysInDB.push(element.date);

          _this3.totalInDB.push(element.totalSales);
        });
        console.log(_this3.daysInDB);

        for (var i = 0; i < _this3.days.length; i++) {
          if (_this3.daysInDB.includes(_this3.days[i])) {
            series.push(_this3.totalInDB[i]);
            category.push(_this3.days[i]);
            console.log(_this3.daysInDB[i]);
            console.log("sulod ni klaro kaayu");
          } else {
            series.push(0);
            category.push(_this3.days[i]);
            console.log(_this3.days[i]);

            _this3.totalInDB.splice([i], 0, 0);
          }
        }

        console.log(_this3.totalInDB);

        _this3.initializeLineGraph(series, category);
      });
    },
    nextData: function nextData() {
      console.log('next data');

      switch (this.filter) {
        case "daily":
          this.currentMonth = this.currentMonth + 1;

          if (this.currentMonth == 12) {
            this.currentMonth = 1;
            this.currentYear = this.currentYear + 1;
            console.log('if', this.currentMonth, this.currentYear);
            this.daysCountGetter(this.currentMonth);
            this.currentMonthName = this.monthNameString[this.currentMonth];
          } else {
            console.log('Else', this.currentMonth, this.currentYear);
            this.currentMonthName = this.monthNameString[this.currentMonth];
            this.daysCountGetter(this.currentMonth);
            this.retrieveDailySales();
            break;
          }

      }
    },
    previousData: function previousData() {
      console.log('previous data');

      switch (this.filter) {
        case "daily":
          this.currentMonth = this.currentMonth - 1;

          if (this.currentMonth == 1) {
            this.currentMonth = 12;
            this.currentYear = this.currentYear - 1;
            console.log('if', this.currentMonth, this.currentYear);
            this.currentMonthName = this.monthNameString[this.currentMonth];
            this.daysCountGetter(this.currentMonth);
          } else {
            console.log('Else', this.currentMonth, this.currentYear);
            this.currentMonthName = this.monthNameString[this.currentMonth];
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
    initializeLineGraph: function initializeLineGraph(series, dataCategory) {
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
        colors: ["#dc3545", "#28a745", "#343a40", "#005b96", "#ffc107", "#081cff", "#08ffd2", "#ff5a08", "#7d0202"]
      };
      this.series = [{
        name: "Total Sales",
        data: series
      }];
      dataCategory = [];
      series = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row flex-column-reverse flex-sm-row" }, [
    _c("div", { staticClass: "col-sm-9 affectedSection" }, [
      _c("div", { staticClass: "card bg-light affectedCard" }, [
        _c("div", { staticClass: "card-header affectedSearchArea" }, [
          _c("div", { staticClass: "row affectedFilters" }, [
            _c("div", { staticClass: "col-sm-3 affectedSearchAreaFilter" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter,
                      expression: "filter"
                    }
                  ],
                  staticClass: "form-control Affectedfilter",
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.filter = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      _vm.filterBy
                    ]
                  }
                },
                [
                  _c("option", { attrs: { value: "yearly" } }, [
                    _vm._v("Yearly")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "monthly" } }, [
                    _vm._v("Monthly")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "weekly" } }, [
                    _vm._v("Weekly")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "daily" } }, [_vm._v("Daily")])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-3 " }, [
              _c(
                "select",
                { staticClass: "form-control" },
                _vm._l(_vm.myYear, function(item, key) {
                  return _c("option", { key: key }, [_vm._v(_vm._s(item.year))])
                }),
                0
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c("topSales", {
              ref: "realtimeChart",
              attrs: {
                height: "340",
                type: "line",
                options: _vm.options,
                series: _vm.series
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-footer affectedActionBTNS" },
          [
            _c("center", [
              _c(
                "i",
                {
                  staticClass: "btn btn-primary",
                  on: { click: _vm.previousData }
                },
                [_vm._v("Previous")]
              ),
              _vm._v(" "),
              _c("i", { staticClass: "fas fa-angle-double-left previousBTN" }, [
                _vm._v(_vm._s(_vm.currentMonthName) + _vm._s(_vm.currentYear))
              ]),
              _vm._v(" "),
              _c(
                "i",
                { staticClass: "btn btn-primary", on: { click: _vm.nextData } },
                [_vm._v("Next")]
              )
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=template&id=124112e6& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&");
/* harmony import */ var _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adminDashboard.vue?vue&type=script&lang=js& */ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/dashboard/adminDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./adminDashboard.vue?vue&type=template&id=124112e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/adminDashboard.vue?vue&type=template&id=124112e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_adminDashboard_vue_vue_type_template_id_124112e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);