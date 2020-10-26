(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      chosenCat: this.$route.params.itemChosen,
      data: null,
      success: null,
      size: null,
      sugarLevel: null,
      addOns: null,
      quantity: null,
      finalData: []
    };
  },
  mounted: function mounted() {
    this.retrieveProduct();
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
        }
      });
      return total;
    },
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
        // item[element].forEach(el => {
        //     this.finalData.push({'size': el.size, 'quantity': el.quantity})
        // })
        _this.finalData.push(item[element]);
      });
    },
    retrieveProduct: function retrieveProduct() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveAllCheckouts').then(function (res) {
        _this2.data = res.data.storeOrder;

        _this2.dataMethod(res.data.storeOrder);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* width */\n[data-v-2ce7e3b8]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.noImage[data-v-2ce7e3b8]{\r\n    margin-top: 10%;\r\n    height: 200px;\r\n    width: 30%;\n}\n.imgItem[data-v-2ce7e3b8]{\r\n    height: 200px;\r\n    width: 80%;\n}\n.row[data-v-2ce7e3b8]{\r\n    width: 80%;\r\n    /* height: 650px; */\r\n    overflow-y: scroll;\n}\n.secRow[data-v-2ce7e3b8]{\r\n    width: 80%;\r\n    height: 650px;\r\n    overflow-y: scroll;\n}\n.sudlanan[data-v-2ce7e3b8]{\r\n    font-family: Roboto Slab;\n}\n.imageSize[data-v-2ce7e3b8]{\r\n    height: 250px;\r\n    margin-top: 2%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c("center", [
        _vm.data !== null
          ? _c("div", { staticClass: "row" }, [
              _c("div", [
                _c("h1", [_vm._v("Mao ni")]),
                _vm._v(" "),
                _c("div", { staticClass: "my-custom-scrollbar" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-striped categoryTable",
                      attrs: { id: "myTable" }
                    },
                    [
                      _c("thead", { staticClass: "thead-light" }, [
                        _c("tr", { staticClass: "header" }, [
                          _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("lowDose")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("highDose")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("overDose")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("total")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Action")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        [
                          _vm._l(_vm.finalData, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v("Customer " + _vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.getLowDose(item)))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.getHighDose(item)))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(_vm.getOverDose(item)))]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticStyle: { "font-weight": "bold" } },
                                [_vm._v(_vm._s(_vm.getTotal(item)))]
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticStyle: { "text-align": "left" } },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-primary",
                                        on: {
                                          click: function($event) {
                                            return _vm.showData()
                                          }
                                        }
                                      },
                                      [_vm._v("Sample")]
                                    )
                                  ]
                                )
                              ])
                            ])
                          })
                        ],
                        2
                      )
                    ]
                  )
                ])
              ])
            ])
          : _c(
              "div",
              { staticClass: "secRow" },
              [
                _c("center", [
                  _c("img", {
                    staticClass: "noImage",
                    attrs: { src: __webpack_require__(/*! @/assets/data.png */ "./resources/assets/data.png") }
                  }),
                  _vm._v(" "),
                  _c("h2", [_vm._v("No Product Yet")]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-primary" }, [
                    _vm._v("Sample")
                  ])
                ])
              ],
              1
            )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/data.png":
/*!***********************************!*\
  !*** ./resources/assets/data.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/data.png?843acdc0c0b7cf274f9043b8a1604f0e";

/***/ }),

/***/ "./resources/js/modules/onlineOrder/productOnline.vue":
/*!************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& */ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&");
/* harmony import */ var _productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productOnline.vue?vue&type=script&lang=js& */ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& */ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ce7e3b8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/onlineOrder/productOnline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=style&index=0&id=2ce7e3b8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_style_index_0_id_2ce7e3b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/productOnline.vue?vue&type=template&id=2ce7e3b8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productOnline_vue_vue_type_template_id_2ce7e3b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);