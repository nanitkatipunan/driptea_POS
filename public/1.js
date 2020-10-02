(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    redirect: function redirect(type) {
      if (type !== 'fb') {
        var parameter = {
          customerType: type
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addCustomer', parameter).then(function (res) {
          localStorage.setItem('customerId', res.data.customerDetails.id);
          localStorage.setItem('customerType', res.data.customerDetails.customerType);
          _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + res.data.customerDetails.customerType)["catch"](function () {});
        });
      } else {
        _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/productCategory/' + param)["catch"](function () {});
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row", staticStyle: { "margin-top": "15%" } }, [
      _c(
        "div",
        { staticClass: "col-md-6", staticStyle: { "text-align": "right" } },
        [
          _c("img", {
            staticStyle: {
              width: "300px",
              height: "200px",
              border: "solid 1px black"
            },
            attrs: { src: __webpack_require__(/*! @/assets/walkin.jpg */ "./resources/assets/walkin.jpg") },
            on: {
              click: function($event) {
                return _vm.redirect("walkin")
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("img", {
          staticStyle: { width: "300px", height: "200px" },
          attrs: { src: __webpack_require__(/*! @/assets/fb.jpeg */ "./resources/assets/fb.jpeg") },
          on: {
            click: function($event) {
              return _vm.redirect("fb")
            }
          }
        })
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-6", staticStyle: { "text-align": "right" } },
        [
          _c("img", {
            staticStyle: {
              width: "300px",
              height: "200px",
              "margin-top": "5%",
              border: "solid 1px black"
            },
            attrs: { src: __webpack_require__(/*! @/assets/foodpanda.png */ "./resources/assets/foodpanda.png") },
            on: {
              click: function($event) {
                return _vm.redirect("foodpanda")
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("img", {
          staticStyle: { width: "300px", height: "200px", "margin-top": "5%" },
          attrs: { src: __webpack_require__(/*! @/assets/grab.png */ "./resources/assets/grab.png") },
          on: {
            click: function($event) {
              return _vm.redirect("grab")
            }
          }
        })
      ])
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

/***/ "./resources/js/modules/dashboard/casherDashboard.vue":
/*!************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _casherDashboard_vue_vue_type_template_id_418d2e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./casherDashboard.vue?vue&type=template&id=418d2e43& */ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&");
/* harmony import */ var _casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./casherDashboard.vue?vue&type=script&lang=js& */ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _casherDashboard_vue_vue_type_template_id_418d2e43___WEBPACK_IMPORTED_MODULE_0__["render"],
  _casherDashboard_vue_vue_type_template_id_418d2e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/dashboard/casherDashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./casherDashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_template_id_418d2e43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./casherDashboard.vue?vue&type=template&id=418d2e43& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/dashboard/casherDashboard.vue?vue&type=template&id=418d2e43&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_template_id_418d2e43___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_casherDashboard_vue_vue_type_template_id_418d2e43___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);