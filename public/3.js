(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
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
<<<<<<< HEAD
      addOns: "",
      price: "",
      datas: [],
      show: false
    };
  },
  mounted: function mounted() {// this.retrieveAddOns();
  },
  methods: {
    showAddOns: function showAddOns() {
      this.show = true;
    },
    hide: function hide() {
      this.show = false;
=======
      itemSelected: null,
      itemId: this.$route.params.item,
      quantity: 1,
      cupSize: null,
      sugarLevel: null,
      addOns: [],
      cupType: null,
      cupEvent: '',
      sugarEvent: '',
      cupTypeEvent: '',
      addOnsEvent: '',
      addOnsAmount: 0,
      subTotal: 0,
      total: null,
      lowPrice: null,
      highPrice: null,
      overPrice: null,
      onlinelowPrice: null,
      onlinehighPrice: null,
      onlineoverPrice: null,
      productData: null,
      addOnsData: null,
      cupData: null,
      addOnsPrice: null,
      cupPrice: null,
      errorMessage: null,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null
    };
  },
  mounted: function mounted() {
    this.getProduct();
    this.retrieveProducts();
    this.retrieveAddOns();
    this.retrieveCupType();
  },
  methods: {
    retrieveProducts: function retrieveProducts() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct").then(function (response) {
        _this.productData = response.data.product;
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns").then(function (response) {
        _this2.addOnsData = response.data.addons;
      });
    },
    retrieveCupType: function retrieveCupType() {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupType").then(function (response) {
        _this3.cupData = response.data.cupType;
      });
    },
    getProduct: function getProduct() {
      var _this4 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOneProduct', {
        id: this.itemId
      }).then(function (response) {
        _this4.itemSelected = response.data.product[0].productName;
        _this4.lowPrice = response.data.product[0].lowPrice;
        _this4.highPrice = response.data.product[0].highPrice;
        _this4.overPrice = response.data.product[0].overPrice;
        _this4.onlinelowPrice = response.data.product[0].onlinelowPrice;
        _this4.onlinehighPrice = response.data.product[0].onlinehighPrice;
        _this4.onlineoverPrice = response.data.product[0].onlineoverPrice;
      });
    },
    getCupSize: function getCupSize(params, event) {
      var a = 0;

      if (this.cupEvent !== event.target) {
        event.target.classList.remove('normalColor');
        event.target.classList.add('color');
        this.cupSize = params;

        if (params === 'highDose') {
          this.total = this.highPrice;
        } else if (params === 'overDose') {
          this.total = this.overPrice;
        } else if (params === 'lowDose') {
          this.total = this.lowPrice;
        }

        if (this.cupEvent !== '') {
          this.cupEvent.classList.add('normalColor');
          this.cupEvent.classList.remove('color');
        }
      }

      this.cupEvent = event.target;
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
<<<<<<< HEAD
    addAddOns: function addAddOns() {
      var param = {
        addOns: this.addOns,
        price: this.price
      };
      console.log(param);
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingAddOns", param).then(function (response) {
        console.log("myData", response.data);
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns").then(function (response) {
        _this.datas = response.data.addons;
        console.log(_this.datas);
      });
