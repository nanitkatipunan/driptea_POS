(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      productName: null,
      img: null,
      imgURL: null,
      lowPrice: null,
      highPrice: null,
      overPrice: null,
      onlinelowPrice: null,
      onlinehighPrice: null,
      onlineoverPrice: null,
      prodType: null,
      image: null,
      imageURL: null,
      productType: null,
      inputAddOns: null,
      addOnsPrice: null,
      addOnsStat: null,
      editAddOnsShow: false,
      addonsShow: false,
      idAddOns: null,
      datas: null,
      productData: null,
      categoryData: null,
      showAddOnsModal: false,
      showProductModal: false,
      showCategoryModal: false,
      showCupTypeModal: false,
      btnCupType: false,
      btnEditCupType: false,
      inputCupPrice: null,
      inputCup: null,
      cupStatus: null,
      idCup: null,
      cupData: null,
      prod: false,
      cat: true,
      ons: false,
      cup: false,
      Event: '',
      secondEvent: '',
      productAdd: false,
      productEdit: false,
      status: null,
      prodId: null,
      priceEvent: '',
      online: false,
      errorMessage: null
    };
  },
  mounted: function mounted() {
    // this.retrieveAddOns();
    this.$refs.on.click();
    this.$refs.pro.click();
    this.$refs.cate.click();
    this.retrieveProducts();
    this.retrieveCategories();
    this.retrieveAddOns();
    this.retrieveCupType();
  },
  methods: {
    NACupUpdate: function NACupUpdate(id) {
      var _this = this;

      var param = {
        id: id,
        status: 'Not Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param).then(function (response) {
        _this.retrieveCupType();
      });
    },
    availableCupUpdate: function availableCupUpdate(id) {
      var _this2 = this;

      var param = {
        id: id,
        status: 'Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param).then(function (response) {
        _this2.retrieveCupType();
      });
    },
    retrieveCupType: function retrieveCupType() {
      var _this3 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupType").then(function (response) {
        _this3.cupData = response.data.cupType;
      });
    },
    addingCupType: function addingCupType() {
      var _this4 = this;

      if (this.inputCupPrice !== null && this.inputCup !== null) {
        var param = {
          cupType: this.inputCup,
          cupQuantity: this.inputCupQuantity,
          price: this.inputCupPrice,
          status: 'Available'
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingCupType", param).then(function (response) {
          _this4.retrieveCupType();

          _this4.hide();
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    editingCupType: function editingCupType() {
      var _this5 = this;

      if (this.inputCupPrice !== null && this.inputCup !== null) {
        var param = {
          id: this.idCup,
          cupType: this.inputCup,
          cupQuantity: this.inputCupQuantity,
          price: this.inputCupPrice,
          status: this.cupStatus
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "editingCupType", param).then(function (response) {
          _this5.retrieveCupType();

          _this5.hide();
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    normalPrice: function normalPrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add('borderStyle1');
        event.target.classList.remove('btnBorderStyle');

        if (this.priceEvent !== '') {
          this.priceEvent.classList.add('btnBorderStyle');
          this.priceEvent.classList.remove('borderStyle1');
        }
      }

      this.priceEvent = event.target;
      this.online = false;
    },
    onlinePrice: function onlinePrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add('borderStyle1');
        event.target.classList.remove('btnBorderStyle');

        if (this.priceEvent !== '') {
          this.priceEvent.classList.add('btnBorderStyle');
          this.priceEvent.classList.remove('borderStyle1');
        }
      }

      this.online = true;
      this.priceEvent = event.target;
    },
    onImgChange: function onImgChange(e) {
      this.img = e.target.files[0];
      this.imgURL = URL.createObjectURL(e.target.files[0]);
    },
    formSubmitProduct: function formSubmitProduct(e) {
      if (this.img !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null) {
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
        formData.append('status', 'Available');
        formData.append('lowPrice', this.lowPrice);
        formData.append('highPrice', this.highPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehighPrice', this.onlinehighPrice);
        formData.append('onlineoverPrice', this.onlineoverPrice);
        axios.post('/formSubmit', formData, config).then(function (response) {
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.output = error;
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    editProduct: function editProduct(item) {
      this.showProductModal = true;
      this.productName = item.productName;
      this.prodType = item.productCategory;
      this.img = item.image;
      this.lowPrice = item.lowPrice;
      this.highPrice = item.highPrice;
      this.overPrice = item.overPrice;
      this.onlinelowPrice = item.onlinelowPrice;
      this.onlinehighPrice = item.onlinehighPrice;
      this.onlineoverPrice = item.onlineoverPrice;
      this.imgURL = item.image;
      this.productAdd = false;
      this.productEdit = true;
      this.status = item.status;
      this.prodId = item.id;
    },
    updateProduct: function updateProduct(e) {
      if (this.img !== null && this.prodType !== null && this.productName !== null && this.lowPrice !== null && this.highPrice !== null && this.overPrice !== null && this.onlinelowPrice !== null && this.onlinehighPrice !== null & this.onlineoverPrice !== null) {
        e.preventDefault();
        var currentObj = this;
        var config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        var formData = new FormData();
        formData.append('id', this.prodId);
        formData.append('image', this.img);
        formData.append('status', this.status);
        formData.append('productCategory', this.prodType);
        formData.append('productName', this.productName);
        formData.append('lowPrice', this.lowPrice);
        formData.append('higPrice', this.higPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehigPrice', this.onlinehigPrice);
        formData.append('onlineoverPrice', this.onlineoverPrice);
        axios.post('/updateProduct', formData, config).then(function (response) {
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.output = error;
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    productStatusUpdate: function productStatusUpdate(id) {
      var _this6 = this;

      var param = {
        id: id,
        status: 'Not Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        _this6.retrieveProducts();
      });
    },
    productStatusAvailable: function productStatusAvailable(id) {
      var _this7 = this;

      var param = {
        id: id,
        status: 'Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        _this7.retrieveProducts();
      });
    },
    onImageChange: function onImageChange(e) {
      this.image = e.target.files[0];
      this.imageURL = URL.createObjectURL(e.target.files[0]);
    },
    formSubmit: function formSubmit(e) {
      if (this.image !== null && this.productType !== null) {
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
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.output = error;
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    category: function category(event, _category) {
      var buttons = document.getElementsByClassName("hb");

      for (var idx = 0; idx < buttons.length; idx++) {
        var button = buttons[idx];

        if (button.id === _category) {
          button.classList.add('borderStyle');
          button.classList.remove('btnBorderStyle1');
        } else {
          button.classList.remove('borderStyle');
          button.classList.add('btnBorderStyle1');
        }
      }

      this.Event = event.target;
      this.prod = false;
      this.cat = true;
      this.ons = false;
      this.cup = false;
    },
    categ: function categ(event, category) {
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
      this.cup = false;
    },
    showAddOns: function showAddOns() {
      this.showAddOnsModal = true;
      this.addonsShow = true;
      this.inputAddOns = null;
      this.addOnsPrice = null;
    },
    showProduct: function showProduct() {
      this.showProductModal = true;
      this.productAdd = true;
      this.productEdit = false;
      this.prodType = null;
      this.productName = null;
      this.lowPrice = null;
      this.highPrice = null;
      this.overPrice = null;
      this.onlinelowPrice = null;
      this.onlinehighPrice = null;
      this.onlineoverPrice = null;
      this.imgURL = null;
    },
    showCategory: function showCategory() {
      this.showCategoryModal = true;
      this.imageURL = null;
      this.productType = null;
    },
    showCupType: function showCupType() {
      this.showCupTypeModal = true;
      this.btnCupType = true;
      this.inputCupPrice = null;
      this.inputCup = null;
      this.inputCupQuantity = null;
    },
    editCup: function editCup(item) {
      this.showCupTypeModal = true;
      this.btnEditCupType = true;
      this.idCup = item.id;
      this.inputCup = item.cupTypeName;
      this.inputCupQuantity = item.cupQuantity;
      this.inputCupPrice = item.cupTypePrice;
      this.cupStatus = item.status;
    },
    hide: function hide() {
      this.showAddOnsModal = false;
      this.showProductModal = false;
      this.showCategoryModal = false;
      this.editAddOnsShow = false;
      this.addonsShow = false;
      this.showCupTypeModal = false;
      this.btnCupType = false;
      this.btnEditCupType = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
    addAddOns: function addAddOns() {
      var _this8 = this;

      if (this.addOnsPrice !== null && this.inputAddOns !== null) {
        var param = {
          addOns: this.inputAddOns,
          price: this.addOnsPrice,
          status: 'Available'
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingAddOns", param).then(function (response) {
          _this8.retrieveAddOns();

          _this8.hide();
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this9 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrievingAddOns").then(function (response) {
        _this9.datas = response.data.addons;
      });
    },
    editAddOns: function editAddOns(item) {
      this.showAddOnsModal = true;
      this.inputAddOns = item.addons_name;
      this.addOnsPrice = item.addons_price;
      this.addOnsStat = item.status;
      this.editAddOnsShow = true;
      this.idAddOns = item.id;
    },
    editAddOnsData: function editAddOnsData() {
      var _this10 = this;

      if (this.addOnsPrice !== null && this.inputAddOns !== null) {
        var param = {
          id: this.idAddOns,
          addOns: this.inputAddOns,
          price: this.addOnsPrice,
          status: this.addOnsStat
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAddOns", param).then(function (response) {
          _this10.retrieveAddOns();

          _this10.hide();
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    NAStatusUpdate: function NAStatusUpdate(id) {
      var _this11 = this;

      var param = {
        id: id,
        status: 'Not Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param).then(function (response) {
        _this11.retrieveAddOns();
      });
    },
    availableStatusUpdate: function availableStatusUpdate(id) {
      var _this12 = this;

      var param = {
        id: id,
        status: 'Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param).then(function (response) {
        _this12.retrieveAddOns();
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this13 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct").then(function (response) {
        _this13.productData = response.data.product;
      });
    },
    retrieveCategories: function retrieveCategories() {
      var _this14 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCategoryAscending").then(function (response) {
        _this14.categoryData = response.data.addCategory;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.errorColor[data-v-d32a416e]{\r\n    color: red;\n}\n[data-v-d32a416e]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.my-custom-scrollbar[data-v-62e92aac][data-v-d32a416e] {\r\n    position: relative;\r\n    height: 500px;\r\n    width: 100%;\r\n    overflow: auto;\n}\n.fileStyle[data-v-d32a416e]{\r\n    font-size: 17px !important;\r\n    width: 97px;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\n}\n.addOnsImage[data-v-d32a416e]{\r\n    width: 250px !important; \r\n    height: 250px !important; \r\n    margin-top: 2% !important;\n}\n.navButton[data-v-d32a416e]{\r\n    float: left;\r\n    width: 200px;\n}\n.borderStyle1[data-v-d32a416e]{\r\n    border-left: 1px solid #d8dce3;\r\n    border-top: 1px solid #d8dce3;\r\n    border-right: 1px solid #d8dce3;\n}\n.btnBorderStyle[data-v-d32a416e]{\r\n    margin-top: -0.7%;\r\n    border-bottom: 1px solid #d8dce3;\n}\n.borderStyle[data-v-d32a416e]{\r\n    border-left: 3px solid grey;\r\n    border-top: 3px solid grey;\r\n    border-right: 3px solid grey;\r\n    /* background-color: #f0f3f5; */\n}\n.btnBorderStyle1[data-v-d32a416e]{\r\n    border-bottom: 3px solid grey;\r\n    /* background-color: #d8dce3; */\n}\n.table tr[data-v-d32a416e]{\r\n   text-align: center;\n}\nimg[data-v-d32a416e]{\r\n    height: 50px;\r\n    width: 100px;\n}\nhr[data-v-d32a416e]{\r\n    border: 1px solid gray;\n}\nlabel[data-v-d32a416e]{\r\n    font-size: 20px !important;\n}\n.blurred-background[data-v-d32a416e] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    background: rgb(54, 54, 54, .7);\n}\n.alert-box[data-v-d32a416e] {\r\n    width: 400px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 180px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-d32a416e] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 150px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box3[data-v-d32a416e] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 50px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.productTable[data-v-d32a416e] {\r\n    width: 100%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.categoryTable[data-v-d32a416e]{\r\n    width: 70%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.addOnsTable[data-v-d32a416e]{\r\n    width: 50%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.cupTable[data-v-d32a416e]{\r\n    width: 60%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-d32a416e] {\r\n    position: relative;\r\n    height: 500px;\r\n    width:70%;\r\n    overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-d32a416e] {\r\n    display: contents;\n}\n.div[data-v-d32a416e] {\r\n    /* border-style: solid; */\r\n    margin-bottom: 5%;\n}\n.btnModal[data-v-d32a416e]{\r\n    float: right;\r\n    margin-right: 1%;\n}\n#buttonAdd[data-v-d32a416e] {\r\n    float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: " container div" },
    [
      _c(
        "div",
        [
          _c("center", [
            _c("br"),
            _vm._v(" "),
            _c("h1", [_vm._v("Order Record")])
          ])
        ],
        1
      ),
      _c("br"),
      _vm._v(" "),
      _vm._l(_vm.categoryData, function(item, index) {
        return _c("div", { key: index }, [
          _c(
            "button",
            {
              ref: item.productCategory,
              refInFor: true,
              class:
                "btn navButton hb " +
                (index === 0 ? "borderStyle" : "btnBorderStyle1"),
              attrs: { type: "button", id: item.productCategory },
              on: {
                click: function($event) {
                  return _vm.category($event, item.productCategory)
                }
              }
            },
            [_vm._v(_vm._s(item.productCategory))]
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "div",
        [
          _c("center", [
            _c(
              "div",
              { staticStyle: { "margin-top": "5%", "text-align": "center" } },
              [
                _c("center", [
                  _c(
                    "button",
                    {
                      ref: "cate",
                      staticClass: "btn navButton borderStyle",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.categ($event)
                        }
                      }
                    },
                    [_vm._v("Low Dose")]
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
                          return _vm.categ($event)
                        }
                      }
                    },
                    [_vm._v("High Dose")]
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
                          return _vm.categ($event)
                        }
                      }
                    },
                    [_vm._v("Over Dose")]
                  )
                ])
              ],
              1
            ),
            _vm._v(" "),
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
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Name")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Low Dose Price")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("High Dose Price")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Over Dose Price")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Status")
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
                              _c("td", [_vm._v(_vm._s(item.lowPrice))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.highPrice))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.overPrice))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.status))]),
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
                                    item.status === "Available"
                                      ? _c(
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
                                      : _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning",
                                            staticStyle: {
                                              color: "red",
                                              display: "inline-block"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.productStatusAvailable(
                                                  item.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Available")]
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
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Name")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Price")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Status")
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
                          _vm._l(_vm.datas, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.addons_name))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.addons_price))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.status))]),
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
                                            return _vm.editAddOns(item)
                                          }
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    ),
                                    _vm._v(" "),
                                    item.status === "Available"
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning",
                                            staticStyle: {
                                              color: "red",
                                              display: "inline-block"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.NAStatusUpdate(
                                                  item.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("N/A")]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning",
                                            staticStyle: {
                                              color: "red",
                                              display: "inline-block"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.availableStatusUpdate(
                                                  item.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Available")]
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
            _vm.cup
              ? _c("div", { staticClass: "my-custom-scrollbar" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-striped cupTable",
                      attrs: { id: "myTable" }
                    },
                    [
                      _c("thead", { staticClass: "thead-light" }, [
                        _c("tr", { staticClass: "header" }, [
                          _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Cup Type")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Additional Price")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Cup Quantity")
                          ]),
                          _vm._v(" "),
                          _c("th", { attrs: { scope: "col" } }, [
                            _vm._v("Status")
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
                          _vm._l(_vm.cupData, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { attrs: { scope: "row" } }, [
                                _vm._v(_vm._s(index + 1))
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.cupTypeName))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.cupTypePrice))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.cupQuantity))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(item.status))]),
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
                                            return _vm.editCup(item)
                                          }
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    ),
                                    _vm._v(" "),
                                    item.status === "Available"
                                      ? _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning",
                                            staticStyle: {
                                              color: "red",
                                              display: "inline-block"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.NACupUpdate(item.id)
                                              }
                                            }
                                          },
                                          [_vm._v("N/A")]
                                        )
                                      : _c(
                                          "button",
                                          {
                                            staticClass: "btn btn-warning",
                                            staticStyle: {
                                              color: "red",
                                              display: "inline-block"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.availableCupUpdate(
                                                  item.id
                                                )
                                              }
                                            }
                                          },
                                          [_vm._v("Available")]
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
              : _vm._e()
          ])
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _salesInventory_vue_vue_type_template_id_d32a416e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesInventory.vue?vue&type=template&id=d32a416e&scoped=true& */ "./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&scoped=true&");
/* harmony import */ var _salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css& */ "./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _salesInventory_vue_vue_type_template_id_d32a416e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _salesInventory_vue_vue_type_template_id_d32a416e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d32a416e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/salesInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./salesInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=style&index=0&id=d32a416e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_style_index_0_id_d32a416e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_template_id_d32a416e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./salesInventory.vue?vue&type=template&id=d32a416e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/salesInventory.vue?vue&type=template&id=d32a416e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_template_id_d32a416e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_salesInventory_vue_vue_type_template_id_d32a416e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);