(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      productName: '',
      img: '',
      imgURL: null,
      price: null,
      prodType: null,
      image: '',
      imageURL: null,
      productType: null,
      addOns: ""
    }, _defineProperty(_ref, "price", ""), _defineProperty(_ref, "datas", []), _defineProperty(_ref, "productData", null), _defineProperty(_ref, "categoryData", null), _defineProperty(_ref, "showAddOnsModal", false), _defineProperty(_ref, "showProductModal", false), _defineProperty(_ref, "showCategoryModal", false), _defineProperty(_ref, "prod", false), _defineProperty(_ref, "cat", true), _defineProperty(_ref, "ons", false), _defineProperty(_ref, "secondEvent", ''), _defineProperty(_ref, "productAdd", false), _defineProperty(_ref, "productEdit", false), _defineProperty(_ref, "status", null), _ref;
  },
  mounted: function mounted() {
    // this.retrieveAddOns();
    this.$refs.on.click();
    this.$refs.pro.click();
    this.$refs.cate.click();
    this.retrieveProducts();
    this.retrieveCategories();
  },
  methods: {
    onImgChange: function onImgChange(e) {
      this.img = e.target.files[0];
      this.imgURL = URL.createObjectURL(e.target.files[0]);
    },
    formSubmitProduct: function formSubmitProduct(e) {
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('image', this.img);
      formData.append('productCategory', this.prodType);
      formData.append('productName', this.productName);
      formData.append('status', this.status);
      formData.append('price', this.price);
      console.log(formData);
      axios.post('/formSubmit', formData, config).then(function (response) {
        currentObj.success = response.data.success;
        currentObj.retrieveCategories();
        currentObj.retrieveProducts();
        currentObj.hide();
      })["catch"](function (error) {
        currentObj.output = error;
      });
    },
    editProduct: function editProduct(item) {
      this.showProductModal = true;
      this.productName = item.productName;
      this.prodType = item.productCategory;
      this.img = item.image;
      this.price = item.price;
      this.imgURL = item.image;
      this.productAdd = false;
      this.productEdit = true;
    },
    updateProduct: function updateProduct(e) {
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      var formData = new FormData();
      formData.append('image', this.img);
      formData.append('status', this.status);
      formData.append('productCategory', this.prodType);
      formData.append('productName', this.productName);
      formData.append('price', this.price);
      console.log(formData);
      axios.post('/updateProduct', formData, config).then(function (response) {
        currentObj.success = response.data.success;
        currentObj.retrieveCategories();
        currentObj.retrieveProducts();
        currentObj.hide();
      })["catch"](function (error) {
        currentObj.output = error;
      });
    },
    productStatusUpdate: function productStatusUpdate(id) {
      var param = {
        id: id,
        status: 'Not Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        console.log('updated successfully!');
      });
    },
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
      axios.post('/addCategory', formData, config).then(function (response) {
        currentObj.success = response.data.success;
        console.log('gawas xd');
        currentObj.retrieveCategories();
        console.log('gawas ni');
        currentObj.retrieveProducts();
        currentObj.hide();
      })["catch"](function (error) {
        currentObj.output = error;
      });
    },
    product: function product(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add('borderStyle');
        event.target.classList.remove('btnBorderStyle1');

        if (this.secondEvent !== '') {
          this.secondEvent.classList.add('btnBorderStyle1');
          this.secondEvent.classList.remove('borderStyle');
        }
      }

      this.secondEvent = event.target;
      this.prod = true;
      this.cat = false;
      this.ons = false;
    },
    category: function category(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add('borderStyle');
        event.target.classList.remove('btnBorderStyle1');

        if (this.secondEvent !== '') {
          this.secondEvent.classList.add('btnBorderStyle1');
          this.secondEvent.classList.remove('borderStyle');
        }
      }

      this.secondEvent = event.target;
      this.prod = false;
      this.cat = true;
      this.ons = false;
    },
    addOnsShow: function addOnsShow(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add('borderStyle');
        event.target.classList.remove('btnBorderStyle1');

        if (this.secondEvent !== '') {
          this.secondEvent.classList.add('btnBorderStyle1');
          this.secondEvent.classList.remove('borderStyle');
        }
      }

      this.secondEvent = event.target;
      this.prod = false;
      this.cat = false;
      this.ons = true;
    },
    showAddOns: function showAddOns() {
      this.showAddOnsModal = true;
    },
    showProduct: function showProduct() {
      this.showProductModal = true;
      this.productAdd = true;
      this.productEdit = false;
    },
    showCategory: function showCategory() {
      this.showCategoryModal = true;
    },
    hide: function hide() {
      this.showAddOnsModal = false;
      this.showProductModal = false;
      this.showCategoryModal = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
    addAddOns: function addAddOns() {
      var param = {
        addOns: this.addOns,
        price: this.price
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingAddOns", param).then(function (response) {
        console.log("myData", response.data);
      });
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns").then(function (response) {
        _this.datas = response.data.addons;
        console.log(_this.datas);
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this2 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct").then(function (response) {
        _this2.productData = response.data.product;
        _this2.status = response.data.product.status;
        console.log('product', _this2.productData);
      });
    },
    retrieveCategories: function retrieveCategories() {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCategory").then(function (response) {
        _this3.categoryData = response.data.addCategory;
        console.log('addCategory', _this3.categoryData);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n[data-v-1683c446]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.fileStyle[data-v-1683c446]{\r\n    font-size: 17px !important;\r\n    width: 97px;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\n}\n.addOnsImage[data-v-1683c446]{\r\n    width: 250px !important; \r\n    height: 250px !important; \r\n    margin-top: 2% !important;\n}\n.navButton[data-v-1683c446]{\r\n    float: left;\r\n    width: 200px;\n}\n.borderStyle[data-v-1683c446]{\r\n    border-left: 3px solid grey;\r\n    border-top: 3px solid grey;\r\n    border-right: 3px solid grey;\n}\n.btnBorderStyle1[data-v-1683c446]{\r\n    border-bottom: 3px solid grey;\n}\n.table tr[data-v-1683c446]{\r\n   text-align: center;\n}\nimg[data-v-1683c446]{\r\n    height: 50px;\r\n    width: 100px;\n}\nhr[data-v-1683c446]{\r\n    border: 1px solid gray;\n}\nlabel[data-v-1683c446]{\r\n    font-size: 20px !important;\n}\n.blurred-background[data-v-1683c446] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    background: rgb(54, 54, 54, .7);\n}\n.alert-box[data-v-1683c446] {\r\n    width: 400px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 180px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-1683c446] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 150px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box3[data-v-1683c446] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 50px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.productTable[data-v-1683c446] {\r\n    width: 90%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.categoryTable[data-v-1683c446]{\r\n    width: 70%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.addOnsTable[data-v-1683c446]{\r\n    width: 50%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-1683c446] {\r\n    position: relative;\r\n    height: 500px;\r\n    width:70%;\r\n    overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-1683c446] {\r\n    display: contents;\n}\n.div[data-v-1683c446] {\r\n    /* border-style: solid; */\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\n}\n.btnModal[data-v-1683c446]{\r\n    float: right;\r\n    margin-right: 1%;\n}\n#buttonAdd[data-v-1683c446] {\r\n    float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: " container div" }, [
    _c(
      "div",
      [
        _c("center", [
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("Add Products, Categories and Add-ons")]),
          _c("br"),
          _vm._v(" "),
          _vm.ons
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btnModal",
                  attrs: { type: "button" },
                  on: { click: _vm.showAddOns }
                },
                [_vm._v("+ Add ons")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.prod
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btnModal",
                  attrs: { type: "button" },
                  on: { click: _vm.showProduct }
                },
                [_vm._v("+ Product")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.cat
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btnModal",
                  attrs: { type: "button" },
                  on: { click: _vm.showCategory }
                },
                [_vm._v("+ Categories")]
              )
            : _vm._e()
        ])
      ],
      1
    ),
    _c("br"),
    _c("br"),
    _vm._v(" "),
    _c("div", [
      _c(
        "button",
        {
          ref: "cate",
          staticClass: "btn navButton borderStyle",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.category($event)
            }
          }
        },
        [_vm._v("Categories")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          ref: "pro",
          staticClass: "btn navButton btnBorderStyle1",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.product($event)
            }
          }
        },
        [_vm._v("Product")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          ref: "on",
          staticClass: "btn navButton btnBorderStyle1",
          attrs: { type: "button" },
          on: {
            click: function($event) {
              return _vm.addOnsShow($event)
            }
          }
        },
        [_vm._v("Add-ons")]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("center", [
          _vm.cat
            ? _c("div", { staticClass: "my-custom-scrollbar" }, [
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
                          _vm._v("Image")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Category")
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
                        _vm._l(_vm.categoryData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", { attrs: { scope: "row" } }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", { attrs: { src: item.image } })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.productCategory))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "div",
                                { staticStyle: { "text-align": "left" } },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      on: {
                                        click: function($event) {
                                          return _vm.editCategories(item)
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
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
            : _vm._e(),
          _vm._v(" "),
          _vm.prod
            ? _c("div", { staticClass: "my-custom-scrollbar" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered table-striped productTable",
                    attrs: { id: "myTable" }
                  },
                  [
                    _c("thead", { staticClass: "thead-light" }, [
                      _c("tr", { staticClass: "header" }, [
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Image")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Category")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [
                          _vm._v("Lowest Price")
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
                        _vm._l(_vm.productData, function(item, index) {
                          return _c("tr", { key: index }, [
                            _c("td", { attrs: { scope: "row" } }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", { attrs: { src: item.image } })
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.productCategory))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.productName))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(item.price))]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "div",
                                { staticStyle: { "text-align": "left" } },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-success",
                                      on: {
                                        click: function($event) {
                                          return _vm.editProduct(item)
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-warning",
                                      staticStyle: {
                                        color: "red",
                                        display: "inline-block"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.productStatusUpdate(
                                            item.id
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("N/A")]
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
            : _vm._e(),
          _vm._v(" "),
          _vm.ons
            ? _c("div", { staticClass: "my-custom-scrollbar" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "table table-bordered table-striped addOnsTable",
                    attrs: { id: "myTable" }
                  },
                  [
                    _c("thead", { staticClass: "thead-light" }, [
                      _c("tr", { staticClass: "header" }, [
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
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
                        _vm._l(_vm.datas, function(data, index) {
                          return _c("tr", { key: index }, [
                            _c("td", { attrs: { scope: "row" } }, [
                              _vm._v(_vm._s(index + 1))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(data.addons_name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(data.addons_price))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("button", { staticClass: "btn btn-danger" }, [
                                _vm._v("Delete")
                              ])
                            ])
                          ])
                        })
                      ],
                      2
                    )
                  ]
                )
              ])
            : _vm._e()
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.showAddOnsModal
      ? _c(
          "div",
          { staticClass: "blurred-background", attrs: { id: "modal" } },
          [
            _c(
              "div",
              { staticClass: "alert-box" },
              [
                _c("center", [_c("h1", [_vm._v("Adding Add-ons")])]),
                _c("hr"),
                _vm._v(" "),
                _c("form", { attrs: { action: "" } }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "addOns" } }, [
                      _vm._v("Add-ons :")
                    ]),
                    _vm._v(" "),
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
                      staticClass: "form-control",
                      attrs: { type: "text", id: "addOns" },
                      domProps: { value: _vm.addOns },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.addOns = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "price" } }, [
                      _vm._v("Price :")
                    ]),
                    _vm._v(" "),
                    _c("br"),
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
                      attrs: { type: "number", min: "1", id: "price" },
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
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.hide()
                        }
                      }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.addAddOns }
                    },
                    [_vm._v("Add Add-ons")]
                  )
                ])
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showProductModal
      ? _c(
          "div",
          { staticClass: "blurred-background", attrs: { id: "modal" } },
          [
            _c(
              "div",
              { staticClass: "alert-box3" },
              [
                _c("center", [_c("h1", [_vm._v("Adding Product")])]),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data", action: "" },
                    on: { submit: _vm.formSubmitProduct }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "pCat" } }, [
                        _vm._v("Product Category:")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.prodType,
                            expression: "prodType"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.prodType },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.prodType = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "pname" } }, [
                        _vm._v("Product name:")
                      ]),
                      _vm._v(" "),
                      _c("br"),
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
                      _c("label", { attrs: { for: "price" } }, [
                        _vm._v("Price:")
                      ]),
                      _vm._v(" "),
                      _c("br"),
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
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("center", [
                          _c("img", {
                            staticClass: "addOnsImage",
                            attrs: { src: _vm.imgURL }
                          }),
                          _c("br"),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "fileStyle",
                            attrs: { type: "file", required: "" },
                            on: { change: _vm.onImgChange }
                          }),
                          _c("br")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticStyle: { "text-align": "right" } }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.hide()
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _vm.productAdd
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Add Product")]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.productEdit
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.updateProduct($event)
                                }
                              }
                            },
                            [_vm._v("Edit Product")]
                          )
                        : _vm._e()
                    ])
                  ]
                )
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showCategoryModal
      ? _c(
          "div",
          { staticClass: "blurred-background", attrs: { id: "modal" } },
          [
            _c(
              "div",
              { staticClass: "alert-box2" },
              [
                _c("center", [_c("h1", [_vm._v("Adding Category")])]),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    attrs: { enctype: "multipart/form-data", action: "" },
                    on: { submit: _vm.formSubmit }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "addOns" } }, [
                        _vm._v("Product Category:")
                      ]),
                      _vm._v(" "),
                      _c("br"),
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
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("center", [
                          _c("img", {
                            staticClass: "addOnsImage",
                            attrs: { src: _vm.imageURL }
                          }),
                          _c("br"),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "fileStyle",
                            attrs: { type: "file", required: "" },
                            on: { change: _vm.onImageChange }
                          }),
                          _c("br")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticStyle: { "text-align": "right" } }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.hide()
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Add Category")]
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue":
/*!********************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=template&id=1683c446&scoped=true& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&");
/* harmony import */ var _addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1683c446",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/addAddOns.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=style&index=0&id=1683c446&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_style_index_0_id_1683c446_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./addAddOns.vue?vue&type=template&id=1683c446&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/addAddOns.vue?vue&type=template&id=1683c446&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_addAddOns_vue_vue_type_template_id_1683c446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);