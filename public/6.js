(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: [],
      productName: '',
      image: '',
      imageURL: null,
      price: null,
      output: null,
      productType: null,
      success: null
    };
  },
  mounted: function mounted() {// this.retrieveAll()
  },
  methods: {
    retrieveAll: function retrieveAll() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveProduct').then(function (response) {
        _this.imageURL = response.data.product[0].image;
        _this.productName = response.data.product[0].productName;
        _this.price = response.data.product[0].price;
      });
    },
    // edit(param){
    //     this.imageURL = param.image
    //     this.productName = param.productName
    //     this.price = param.price
    // },
    onImageChange: function onImageChange(e) {
      this.image = e.target.files[0];
      this.imageURL = URL.createObjectURL(e.target.files[0]);
    },
    formSubmit: function formSubmit(e) {
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('image', this.image);
      formData.append('productCategory', this.productType);
      formData.append('productName', this.productName);
      formData.append('price', this.price);
      console.log(formData);
      axios.post('/formSubmit', formData, config).then(function (response) {
        currentObj.success = response.data.success;
        setTimeout(function () {
          return _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/`userDashboard`')["catch"](function () {});
        }, 1000);
      })["catch"](function (error) {
        currentObj.output = error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-0369e7a4]{\r\n    width: 250px; \r\n    height: 250px;\r\n    margin-top: 2%;\n}\n.fileStyle[data-v-0369e7a4]{\r\n    width: 97px;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\n}\n.card-header[data-v-0369e7a4]{\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n    text-align: center;\n}\n.card[data-v-0369e7a4]{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.form-control[data-v-0369e7a4]{\r\n    display: inline;\r\n    margin-top: 2%;\r\n    width: 300px;\n}\n.productName[data-v-0369e7a4]{\r\n    margin-left: 6%;\n}\n.price[data-v-0369e7a4]{\r\n    margin-left: 4%;\n}\nform[data-v-0369e7a4]{\r\n    margin-top: 3%;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=template&id=0369e7a4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=template&id=0369e7a4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [_vm._v("Add Product")]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _vm.success != null && _vm.success != ""
              ? _c(
                  "div",
                  {
                    staticClass: "alert alert-success",
                    attrs: { role: "alert" }
                  },
                  [
                    _vm._v(
                      "\n                      " +
                        _vm._s(_vm.success) +
                        "\n                    "
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: { submit: _vm.formSubmit }
              },
              [
                _c("center", [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "font-weight": "bold"
                        },
                        attrs: { for: "pname" }
                      },
                      [_vm._v("Product Category:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productType,
                          expression: "productType"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.productType },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.productType = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "font-weight": "bold"
                        },
                        attrs: { for: "pname" }
                      },
                      [_vm._v("Product name:")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productName,
                          expression: "productName"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", required: "" },
                      domProps: { value: _vm.productName },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.productName = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          "font-size": "15px",
                          "font-weight": "bold"
                        },
                        attrs: { for: "pname" }
                      },
                      [_vm._v("Base price: (Php)")]
                    ),
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
                      attrs: { type: "number", min: "0", required: "" },
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
                  ]),
                  _vm._v(" "),
                  _c("img", { attrs: { src: _vm.imageURL } }),
                  _c("br"),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "fileStyle",
                    attrs: { type: "file", required: "" },
                    on: { change: _vm.onImageChange }
                  }),
                  _c("br"),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-success" }, [
                    _vm._v("Add Product")
                  ])
                ])
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/addingAdmin/addProducts.vue":
/*!**********************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addProducts.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addProducts_vue_vue_type_template_id_0369e7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProducts.vue?vue&type=template&id=0369e7a4&scoped=true& */ "./resources/js/modules/addingAdmin/addProducts.vue?vue&type=template&id=0369e7a4&scoped=true&");
/* harmony import */ var _addProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProducts.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/addProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addProducts_vue_vue_type_template_id_0369e7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addProducts_vue_vue_type_template_id_0369e7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0369e7a4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/addProducts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addProducts.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addProducts.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addProducts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=style&index=0&id=0369e7a4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_style_index_0_id_0369e7a4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addProducts.vue?vue&type=template&id=0369e7a4&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addProducts.vue?vue&type=template&id=0369e7a4&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_template_id_0369e7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addProducts.vue?vue&type=template&id=0369e7a4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addProducts.vue?vue&type=template&id=0369e7a4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_template_id_0369e7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addProducts_vue_vue_type_template_id_0369e7a4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);