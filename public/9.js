(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showCupSizeModal: false,
      btnCupType: false,
      btnEditCupType: false,
      inputCupPrice: null,
      inputCup: null,
      inputCupQuantity: null,
      cupStatus: null,
      idCup: null,
      cupData: null,
      prod: false,
      cat: true,
      ons: false,
      cup: false,
      size: false,
      secondEvent: '',
      productAdd: false,
      productEdit: false,
      status: null,
      prodId: null,
      priceEvent: '',
      online: false,
      errorMessage: null,
      lowDoseCup: null,
      highDoseCup: null,
      overDoseCup: null,
      cupSizeData: null,
      search: null,
      dialogForCupType: false,
      dialogForCategory: false,
      dialogForAddOns: false,
      dialogForCupSize: false,
      headersForAddOns: [{
        text: 'Id',
        value: 'id'
      }, {
        text: 'Add Ons Name',
        value: 'addons_name'
      }, {
        text: 'Add Ons Price',
        value: 'addons_price'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'ACTION',
        value: 'actions',
        sortable: false
      }],
      headersForCupType: [{
        text: '#',
        value: 'id'
      }, {
        text: 'Cup Type',
        value: 'cupTypeName'
      }, {
        text: 'Additional Price',
        value: 'cupTypePrice'
      }, {
        text: 'Cup Quantity',
        value: 'cupQuantity'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'ACTION',
        value: 'actions',
        sortable: false
      }],
      headersForCategory: [{
        text: '#',
        value: 'id'
      }, {
        text: 'images',
        value: 'image'
      }, {
        text: 'Product Category',
        value: 'productCategory'
      }, {
        text: 'ACTION',
        value: 'actions',
        sortable: false
      }],
      headersForProduct: [{
        text: '#',
        value: 'id'
      }, {
        text: 'images',
        value: 'image'
      }, {
        text: 'Product Name',
        value: 'productName'
      }, {
        text: 'Product Category',
        value: 'productCategory'
      }, {
        text: 'Low Dose Price',
        value: 'lowPrice'
      }, {
        text: 'High Dose Price',
        value: 'highPrice'
      }, {
        text: 'Over Dose Price',
        value: 'overPrice'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'ACTION',
        value: 'actions',
        sortable: false
      }],
      headersForCupSize: [{
        text: 'Date',
        value: 'created_at'
      }, {
        text: 'Low Dose Cup',
        value: 'incomingLowDose'
      }, {
        text: 'High Dose Cup',
        value: 'incomingHighDose'
      }, {
        text: 'Over Dose Cup',
        value: 'incomingOverDose'
      }, {
        text: 'Total IncomingCup',
        value: 'incomingOverDose' + ''
      }]
    };
  },
  mounted: function mounted() {
    // this.retrieveAddOns();
    this.$refs.on.click();
    this.$refs.pro.click();
    this.$refs.cate.click();
    this.$refs.size.click();
    this.retrieveProducts();
    this.retrieveCategories();
    this.retrieveAddOns();
    this.retrieveCupType();
    this.retrieveCupSize();
  },
  methods: {
    NACupUpdate: function NACupUpdate(id) {
      var _this = this;

      var param = {
        id: id,
        status: 'Not Available'
      };
      console.log(param);
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param).then(function (response) {
        _this.retrieveCupType();
      });
    },
    availableCupUpdate: function availableCupUpdate(id) {
      var _this2 = this;

      console.log(param);
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

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllCupType").then(function (response) {
        _this3.cupData = response.data.cupType;
      });
    },
    retrieveCupSize: function retrieveCupSize() {
      var _this4 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCupSize").then(function (response) {
        _this4.cupSizeData = response.data.quantityCupsInDB;
        response.data.quantityCupsInDB.forEach(function (element) {
          console.log(element.incomingLowDose);
        });
        var totalCup = response.data.quantityCupsInDB.incomingOverDose;
        console.log(totalCup);
      });
    },
    addingCupType: function addingCupType() {
      var _this5 = this;

      if (this.inputCupPrice !== null && this.inputCup !== null) {
        var param = {
          cupType: this.inputCup,
          cupQuantity: this.inputCupQuantity,
          price: this.inputCupPrice,
          status: 'Available'
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingCupType", param).then(function (response) {
          _this5.retrieveCupType();

          _this5.dialogForCupType = false;
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    addingCupSize: function addingCupSize() {
      var _this6 = this;

      console.log('sud');

      if (this.lowDoseCup !== null && this.highDoseCup !== null && this.overDoseCup !== null) {
        var param = {
          incomingLowDose: this.lowDoseCup,
          incomingHighDose: this.highDoseCup,
          incomingOverDose: this.overDoseCup
        };
        console.log(param);
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addIncomingCups", param).then(function (response) {
          _this6.retrieveCupSize();

          _this6.hide();
        });
      } else {
        console.log('error');
        this.errorMessage = 'All fields are required!';
      }
    },
    editingCupType: function editingCupType() {
      var _this7 = this;

      if (this.inputCupPrice !== null && this.inputCup !== null) {
        var param = {
          id: this.idCup,
          cupType: this.inputCup,
          cupQuantity: this.inputCupQuantity,
          price: this.inputCupPrice,
          status: this.cupStatus
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "editingCupType", param).then(function (response) {
          _this7.retrieveCupType();

          _this7.hide();
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
        console.log(formData);
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
        formData.append('highPrice', this.highPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehighPrice', this.onlinehighPrice);
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
      var _this8 = this;

      var param = {
        id: id,
        status: 'Not Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        _this8.retrieveProducts();

        console.log('updated successfully!');
      });
    },
    productStatusAvailable: function productStatusAvailable(id) {
      var _this9 = this;

      var param = {
        id: id,
        status: 'Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        _this9.retrieveProducts();

        console.log('updated successfully!');
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
          this.dialogForCategory = false;
        })["catch"](function (error) {
          currentObj.output = error;
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
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
      this.cup = false;
      this.size = false;
    },
    cupSize: function cupSize(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add('borderStyle');
        event.target.classList.remove('btnBorderStyle1');

        if (this.secondEvent !== '') {
          this.secondEvent.classList.add('btnBorderStyle1');
          this.secondEvent.classList.remove('borderStyle');
        }
      }

      this.secondEvent = event.target;
      this.size = true;
      this.prod = false;
      this.cat = false;
      this.ons = false;
      this.cup = false;
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
      this.cup = false;
      this.size = false;
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
      this.cup = false;
      this.size = false;
    },
    addCupType: function addCupType(event) {
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
      this.ons = false;
      this.cup = true;
      this.size = false;
    },
    showAddOns: function showAddOns() {
      this.showAddOnsModal = true;
      this.addonsShow = true;
      this.inputAddOns = null;
      this.addOnsPrice = null;
    },
    showCupSize: function showCupSize() {
      this.showCupSizeModal = true;
      this.cupSizeShow = true;
      this.lowDoseCup = null;
      this.highDoseCup = null;
      this.overDoseCup = null;
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
      this.showCupSizeModal = false;
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_1__["default"].push(route)["catch"](function () {});
    },
    addAddOns: function addAddOns() {
      var _this10 = this;

      if (this.addOnsPrice !== null && this.inputAddOns !== null) {
        var param = {
          addOns: this.inputAddOns,
          price: this.addOnsPrice,
          status: 'Available'
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingAddOns", param).then(function (response) {
          _this10.retrieveAddOns();

          _this10.dialogForAddOns = false;
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this11 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllAddOns").then(function (response) {
        _this11.datas = response.data.addons;
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
      var _this12 = this;

      if (this.addOnsPrice !== null && this.inputAddOns !== null) {
        var param = {
          id: this.idAddOns,
          addOns: this.inputAddOns,
          price: this.addOnsPrice,
          status: this.addOnsStat
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAddOns", param).then(function (response) {
          _this12.retrieveAddOns();

          _this12.hide();
        });
      } else {
        this.errorMessage = 'All fields are required!';
      }
    },
    NAStatusUpdate: function NAStatusUpdate(id) {
      var _this13 = this;

      var param = {
        id: id,
        status: 'Not Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param).then(function (response) {
        _this13.retrieveAddOns();
      });
    },
    availableStatusUpdate: function availableStatusUpdate(id) {
      var _this14 = this;

      var param = {
        id: id,
        status: 'Available'
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param).then(function (response) {
        _this14.retrieveAddOns();
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this15 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllProduct").then(function (response) {
        _this15.productData = response.data.product;
      });
    },
    retrieveCategories: function retrieveCategories() {
      var _this16 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCategory").then(function (response) {
        _this16.categoryData = response.data.addCategory;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-input__slot[data-v-62e92aac] {\r\n    margin-bottom: -35px;\n}\n.errorColor[data-v-62e92aac]{\r\n    color: red;\n}\n[data-v-62e92aac]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.my-custom-scrollbar[data-v-62e92aac][data-v-62e92aac] {\r\n    position: relative;\r\n    height: 500px;\r\n    width: 100%;\r\n    overflow: auto;\n}\n.fileStyle[data-v-62e92aac]{\r\n    font-size: 17px !important;\r\n    width: 97px;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\n}\n.addOnsImage[data-v-62e92aac]{\r\n    width: 250px !important; \r\n    height: 250px !important; \r\n    margin-top: 2% !important;\n}\n.navButton[data-v-62e92aac]{\r\n    float: left;\r\n    width: 200px;\n}\n.borderStyle1[data-v-62e92aac]{\r\n    border-left: 1px solid #d8dce3;\r\n    border-top: 1px solid #d8dce3;\r\n    border-right: 1px solid #d8dce3;\n}\n.btnBorderStyle[data-v-62e92aac]{\r\n    margin-top: -0.7%;\r\n    border-bottom: 1px solid #d8dce3;\n}\n.borderStyle[data-v-62e92aac]{\r\n    border-left: 3px solid grey;\r\n    border-top: 3px solid grey;\r\n    border-right: 3px solid grey;\n}\n.btnBorderStyle1[data-v-62e92aac]{\r\n    border-bottom: 3px solid grey;\n}\n.table tr[data-v-62e92aac]{\r\n   text-align: center;\n}\nimg[data-v-62e92aac]{\r\n    height: 50px;\r\n    width: 100px;\n}\nhr[data-v-62e92aac]{\r\n    border: 1px solid gray;\n}\nth[data-v-62e92aac]{\r\n    text-align:center;\r\n    font-size:30px;\n}\nlabel[data-v-62e92aac]{\r\n    font-size: 20px !important;\n}\n.blurred-background[data-v-62e92aac] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    background: rgb(54, 54, 54, .7);\n}\n.table[data-v-62e92aac]{\r\n    width:90%;\r\n    margin-top:60px;\n}\n.searchInput[data-v-62e92aac]{\r\n    width:50%\n}#alert-box[data-v-62e92aac] {\r\n    width: 400px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 180px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-62e92aac] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 150px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n#alert-box3[data-v-62e92aac] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 50px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.productTable[data-v-62e92aac] {\r\n    width: 100%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.categoryTable[data-v-62e92aac]{\r\n    width: 70%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.addOnsTable[data-v-62e92aac]{\r\n    width: 50%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.cupTable[data-v-62e92aac]{\r\n    width: 60%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-62e92aac] {\r\n    position: relative;\r\n    height: 500px;\r\n    width:70%;\r\n    overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-62e92aac] {\r\n    display: contents;\n}\n.div[data-v-62e92aac] {\r\n    /* border-style: solid; */\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\n}\n.btnModal[data-v-62e92aac]{\r\n    float: right;\r\n    margin-right: 1%;\n}\n#buttonAdd[data-v-62e92aac] {\r\n    float: right;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("center", [
        _c("h1", [_vm._v("Add Products, Categories and Add-ons")]),
        _c("br")
      ]),
      _vm._v(" "),
      [
        _c(
          "v-bottom-navigation",
          { staticStyle: { "background-color": "#ff5b04" } },
          [
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
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "cup",
                staticClass: "btn navButton btnBorderStyle1",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.addCupType($event)
                  }
                }
              },
              [_vm._v("Cup Type")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                ref: "size",
                staticClass: "btn navButton btnBorderStyle1",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.cupSize($event)
                  }
                }
              },
              [_vm._v("Cup Size ")]
            )
          ]
        )
      ],
      _vm._v(" "),
      _c(
        "div",
        [
          _c("center", [
            _vm.size
              ? _c(
                  "div",
                  { staticClass: "my-custom-scrollbar" },
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-3",
                      attrs: {
                        headers: _vm.headersForCupSize,
                        items: _vm.cupSizeData,
                        "items-per-page": 5,
                        search: _vm.search
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-toolbar",
                                  {
                                    staticClass: "mb-1",
                                    attrs: {
                                      color: "blue darken-1",
                                      dark: "",
                                      flat: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      {
                                        staticClass: "col pa-3 py-4 white--text"
                                      },
                                      [_vm._v("MILK TEA CUP SIZE")]
                                    ),
                                    _vm._v(
                                      "      \n                                "
                                    ),
                                    _c("v-text-field", {
                                      attrs: {
                                        clearable: "",
                                        flat: "",
                                        "solo-inverted": "",
                                        "prepend-inner-icon": "mdi-magnify",
                                        label: "Search"
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { vertical: "" }
                                    }),
                                    _vm._v(" "),
                                    _vm.size
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "btn btn-primary btnModal",
                                            attrs: {
                                              color: "primary",
                                              type: "button",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.dialogForCupSize = true
                                              }
                                            }
                                          },
                                          [_vm._v("+ CUP SIZE")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editItem(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-pencil")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-icon",
                                  {
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteItem(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-delete")]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3565543454
                      )
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.cat
              ? _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-3",
                      attrs: {
                        headers: _vm.headersForCategory,
                        items: _vm.categoryData,
                        "items-per-page": 5,
                        search: _vm.search
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-toolbar",
                                  {
                                    staticClass: "mb-1",
                                    attrs: {
                                      color: "blue darken-1",
                                      dark: "",
                                      flat: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      {
                                        staticClass: "col pa-3 py-4 white--text"
                                      },
                                      [_vm._v("MILK TEA CATEGORY")]
                                    ),
                                    _vm._v(
                                      "      \n                                "
                                    ),
                                    _c("v-text-field", {
                                      attrs: {
                                        clearable: "",
                                        flat: "",
                                        "solo-inverted": "",
                                        "prepend-inner-icon": "mdi-magnify",
                                        label: "Search"
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { vertical: "" }
                                    }),
                                    _vm._v(" "),
                                    _vm.cat
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "btn btn-primary btnModal",
                                            attrs: {
                                              color: "primary",
                                              type: "button",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.dialogForCategory = true
                                              }
                                            }
                                          },
                                          [_vm._v("+ CATEGORY")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.image",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("v-img", {
                                  staticStyle: {
                                    width: "50px",
                                    hieght: "50px"
                                  },
                                  attrs: { src: item.image }
                                })
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editCategories(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-pencil")]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        3277023749
                      )
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.prod
              ? _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-3",
                      attrs: {
                        headers: _vm.headersForProduct,
                        items: _vm.productData,
                        "items-per-page": 5,
                        search: _vm.search
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-toolbar",
                                  {
                                    staticClass: "mb-1",
                                    attrs: {
                                      color: "blue darken-1",
                                      dark: "",
                                      flat: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      {
                                        staticClass: "col pa-3 py-4 white--text"
                                      },
                                      [_vm._v("MILK TEA PRODUCT")]
                                    ),
                                    _vm._v(
                                      "      \n                                "
                                    ),
                                    _c("v-text-field", {
                                      attrs: {
                                        clearable: "",
                                        flat: "",
                                        "solo-inverted": "",
                                        "prepend-inner-icon": "mdi-magnify",
                                        label: "Search"
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { vertical: "" }
                                    }),
                                    _vm._v(" "),
                                    _vm.prod
                                      ? _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              type: "button",
                                              color: "primary"
                                            },
                                            on: { click: _vm.showProduct }
                                          },
                                          [_vm._v("+ PRODUCT")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.image",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("v-img", {
                                  staticStyle: {
                                    width: "50px",
                                    hieght: "50px"
                                  },
                                  attrs: { src: item.image }
                                })
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editProduct(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-pencil")]
                                ),
                                _vm._v(" "),
                                item.status === "Available"
                                  ? _c(
                                      "v-icon",
                                      {
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.productStatusUpdate(
                                              item.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-window-close")]
                                    )
                                  : _c(
                                      "v-icon",
                                      {
                                        staticClass: "btn btn-warning",
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.productStatusAvailable(
                                              item.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-check")]
                                    )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        2357058539
                      )
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.ons
              ? _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-3",
                      attrs: {
                        headers: _vm.headersForAddOns,
                        items: _vm.datas,
                        "items-per-page": 5,
                        search: _vm.search
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-toolbar",
                                  {
                                    staticClass: "mb-1",
                                    attrs: {
                                      color: "blue darken-1",
                                      dark: "",
                                      flat: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      {
                                        staticClass: "col pa-3 py-4 white--text"
                                      },
                                      [_vm._v("MILK TEA ADDONS")]
                                    ),
                                    _vm._v(
                                      "      \n                                "
                                    ),
                                    _c("v-text-field", {
                                      attrs: {
                                        clearable: "",
                                        flat: "",
                                        "solo-inverted": "",
                                        "prepend-inner-icon": "mdi-magnify",
                                        label: "Search"
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { vertical: "" }
                                    }),
                                    _vm._v(" "),
                                    _vm.ons
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "btn btn-primary btnModal",
                                            attrs: {
                                              color: "primary",
                                              type: "button",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.dialogForAddOns = true
                                              }
                                            }
                                          },
                                          [_vm._v("+ ADD ONS")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.image",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c("v-img", {
                                  staticStyle: {
                                    width: "50px",
                                    hieght: "50px"
                                  },
                                  attrs: { src: item.image }
                                })
                              ]
                            }
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editAddOns(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-pencil")]
                                ),
                                _vm._v(" "),
                                item.status === "Available"
                                  ? _c(
                                      "v-icon",
                                      {
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.NAStatusUpdate(item.id)
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-delete")]
                                    )
                                  : _c(
                                      "v-icon",
                                      {
                                        staticClass: "btn btn-warning",
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.availableStatusUpdate(
                                              item.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-pencil")]
                                    )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        4254536565
                      )
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.cup
              ? _c(
                  "div",
                  [
                    _c("v-data-table", {
                      staticClass: "elevation-3",
                      attrs: {
                        headers: _vm.headersForCupType,
                        items: _vm.cupData,
                        search: _vm.search,
                        "items-per-page": 5
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "top",
                            fn: function() {
                              return [
                                _c(
                                  "v-toolbar",
                                  {
                                    staticClass: "mb-1",
                                    attrs: {
                                      color: "blue darken-1",
                                      dark: "",
                                      flat: ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-toolbar-title",
                                      {
                                        staticClass: "col pa-3 py-4 white--text"
                                      },
                                      [_vm._v("MILK TEA PRODUCT")]
                                    ),
                                    _vm._v(
                                      "      \n                                "
                                    ),
                                    _c("v-text-field", {
                                      attrs: {
                                        clearable: "",
                                        flat: "",
                                        "solo-inverted": "",
                                        "prepend-inner-icon": "mdi-magnify",
                                        label: "Search"
                                      },
                                      model: {
                                        value: _vm.search,
                                        callback: function($$v) {
                                          _vm.search = $$v
                                        },
                                        expression: "search"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { vertical: "" }
                                    }),
                                    _vm._v(" "),
                                    _vm.cup
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "btn btn-primary btnModal",
                                            attrs: {
                                              color: "primary",
                                              type: "button",
                                              dark: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.dialogForCupType = true
                                              }
                                            }
                                          },
                                          [_vm._v("+ CUP TYPE")]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "item.actions",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-icon",
                                  {
                                    staticClass: "mr-2",
                                    attrs: { small: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.editCup(item)
                                      }
                                    }
                                  },
                                  [_vm._v("mdi-pencil")]
                                ),
                                _vm._v(" "),
                                item.status === "Available"
                                  ? _c(
                                      "v-icon",
                                      {
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.NACupUpdate(item.id)
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-delete")]
                                    )
                                  : _c(
                                      "v-icon",
                                      {
                                        staticClass: "btn btn-warning",
                                        attrs: { small: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.availableCupUpdate(
                                              item.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("mdi-pencil")]
                                    )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        353126926
                      )
                    })
                  ],
                  1
                )
              : _vm._e()
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          [
            _c(
              "v-row",
              { attrs: { justify: "center" } },
              [
                _c(
                  "v-dialog",
                  {
                    attrs: { persistent: "", "max-width": "600px" },
                    model: {
                      value: _vm.dialogForCupType,
                      callback: function($$v) {
                        _vm.dialogForCupType = $$v
                      },
                      expression: "dialogForCupType"
                    }
                  },
                  [
                    _c(
                      "v-card",
                      [
                        _c("v-card-title", [
                          _c("span", { staticClass: "headline" }, [
                            _vm._v("ADD CUP TYPE")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-form",
                              [
                                _vm.errorMessage !== null
                                  ? _c("span", { staticClass: "errorColor" }, [
                                      _vm._v(_vm._s(_vm.errorMessage))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Cup Type Name",
                                            outlined: "",
                                            dense: "",
                                            type: "text",
                                            id: "cupName"
                                          },
                                          model: {
                                            value: _vm.inputCup,
                                            callback: function($$v) {
                                              _vm.inputCup = $$v
                                            },
                                            expression: "inputCup"
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
                                            label: "Quantity",
                                            outlined: "",
                                            dense: "",
                                            type: "number"
                                          },
                                          model: {
                                            value: _vm.inputCupQuantity,
                                            callback: function($$v) {
                                              _vm.inputCupQuantity = $$v
                                            },
                                            expression: "inputCupQuantity"
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
                                            label: "Quantity Price",
                                            outlined: "",
                                            dense: "",
                                            type: "number",
                                            min: "1",
                                            id: "price"
                                          },
                                          model: {
                                            value: _vm.inputCupPrice,
                                            callback: function($$v) {
                                              _vm.inputCupPrice = $$v
                                            },
                                            expression: "inputCupPrice"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialogForCupType = false
                                  }
                                }
                              },
                              [_vm._v(" Close")]
                            ),
                            _vm._v(" "),
                            _vm.dialogForCupType
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      color: "blue darken-1",
                                      text: "",
                                      type: "button"
                                    },
                                    on: { click: _vm.addingCupType }
                                  },
                                  [_vm._v("Add Cup Type")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.btnEditCupType
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      color: "blue darken-1",
                                      text: "",
                                      type: "button"
                                    },
                                    on: { click: _vm.editingCupType }
                                  },
                                  [_vm._v("Save")]
                                )
                              : _vm._e()
                          ],
                          1
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
          ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          [
            _c(
              "v-row",
              { attrs: { justify: "center" } },
              [
                _c(
                  "v-dialog",
                  {
                    attrs: { persistent: "", "max-width": "600px" },
                    model: {
                      value: _vm.dialogForAddOns,
                      callback: function($$v) {
                        _vm.dialogForAddOns = $$v
                      },
                      expression: "dialogForAddOns"
                    }
                  },
                  [
                    _c(
                      "v-card",
                      [
                        _c("v-card-title", [
                          _c("span", { staticClass: "headline" }, [
                            _vm._v("ADD ADD ONS")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-form",
                              [
                                _vm.errorMessage !== null
                                  ? _c("span", { staticClass: "errorColor" }, [
                                      _vm._v(_vm._s(_vm.errorMessage))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Add Ons Name",
                                            outlined: "",
                                            dense: "",
                                            type: "text",
                                            id: "cupName"
                                          },
                                          model: {
                                            value: _vm.inputAddOns,
                                            callback: function($$v) {
                                              _vm.inputAddOns = $$v
                                            },
                                            expression: "inputAddOns"
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
                                            label: "Addons Price",
                                            outlined: "",
                                            dense: "",
                                            type: "number"
                                          },
                                          model: {
                                            value: _vm.addOnsPrice,
                                            callback: function($$v) {
                                              _vm.addOnsPrice = $$v
                                            },
                                            expression: "addOnsPrice"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialogForAddOns = false
                                  }
                                }
                              },
                              [_vm._v(" Close")]
                            ),
                            _vm._v(" "),
                            _vm.dialogForAddOns
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      color: "blue darken-1",
                                      text: "",
                                      type: "button"
                                    },
                                    on: { click: _vm.addAddOns }
                                  },
                                  [_vm._v("Add Add Ons")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.editAddOnsShow
                              ? _c(
                                  "v-btn",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      color: "blue darken-1",
                                      text: "",
                                      type: "button"
                                    },
                                    on: { click: _vm.editAddOnsData }
                                  },
                                  [_vm._v("Edt Add Ons")]
                                )
                              : _vm._e()
                          ],
                          1
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
          ]
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          [
            _c(
              "v-row",
              { attrs: { justify: "center" } },
              [
                _c(
                  "v-dialog",
                  {
                    attrs: { persistent: "", "max-width": "600px" },
                    model: {
                      value: _vm.dialogForCupSize,
                      callback: function($$v) {
                        _vm.dialogForCupSize = $$v
                      },
                      expression: "dialogForCupSize"
                    }
                  },
                  [
                    _c(
                      "v-card",
                      [
                        _c("v-card-title", [
                          _c("span", { staticClass: "headline" }, [
                            _vm._v("ADD CUP SIZE")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-form",
                              [
                                _vm.errorMessage !== null
                                  ? _c("span", { staticClass: "errorColor" }, [
                                      _vm._v(_vm._s(_vm.errorMessage))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "v-container",
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Low Dose Cup",
                                            outlined: "",
                                            dense: "",
                                            type: "number",
                                            min: "0",
                                            id: "lowDoseCup"
                                          },
                                          model: {
                                            value: _vm.lowDoseCup,
                                            callback: function($$v) {
                                              _vm.lowDoseCup = $$v
                                            },
                                            expression: "lowDoseCup"
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
                                            label: "High Dose Cup",
                                            outlined: "",
                                            dense: "",
                                            type: "number",
                                            min: "0",
                                            id: "highDoseCup"
                                          },
                                          model: {
                                            value: _vm.highDoseCup,
                                            callback: function($$v) {
                                              _vm.highDoseCup = $$v
                                            },
                                            expression: "highDoseCup"
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
                                            label: "Over Dose Cup",
                                            outlined: "",
                                            dense: "",
                                            type: "number",
                                            min: "0",
                                            id: "overDoseCup"
                                          },
                                          model: {
                                            value: _vm.overDoseCup,
                                            callback: function($$v) {
                                              _vm.overDoseCup = $$v
                                            },
                                            expression: "overDoseCup"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-actions",
                          [
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: {
                                  click: function($event) {
                                    _vm.dialogForCupSize = false
                                  }
                                }
                              },
                              [_vm._v(" Close")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  color: "blue darken-1",
                                  text: "",
                                  type: "button"
                                },
                                on: { click: _vm.addingCupSize }
                              },
                              [_vm._v("Add Cup Size")]
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
              ],
              1
            )
          ]
        ],
        2
      ),
      _vm._v(" "),
      _vm.showProductModal
        ? _c(
            "div",
            { staticClass: "blurred-background", attrs: { id: "modal" } },
            [
              _c(
                "div",
                {
                  staticClass: "modal-dialog",
                  staticStyle: {
                    "overflow-y": "scroll",
                    "max-height": "85%",
                    "margin-top": "50px",
                    "margin-bottom": "50px"
                  },
                  attrs: { role: "document" }
                },
                [
                  _c("div", { staticClass: "modal-content" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-body" }, [
                      _c(
                        "form",
                        {
                          attrs: { enctype: "multipart/form-data", action: "" },
                          on: { submit: _vm.formSubmitProduct }
                        },
                        [
                          _c("div", { staticClass: "row" }, [
                            _vm.errorMessage !== null
                              ? _c("span", { staticClass: "errorColor" }, [
                                  _vm._v(_vm._s(_vm.errorMessage))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "pCat" } }, [
                                  _vm._v("Product Category:")
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.prodType,
                                        expression: "prodType"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.prodType = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  _vm._l(_vm.categoryData, function(
                                    item,
                                    index
                                  ) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: {
                                          value: item.productCategory
                                        }
                                      },
                                      [_vm._v(_vm._s(item.productCategory))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
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
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.priceEvent === ""
                            ? _c(
                                "button",
                                {
                                  ref: "norm",
                                  staticClass: "btn borderStyle1",
                                  staticStyle: {
                                    "margin-left": "1%",
                                    "background-color": "#ffffff",
                                    cursor: "pointer"
                                  },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.normalPrice($event)
                                    }
                                  }
                                },
                                [_vm._v("Normal Price")]
                              )
                            : _c(
                                "button",
                                {
                                  ref: "norm",
                                  staticClass: "btn",
                                  staticStyle: {
                                    "margin-left": "1%",
                                    "background-color": "#ffffff",
                                    cursor: "pointer"
                                  },
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.normalPrice($event)
                                    }
                                  }
                                },
                                [_vm._v("Normal Price")]
                              ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              ref: "online",
                              staticClass: "btn btnBorderStyle",
                              staticStyle: {
                                display: "inline-block",
                                "background-color": "#ffffff",
                                cursor: "pointer"
                              },
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.onlinePrice($event)
                                }
                              }
                            },
                            [_vm._v("Online Price")]
                          ),
                          _vm._v(" "),
                          !_vm.online
                            ? _c(
                                "div",
                                {
                                  staticStyle: {
                                    border: "1px solid #d8dce3",
                                    "margin-top": "-0.5%"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "row",
                                      staticStyle: { "margin-top": "5%" }
                                    },
                                    [
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "form-group",
                                            staticStyle: { "margin-left": "3%" }
                                          },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "lowPrice" } },
                                              [_vm._v("Low Dose Price:")]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.lowPrice,
                                                  expression: "lowPrice"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "number",
                                                min: "0",
                                                required: ""
                                              },
                                              domProps: { value: _vm.lowPrice },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.lowPrice =
                                                    $event.target.value
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "form-group",
                                            staticStyle: {
                                              "margin-right": "3%"
                                            }
                                          },
                                          [
                                            _c(
                                              "label",
                                              { attrs: { for: "highPrice" } },
                                              [_vm._v("High Dose Price:")]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.highPrice,
                                                  expression: "highPrice"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "number",
                                                min: "0",
                                                required: ""
                                              },
                                              domProps: {
                                                value: _vm.highPrice
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.highPrice =
                                                    $event.target.value
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          staticStyle: { "margin-left": "3%" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            { attrs: { for: "overPrice" } },
                                            [_vm._v("Over Dose Price:")]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.overPrice,
                                                expression: "overPrice"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: { value: _vm.overPrice },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.overPrice =
                                                  $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.online
                            ? _c(
                                "div",
                                {
                                  staticStyle: {
                                    border: "1px solid #d8dce3",
                                    "margin-top": "-0.5%"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "row",
                                      staticStyle: { "margin-top": "5%" }
                                    },
                                    [
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "form-group",
                                            staticStyle: { "margin-left": "3%" }
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: { for: "onlinelowPrice" }
                                              },
                                              [_vm._v("Online Low Dose Price:")]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.onlinelowPrice,
                                                  expression: "onlinelowPrice"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "number",
                                                min: "0",
                                                required: ""
                                              },
                                              domProps: {
                                                value: _vm.onlinelowPrice
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.onlinelowPrice =
                                                    $event.target.value
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "form-group",
                                            staticStyle: {
                                              "margin-right": "3%"
                                            }
                                          },
                                          [
                                            _c(
                                              "label",
                                              {
                                                attrs: {
                                                  for: "onlinehighPrice"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "Online High Dose Price:"
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("br"),
                                            _vm._v(" "),
                                            _c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: _vm.onlinehighPrice,
                                                  expression: "onlinehighPrice"
                                                }
                                              ],
                                              staticClass: "form-control",
                                              attrs: {
                                                type: "number",
                                                min: "0",
                                                required: ""
                                              },
                                              domProps: {
                                                value: _vm.onlinehighPrice
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.onlinehighPrice =
                                                    $event.target.value
                                                }
                                              }
                                            })
                                          ]
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-md-6" }, [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          staticStyle: { "margin-left": "3%" }
                                        },
                                        [
                                          _c(
                                            "label",
                                            {
                                              attrs: { for: "onlineoverPrice" }
                                            },
                                            [_vm._v("Online Over Dose Price:")]
                                          ),
                                          _vm._v(" "),
                                          _c("br"),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.onlineoverPrice,
                                                expression: "onlineoverPrice"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              min: "0",
                                              required: ""
                                            },
                                            domProps: {
                                              value: _vm.onlineoverPrice
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.onlineoverPrice =
                                                  $event.target.value
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            : _vm._e(),
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
                          _c("div", { staticClass: "modal-footer" }, [
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
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                [
                  [
                    _vm._v("``\n        "),
                    _c(
                      "v-row",
                      { attrs: { justify: "center" } },
                      [
                        _c(
                          "v-dialog",
                          {
                            attrs: { persistent: "", "max-width": "600px" },
                            model: {
                              value: _vm.dialogForCategory,
                              callback: function($$v) {
                                _vm.dialogForCategory = $$v
                              },
                              expression: "dialogForCategory"
                            }
                          },
                          [
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v("ADDING PRODUCT CATEGORY")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-form",
                                      {
                                        attrs: {
                                          enctype: "multipart/form-data",
                                          action: ""
                                        },
                                        on: { submit: _vm.formSubmit }
                                      },
                                      [
                                        _vm.errorMessage !== null
                                          ? _c(
                                              "span",
                                              { staticClass: "errorColor" },
                                              [_vm._v(_vm._s(_vm.errorMessage))]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "v-container",
                                          [
                                            _c(
                                              "v-row",
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Cup Type Name",
                                                    outlined: "",
                                                    dense: "",
                                                    type: "text",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.productType,
                                                    callback: function($$v) {
                                                      _vm.productType = $$v
                                                    },
                                                    expression: "productType"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "center",
                                                  [
                                                    _c("v-img", {
                                                      staticClass:
                                                        "addOnsImage",
                                                      attrs: {
                                                        src: _vm.imageURL
                                                      }
                                                    }),
                                                    _c("br"),
                                                    _vm._v(" "),
                                                    _c("input", {
                                                      staticClass: "fileStyle",
                                                      attrs: {
                                                        type: "file",
                                                        required: ""
                                                      },
                                                      on: {
                                                        change:
                                                          _vm.onImageChange
                                                      }
                                                    }),
                                                    _c("br")
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c("v-spacer"),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: ""
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.dialogForCategory = false
                                                  }
                                                }
                                              },
                                              [_vm._v(" Close")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-btn",
                                              {
                                                staticClass: "btn btn-primary",
                                                attrs: {
                                                  color: "blue darken-1",
                                                  text: "",
                                                  type: "submit"
                                                }
                                              },
                                              [_vm._v("Add Category")]
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
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                ],
                2
              ),
              _vm._v("\n  \n``\n\n\n\n    ")
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Adding P")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue":
/*!**************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=62e92aac&scoped=true& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62e92aac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/addingAdmin/add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=62e92aac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);