(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vm */ "./node_modules/vm-browserify/index.js");
/* harmony import */ var vm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vm__WEBPACK_IMPORTED_MODULE_2__);
var _methods;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      userType: null,
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      userName: '',
      password: '',
      confirmPass: '',
      successMessage: null,
=======
      itemSelected: null,
      itemId: this.$route.params.item,
      quantity: 1,
      cupSize: null,
      sugarLevel: null,
      addOns: [],
      cupType: null,
      cupEvent: "",
      sugarEvent: "",
      cupTypeEvent: "",
      addOnsEvent: "",
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
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      errorMessage: null,
      errorMessage1: null,
      errorMessage2: null,
      errorMessage3: null,
<<<<<<< HEAD
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      showSuccess: false,
      newPass: null,
      newName: null
    };
  },
  methods: {
    hide: function hide() {
      this.showSuccess = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
    register: function register() {
      var _this = this;

      this.validate('userType');
      this.validate('userName');
      this.validate('password');
      this.validate('confirmPass');
      var parameter = {
        account_type: this.userType.toUpperCase(),
        name: this.userName,
        password: this.password,
        password_confirmation: this.confirmPass
      };

      if (this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null) {
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'register', parameter).then(function (response) {
          _this.showSuccess = true;
          console.log(response.data);
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this.errorMessage3 = 'Username already exist';
          }
        });
      } else {
        this.errorMessage = 'Please fill up all fields';
=======
      customerType: localStorage.getItem("customerType")
    };
  },
  mounted: function mounted() {
    this.getProduct();
    this.retrieveProducts();
    this.retrieveAddOns();
    this.retrieveCupType();
  },
  methods: {
    getCupTypeName: function getCupTypeName(item) {
      var value = "";

      if (this.customerType === "foodpanda" || this.customerType === "grab") {
        value = item.cupTypeName + " (+" + item.inputCupOnlinePrice + ")";
      } else {
        if (item.cupTypePrice === 0) {
          value = item.cupTypeName;
        } else {
          value = item.cupTypeName + " (+" + item.cupTypePrice + ")";
        }
      }

      return value;
    },
    getAddOnsName: function getAddOnsName(item) {
      var value = "";

      if (this.customerType === "foodpanda" || this.customerType === "grab") {
        value = item.addons_name + " (+" + item.onlineAddOnsPrice + ")";
      } else {
        value = item.addons_name + " (+" + item.addons_price + ")";
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      }

      return value;
    },
<<<<<<< HEAD
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\s/;

      if (input === 'userName') {
        this.errorMessage = null;

        if (reqWhiteSpace.test(this.userName)) {
          this.errorMessage = 'Username should not contain a space.';
        } else if (this.userName === '') {
          this.errorMessage2 = 'Username is required.';
        } else if (this.userName.length < 6) {
          this.errorMessage3 = 'Username must be atleast 6 characters';
        } else {
          this.errorMessage = null;
          this.errorMessage2 = null;
          this.errorMessage3 = null;
        }
      } else if (input === 'userType') {
        this.errorMessage8 = null;

        if (this.userType === '') {
          this.errorMessage8 = 'Usertype is required.';
        } else if (this.userType.toLowerCase() !== 'admin' && this.userType.toLowerCase() !== 'cashier') {
          this.errorMessage8 = 'Usertype should only be Admin or Cashier.';
        } else {
          this.errorMessage8 = null;
        }
      } else if (input === 'password') {
        this.errorMessage4 = null;

        if (this.password.length < 8) {
          this.errorMessage4 = 'Password must be atleast 8 characters.';
        } else if (/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)) {
          this.successMessage = 'Strong password.';
          this.errorMessage4 = null;
          this.errorMessage5 = null;
        } else {
          this.errorMessage5 = 'Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.';
        }
      } else if (input === 'confirmPass') {
        this.errorMessage6 = null;
        this.successMessage = null;

        if (this.password.localeCompare(this.confirmPass) !== 0) {
          this.errorMessage6 = 'Password did not match.';
        } else {
          this.errorMessage6 = null;
        }
      } else if (this.userType !== null && this.userName.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null) {
        this.errorMessage = null;
      } else {
        this.errorMessage7 = 'Please fill in all required fields.';
        this.errorMessage7 = null;
=======
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

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneProduct", {
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
        event.target.classList.remove("normalColor");
        event.target.classList.add("color");
        this.cupSize = params;

        if (this.customerType === "foodpanda" || this.customerType === "grab") {
          if (params === "highDose") {
            this.total = this.onlinehighPrice;
          } else if (params === "overDose") {
            this.total = this.onlineoverPrice;
          } else if (params === "lowDose") {
            this.total = this.onlinelowPrice;
          }
        } else {
          if (params === "highDose") {
            this.total = this.highPrice;
          } else if (params === "overDose") {
            this.total = this.overPrice;
          } else if (params === "lowDose") {
            this.total = this.lowPrice;
          }
        }

        if (this.cupEvent !== "") {
          this.cupEvent.classList.add("normalColor");
          this.cupEvent.classList.remove("color");
        }
      }

      this.cupEvent = event.target;
    },
    getSugarLevel: function getSugarLevel(params, event) {
      if (this.sugarEvent !== event.target) {
        event.target.classList.remove("normalColor");
        event.target.classList.add("color");
        this.sugarLevel = params;

        if (this.sugarEvent !== "") {
          this.sugarEvent.classList.add("normalColor");
          this.sugarEvent.classList.remove("color");
        }
      }

      this.sugarEvent = event.target;
    },
    methods: (_methods = {
      getCupTypeName: function getCupTypeName(item) {
        var value = '';

        if (this.customerType === 'foodpanda' || this.customerType === 'grab') {
          value = item.cupTypeName + ' (+' + item.inputCupOnlinePrice + ')';
        } else {
          if (item.cupTypePrice === 0) {
            value = item.cupTypeName;
          } else {
            value = item.cupTypeName + ' (+' + item.cupTypePrice + ')';
          }
        }

        return value;
      },
      getAddOnsName: function getAddOnsName(item) {
        var value = '';

        if (this.customerType === 'foodpanda' || this.customerType === 'grab') {
          value = item.addons_name + ' (+' + item.onlineAddOnsPrice + ')';
        } else {
          value = item.addons_name + ' (+' + item.addons_price + ')';
        }

        return value;
      },
      retrieveProducts: function retrieveProducts() {
        var _this5 = this;

        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct").then(function (response) {
          _this5.productData = response.data.product;
        });
      },
      retrieveAddOns: function retrieveAddOns() {
        var _this6 = this;

        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns").then(function (response) {
          _this6.addOnsData = response.data.addons;
        });
      },
      retrieveCupType: function retrieveCupType() {
        var _this7 = this;

        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupType").then(function (response) {
          _this7.cupData = response.data.cupType;
        });
      },
      getProduct: function getProduct() {
        var _this8 = this;

        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOneProduct', {
          id: this.itemId
        }).then(function (response) {
          _this8.itemSelected = response.data.product[0].productName;
          _this8.lowPrice = response.data.product[0].lowPrice;
          _this8.highPrice = response.data.product[0].highPrice;
          _this8.overPrice = response.data.product[0].overPrice;
          _this8.onlinelowPrice = response.data.product[0].onlinelowPrice;
          _this8.onlinehighPrice = response.data.product[0].onlinehighPrice;
          _this8.onlineoverPrice = response.data.product[0].onlineoverPrice;
        });
      },
      getCupSize: function getCupSize(params, event) {
        var a = 0;

        if (this.cupEvent !== event.target) {
          event.target.classList.remove('normalColor');
          event.target.classList.add('color');
          this.cupSize = params;

          if (this.customerType === 'foodpanda' || this.customerType === 'grab') {
            if (params === 'highDose') {
              this.total = this.onlinehighPrice;
            } else if (params === 'overDose') {
              this.total = this.onlineoverPrice;
            } else if (params === 'lowDose') {
              this.total = this.onlinelowPrice;
            }
          } else {
            if (params === 'highDose') {
              this.total = this.highPrice;
            } else if (params === 'overDose') {
              this.total = this.overPrice;
            } else if (params === 'lowDose') {
              this.total = this.lowPrice;
            }
          }

          if (this.cupEvent !== '') {
            this.cupEvent.classList.add('normalColor');
            this.cupEvent.classList.remove('color');
          }
        }

        this.cupEvent = event.target;
      },
      getSugarLevel: function getSugarLevel(params, event) {
        if (this.sugarEvent !== event.target) {
          event.target.classList.remove('normalColor');
          event.target.classList.add('color');
          this.sugarLevel = params;

          if (this.sugarEvent !== '') {
            this.sugarEvent.classList.add('normalColor');
            this.sugarEvent.classList.remove('color');
          }
        }

        this.sugarEvent = event.target;
      },
      getCupType: function getCupType(params, event) {
        if (this.cupTypeEvent !== event.target) {
          event.target.classList.remove('normalColor');
          event.target.classList.add('color');
          this.cupType = params.cupTypeName;

          if (this.cupTypeEvent !== '') {
            this.cupTypeEvent.classList.add('normalColor');
            this.cupTypeEvent.classList.remove('color');
          }

          if (this.customerType === 'foodpanda' || this.customerType === 'grab') {
            this.cupPrice = params.inputCupOnlinePrice;
          } else {
            this.cupPrice = params.cupTypePrice;
          }

          console.log(this.cupPrice);
        }

        this.cupTypeEvent = event.target;
      },
      addAddOns: function addAddOns(params, event) {
        var _this9 = this;

        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneAddOn", {
          id: params.id
        }).then(function (response) {
          if (_this9.customerType === 'foodpanda' || _this9.customerType === 'grab') {
            _this9.addOnsPrice = response.data.addons.onlineAddOnsPrice;
          } else {
            _this9.addOnsPrice = response.data.addons.addons_price;
          }

          if (_this9.addOns.includes(params.addons_name)) {
            event.target.classList.remove('color');

            _this9.addOns.splice(_this9.addOns.indexOf(params.addons_name), 1);

            _this9.addOnsAmount -= _this9.addOnsPrice;
          } else {
            event.target.classList.add('color');

            _this9.addOns.push(params.addons_name);

            _this9.addOnsAmount += _this9.addOnsPrice;
          }

          console.log(_this9.addOnsPrice);
        });
      },
      addToCart: function addToCart() {
        console.log('add');

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
          console.log('sulod');
          var parameter = {
            customerId: localStorage.getItem('customerId'),
            cashierId: localStorage.getItem('cashierId'),
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
          this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addOrder', parameter).then(function (response) {
            _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + localStorage.getItem('customerType'))["catch"](function () {});
          });
        }

        console.log(this.cupPrice);
        this.cupTypeEvent = event.target;
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      }
    }, _defineProperty(_methods, "addAddOns", function addAddOns(params, event) {
      var _this10 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveOneAddOn", {
        id: params.id
      }).then(function (response) {
        if (_this10.customerType === "foodpanda" || _this10.customerType === "grab") {
          _this10.addOnsPrice = response.data.addons.onlineAddOnsPrice;
        } else {
          _this10.addOnsPrice = response.data.addons.addons_price;
        }

        if (_this10.addOns.includes(params.addons_name)) {
          event.target.classList.remove("color");

          _this10.addOns.splice(_this10.addOns.indexOf(params.addons_name), 1);

          _this10.addOnsAmount -= _this10.addOnsPrice;
        } else {
          event.target.classList.add("color");

          _this10.addOns.push(params.addons_name);

          _this10.addOnsAmount += _this10.addOnsPrice;
        }

        console.log(_this10.addOnsPrice);
      });
    }), _defineProperty(_methods, "addToCart", function addToCart() {
      if (this.quantity <= 0) {
        this.errorMessage3 = "quantity must be greater than 0!";
      }

      if (this.cupSize === null) {
        this.errorMessage = "cup size is required!";
      }

      if (this.sugarLevel === null) {
        this.errorMessage2 = "sugar level is required!";
      }

      if (this.cupType === null) {
        this.errorMessage1 = "cup type is required!";
      }

      if (this.quantity > 0 && this.cupSize !== null && this.sugarLevel !== null && this.cupType !== null) {
        var parameter = {
          customerId: localStorage.getItem("customerId"),
          cashierId: localStorage.getItem("cashierId"),
          productId: this.itemId,
          quantity: this.quantity,
          size: this.cupSize,
          sugarLevel: this.sugarLevel,
          choosenPrice: this.total,
          cupType: this.cupType,
          status: "pending",
          addOns: this.addOns,
          subTotal: this.quantity * (this.total + this.addOnsAmount + this.cupPrice)
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addOrder", parameter).then(function (response) {
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push("/productCategory/" + localStorage.getItem("customerType"))["catch"](function () {});
        });
      }
    }), _methods)
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.btnModal[data-v-48ebf362]{\r\n    width: 100px;\n}\n.modalFont[data-v-48ebf362]{\r\n    font-size: 15px;\n}\n.alert-box[data-v-48ebf362] {\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 20%;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    transition: .2s;\n}\n.blurred-background[data-v-48ebf362] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n    background: rgba(54, 54, 54, .7);\n}\nimg[data-v-48ebf362]{\r\n    cursor: default;\n}\nspan[data-v-48ebf362]{\r\n    font-size: 12px;\n}\nhr[data-v-48ebf362]{\r\n    border: 1px solid #17D817;\n}\n.termsCondition[data-v-48ebf362]{\r\n    margin-top: 6%;\r\n    font-size: 15px;\r\n    text-align: center;\n}\n.form-control[data-v-48ebf362]{\r\n    border: 1px solid #17D817;\r\n    border-radius: 5px;\r\n    width: 100%;\n}\n.bRegister[data-v-48ebf362]{\r\n    color: #0A8C0F;\r\n    cursor: pointer;\n}\np[data-v-48ebf362]{\r\n    font-size: 20px;\n}\n.btnRegister[data-v-48ebf362]{\r\n    margin-top: 2%;\r\n    margin-bottom: 2%;\r\n    background-color: #17D817;\r\n    font-weight: bold;\r\n    width: 100%;\n}\n.containerWidth[data-v-48ebf362]{\r\n    width: 30%;\r\n    text-align: left;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-48ebf362]{\r\n        text-align: left;\r\n        width: 100%;\r\n        margin-left: 0px !important;\r\n        margin-right: 0px !important;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-48ebf362]{\r\n        text-align: left;\r\n        width: 70%;\n}\n}\n@media screen and (max-width: 1000px) {\n.containerWidth[data-v-48ebf362]{\r\n        text-align: left;\r\n        width: 60%;\n}\n}\r\n", ""]);
=======
exports.push([module.i, "\n.errorColor[data-v-766d0737] {\r\n  color: red;\n}\n.addCart[data-v-766d0737]{\r\n    /* margin-top: 20% !important; */\r\n    width: 300px !important;\r\n    height: 45px !important;\r\n    /* margin-top: -150px !important; */\r\n    background-color: #11c408 !important;\n}\n.quantity[data-v-766d0737] {\r\n  margin-top: 9%;\r\n  margin-bottom: 5%;\n}\n.form-control[data-v-766d0737] {\r\n  text-align: center;\r\n  width: 90%;\r\n  font-weight: bold;\r\n  font-size: 20px;\n}\n[data-v-766d0737]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.cupType[data-v-766d0737] {\r\n  margin-top: 25%;\n}\n.row[data-v-766d0737]{\r\n    width: 90%;\r\n    /* height: 650px; */\r\n    overflow-y: scroll;\r\n    margin-top: 3%;\r\n    /* background-color: white; */\n}\n.btn[data-v-766d0737]{\r\n    margin-top: 5%;\r\n    width: 35px;\r\n    width: 90%;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    background-color: #E65100;\n}\n.sudlanan[data-v-766d0737]{\r\n    background-color: white;\r\n    height: 92.8vh;\r\n    color:white;\r\n    font-family: Roboto Slab;\n}\n.color[data-v-766d0737] {\r\n  background: #89afe8;\n}\n.normalColor[data-v-766d0737] {\r\n  background: #edf0ee;\n}\r\n", ""]);
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&");
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005

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

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vm-browserify/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vm-browserify/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexOf = function (xs, item) {
    if (xs.indexOf) return xs.indexOf(item);
    else for (var i = 0; i < xs.length; i++) {
        if (xs[i] === item) return i;
    }
    return -1;
};
var Object_keys = function (obj) {
    if (Object.keys) return Object.keys(obj)
    else {
        var res = [];
        for (var key in obj) res.push(key)
        return res;
    }
};

var forEach = function (xs, fn) {
    if (xs.forEach) return xs.forEach(fn)
    else for (var i = 0; i < xs.length; i++) {
        fn(xs[i], i, xs);
    }
};

var defineProp = (function() {
    try {
        Object.defineProperty({}, '_', {});
        return function(obj, name, value) {
            Object.defineProperty(obj, name, {
                writable: true,
                enumerable: false,
                configurable: true,
                value: value
            })
        };
    } catch(e) {
        return function(obj, name, value) {
            obj[name] = value;
        };
    }
}());

var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];

