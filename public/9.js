(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005


 // import { validate } from 'json-schema';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  data: function data() {
    return {
<<<<<<< HEAD
      type: 'CUSTOMER',
=======
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      fullname: '',
      address: '',
      contactNum: '',
      email: '',
      password: '',
      errorMessage: null,
      errorMessage2: null,
<<<<<<< HEAD
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      errorMessage9: null,
      errorMessage10: null
=======
      errorMessage3: null
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
    };
  },
  mounted: function mounted() {},
  methods: {
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
<<<<<<< HEAD
    register: function register() {
      var _this = this;

      this.validate('fullname');
      this.validate('address');
      this.validate('contactNum');
      this.validate('email');
=======
    login: function login() {
      this.validate('userName');
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      this.validate('password');
      var parameter = {
<<<<<<< HEAD
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
=======
        name: this.userName,
        password: this.password
      };

      if (this.userName === '' && this.password === '') {
        this.errorMessage = 'Please fill in all required fields';
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      } else {
        this.authenticate(this.userName, this.password);
      }
    },
    authenticate: function authenticate(name, password) {
<<<<<<< HEAD
      var _this2 = this;
=======
      var _this = this;
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005

      var credentials = {
        name: name,
        password: password
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'login', credentials).then(function (response) {
        _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].setToken(response.data.token);
        _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].authenticateForAll();
      })["catch"](function (err) {
        if (err.response.status === 400) {
<<<<<<< HEAD
          _this2.errorMessage = 'Invalid credentials!';
=======
          _this.errorMessage = 'Invalid credentials!';
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
        }
      });
    },
    validate: function validate(input) {
      this.successMessage = null;
<<<<<<< HEAD
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
=======

      if (input === 'userName') {
        this.errorMessage2 = null;

        if (this.userName === '') {
          this.errorMessage2 = 'Username is required.';
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
        } else {
          this.errorMessage2 = null;
<<<<<<< HEAD
        }
      } else if (input === 'email') {
        this.errorMessage3 = null;

        if (this.validateEmail(this.email) === false) {
          this.errorMessage3 = 'You have entered an invalid email address.';
        } else {
          this.errorMessage3 = null;
=======
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
        }
      } else if (input === 'password') {
        this.errorMessage3 = null;

        if (this.password === '') {
          this.errorMessage3 = 'Password is required.';
        } else {
          this.errorMessage3 = null;
        }
<<<<<<< HEAD
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
=======
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      } else {
        this.errorMessage = null;
        this.errorMessage = 'Please fill in all required fields.';
      }
    },
    validateEmail: function validateEmail(email) {
      var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;

      if (reg.test(email) === false) {
        return false;
      } else {
        return true;
      }
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "span[data-v-5b3af0cd] {\n  font-size: 12px;\n}\nhr[data-v-5b3af0cd] {\n  border: 1px solid #17D817;\n}\n.termsCondition[data-v-5b3af0cd] {\n  margin-top: 6%;\n  font-size: 15px;\n  text-align: center;\n}\n.form-control[data-v-5b3af0cd] {\n  border: 1px solid #17D817;\n  border-radius: 5px;\n}\n.bRegister[data-v-5b3af0cd] {\n  color: #0A8C0F;\n  cursor: pointer;\n}\np[data-v-5b3af0cd] {\n  font-size: 20px;\n}\n.btnRegister[data-v-5b3af0cd] {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  background-color: #17D817;\n  font-weight: bold;\n  width: 100%;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-5b3af0cd] {\n    text-align: left;\n    width: 100%;\n}\n.form-group[data-v-5b3af0cd] {\n    width: 100%;\n}\n.containerWidth[data-v-2badb436][data-v-5b3af0cd] {\n    text-align: left;\n    width: 75%;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-5b3af0cd] {\n    text-align: left;\n    width: 100%;\n}\n.form-group[data-v-5b3af0cd] {\n    width: 100%;\n}\n.containerWidth[data-v-2badb436][data-v-5b3af0cd] {\n    text-align: left;\n    width: 50%;\n}\n}\n.containerWidth[data-v-5b3af0cd] {\n  text-align: left;\n  width: 50%;\n}", ""]);
=======
exports.push([module.i, "\nimg[data-v-4eceb98c]{\r\n    cursor: default;\n}\nspan[data-v-4eceb98c]{\r\n    font-size: 12px;\n}\nhr[data-v-4eceb98c]{\r\n    border: 1px solid #17D817;\n}\n.termsCondition[data-v-4eceb98c]{\r\n    margin-top: 6%;\r\n    font-size: 15px;\r\n    text-align: center;\n}\n.form-control[data-v-4eceb98c]{\r\n    border: 1px solid #17D817;\r\n    border-radius: 5px;\r\n    width: 100%;\n}\n.bRegister[data-v-4eceb98c]{\r\n    color: #0A8C0F;\r\n    cursor: pointer;\n}\np[data-v-4eceb98c]{\r\n    font-size: 20px;\n}\n.btnRegister[data-v-4eceb98c]{\r\n    margin-top: 2%;\r\n    margin-bottom: 2%;\r\n    background-color: #17D817;\r\n    font-weight: bold;\r\n    width: 100%;\n}\n.containerWidth[data-v-4eceb98c]{\r\n    width: 30%;\r\n    text-align: left;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-4eceb98c]{\r\n        text-align: left;\r\n        width: 100%;\r\n        margin-left: 0px !important;\r\n        margin-right: 0px !important;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-4eceb98c]{\r\n        text-align: left;\r\n        width: 70%;\n}\n}\n@media screen and (max-width: 1000px) {\n.containerWidth[data-v-4eceb98c]{\r\n        text-align: left;\r\n        width: 60%;\n}\n}\r\n", ""]);
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&");
=======
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&");
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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c("center", [
        _c("img", {
<<<<<<< HEAD
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
        _c(
          "div",
          { staticClass: "containerWidth" },
          [
            _c("i", [
              _vm.errorMessage7 !== null
                ? _c("span", { staticClass: "text-danger text-center" }, [
                    _vm._v(_vm._s(_vm.errorMessage7))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "v-form",
              [
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
                _c(
                  "v-row",
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Fullname",
                        outlined: "",
                        type: "text",
                        id: "fullname",
                        required: ""
                      },
                      on: {
                        keyup: function($event) {
                          return _vm.validate("fullname")
                        }
                      },
                      model: {
                        value: _vm.fullname,
                        callback: function($$v) {
                          _vm.fullname = $$v
                        },
                        expression: "fullname"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("i", [
                  _vm.errorMessage10 !== null
                    ? _c("span", { staticClass: "text-danger text-center" }, [
                        _vm._v(_vm._s(_vm.errorMessage10))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Address",
                        outlined: "",
                        type: "text",
                        id: "address",
                        required: ""
                      },
                      on: {
                        keyup: function($event) {
                          return _vm.validate("address")
                        }
                      },
                      model: {
                        value: _vm.address,
                        callback: function($$v) {
                          _vm.address = $$v
                        },
                        expression: "address"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("i", [
                  _vm.errorMessage !== null
                    ? _c("span", { staticClass: "text-danger text-center" }, [
                        _vm._v(_vm._s(_vm.errorMessage8))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("i", [
                  _vm.errorMessage2 !== null
                    ? _c("span", { staticClass: "text-danger text-center" }, [
                        _vm._v(_vm._s(_vm.errorMessage9))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Contact Number",
                        outlined: "",
                        type: "number",
                        id: "contactNum",
                        required: ""
                      },
                      on: {
                        keyup: function($event) {
                          return _vm.validate("contactNum")
                        }
                      },
                      model: {
                        value: _vm.contactNum,
                        callback: function($$v) {
                          _vm.contactNum = $$v
                        },
                        expression: "contactNum"
                      }
                    })
                  ],
                  1
                ),
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
                        label: "email",
                        outlined: "",
                        type: "email",
                        id: "email",
                        required: ""
                      },
                      on: {
                        keyup: function($event) {
                          return _vm.validate("email")
                        }
                      },
                      model: {
                        value: _vm.email,
                        callback: function($$v) {
                          _vm.email = $$v
                        },
                        expression: "email"
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
            ),
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
          ],
          1
        )
=======
          staticStyle: { height: "150px", "margin-top": "8%" },
          attrs: { src: _vm.image }
        })
      ]),
      _vm._v(" "),
      _c("center", [
        _c("div", { staticClass: "containerWidth" }, [
          _c("i", [
            _vm.errorMessage !== null
              ? _c("span", { staticClass: "text-danger text-center" }, [
                  _vm._v(_vm._s(_vm.errorMessage))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "userName" } }, [
                _vm._v("Username:")
              ]),
              _c("br"),
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
                    value: _vm.userName,
                    expression: "userName"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "userName",
                  placeholder: "email/username"
                },
                domProps: { value: _vm.userName },
                on: {
                  keyup: function($event) {
                    return _vm.validate("userName")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.userName = $event.target.value
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
              _vm.errorMessage3 !== null
                ? _c("span", { staticClass: "text-danger text-center" }, [
                    _vm._v(_vm._s(_vm.errorMessage3))
                  ])
                : _vm._e(),
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
                attrs: {
                  type: "password",
                  id: "password",
                  placeholder: "password"
                },
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
            _c(
              "button",
              {
                staticClass: "btn btnRegister",
                attrs: { type: "submit" },
                on: { click: _vm.login }
              },
              [_vm._v("Login")]
            )
          ])
        ])
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/basic/registerUser.vue":
/*!*********************************************!*\
  !*** ./resources/js/basic/registerUser.vue ***!
  \*********************************************/
=======
/***/ "./resources/js/basic/login.vue":
/*!**************************************!*\
  !*** ./resources/js/basic/login.vue ***!
  \**************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& */ "./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&");
/* harmony import */ var _registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerUser.vue?vue&type=script&lang=js& */ "./resources/js/basic/registerUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& */ "./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&");
=======
/* harmony import */ var _login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=4eceb98c&scoped=true& */ "./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/basic/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& */ "./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&");
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b3af0cd",
=======
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4eceb98c",
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/basic/registerUser.vue"
=======
component.options.__file = "resources/js/basic/login.vue"
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/basic/registerUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
=======
/***/ "./resources/js/basic/login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/basic/login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& ***!
  \***********************************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=style&index=0&id=5b3af0cd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_style_index_0_id_5b3af0cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& ***!
  \****************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=style&index=0&id=4eceb98c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_4eceb98c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true& ***!
  \*********************************************************************************/
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/registerUser.vue?vue&type=template&id=5b3af0cd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registerUser_vue_vue_type_template_id_5b3af0cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=4eceb98c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/login.vue?vue&type=template&id=4eceb98c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_4eceb98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> a67a95277d882611e747ef0cfdaed0f98ee60005



/***/ })

}]);