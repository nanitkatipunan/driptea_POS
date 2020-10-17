(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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
      incomingLowDose: [],
      incomingHighDose: [],
      dataInDB: [],
      usedCups: null
    };
  },
  mounted: function mounted() {
    this.retrieveAllCups();
  },
  methods: {
    retrieveAllCups: function retrieveAllCups() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupToDisplay").then(function (response) {
        _this.dataInDB = response.data.retrieveCups;
        response.data.retrieveups.forEach(function (element) {
          if (_this.dataInDB.onRockLowDose == '') {
            _this.dataInDB.push(response.data.onRockLowDose = 0);
          } else if (_this.dataInDB.onRackHighDose == '') {
            _this.dataInDB.push(response.data.onRockHighDose = 0);
          } else if (_this.dataInDB.onRackOverDose == '') {
            _this.dataInDB.push(response.data.onRockOverDose = 0);
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#tableForCups{\r\n    margin-top:5%;\r\n    margin-left:3%;\r\n    width: 94%;\n}\ntd,th{\r\n    text-align:center\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "table-responsive-md" }, [
    _c(
      "table",
      { staticClass: "table table-bordered ", attrs: { id: "tableForCups" } },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.dataInDB, function(item, index) {
            return _c("tr", { key: index }, [
              _c("td", { attrs: { colspan: "2" } }, [
                _vm._v(_vm._s(item.created_at))
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.incomingLowDose))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.incomingHighDose))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.incomingOverDose))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    item.incomingOverDose +
                      item.incomingHighDose +
                      item.incomingLowDose
                  )
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(item.onRockLowDose + item.incomingLowDose))
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(item.onRockHighDose + item.incomingHighDose))
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(item.onRockOverDose + item.incomingOverDose))
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    item.onRockLowDose +
                      item.onRockHighDose +
                      item.onRockOverDose +
                      item.incomingOverDose +
                      item.incomingHighDose +
                      item.incomingLowDose
                  )
                )
              ]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.usedCupsLowDose))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.usedCupsHighDose))]),
              _vm._v(" "),
              _c("td", [_vm._v(_vm._s(item.usedCupsOverDose))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    item.usedCupsLowDose +
                      item.usedCupsHighDose +
                      item.usedCupsOverDose
                  )
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(item.onRockLowDose - item.usedCupsLowDose))
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(item.onRockHighDose - item.usedCupsHighDose))
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(_vm._s(item.onRockOverDose - item.usedCupsOverDose))
              ]),
              _vm._v(" "),
              _c("td", [
                _vm._v(
                  _vm._s(
                    item.onRockLowDose +
                      item.onRockHighDose +
                      item.onRockOverDose -
                      item.usedCupsLowDose -
                      item.usedCupsHighDose -
                      item.usedCupsOverDose
                  ) + "\n\n                "
                )
              ])
            ])
          }),
          0
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Cups")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "4" } }, [_vm._v("Incoming Cups")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "4" } }, [_vm._v("Cups Onrack")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "4" } }, [_vm._v("Used Cups")]),
        _vm._v(" "),
        _c("th", { attrs: { colspan: "4" } }, [_vm._v("Remaining Cups")])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [_vm._v("Date ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Low Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("High Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Over Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Cups")]),
        _vm._v(" "),
        _c("th", [_vm._v("Low Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("High Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Over Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Cups")]),
        _vm._v(" "),
        _c("th", [_vm._v("Low Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("High Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Over Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Cups")]),
        _vm._v(" "),
        _c("th", [_vm._v("Low Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("High Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Over Dose")]),
        _vm._v(" "),
        _c("th", [_vm._v("Total Cups")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue":
/*!**********************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cupsInventory_vue_vue_type_template_id_2d64b2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cupsInventory.vue?vue&type=template&id=2d64b2de& */ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&");
/* harmony import */ var _cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cupsInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cupsInventory.vue?vue&type=style&index=0&lang=css& */ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cupsInventory_vue_vue_type_template_id_2d64b2de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cupsInventory_vue_vue_type_template_id_2d64b2de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/cupsInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_template_id_2d64b2de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cupsInventory.vue?vue&type=template&id=2d64b2de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/cupsInventory.vue?vue&type=template&id=2d64b2de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_template_id_2d64b2de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cupsInventory_vue_vue_type_template_id_2d64b2de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);