function Context() {}
Context.prototype = {};

var Script = exports.Script = function NodeScript (code) {
    if (!(this instanceof Script)) return new Script(code);
    this.code = code;
};

Script.prototype.runInContext = function (context) {
    if (!(context instanceof Context)) {
        throw new TypeError("needs a 'context' argument.");
    }
    
    var iframe = document.createElement('iframe');
    if (!iframe.style) iframe.style = {};
    iframe.style.display = 'none';
    
    document.body.appendChild(iframe);
    
    var win = iframe.contentWindow;
    var wEval = win.eval, wExecScript = win.execScript;

    if (!wEval && wExecScript) {
        // win.eval() magically appears when this is called in IE:
        wExecScript.call(win, 'null');
        wEval = win.eval;
    }
    
    forEach(Object_keys(context), function (key) {
        win[key] = context[key];
    });
    forEach(globals, function (key) {
        if (context[key]) {
            win[key] = context[key];
        }
    });
    
    var winKeys = Object_keys(win);

    var res = wEval.call(win, this.code);
    
    forEach(Object_keys(win), function (key) {
        // Avoid copying circular objects like `top` and `window` by only
        // updating existing context properties or new properties in the `win`
        // that was only introduced after the eval.
        if (key in context || indexOf(winKeys, key) === -1) {
            context[key] = win[key];
        }
    });

    forEach(globals, function (key) {
        if (!(key in context)) {
            defineProp(context, key, win[key]);
        }
    });
    
    document.body.removeChild(iframe);
    
    return res;
};

