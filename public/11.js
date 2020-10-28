(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
=======
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "app",
  data: function data() {
    return {
<<<<<<< HEAD
      chosenCat: this.$route.params.itemChosen,
      data: null,
      success: null,
      size: null,
      sugarLevel: null,
      addOns: null,
      quantity: null,
      finalData: [],
      productData: null,
      categoryData: null
    };
  },
  mounted: function mounted() {
    this.retrieveProduct();
    this.getAllProducts();
    this.getAllCategory();
  },
  methods: {
    getTotal: function getTotal(item) {
      var total = 0;
      item.forEach(function (el) {
        total += el.quantity;
      });
      return total;
    },
    getLowDose: function getLowDose(item) {
      var total = 0;
      item.forEach(function (el) {
        if (el.size === 'lowDose') {
          total += el.quantity;
=======
      type: 'CUSTOMER',
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      fullname: '',
      address: '',
      contactNum: '',
      email: '',
      password: '',
      confirmPass: '',
      successMessage: null,
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      errorMessage9: null,
      errorMessage10: null
    };
  },
  mounted: function mounted() {},
  methods: {
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
    register: function register() {
      var _this = this;

      this.validate('fullname');
      this.validate('address');
      this.validate('contactNum');
      this.validate('email');
      this.validate('password');
      this.validate('confirmPass');
      var parameter = {
        account_type: this.type,
        fullname: this.fullname,
        address: this.address,
        contactNumber: this.contactNum,
        name: this.email,
        password: this.password,
        password_confirmation: this.confirmPass
      };

      if (this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null) {
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'register', parameter).then(function (response) {
          _this.authenticate(_this.email, _this.password);
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this.errorMessage3 = 'Username already exist';
          }
        });
      } else {
        this.errorMessage = 'Please fill up all fields';
      }
    },
    authenticate: function authenticate(name, password) {
      var _this2 = this;

      var credentials = {
        name: name,
        password: password
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'login', credentials).then(function (response) {
        _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(response.data.token);
        _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].authenticateForAll();
      })["catch"](function (err) {
        if (err.response.status === 400) {
          _this2.errorMessage = 'Invalid credentials!';
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
        }
      });
      return total;
    },
<<<<<<< HEAD
    getHighDose: function getHighDose(item) {
      var total = 0;
      item.forEach(function (el) {
        if (el.size === 'highDose') {
          total += el.quantity;
        }
      });
      return total;
    },
    getOverDose: function getOverDose(item) {
      var total = 0;
      item.forEach(function (el) {
        if (el.size === 'overDose') {
          total += el.quantity;
        }
      });
      return total;
    },
    showData: function showData() {
      console.log(this.finalData);
    },
    dataMethod: function dataMethod(item) {
      var _this = this;

      Object.keys(item).forEach(function (element) {
        _this.finalData.push(item[element]);
      });
    },
    retrieveProduct: function retrieveProduct() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveAllCheckouts').then(function (res) {
        _this2.data = res.data.storeOrder;

        _this2.dataMethod(res.data.storeOrder);
      });
    },
    getAllProducts: function getAllProducts() {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveAllProduct').then(function (res) {
        console.log(res.data.product);
        _this3.productData = res.data.product;
      });
    },
    getAllCategory: function getAllCategory() {
      var _this4 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCategory').then(function (res) {
        console.log(res.data.addCategory);
        _this4.categoryData = res.data.addCategory;
      });
