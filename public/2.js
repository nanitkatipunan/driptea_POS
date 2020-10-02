(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: null,
      tableData: null,
      customerType: this.$route.params.image,
      deliveryFee: 0,
      totalPrice: 0,
      incash: 0,
      change: 0,
      subTotalPrice: 0,
      cash: null,
      fee: null
    };
  },
  mounted: function mounted() {
    this.retrieveCategory();
    this.retrieveProduct();
  },
  methods: {
    addingFee: function addingFee() {
      this.deliveryFee = this.fee;
    },
    addingIncash: function addingIncash() {
      this.incash = this.cash;
    },
    convertFee: function convertFee() {
      return parseInt(this.deliveryFee).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    convertTotalPrice: function convertTotalPrice() {
      var total = this.subTotalPrice + parseInt(this.deliveryFee);
      this.totalPrice = total;
      return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    convertIncash: function convertIncash() {
      return parseInt(this.incash).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    },
    convertChange: function convertChange() {
      if (this.incash > this.totalPrice) {
        var amountChange = this.incash - this.totalPrice;
        return amountChange.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      } else {
        return this.change.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    retrieveCategory: function retrieveCategory() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCategory').then(function (res) {
        _this.data = res.data.addCategory;
      });
    },
    getSubTotal: function getSubTotal() {
      if (this.tableData != null) {
        var total = 0;
        this.tableData.forEach(function (element) {
          total += element.subTotal;
        });
        this.subTotalPrice = total;
        return parseInt(total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
    },
    redirect: function redirect(param) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/chosenCategory/' + param)["catch"](function () {});
    },
    retrieveProduct: function retrieveProduct() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveOrder', {
        id: localStorage.getItem('customerId')
      }).then(function (res) {
        console.log(res.data.order);
        _this2.tableData = res.data.order;
      });
    },
    deleteOrder: function deleteOrder(prodId) {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'deleteOrder', {
        id: prodId
      }).then(function (res) {
        _this3.retrieveProduct();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.checkout{\r\n    margin-top: 3%;\r\n    height: 40% !important;\r\n    font-size: 20px; width: 200px;\n}\n.btn{\r\n    height: 33px;\r\n    width: 150px;\n}\ninput{\r\n    height: 35px;\r\n    border-radius: 5px;\n}\n::-webkit-scrollbar {\r\n  width: 1px;\n}\n.pStyle{\r\n    font-weight: bold;\n}\np{\r\n    margin-top: -10%;\n}\n.firstRow{\r\n    margin-bottom: 5%;\r\n    margin-top: 3%;\n}\n.sudlanan{\r\n    background-color: black;\r\n    height: 92.8vh;\r\n    overflow: hidden;\n}\ntable{\r\n    height: 450px;\n}\n.table tr th{\r\n   text-align: center;\n}\n.firstCol{\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px gray;\r\n    width: 90%;\r\n    margin-top: 5%;\r\n    background-color:white;\r\n    height: 650px;\n}\n.secondCol{\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px gray;\r\n    margin-top: 5%;\r\n    margin-right: 2%;\r\n    margin-left: 3%;\r\n    height: 150px;\r\n    background-color: white;\n}\n.imgItem{\r\n    height: 150px;\r\n    width: 100%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30& ***!
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
  return _c("div", { staticClass: "sudlanan" }, [
    _c("div", { staticClass: "row firstRow" }, [
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c("center", [
            _c(
              "div",
              { staticClass: "firstCol row" },
              [
                _c("center", [
                  _vm.customerType === "walkin"
                    ? _c("img", {
                        staticStyle: {
                          width: "70px",
                          height: "50px",
                          border: "solid 1px black"
                        },
                        attrs: { src: __webpack_require__(/*! @/assets/walkin.jpg */ "./resources/assets/walkin.jpg") }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.customerType === "foodpanda"
                    ? _c("img", {
                        staticStyle: { width: "70px", height: "50px" },
                        attrs: { src: __webpack_require__(/*! @/assets/foodpanda.png */ "./resources/assets/foodpanda.png") }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.customerType === "grab"
                    ? _c("img", {
                        staticStyle: { width: "70px", height: "50px" },
                        attrs: { src: __webpack_require__(/*! @/assets/grab.png */ "./resources/assets/grab.png") }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.customerType === "fb"
                    ? _c("img", {
                        staticStyle: { width: "70px", height: "50px" },
                        attrs: { src: __webpack_require__(/*! @/assets/fb.jpeg */ "./resources/assets/fb.jpeg") }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "table",
                    {
                      staticClass: "table table-responsive table-bordered",
                      attrs: { id: "myTable" }
                    },
                    [
                      _c("tr", [
                        _c("th", { staticStyle: { width: "200px" } }, [
                          _vm._v("Product Name")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { width: "200px" } }, [
                          _vm._v("Unit Price")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { width: "100px" } }, [
                          _vm._v("Quantity")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { width: "100px" } }, [
                          _vm._v("Total")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticStyle: { width: "20px" } }, [
                          _vm._v("❌")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.tableData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [
                              _vm._v(_vm._s(item.order_product[0].productName))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.choosenPrice))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.quantity))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.subTotal))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn",
                                  attrs: {
                                    type: "button",
                                    "aria-expanded": "false"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteOrder(item.id)
                                    }
                                  }
                                },
                                [_vm._v("❌")]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-3",
                    staticStyle: { "text-align": "left" }
                  },
                  [
                    _c("p", [_vm._v("Subtotal:")]),
                    _vm._v(" "),
                    _c("p", [_vm._v("Delivery Fee: ")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pStyle" }, [_vm._v("Total: ")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pStyle" }, [_vm._v("Incash: ")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pStyle" }, [_vm._v("Change: ")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-3",
                    staticStyle: { "text-align": "left" }
                  },
                  [
                    _c("p", [_vm._v("₱ " + _vm._s(_vm.getSubTotal()))]),
                    _vm._v(" "),
                    _c("p", [_vm._v("₱ " + _vm._s(_vm.convertFee()))]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pStyle" }, [
                      _vm._v("₱ " + _vm._s(_vm.convertTotalPrice()))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pStyle" }, [
                      _vm._v("₱ " + _vm._s(_vm.convertIncash()))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "pStyle" }, [
                      _vm._v("₱ " + _vm._s(_vm.convertChange()))
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "div",
            {
              staticClass: "row",
              staticStyle: { height: "600px", "overflow-y": "scroll" }
            },
            _vm._l(_vm.data, function(item, index) {
              return _c(
                "div",
                { key: index, staticClass: "col-md-5 secondCol" },
                [
                  _c("img", {
                    staticClass: "imgItem",
                    attrs: { src: item.image },
                    on: {
                      click: function($event) {
                        return _vm.redirect(item.productCategory)
                      }
                    }
                  })
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "row", staticStyle: { "margin-top": "5%" } },
            [
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("center", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.cash,
                          expression: "cash"
                        }
                      ],
                      attrs: {
                        type: "number",
                        placeholder: "enter cash paid..."
                      },
                      domProps: { value: _vm.cash },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.cash = $event.target.value
                        }
                      }
                    }),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: { click: _vm.addingIncash }
                      },
                      [_vm._v("Add Cash")]
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-6" },
                [
                  _c("center", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.fee,
                          expression: "fee"
                        }
                      ],
                      attrs: {
                        type: "number",
                        placeholder: "enter cash paid..."
                      },
                      domProps: { value: _vm.fee },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.fee = $event.target.value
                        }
                      }
                    }),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: { click: _vm.addingFee }
                      },
                      [_vm._v("Add Delivery Fee")]
                    )
                  ])
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("center", [
            _c("button", { staticClass: "btn btn-primary checkout" }, [
              _vm._v("Checkout")
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/fb.jpeg":
/*!**********************************!*\
  !*** ./resources/assets/fb.jpeg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/fb.jpeg?7e0e07d9d8d59c08fb811c51b0e3338b";

/***/ }),

/***/ "./resources/assets/foodpanda.png":
/*!****************************************!*\
  !*** ./resources/assets/foodpanda.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/foodpanda.png?844b251b92d883a0725a4e8275450576";

/***/ }),

/***/ "./resources/assets/grab.png":
/*!***********************************!*\
  !*** ./resources/assets/grab.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/grab.png?8779ede2cc6b005dedfdc4b8cc05f2aa";

/***/ }),

/***/ "./resources/assets/walkin.jpg":
/*!*************************************!*\
  !*** ./resources/assets/walkin.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/walkin.jpg?e225ba36f9a7baac8aac3abe6dac6ddd";

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productCategory.vue?vue&type=template&id=3cd12d30& */ "./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&");
/* harmony import */ var _productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productCategory.vue?vue&type=script&lang=js& */ "./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productCategory.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/products/productCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&":
/*!******************************************************************************************!*\
  !*** ./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productCategory.vue?vue&type=template&id=3cd12d30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/products/productCategory.vue?vue&type=template&id=3cd12d30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productCategory_vue_vue_type_template_id_3cd12d30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);