Script.prototype.runInThisContext = function () {
    return eval(this.code); // maybe...
};

Script.prototype.runInNewContext = function (context) {
    var ctx = Script.createContext(context);
    var res = this.runInContext(ctx);

    if (context) {
        forEach(Object_keys(ctx), function (key) {
            context[key] = ctx[key];
        });
    }

    return res;
};

forEach(Object_keys(Script.prototype), function (name) {
    exports[name] = Script[name] = function (code) {
        var s = Script(code);
        return s[name].apply(s, [].slice.call(arguments, 1));
    };
});

exports.isContext = function (context) {
    return context instanceof Context;
};

exports.createScript = function (code) {
    return exports.Script(code);
};

exports.createContext = Script.createContext = function (context) {
    var copy = new Context();
    if(typeof context === 'object') {
        forEach(Object_keys(context), function (key) {
            copy[key] = context[key];
        });
    }
    return copy;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
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
  return _c(
    "div",
    { staticClass: "sudlanan" },
    [
<<<<<<< HEAD
      _c("center", [
        _c("img", {
          staticStyle: { height: "150px", "margin-top": "5%" },
          attrs: { src: _vm.image }
        }),
        _vm._v(" "),
        _c("p", [
          _vm._v("Register to "),
          _c(
            "b",
            {
              staticClass: "bRegister",
              on: {
                click: function($event) {
                  return _vm.redirect("/")
                }
              }
            },
            [_vm._v("Driptea")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("center", [
        _c("div", { staticClass: "containerWidth" }, [
          _c("i", [
            _vm.errorMessage7 !== null
              ? _c("span", { staticClass: "text-danger text-center" }, [
                  _vm._v(_vm._s(_vm.errorMessage7))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "form",
            [
              _c("i", [
                _vm.errorMessage8 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage8))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Account Type",
                      outlined: "",
                      type: "text",
                      id: "userType",
                      required: ""
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.validate("userType")
                      }
                    },
                    model: {
                      value: _vm.userType,
                      callback: function($$v) {
                        _vm.userType = $$v
                      },
                      expression: "userType"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage2 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage2))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage3 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Username",
                      outlined: "",
                      type: "text",
                      id: "userName",
                      required: ""
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.validate("userName")
                      }
                    },
                    model: {
                      value: _vm.userName,
                      callback: function($$v) {
                        _vm.userName = $$v
                      },
                      expression: "userName"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.successMessage !== null
                ? _c("span", { staticClass: "text-success text-center" }, [
                    _vm._v(_vm._s(_vm.successMessage))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage4 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage4))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage5 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage5))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Password",
                      outlined: "",
                      type: "password",
                      id: "password",
                      required: ""
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.validate("password")
                      }
                    },
                    model: {
                      value: _vm.password,
                      callback: function($$v) {
                        _vm.password = $$v
                      },
                      expression: "password"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage6 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage6))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Confirm Password",
                      outlined: "",
                      type: "password",
                      id: "confirmPassword",
                      required: ""
                    },
                    on: {
                      keyup: function($event) {
                        return _vm.validate("confirmPass")
                      }
                    },
                    model: {
                      value: _vm.confirmPass,
                      callback: function($$v) {
                        _vm.confirmPass = $$v
                      },
                      expression: "confirmPass"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "btn btnRegister",
                  attrs: { type: "submit" },
                  on: { click: _vm.register }
                },
                [_vm._v("Register")]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _vm.showSuccess
        ? _c(
            "div",
            { staticClass: "blurred-background", attrs: { id: "modal" } },
            [
              _c("div", { staticClass: "alert-box" }, [
                _c("h5", { staticClass: "text-success" }, [
                  _vm._v("Registered Successfully")
                ]),
                _c("hr"),
                _vm._v(" "),
                _c("p", { staticClass: "modalFont" }, [
                  _vm._v("Username: " + _vm._s(_vm.userName))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "modalFont" }, [
                  _vm._v("Password: " + _vm._s(_vm.password))
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btnModal",
                    on: { click: _vm.hide }
                  },
                  [_vm._v("OK")]
                )
              ])
            ]
          )
        : _vm._e()
=======
      _c(
        "center",
        [
          _c("h1", { staticStyle: { "margin-top": "2%", color: "black" } }, [
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
                    _c("h3", { staticClass: "black--text " }, [
                      _vm._v("Cup's Size")
                    ]),
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
                        staticClass: "btn overline ",
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
                        staticClass: "btn overline",
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
                        staticClass: "btn overline",
                        on: {
                          click: function($event) {
                            return _vm.getCupSize("overDose", $event)
                          }
                        }
                      },
                      [_vm._v("Over Dose")]
                    ),
                    _vm._v(" "),
                    _c("h3", { staticClass: "cupType black--text" }, [
                      _vm._v("Cup Type")
                    ]),
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
                        [_vm._v(_vm._s(_vm.getCupTypeName(item)))]
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
                  _c("h3", { staticClass: "black--text" }, [
                    _vm._v("Sugar Level")
                  ]),
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
                      staticClass: "btn overline ",
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
                      staticClass: "btn overline",
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
                      staticClass: "btn overline",
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
                      staticClass: "btn overline",
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
                      staticClass: "btn overline",
                      on: {
                        click: function($event) {
                          return _vm.getSugarLevel("100%", $event)
                        }
                      }
                    },
                    [_vm._v("100%")]
                  ),
                  _vm._v(" "),
                  _c("h3", { staticClass: "quantity black--text" }, [
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
                  })
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-4" },
              [
                _c(
                  "center",
                  [
                    _c("h3", { staticClass: "black--text" }, [
                      _vm._v("Add-ons")
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.addOnsData, function(item, index) {
                      return _c(
                        "button",
                        {
                          key: index,
                          staticClass: "btn overline",
                          on: {
                            click: function($event) {
                              return _vm.addAddOns(item, $event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "(₱ " +
                              _vm._s(item.addons_price) +
                              ") " +
                              _vm._s(item.addons_name)
                          )
                        ]
                      )
                    })
                  ],
                  2
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("center", [
            _c(
              "button",
              {
                staticClass: "btn addCart overline",
                on: {
                  click: function($event) {
                    return _vm.addToCart()
                  }
                }
              },
              [_vm._v("Add to Cart")]
            )
          ])
        ],
        1
      )
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/basic/register.vue":
/*!*****************************************!*\
  !*** ./resources/js/basic/register.vue ***!
  \*****************************************/
=======
/***/ "./resources/js/modules/order/order.vue":
/*!**********************************************!*\
  !*** ./resources/js/modules/order/order.vue ***!
  \**********************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=48ebf362&scoped=true& */ "./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/basic/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.vue?vue&type=template&id=766d0737&scoped=true& */ "./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&");
/* harmony import */ var _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.vue?vue&type=script&lang=js& */ "./resources/js/modules/order/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& */ "./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48ebf362",
=======
  _order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "766d0737",
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/basic/register.vue"
=======
component.options.__file = "resources/js/modules/order/order.vue"
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/basic/register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
=======
/***/ "./resources/js/modules/order/order.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/modules/order/order.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \**************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true& ***!
  \************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=style&index=0&id=766d0737&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_style_index_0_id_766d0737_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true& ***!
  \*****************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=48ebf362&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./order.vue?vue&type=template&id=766d0737&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/order/order.vue?vue&type=template&id=766d0737&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_order_vue_vue_type_template_id_766d0737_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005



/***/ })

}]);