=======
    getCupType: function getCupType(params, event) {
      if (this.cupTypeEvent !== event.target) {
        event.target.classList.remove('normalColor');
        event.target.classList.add('color');
        this.cupType = params.cupTypeName;

        if (this.cupTypeEvent !== '') {
          this.cupTypeEvent.classList.add('normalColor');
          this.cupTypeEvent.classList.remove('color');
        }

        this.cupPrice = params.cupTypePrice;
      }

      this.cupTypeEvent = event.target;
    },
    addAddOns: function addAddOns(params, event) {
      var _this5 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneAddOn", {
        id: params.id
      }).then(function (response) {
        _this5.addOnsPrice = response.data.addons.addons_price;

        if (_this5.addOns.includes(params.addons_name)) {
          event.target.classList.remove('color');

          _this5.addOns.splice(_this5.addOns.indexOf(params.addons_name), 1);

          _this5.addOnsAmount -= _this5.addOnsPrice;
        } else {
          event.target.classList.add('color');

          _this5.addOns.push(params.addons_name);

          _this5.addOnsAmount += _this5.addOnsPrice;
        }
      });
    },
    addToCart: function addToCart() {
      if (this.quantity <= 0) {
        this.errorMessage3 = 'quantity must be greater than 0!';
      }

      if (this.cupSize === null) {
        this.errorMessage = 'cup size is required!';
      }

      if (this.sugarLevel === null) {
        this.errorMessage2 = 'sugar level is required!';
      }

      if (this.cupType === null) {
        this.errorMessage1 = 'cup type is required!';
      }

      if (this.quantity > 0 && this.cupSize !== null && this.sugarLevel !== null && this.cupType !== null) {
        var parameter = {
          customerId: localStorage.getItem('customerId'),
          productId: this.itemId,
          quantity: this.quantity,
          size: this.cupSize,
          sugarLevel: this.sugarLevel,
          choosenPrice: this.total,
          cupType: this.cupType,
          status: 'pending',
          addOns: this.addOns,
          subTotal: this.quantity * (this.total + this.addOnsAmount + this.cupPrice)
        };
        console.log(parameter);
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addOrder', parameter).then(function (response) {
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + localStorage.getItem('customerType'))["catch"](function () {});
        });
      }
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nhr[data-v-1683c446]{\r\n    border: 1px solid gray;\n}\nlabel[data-v-1683c446]{\r\n    font-size: 20px !important;\n}\n.blurred-background[data-v-1683c446] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    background: rgb(54, 54, 54, .7);\n}\n.alert-box[data-v-1683c446] {\r\n    width: 400px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 180px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.table[data-v-1683c446] {\r\n    width: 70%;\r\n    margin-left: 15%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-1683c446] {\r\n    position: relative;\r\n    height: 500px;\r\n    width:70%;\r\n    overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-1683c446] {\r\n    display: contents;\n}\n.div[data-v-1683c446] {\r\n    border-style: solid;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n#buttonAdd[data-v-1683c446] {\r\n    float: right;\r\n    margin-right: 15%;\n}\r\n", ""]);
=======
exports.push([module.i, "\n.errorColor[data-v-766d0737]{\r\n    color: red;\n}\n.addCart[data-v-766d0737]{\r\n    margin-top: 20% !important;\r\n    background-color: #11c408 !important;\n}\n.quantity[data-v-766d0737]{\r\n    margin-top: 9%;\r\n    margin-bottom: 5%;\n}\n.form-control[data-v-766d0737]{\r\n    text-align: center;\r\n    width: 90%;\r\n    font-weight: bold;\r\n    font-size: 20px;\n}\n[data-v-766d0737]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.cupType[data-v-766d0737]{\r\n    margin-top: 25%;\n}\n.row[data-v-766d0737]{\r\n    width: 90%;\r\n    height: 650px;\r\n    overflow-y: scroll;\r\n    margin-top: 3%;\r\n    /* background-color: white; */\n}\n.btn[data-v-766d0737]{\r\n    margin-top: 5%;\r\n    width: 35px;\r\n    width: 90%;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    background-color: #edf0ee;\n}\n.sudlanan[data-v-766d0737]{\r\n    background-color: black;\r\n    height: 92.8vh;\r\n    overflow: hidden;\r\n    color:white;\r\n    font-family: Roboto Slab;\n}\n.color[data-v-766d0737]{\r\n    background: #89AFE8;\n}\n.normalColor[data-v-766d0737]{\r\n    background: #edf0ee;\n}\r\n", ""]);
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
  return _c("div", { staticClass: "div" }, [
    _c(
      "div",
      [
        _c("center", [
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("Add Ons")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button", id: "buttonAdd" },
              on: { click: _vm.showAddOns }
            },
            [_vm._v("+ Add ons")]
          )
        ])
      ],
      1
    ),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "table-wrapper-scroll-y my-custom-scrollbar" }, [
      _c(
        "table",
        {
          staticClass: "table table-bordered table-striped",
          attrs: { id: "myTable" }
        },
        [
          _vm._m(0),
=======
  return _c(
    "div",
    { staticClass: "sudlanan" },
    [
      _c("center", [
        _c("h1", { staticStyle: { "margin-top": "2%" } }, [
          _vm._v(_vm._s(_vm.itemSelected))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c(
                "center",
                [
                  _c("h3", [_vm._v("Cup's Size")]),
                  _vm._v(" "),
                  _vm.errorMessage !== null
                    ? _c("span", { staticClass: "errorColor" }, [
                        _vm._v(_vm._s(_vm.errorMessage))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      on: {
                        click: function($event) {
                          return _vm.getCupSize("lowDose", $event)
                        }
                      }
                    },
                    [_vm._v("Low Dose")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      on: {
                        click: function($event) {
                          return _vm.getCupSize("highDose", $event)
                        }
                      }
                    },
                    [_vm._v("High Dose")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn",
                      on: {
                        click: function($event) {
                          return _vm.getCupSize("overDose", $event)
                        }
                      }
                    },
                    [_vm._v("Over Dose")]
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "cupType" }, [_vm._v("Cup Type")]),
                  _vm._v(" "),
                  _vm.errorMessage1 !== null
                    ? _c("span", { staticClass: "errorColor" }, [
                        _vm._v(_vm._s(_vm.errorMessage1))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.cupData, function(item, index) {
                    return _c(
                      "button",
                      {
                        key: index,
                        staticClass: "btn",
                        on: {
                          click: function($event) {
                            return _vm.getCupType(item, $event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.cupTypeName))]
                    )
                  })
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-4" },
            [
              _c("center", [
                _c("h3", [_vm._v("Sugar Level")]),
                _vm._v(" "),
                _vm.errorMessage2 !== null
                  ? _c("span", { staticClass: "errorColor" }, [
                      _vm._v(_vm._s(_vm.errorMessage2))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    on: {
                      click: function($event) {
                        return _vm.getSugarLevel("0%", $event)
                      }
                    }
                  },
                  [_vm._v("0%")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    on: {
                      click: function($event) {
                        return _vm.getSugarLevel("25%", $event)
                      }
                    }
                  },
                  [_vm._v("25%")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    on: {
                      click: function($event) {
                        return _vm.getSugarLevel("50%", $event)
                      }
                    }
                  },
                  [_vm._v("50%")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    on: {
                      click: function($event) {
                        return _vm.getSugarLevel("75%", $event)
                      }
                    }
                  },
                  [_vm._v("75%")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn",
                    on: {
                      click: function($event) {
                        return _vm.getSugarLevel("100%", $event)
                      }
                    }
                  },
                  [_vm._v("100%")]
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "quantity" }, [
                  _vm._v("Quantity of Order")
                ]),
                _vm._v(" "),
                _vm.errorMessage3 !== null
                  ? _c("span", { staticClass: "errorColor" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.quantity,
                      expression: "quantity"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", min: "1" },
                  domProps: { value: _vm.quantity },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.quantity = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn addCart", on: { click: _vm.addToCart } },
                  [_vm._v("Add to Cart")]
                )
              ])
            ],
            1
          ),
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
          _vm._v(" "),
          _c(
            "tbody",
            [
<<<<<<< HEAD
              _vm._l(_vm.datas, function(data, index) {
                return _c("tr", { key: index }, [
                  _c("td", { attrs: { scope: "row" } }, [
                    _vm._v(_vm._s(data.id))
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(data.addons_name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(data.addons_price))]),
                  _vm._v(" "),
                  _vm._m(1, true)
                ])
              })
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.show
      ? _c(
          "div",
          { staticClass: "blurred-background", attrs: { id: "modal" } },
          [
            _c(
              "div",
              { staticClass: "alert-box" },
              [
                _c("center", [_c("h1", [_vm._v("Adding Add-ons")])]),
                _c("hr"),
                _vm._v(" "),
                _c("form", { attrs: { action: "" } }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "addOns" } }, [
                      _vm._v("Add-ons :")
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.addOns,
                          expression: "addOns"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "addOns" },
                      domProps: { value: _vm.addOns },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.addOns = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "price" } }, [
                      _vm._v("Price :")
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.price,
                          expression: "price"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", min: "1", id: "price" },
                      domProps: { value: _vm.price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.price = $event.target.value
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.hide()
                      }
                    }
                  },
                  [_vm._v("Close")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" },
                    on: { click: _vm.addAddOns }
                  },
                  [_vm._v("Add")]
                )
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
=======
              _c(
                "center",
                [
                  _c("h3", [_vm._v("Add-ons")]),
                  _vm._v(" "),
                  _vm._l(_vm.addOnsData, function(item, index) {
                    return _c(
                      "button",
                      {
                        key: index,
                        staticClass: "btn",
                        on: {
                          click: function($event) {
                            return _vm.addAddOns(item, $event)
                          }
                        }
                      },
                      [_vm._v(_vm._s(item.addons_name))]
                    )
                  })
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", { staticClass: "header" }, [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [
      _c("button", { staticClass: "btn btn-danger" }, [_vm._v("Delete")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue":
/*!********************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=template&id=1683c446&scoped=true& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&");
/* harmony import */ var _addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&");
/* harmony import */ var _addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1683c446",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/addAddOns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=1&id=1683c446&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_1_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=template&id=1683c446&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);