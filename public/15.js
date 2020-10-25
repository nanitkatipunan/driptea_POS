(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/cart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/cart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tableData: null
    };
  },
  mounted: function mounted() {
    this.retrieveProduct();
  },
  methods: {
    retrieveProduct: function retrieveProduct() {
      var _this = this;

      var params = {
        id: localStorage.getItem('customerId')
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveCustomerOrder', params).then(function (res) {
        _this.tableData = res.data.order;
        console.log(res.data.order);
      });
    },
    getAddOns: function getAddOns(item) {
      var storeAddOns = "";
      var index = item.length;
      item.forEach(function (el) {
        if (item.indexOf(el) >= index - 1) {
          storeAddOns += el.addOns;
        } else {
          storeAddOns += el.addOns + ", ";
        }
      });
      return storeAddOns;
    },
    deleteOrder: function deleteOrder(prodId) {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'deleteOrder', {
        id: prodId
      }).then(function (res) {
        _this2.retrieveProduct();
      });
    },
    orderNow: function orderNow() {
      var _this3 = this;

      var params = {
        id: localStorage.getItem('customerId'),
        status: 'pending'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'updateStatus', params).then(function (res) {
        _this3.retrieveProduct();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/cart.vue?vue&type=template&id=118875fa&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/onlineOrder/cart.vue?vue&type=template&id=118875fa&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
      _c(
        "table",
        {
          staticClass: "table table-responsive table-bordered",
          attrs: { id: "myTable" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.tableData, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(item.order_product[0].productName))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(_vm.getAddOns(item.same_order)))]),
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
                      staticStyle: { "font-size": "10px" },
                      attrs: { type: "button", "aria-expanded": "false" },
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
      ),
      _vm._v(" "),
      _c("center", [
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.orderNow()
              }
            }
          },
          [_vm._v("Order Now")]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticStyle: { width: "45%" } }, [_vm._v("Product Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Add ons")]),
      _vm._v(" "),
      _c("th", [_vm._v("Unit Price")]),
      _vm._v(" "),
      _c("th", [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", [_vm._v("Total")]),
      _vm._v(" "),
      _c("th", { staticStyle: { width: "15px" } }, [_vm._v("❌")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/onlineOrder/cart.vue":
/*!***************************************************!*\
  !*** ./resources/js/modules/onlineOrder/cart.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_vue_vue_type_template_id_118875fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.vue?vue&type=template&id=118875fa&scoped=true& */ "./resources/js/modules/onlineOrder/cart.vue?vue&type=template&id=118875fa&scoped=true&");
/* harmony import */ var _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.vue?vue&type=script&lang=js& */ "./resources/js/modules/onlineOrder/cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cart_vue_vue_type_template_id_118875fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cart_vue_vue_type_template_id_118875fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "118875fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/onlineOrder/cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/onlineOrder/cart.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/cart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/onlineOrder/cart.vue?vue&type=template&id=118875fa&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/modules/onlineOrder/cart.vue?vue&type=template&id=118875fa&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_118875fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=template&id=118875fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/onlineOrder/cart.vue?vue&type=template&id=118875fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_118875fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_118875fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);