=======
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\d/;
      var specialChar = /^[A-Za-z0-9 ]+$/;

      if (input === 'fullname') {
        this.errorMessage = null;

        if (reqWhiteSpace.test(this.fullname)) {
          this.errorMessage = 'Fullname should not contain a number.';
        } else if (this.fullname === '') {
          this.errorMessage2 = 'Fullname is required.';
        } else if (!specialChar.test(this.fullname)) {
          this.errorMessage2 = 'Fullname should not contain a special character.';
        } else {
          this.errorMessage = null;
          this.errorMessage2 = null;
        }
      } else if (input === 'email') {
        this.errorMessage3 = null;

        if (this.validateEmail(this.email) === false) {
          this.errorMessage3 = 'You have entered an invalid email address.';
        } else {
          this.errorMessage3 = null;
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
      } else if (input === 'address') {
        this.errorMessage10 = null;

        if (this.address === '') {
          this.errorMessage10 = 'Address is required.';
        } else {
          this.errorMessage10 = null;
        }
      } else if (input === 'contactNum') {
        this.errorMessage8 = null;
        this.successMessage9 = null;

        if (this.contactNum.length > 11) {
          this.errorMessage8 = 'Contact number must not exceed 11 numbers.';
        } else if (this.contactNum.slice(0, 2) != '09') {
          this.errorMessage9 = 'Contact number must start with 09';
        } else {
          this.errorMessage8 = null;
          this.errorMessage9 = null;
        }
      } else if (this.contactNum != null && this.address != null && this.fullname.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null && _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].validateEmail(this.email) === true) {
        this.errorMessage = null;
      } else {
        this.errorMessage7 = 'Please fill in all required fields.';
        this.errorMessage7 = null;
      }
    },
    validateEmail: function validateEmail(email) {
      var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;

      if (reg.test(email) === false) {
        return false;
      } else {
        return true;
      }
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* width */\n[data-v-2ce7e3b8]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.noImage[data-v-2ce7e3b8]{\r\n    margin-top: 10%;\r\n    height: 200px;\r\n    width: 30%;\n}\n.imgItem[data-v-2ce7e3b8]{\r\n    height: 200px;\r\n    width: 80%;\n}\n.row[data-v-2ce7e3b8]{\r\n    width: 80%;\r\n    /* height: 650px; */\r\n    overflow-y: scroll;\n}\n.secRow[data-v-2ce7e3b8]{\r\n    width: 80%;\r\n    height: 650px;\r\n    overflow-y: scroll;\n}\n.sudlanan[data-v-2ce7e3b8]{\r\n    font-family: Roboto Slab;\n}\n.imageSize[data-v-2ce7e3b8]{\r\n    height: 250px;\r\n    margin-top: 2%;\n}\r\n", ""]);
=======
exports.push([module.i, "span[data-v-5b3af0cd] {\n  font-size: 12px;\n}\nhr[data-v-5b3af0cd] {\n  border: 1px solid #17D817;\n}\n.termsCondition[data-v-5b3af0cd] {\n  margin-top: 6%;\n  font-size: 15px;\n  text-align: center;\n}\n.form-control[data-v-5b3af0cd] {\n  border: 1px solid #17D817;\n  border-radius: 5px;\n}\n.bRegister[data-v-5b3af0cd] {\n  color: #0A8C0F;\n  cursor: pointer;\n}\np[data-v-5b3af0cd] {\n  font-size: 20px;\n}\n.btnRegister[data-v-5b3af0cd] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  background-color: #17D817;\n  font-weight: bold;\n  width: 100%;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-5b3af0cd] {\n    text-align: left;\n    width: 100%;\n}\n.form-group[data-v-5b3af0cd] {\n    width: 100%;\n}\n.containerWidth[data-v-2badb436][data-v-5b3af0cd] {\n    text-align: left;\n    width: 75%;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-5b3af0cd] {\n    text-align: left;\n    width: 100%;\n}\n.form-group[data-v-5b3af0cd] {\n    width: 100%;\n}\n.containerWidth[data-v-2badb436][data-v-5b3af0cd] {\n    text-align: left;\n    width: 50%;\n}\n}\n.containerWidth[data-v-5b3af0cd] {\n  text-align: left;\n  width: 30%;\n}", ""]);
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&");
=======
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&");
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
<<<<<<< HEAD
  return _c("div", [
    _c("table", { staticClass: "table" }, [
      _c("thead", [
        _c(
          "tr",
          _vm._l(_vm.productData, function(item, index) {
            return _c("th", { key: index }, [
              _vm._v(_vm._s(item.productCategory))
            ])
          }),
          0
        )
      ])
    ])
  ])
=======
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("center", [
        _c("img", {
          staticStyle: { height: "150px", "margin-top": "1%" },
          attrs: { src: _vm.image },
          on: {
            click: function($event) {
              return _vm.redirect("/")
            }
          }
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
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "fullname" } }, [
                _vm._v("Fullname:")
              ]),
              _c("br"),
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
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.fullname,
                    expression: "fullname"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "fullname" },
                domProps: { value: _vm.fullname },
                on: {
                  keyup: function($event) {
                    return _vm.validate("fullname")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.fullname = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "address" } }, [_vm._v("Address:")]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage10 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage10))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.address,
                    expression: "address"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "address" },
                domProps: { value: _vm.address },
                on: {
                  keyup: function($event) {
                    return _vm.validate("address")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.address = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "contactNum" } }, [
                _vm._v("Contact #:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage8 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage8))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage9 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage9))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.contactNum,
                    expression: "contactNum"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "contactNum" },
                domProps: { value: _vm.contactNum },
                on: {
                  keyup: function($event) {
                    return _vm.validate("contactNum")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.contactNum = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email:")]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage3 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "email", id: "email" },
                domProps: { value: _vm.email },
                on: {
                  keyup: function($event) {
                    return _vm.validate("email")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password" } }, [
                _vm._v("Password:")
              ]),
              _c("br"),
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
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "password" },
                domProps: { value: _vm.password },
                on: {
                  keyup: function($event) {
                    return _vm.validate("password")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "confirmPassword" } }, [
                _vm._v("Confirm password:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage6 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage6))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.confirmPass,
                    expression: "confirmPass"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "confirmPassword" },
                domProps: { value: _vm.confirmPass },
                on: {
                  keyup: function($event) {
                    return _vm.validate("confirmPass")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.confirmPass = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btnRegister",
                attrs: { type: "submit" },
                on: { click: _vm.register }
              },
              [_vm._v("Register")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("label", { staticClass: "termsCondition" }, [
                _vm._v("By signing up, you agree to our "),
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
                  [_vm._v("Terms")]
                ),
                _vm._v(" and "),
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
                  [_vm._v("Conditions")]
                )
              ]),
              _c("hr"),
              _vm._v(" "),
              _c("center", [
                _c("label", { staticClass: "termsCondition" }, [
                  _vm._v("Already have an account? "),
                  _c(
                    "b",
                    {
                      staticClass: "bRegister",
                      on: {
                        click: function($event) {
                          return _vm.redirect("/login")
                        }
                      }
                    },
                    [_vm._v("Login")]
                  )
                ])
              ])
            ],
            1
          )
        ])
      ])
    ],
    1
  )
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/modules/onlineOrder/productOnline.vue":
/*!************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue ***!
  \************************************************************/
=======
/***/ "./resources/js/basic/registerUser.vue":
/*!*********************************************!*\
  !*** ./resources/js/basic/registerUser.vue ***!
  \*********************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& */ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&");
/* harmony import */ var _productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productOnline.vue?vue&type=script&lang=js& */ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& */ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& */ "./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&");
/* harmony import */ var _registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerUser.vue?vue&type=script&lang=js& */ "./resources/js/basic/registerUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& */ "./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ce7e3b8",
=======
  _registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b3af0cd",
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/modules/onlineOrder/productOnline.vue"
=======
component.options.__file = "resources/js/basic/registerUser.vue"
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
=======
/***/ "./resources/js/basic/registerUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& ***!
  \*******************************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& ***!
  \****************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005



/***/ })

}]);