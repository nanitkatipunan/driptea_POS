(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue */ "./resources/js/basic/login.vue");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading.vue */ "./resources/js/basic/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    login: _login_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    el: "#app";

    return {
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a
    };
  },
  methods: {
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_2__["default"].push(route)["catch"](function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    [
      _c("div", [
        _c(
          "section",
          { staticStyle: { height: "80vh" } },
          [
            _c(
              "v-img",
              { attrs: { dark: "", src: __webpack_require__(/*! @/assets/landing1.jpg */ "./resources/assets/landing1.jpg") } },
              [
                _c(
                  "v-card",
                  {
                    staticClass: "mx-auto",
                    attrs: { "max-width": "400", height: "450" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "formGrp" },
                      [
                        _c("center", [
                          _c(
                            "div",
                            { staticClass: "containerWidth" },
                            [
                              _c(
                                "v-form",
                                {
                                  ref: "form",
                                  attrs: { "lazy-validation": "" }
                                },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          color: "orange",
                                          label: "Username*",
                                          outlined: "",
                                          type: "text",
                                          id: "userName",
                                          required: ""
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-row",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          color: "orange",
                                          label: "Password*",
                                          outlined: "",
                                          id: "password",
                                          required: ""
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
                                      attrs: { type: "button", color: "orange" }
                                    },
                                    [_vm._v("Login")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    { staticClass: "FP", attrs: { href: "" } },
                                    [_vm._v("Forgot Password")]
                                  ),
                                  _vm._v(" "),
                                  _c("hr"),
                                  _vm._v(" "),
                                  _c(
                                    "center",
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "ma-2",
                                          attrs: {
                                            type: "button",
                                            outlined: "",
                                            color: "orange"
                                          }
                                        },
                                        [_vm._v("Create New Account")]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ])
                      ],
                      1
                    )
                  ]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("login")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/landing1.jpg":
/*!***************************************!*\
  !*** ./resources/assets/landing1.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/landing1.jpg?a0e09369cbf15672a2f2914033ce9f0b";

/***/ }),

/***/ "./resources/js/basic/landing.vue":
/*!****************************************!*\
  !*** ./resources/js/basic/landing.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.vue?vue&type=template&id=23355ca8& */ "./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&");
/* harmony import */ var _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.vue?vue&type=script&lang=js& */ "./resources/js/basic/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/landing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/landing.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/basic/landing.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&":
/*!***********************************************************************!*\
  !*** ./resources/js/basic/landing.vue?vue&type=template&id=23355ca8& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./landing.vue?vue&type=template&id=23355ca8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/landing.vue?vue&type=template&id=23355ca8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_landing_vue_vue_type_template_id_23355ca8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);