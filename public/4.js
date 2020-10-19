(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      quantity: null
    };
  },
  mounted: function mounted() {
    this.retrieveProduct();
  },
  methods: {
    retrieveProduct: function retrieveProduct() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'retrieveProduct', {
        type: this.chosenCat
      }).then(function (res) {
        _this.data = res.data.product;
      });
    },
    addTotalPrice: function addTotalPrice(event) {
      if (event.target.checked) {
        this.totalPrice += 20;
        this.mainPrice += 20;
      } else {
        this.mainPrice -= 20;
        this.totalPrice -= 20;
      }

      this.addQuantity();
    },
    addQuantity: function addQuantity() {
      var pr = 0;

      for (var i = 1; i <= this.quantity; i++) {
        pr += this.totalPrice;
      }

      this.mainPrice = pr;
    },
    addToCart: function addToCart() {
      var _this2 = this;

      if (this.auth.authenticateForAll()) {
        setTimeout(function () {
          var parameter = {
            accountId: _this2.auth.user.userId,
            productId: _this2.productId,
            quantity: _this2.quantity,
            size: _this2.size,
            sugarLevel: _this2.sugarLevel,
            iceLevel: _this2.iceLevel,
            status: 'pending',
            // sinkers: this.sinkers,
            subTotal: _this2.mainPrice,
            addOns: _this2.addOns
          };

          _this2.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + 'addOrder', parameter).then(function (response) {
            _this2.success = 'successfully added to cart';
            setTimeout(function () {
              return _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/userDashboard')["catch"](function () {});
            }, 1000);
          });
        }, 2000);
      }
    },
    cancel: function cancel() {
      // this.sinkers = []
      this.addOns = [];
    },
    showModal: function showModal(id) {} // redirect(param){
    //     ROUTER.push('/order/product/'+param).catch(()=>{})
    // }

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
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* width */\n[data-v-2ce7e3b8]::-webkit-scrollbar {\r\n  width: 1px;\n}\n.noImage[data-v-2ce7e3b8]{\r\n    margin-top: 10%;\r\n    height: 200px;\r\n    width: 30%;\n}\n.imgItem[data-v-2ce7e3b8]{\r\n    height: 200px;\r\n    width: 80%;\n}\n.row[data-v-2ce7e3b8]{\r\n    width: 80%;\r\n    height: 650px;\r\n    overflow-y: scroll;\n}\n.secRow[data-v-2ce7e3b8]{\r\n    width: 80%;\r\n    height: 650px;\r\n    overflow-y: scroll;\n}\n.sudlanan[data-v-2ce7e3b8]{\r\n    height: 92.8vh;\r\n    overflow: hidden;\r\n    font-family: Roboto Slab;\n}\n.imageSize[data-v-2ce7e3b8]{\r\n    height: 250px;\r\n    margin-top: 2%;\n}\r\n", ""]);

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
        _c("h1", { staticStyle: { "margin-top": "2%" } }, [
          _vm._v(_vm._s(_vm.chosenCat) + " Milktea")
        ]),
        _vm._v(" "),
        _vm.data !== null && _vm.data.length > 0
          ? _c(
              "div",
              { staticClass: "row" },
              _vm._l(_vm.data, function(item, index) {
                return _c(
                  "div",
                  { key: index, staticClass: "col-md-3 imageSize" },
                  [
                    _c("center", [
                      _c("img", {
                        staticClass: "imgItem",
                        attrs: {
                          "data-toggle": "modal",
                          "data-target": "#viewDetails",
                          src: item.image
                        },
                        on: {
                          click: function($event) {
                            return _vm.showModal(item.id)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("h4", [_vm._v(_vm._s(item.productName))])
                    ])
                  ],
                  1
                )
              }),
              0
            )
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
                  _c("h2", [_vm._v("No Product Yet")])
                ])
              ],
              1
            )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: { id: "viewDetails", role: "dialog" }
        },
        [
          _c("div", { staticClass: "modal-dialog modal-lg" }, [
            _c("div", { staticClass: "modal-content" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.success !== null
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
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-6" },
                    [
                      _c("h2", [_vm._v("Product")]),
                      _vm._v(" "),
                      _c("h4", [_vm._v("Price")]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "modalDiv" }, [
                        _c("form", [
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              {
                                staticStyle: {
                                  "font-size": "15px",
                                  "font-weight": "bold"
                                },
                                attrs: { for: "size" }
                              },
                              [_vm._v("Size :               ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.size,
                                    expression: "size"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.size = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "small" } }, [
                                  _vm._v("Regular")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "large" } }, [
                                  _vm._v("Large")
                                ])
                              ]
                            )
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
                                attrs: { for: "size" }
                              },
                              [_vm._v("Sugar Level:   ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.sugarLevel,
                                    expression: "sugarLevel"
                                  }
                                ],
                                staticClass: "form-control",
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.sugarLevel = $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "extra" } }, [
                                  _vm._v("100%(Normal Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "normal" } }, [
                                  _vm._v("75%(Three fourth Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "less" } }, [
                                  _vm._v("50%(Half Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "half" } }, [
                                  _vm._v("25%(One fourth Sugar)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "no" } }, [
                                  _vm._v("0%(No Sugar)")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(2),
                            _c("br"),
                            _vm._v(" "),
                            _c("div", { staticClass: "checkboxStyle" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.addOns,
                                    expression: "addOns"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: "mousse",
                                  value: "mousse"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.addOns)
                                    ? _vm._i(_vm.addOns, "mousse") > -1
                                    : _vm.addOns
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addTotalPrice($event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.addOns,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "mousse",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.addOns = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.addOns = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.addOns = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "mousse" } }, [
                                _vm._v("Mousse")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.addOns,
                                    expression: "addOns"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: "coffeeJelly",
                                  value: "coffeeJelly"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.addOns)
                                    ? _vm._i(_vm.addOns, "coffeeJelly") > -1
                                    : _vm.addOns
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addTotalPrice($event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.addOns,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "coffeeJelly",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.addOns = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.addOns = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.addOns = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "coffeeJelly" } }, [
                                _vm._v("Coffee Jelly")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.addOns,
                                    expression: "addOns"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: "oreo",
                                  value: "oreo"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.addOns)
                                    ? _vm._i(_vm.addOns, "oreo") > -1
                                    : _vm.addOns
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addTotalPrice($event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.addOns,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "oreo",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.addOns = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.addOns = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.addOns = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "oreo" } }, [
                                _vm._v("Crushed Oreo")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.addOns,
                                    expression: "addOns"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: "tapioca",
                                  value: "tapioca"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.addOns)
                                    ? _vm._i(_vm.addOns, "tapioca") > -1
                                    : _vm.addOns
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addTotalPrice($event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.addOns,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "tapioca",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.addOns = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.addOns = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.addOns = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "tapioca" } }, [
                                _vm._v("Tapioca")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.addOns,
                                    expression: "addOns"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: "pudding",
                                  value: "pudding"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.addOns)
                                    ? _vm._i(_vm.addOns, "pudding") > -1
                                    : _vm.addOns
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addTotalPrice($event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.addOns,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "pudding",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.addOns = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.addOns = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.addOns = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "pudding" } }, [
                                _vm._v("Pudding")
                              ]),
                              _c("br"),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.addOns,
                                    expression: "addOns"
                                  }
                                ],
                                attrs: {
                                  type: "checkbox",
                                  id: "nataJelly",
                                  value: "nataJelly"
                                },
                                domProps: {
                                  checked: Array.isArray(_vm.addOns)
                                    ? _vm._i(_vm.addOns, "nataJelly") > -1
                                    : _vm.addOns
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addTotalPrice($event)
                                  },
                                  change: function($event) {
                                    var $$a = _vm.addOns,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = "nataJelly",
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.addOns = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.addOns = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.addOns = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("label", { attrs: { for: "nataJelly" } }, [
                                _vm._v("Nata Jelly")
                              ]),
                              _c("br")
                            ])
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
                                attrs: { for: "quantity" }
                              },
                              [_vm._v("Quantity:")]
                            ),
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
                              staticStyle: { width: "70px" },
                              attrs: { type: "number", min: "1" },
                              domProps: { value: _vm.quantity },
                              on: {
                                change: _vm.addQuantity,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.quantity = $event.target.value
                                }
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("center", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btnRegister",
                            attrs: { type: "submit" },
                            on: { click: _vm.addToCart }
                          },
                          [_vm._v("Add to Cart - Php price")]
                        )
                      ])
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    attrs: { type: "button", "data-dismiss": "modal" },
                    on: { click: _vm.cancel }
                  },
                  [_vm._v("Cancel")]
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "productDescription" }, [_vm._v("Description")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticStyle: { "font-size": "15px", "font-weight": "bold" },
        attrs: { for: "size" }
      },
      [
        _vm._v("Add Ons(Optional):"),
        _c("span", { staticClass: "spanStyle2" }, [_vm._v("+20 each")])
      ]
    )
  }
]
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