(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tableForCategory: true,
      tableForProduct: false,
      tableForAddOns: false,
      tableForCupType: false,
      tableForCupSize: false,
      normal: true,
      online: false,
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
      onlineAddOnsPrice: null,
      addOnsStat: null,
      editAddOnsShow: false,
      addonsShow: false,
      idAddOns: null,
      datas: [],
      productData: [],
      categoryData: [],
      categoryName: [],
      btnCupType: false,
      btnEditCupType: false,
      inputCupPrice: null,
      inputCupOnlinePrice: null,
      inputCup: null,
      inputCupQuantity: null,
      cupStatus: null,
      idCup: null,
      cupData: [],
      prod: false,
      description: null,
      cat: true,
      ons: false,
      cup: false,
      size: false,
      secondEvent: "",
      productAdd: true,
      productEdit: false,
      status: null,
      prodId: null,
      priceEvent: ""
    }, _defineProperty(_ref, "online", false), _defineProperty(_ref, "errorMessage", null), _defineProperty(_ref, "lowDoseCup", null), _defineProperty(_ref, "highDoseCup", null), _defineProperty(_ref, "overDoseCup", null), _defineProperty(_ref, "cupSizeData", []), _defineProperty(_ref, "search", null), _defineProperty(_ref, "title", null), _defineProperty(_ref, "dialogForCupType", false), _defineProperty(_ref, "dialogForProduct", false), _defineProperty(_ref, "dialogForCategory", false), _defineProperty(_ref, "dialogForAddOns", false), _defineProperty(_ref, "dialogForCupSize", false), _defineProperty(_ref, "dataHeader", null), _defineProperty(_ref, "headersForAddOns", [{
      text: "Id",
      value: "id"
    }, {
      text: "Add Ons Name",
      value: "addons_name"
    }, {
      text: "Add Ons Price",
      value: "addons_price"
    }, {
      text: "Online Add Ons Price",
      value: "onlineAddOnsPrice"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForCupType", [{
      text: "#",
      value: "id"
    }, {
      text: "Cup Type",
      value: "cupTypeName"
    }, {
      text: "Additional Price",
      value: "cupTypePrice"
    }, {
      text: "Cup Online Price",
      value: "inputCupOnlinePrice"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForCategory", [{
      text: "#",
      value: "id"
    }, {
      text: "images",
      value: "image"
    }, {
      text: "Product Category",
      value: "productCategory"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForProduct", [{
      text: "#",
      value: "id"
    }, {
      text: "images",
      value: "image"
    }, {
      text: "Product Name",
      value: "productName"
    }, {
      text: "Product Category",
      value: "productCategory"
    }, {
      text: "Low Dose Price",
      value: "lowPrice"
    }, {
      text: "High Dose Price",
      value: "highPrice"
    }, {
      text: "Over Dose Price",
      value: "overPrice"
    }, {
      text: "Status",
      value: "status"
    }, {
      text: "ACTION",
      value: "actions",
      sortable: false
    }]), _defineProperty(_ref, "headersForCupSize", [{
      text: "Date",
      value: "created_at"
    }, {
      text: "Low Dose Cup",
      value: "incomingLowDose"
    }, {
      text: "High Dose Cup",
      value: "incomingHighDose"
    }, {
      text: "Over Dose Cup",
      value: "incomingOverDose"
    }, {
      text: "Total IncomingCup",
      value: "incomingOverDose" + ""
    }]), _ref;
  },
  mounted: function mounted() {
    // this.retrieveAddOns();
    // this.$refs.on.click()
    // this.$refs.pro.click()
    // this.$refs.cate.click()
    // this.$refs.size.click()
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
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAvailableCupType", param).then(function (response) {
        _this.retrieveCupType();
      });
    },
    availableCupUpdate: function availableCupUpdate(id) {
      var _this2 = this;

      var param = {
        id: id,
        status: "Available"
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
        response.data.quantityCupsInDB.forEach(function (element) {});
        var totalCup = response.data.quantityCupsInDB.incomingOverDose;
        console.log(totalCup);
      });
    },
    addingCupType: function addingCupType() {
      var _this5 = this;

      if (this.inputCupPrice !== null && this.inputCup !== null) {
        var param = {
          cupType: this.inputCup,
          inputCupOnlinePrice: this.inputCupOnlinePrice,
          price: this.inputCupPrice,
          status: "Available"
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingCupType", param).then(function (response) {
          _this5.retrieveCupType();

          _this5.dialogForCupType = false;
        });
      } else {
        this.errorMessage = "All fields are required!";
      }
    },
    addingCupSize: function addingCupSize() {
      var _this6 = this;

      if (this.lowDoseCup !== null && this.highDoseCup !== null && this.overDoseCup !== null) {
        var param = {
          incomingLowDose: this.lowDoseCup,
          incomingHighDose: this.highDoseCup,
          incomingOverDose: this.overDoseCup
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addIncomingCups", param).then(function (response) {
          _this6.retrieveCupSize();

          _this6.hide();
        });
      } else {
        this.errorMessage = "All fields are required!";
      }
    },
    editingCupType: function editingCupType() {
      var _this7 = this;

      if (this.inputCupPrice !== null && this.inputCup !== null) {
        var param = {
          id: this.idCup,
          cupType: this.inputCup,
          inputCupOnlinePrice: this.inputCupOnlinePrice,
          price: this.inputCupPrice,
          status: this.cupStatus
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "editingCupType", param).then(function (response) {
          _this7.retrieveCupType();

          _this7.dialogForCupSize = false;
        });
      } else {
        this.errorMessage = "All fields are required!";
      }
    },
    normalPrice: function normalPrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add("borderStyle1");
        event.target.classList.remove("btnBorderStyle");

        if (this.priceEvent !== "") {
          this.priceEvent.classList.add("btnBorderStyle");
          this.priceEvent.classList.remove("borderStyle1");
        }
      }

      this.priceEvent = event.target;
      this.online = false;
    },
    onlinePrice: function onlinePrice(event) {
      if (this.priceEvent !== event.target) {
        event.target.classList.add("borderStyle1");
        event.target.classList.remove("btnBorderStyle");

        if (this.priceEvent !== "") {
          this.priceEvent.classList.add("btnBorderStyle");
          this.priceEvent.classList.remove("borderStyle1");
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
        formData.append('description', this.description);
        formData.append('status', 'Available');
        formData.append('lowPrice', this.lowPrice);
        formData.append('highPrice', this.highPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehighPrice', this.onlinehighPrice);
        formData.append('onlineoverPrice', this.onlineoverPrice);
        this.$axios.post('/formSubmit', formData, config).then(function (response) {
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
      this.dialogForProduct = true;
      this.productName = item.productName;
      this.description = item.description;
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
        formData.append('description', this.description);
        formData.append('lowPrice', this.lowPrice);
        formData.append('highPrice', this.highPrice);
        formData.append('overPrice', this.overPrice);
        formData.append('onlinelowPrice', this.onlinelowPrice);
        formData.append('onlinehighPrice', this.onlinehighPrice);
        formData.append('onlineoverPrice', this.onlineoverPrice);
        this.$axios.post('/updateProduct', formData, config).then(function (response) {
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
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        _this8.retrieveProducts();
      });
    },
    productStatusAvailable: function productStatusAvailable(id) {
      var _this9 = this;

      var param = {
        id: id,
        status: "Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusProduct", param).then(function (response) {
        _this9.retrieveProducts();
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
            "content-type": "multipart/form-data"
          }
        };
        var formData = new FormData();
        formData.append("image", this.image);
        formData.append("productCategory", this.productType);
        axios.post("/addCategory", formData, config).then(function (response) {
          currentObj.success = response.data.success;
          currentObj.retrieveCategories();
          currentObj.retrieveProducts();
          currentObj.hide();
        })["catch"](function (error) {
          currentObj.output = error;
        });
      } else {
        this.errorMessage = "All fields are required!";
      }
    },
    product: function product(event) {
      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
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
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
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
      this.dataHeader = [{
        text: "#",
        value: "id"
      }, {
        text: "images",
        value: "image"
      }, {
        text: "Product Category",
        value: "productCategory"
      }, {
        text: "Status",
        value: "status"
      }, {
        text: "ACTION",
        value: "actions",
        sortable: false
      }];

      if (this.secondEvent !== event.target) {
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
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
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
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
        event.target.classList.add("borderStyle");
        event.target.classList.remove("btnBorderStyle1");

        if (this.secondEvent !== "") {
          this.secondEvent.classList.add("btnBorderStyle1");
          this.secondEvent.classList.remove("borderStyle");
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
      this.dialogForAddOns = true;
      this.editAddOnsShow = false;
      this.addonsShow = true;
      this.inputAddOns = null;
      this.onlineAddOnsPrice = null;
      this.addOnsPrice = null;
    },
    showCupSize: function showCupSize() {
      this.dialogForCupSize = true;
      this.cupSizeShow = true;
      this.lowDoseCup = null;
      this.highDoseCup = null;
      this.overDoseCup = null;
    },
    showProduct: function showProduct() {
      this.dialogForProduct = true;
      this.productAdd = true;
      this.productEdit = false;
      this.prodType = null;
      this.productName = null;
      this.description = null;
      this.lowPrice = null;
      this.highPrice = null;
      this.overPrice = null;
      this.onlinelowPrice = null;
      this.onlinehighPrice = null;
      this.onlineoverPrice = null;
      this.imgURL = null;
      this.img = null;
    },
    showCategory: function showCategory() {
      this.dialogForCategory = true;
      this.imageURL = null;
      this.productType = null;
    },
    showCupType: function showCupType() {
      this.dialogForCupType = true;
      this.btnCupType = true;
      this.btnEditCupType = false;
      this.inputCupPrice = null;
      this.inputCupOnlinePrice = null;
      this.inputCup = null;
      this.inputCupQuantity = null;
    },
    editCup: function editCup(item) {
      this.dialogForCupType = true;
      this.btnEditCupType = true;
      this.btnCupType = false;
      this.idCup = item.id;
      this.inputCup = item.cupTypeName;
      this.inputCupOnlinePrice = item.inputCupOnlinePrice;
      this.inputCupPrice = item.cupTypePrice;
      this.cupStatus = item.status;
    },
    hide: function hide() {
      this.dialogForCategory = false;
      this.dialogForProduct = false;
      this.dialogForAddOns = false;
      this.dialogForCupType = false;
      this.dialogForCupSize = false;
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

      if (this.addOnsPrice !== null && this.inputAddOns !== null && this.onlineAddOnsPrice !== null) {
        var param = {
          addOns: this.inputAddOns,
          onlineAddOnsPrice: this.onlineAddOnsPrice,
          price: this.addOnsPrice,
          status: "Available"
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "addingAddOns", param).then(function (response) {
          _this10.retrieveAddOns();

          _this10.dialogForAddOns = false;
        });
      } else {
        this.errorMessage = "All fields are required!";
      }
    },
    retrieveAddOns: function retrieveAddOns() {
      var _this11 = this;

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveAllAddOns").then(function (response) {
        _this11.datas = response.data.addons;
      });
    },
    editAddOns: function editAddOns(item) {
      this.dialogForAddOns = true;
      this.inputAddOns = item.addons_name;
      this.addOnsPrice = item.addons_price;
      this.onlineAddOnsPrice = item.onlineAddOnsPrice;
      this.addOnsStat = item.status;
      this.editAddOnsShow = true;
      this.addAddOns = false;
      this.idAddOns = item.id;
    },
    editAddOnsData: function editAddOnsData() {
      var _this12 = this;

      if (this.addOnsPrice !== null && this.inputAddOns !== null) {
        var param = {
          id: this.idAddOns,
          addOns: this.inputAddOns,
          onlineAddOnsPrice: this.onlineAddOnsPrice,
          price: this.addOnsPrice,
          status: this.addOnsStat
        };
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateAddOns", param).then(function (response) {
          _this12.retrieveAddOns();

          _this12.hide();
        });
      } else {
        this.errorMessage = "All fields are required!";
      }
    },
    NAStatusUpdate: function NAStatusUpdate(id) {
      var _this13 = this;

      var param = {
        id: id,
        status: "Not Available"
      };
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "updateStatusAddOns", param).then(function (response) {
        _this13.retrieveAddOns();
      });
    },
    availableStatusUpdate: function availableStatusUpdate(id) {
      var _this14 = this;

      var param = {
        id: id,
        status: "Available"
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
        console.log(_this16.categoryData);
        response.data.addCategory.forEach(function (element) {
          _this16.categoryName.push(element.productCategory);
        });
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
exports.push([module.i, "\n.v-input__slot[data-v-62e92aac] {\r\n  margin-bottom: -35px;\n}\n.errorColor[data-v-62e92aac] {\r\n  color: red;\n}\n[data-v-62e92aac]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.my-custom-scrollbar[data-v-62e92aac][data-v-62e92aac] {\r\n  position: relative;\r\n  height: 500px;\r\n  width: 100%;\r\n  overflow: auto;\n}\n.fileStyle[data-v-62e92aac] {\r\n  font-size: 17px !important;\r\n  width: 97px;\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\n}\n.addOnsImage[data-v-62e92aac] {\r\n  width: 250px !important;\r\n  height: 250px !important;\r\n  margin-top: 2% !important;\n}\n.navButton[data-v-62e92aac] {\r\n  float: left;\r\n  width: 200px;\n}\n.borderStyle1[data-v-62e92aac] {\r\n  border-left: 1px solid #d8dce3;\r\n  border-top: 1px solid #d8dce3;\r\n  border-right: 1px solid #d8dce3;\n}\n.btnBorderStyle[data-v-62e92aac] {\r\n  margin-top: -0.7%;\r\n  border-bottom: 1px solid #d8dce3;\n}\n.borderStyle[data-v-62e92aac] {\r\n  border-left: 3px solid grey;\r\n  border-top: 3px solid grey;\r\n  border-right: 3px solid grey;\n}\n.btnBorderStyle1[data-v-62e92aac] {\r\n  border-bottom: 3px solid grey;\n}\n.table tr[data-v-62e92aac] {\r\n  text-align: center;\n}\nimg[data-v-62e92aac] {\r\n  height: 50px;\r\n  width: 100px;\n}\nhr[data-v-62e92aac] {\r\n  border: 1px solid gray;\n}\nh1[data-v-62e92aac]{\r\n  text-align: center;\r\n  margin-top: 3%;\n}\nth[data-v-62e92aac] {\r\n  text-align: center;\r\n  font-size: 30px;\n}\nlabel[data-v-62e92aac] {\r\n  font-size: 20px !important;\n}\n.blurred-background[data-v-62e92aac] {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  text-align: center;\r\n  background: rgb(54, 54, 54, 0.7);\n}\n.table[data-v-62e92aac] {\r\n  width: 90%;\r\n  margin-top: 60px;\n}\n.searchInput[data-v-62e92aac] {\r\n  width: 50%;\n}\n#alert-box[data-v-62e92aac] {\r\n  width: 400px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 180px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-62e92aac] {\r\n  width: 550px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 150px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 30px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n#alert-box3[data-v-62e92aac] {\r\n  width: 550px;\r\n  background: white;\r\n  display: inline-block;\r\n  margin-top: 50px;\r\n  font-weight: lighter;\r\n  border-radius: 3px;\r\n  font-size: 20px;\r\n  padding: 20px;\r\n  transition: 0.2s;\r\n  text-align: left;\r\n  box-shadow: 5px 5px gray;\n}\n.productTable[data-v-62e92aac] {\r\n  width: 100%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.categoryTable[data-v-62e92aac] {\r\n  width: 70%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.addOnsTable[data-v-62e92aac] {\r\n  width: 50%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.cupTable[data-v-62e92aac] {\r\n  width: 60%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-62e92aac] {\r\n  position: relative;\r\n  height: 500px;\r\n  width: 70%;\r\n  overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-62e92aac] {\r\n  display: contents;\n}\n.div[data-v-62e92aac] {\r\n  /* border-style: solid; */\r\n  margin-top: 3%;\r\n  margin-bottom: 5%;\n}\n.btnModal[data-v-62e92aac] {\r\n  float: right;\r\n  margin-right: 1%;\n}\n#buttonAdd[data-v-62e92aac] {\r\n  float: right;\n}\r\n", ""]);

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
    [
      _c(
        "center",
        [
          _vm.tableForCategory
            ? _c("h1", { staticClass: "font-weight-regular" }, [
                _vm._v("Adding Category")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tableForProduct
            ? _c("h1", { staticClass: "font-weight-regular" }, [
                _vm._v("Adding Product")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tableForAddOns
            ? _c("h1", { staticClass: "font-weight-regular" }, [
                _vm._v("Adding Add Ons")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tableForCupType
            ? _c("h1", { staticClass: "font-weight-regular" }, [
                _vm._v("Adding Cup Type")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tableForCupSize
            ? _c("h1", { staticClass: "font-weight-regular" }, [
                _vm._v("Adding Cup Size")
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-toolbar",
            {
              attrs: { flat: "" },
              scopedSlots: _vm._u([
                {
                  key: "extension",
                  fn: function() {
                    return [
                      _c(
                        "v-tabs",
                        {
                          attrs: {
                            dark: "",
                            "background-color": "#ff5b04",
                            "fixed-tabs": ""
                          }
                        },
                        [
                          _c("v-tabs-slider"),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  ;(_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = true),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Category")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  ;(_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = true),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Product")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  ;(_vm.tableForAddOns = true),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Add Ons")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  ;(_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = false),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = true)
                                }
                              }
                            },
                            [_vm._v("Cup Type")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tab",
                            {
                              on: {
                                click: function($event) {
                                  ;(_vm.tableForAddOns = false),
                                    (_vm.tableForCupSize = true),
                                    (_vm.tableForProduct = false),
                                    (_vm.tableForCategory = false),
                                    (_vm.tableForCupType = false)
                                }
                              }
                            },
                            [_vm._v("Cup Size")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [_c("v-toolbar-title")],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.tableForCategory
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForCategory,
              items: _vm.categoryData,
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
                          staticClass: "mb-2",
                          attrs: { color: "#ff5b04", dark: "", flat: "" }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "col pa-3 py-4 white--text" },
                            [_vm._v("MILK TEA CATEGORY")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                          _c(
                            "v-btn",
                            {
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showCategory }
                            },
                            [_vm._v("+CATEGORY")]
                          )
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
                        staticStyle: { width: "50px", hieght: "50px" },
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
              3842161829
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForProduct
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForProduct,
              items: _vm.productData,
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
                          staticClass: "mb-2",
                          attrs: { color: "#ff5b04", dark: "", flat: "" }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "col pa-3 py-4 white--text" },
                            [_vm._v("MILK TEA PRODUCT")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                          _c(
                            "v-btn",
                            {
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showProduct }
                            },
                            [_vm._v("+ PRODUCT")]
                          )
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
                        staticStyle: { width: "50px", hieght: "50px" },
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
                                  return _vm.productStatusUpdate(item.id)
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
                                  return _vm.productStatusAvailable(item.id)
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
              2516983904
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForAddOns
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForAddOns,
              items: _vm.datas,
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
                          staticClass: "mb-2",
                          attrs: { color: "#ff5b04", dark: "", flat: "" }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "col pa-3 py-4 white--text" },
                            [_vm._v("MILK TEA ADDONS")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                          _c(
                            "v-btn",
                            {
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showAddOns }
                            },
                            [_vm._v("+ ADD ONS")]
                          )
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
                            [_vm._v("mdi-window-close")]
                          )
                        : _c(
                            "v-icon",
                            {
                              staticClass: "btn btn-warning",
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.availableStatusUpdate(item.id)
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
              2603534780
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForCupType
        ? _c("v-data-table", {
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
                          staticClass: "mb-2",
                          attrs: { color: "#ff5b04", dark: "", flat: "" }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "col pa-3 py-4 white--text" },
                            [_vm._v("TYPE OF CUP")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                          _c(
                            "v-btn",
                            {
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showCupType }
                            },
                            [_vm._v("+ CUP TYPE")]
                          )
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
                            [_vm._v("mdi-window-close")]
                          )
                        : _c(
                            "v-icon",
                            {
                              staticClass: "btn btn-warning",
                              attrs: { small: "" },
                              on: {
                                click: function($event) {
                                  return _vm.availableCupUpdate(item.id)
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
              3930184894
            )
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.tableForCupSize
        ? _c("v-data-table", {
            staticClass: "elevation-3",
            attrs: {
              headers: _vm.headersForCupSize,
              items: _vm.cupSizeData,
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
                          staticClass: "mb-2",
                          attrs: { color: "#ff5b04", dark: "", flat: "" }
                        },
                        [
                          _c(
                            "v-toolbar-title",
                            { staticClass: "col pa-3 py-4 white--text" },
                            [_vm._v("MILK TEA CUP SIZE")]
                          ),
                          _vm._v("      \n        "),
                          _c("v-text-field", {
                            staticClass: "mt-7",
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
                          _c(
                            "v-btn",
                            {
                              staticClass: "btn btn-primary btnModal",
                              attrs: {
                                color: "primary",
                                type: "button",
                                dark: ""
                              },
                              on: { click: _vm.showCupSize }
                            },
                            [_vm._v("+ CUP SIZE")]
                          )
                        ],
                        1
                      )
                    ]
                  },
                  proxy: true
                }
              ],
              null,
              false,
              676378731
            )
          })
        : _vm._e(),
      _vm._v(" "),
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
                        _vm._v("ADD CATEGORY")
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
                                        label: "ProductCategory Name",
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
      ],
      _vm._v(" "),
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
                  value: _vm.dialogForProduct,
                  callback: function($$v) {
                    _vm.dialogForProduct = $$v
                  },
                  expression: "dialogForProduct"
                }
              },
              [
                _c(
                  "v-card",
                  [
                    _c("v-card-title", [
                      _c("span", { staticClass: "headline" }, [
                        _vm._v("PRODUCT")
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
                            on: { submit: _vm.formSubmitProduct }
                          },
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
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.categoryName,
                                            label: "Outlined style",
                                            dense: "",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.prodType,
                                            callback: function($$v) {
                                              _vm.prodType = $$v
                                            },
                                            expression: "prodType"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", sm: "6" } },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Product Name",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.productName,
                                            callback: function($$v) {
                                              _vm.productName = $$v
                                            },
                                            expression: "productName"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Description",
                                            outlined: ""
                                          },
                                          model: {
                                            value: _vm.description,
                                            callback: function($$v) {
                                              _vm.description = $$v
                                            },
                                            expression: "description"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-tabs",
                                      {
                                        attrs: {
                                          dark: "",
                                          "background-color": "secondary",
                                          "fixed-tabs": ""
                                        }
                                      },
                                      [
                                        _c("v-tabs-slider"),
                                        _vm._v(" "),
                                        _c(
                                          "v-tab",
                                          {
                                            on: {
                                              click: function($event) {
                                                ;(_vm.normal = true),
                                                  (_vm.online = false)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                      Normal Price\n                                  "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-tab",
                                          {
                                            on: {
                                              click: function($event) {
                                                ;(_vm.online = true),
                                                  (_vm.normal = false)
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                      Online Price \n                                  "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.normal
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
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Low Dose Price",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.lowPrice,
                                                    callback: function($$v) {
                                                      _vm.lowPrice = $$v
                                                    },
                                                    expression: "lowPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "High Dose Price",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.highPrice,
                                                    callback: function($$v) {
                                                      _vm.highPrice = $$v
                                                    },
                                                    expression: "highPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Over Dose Price",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.overPrice,
                                                    callback: function($$v) {
                                                      _vm.overPrice = $$v
                                                    },
                                                    expression: "overPrice"
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
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Online Low Dose Price",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.onlinelowPrice,
                                                    callback: function($$v) {
                                                      _vm.onlinelowPrice = $$v
                                                    },
                                                    expression: "onlinelowPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Online High Dose Price",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.onlinehighPrice,
                                                    callback: function($$v) {
                                                      _vm.onlinehighPrice = $$v
                                                    },
                                                    expression:
                                                      "onlinehighPrice"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", sm: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label:
                                                      "Online Over Dose Price",
                                                    outlined: "",
                                                    type: "number",
                                                    required: ""
                                                  },
                                                  model: {
                                                    value: _vm.onlineoverPrice,
                                                    callback: function($$v) {
                                                      _vm.onlineoverPrice = $$v
                                                    },
                                                    expression:
                                                      "onlineoverPrice"
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
                                            _vm.dialogForProduct = false
                                          }
                                        }
                                      },
                                      [_vm._v(" Close")]
                                    ),
                                    _vm._v(" "),
                                    _vm.productAdd
                                      ? _c(
                                          "v-btn",
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
                                          "v-btn",
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
          ],
          1
        )
      ],
      _vm._v(" "),
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
                                        value: _vm.onlineAddOnsPrice,
                                        callback: function($$v) {
                                          _vm.onlineAddOnsPrice = $$v
                                        },
                                        expression: "onlineAddOnsPrice"
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
                        _vm.addonsShow
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
                              [_vm._v("SAVE")]
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
      ],
      _vm._v(" "),
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
                                        label: "Normal Price",
                                        outlined: "",
                                        dense: "",
                                        type: "number"
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
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-row",
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Online Price",
                                        outlined: "",
                                        dense: "",
                                        type: "number",
                                        min: "1",
                                        id: "price"
                                      },
                                      model: {
                                        value: _vm.inputCupOnlinePrice,
                                        callback: function($$v) {
                                          _vm.inputCupOnlinePrice = $$v
                                        },
                                        expression: "inputCupOnlinePrice"
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
                        _vm.btnCupType
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
      ],
      _vm._v(" "),
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
  )
}
var staticRenderFns = []
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