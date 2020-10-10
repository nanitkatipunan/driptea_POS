(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/logo.png */ "./resources/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "app",
  data: function data() {
    return {
<<<<<<< HEAD
      userType: null,
      image: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      userName: '',
      password: '',
      confirmPass: '',
      successMessage: null,
      errorMessage: null,
      errorMessage2: null,
      errorMessage3: null,
      errorMessage4: null,
      errorMessage5: null,
      errorMessage6: null,
      errorMessage7: null,
      errorMessage8: null,
      showSuccess: false,
      newPass: null,
      newName: null
    };
  },
  methods: {
    hide: function hide() {
      this.showSuccess = false;
=======
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

        console.log('updated successfully!');
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
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
    },
    redirect: function redirect(route) {
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push(route)["catch"](function () {});
    },
<<<<<<< HEAD
    register: function register() {
      var _this = this;

      this.validate('userType');
      this.validate('userName');
      this.validate('password');
      this.validate('confirmPass');
      var parameter = {
        account_type: this.userType.toUpperCase(),
        name: this.userName,
        password: this.password,
        password_confirmation: this.confirmPass
      };

      if (this.errorMessage === null && this.errorMessage2 === null && this.errorMessage3 === null && this.errorMessage4 === null && this.errorMessage5 === null && this.errorMessage6 === null && this.errorMessage7 === null) {
        this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'register', parameter).then(function (response) {
          _this.showSuccess = true;
          console.log(response.data);
        })["catch"](function (error) {
          if (error.response.status === 300) {
            _this.errorMessage3 = 'Username already exist';
          }
        });
      } else {
        this.errorMessage = 'Please fill up all fields';
      }
    },
    validate: function validate(input) {
      this.successMessage = null;
      var reqWhiteSpace = /\s/;

      if (input === 'userName') {
        this.errorMessage = null;

        if (reqWhiteSpace.test(this.userName)) {
          this.errorMessage = 'Username should not contain a space.';
        } else if (this.userName === '') {
          this.errorMessage2 = 'Username is required.';
        } else if (this.userName.length < 6) {
          this.errorMessage3 = 'Username must be atleast 6 characters';
        } else {
          this.errorMessage = null;
          this.errorMessage2 = null;
          this.errorMessage3 = null;
        }
      } else if (input === 'userType') {
        this.errorMessage8 = null;

        if (this.userType === '') {
          this.errorMessage8 = 'Usertype is required.';
        } else if (this.userType.toLowerCase() !== 'admin' && this.userType.toLowerCase() !== 'casher') {
          this.errorMessage8 = 'Usertype should only be Admin or Casher.';
        } else {
          this.errorMessage8 = null;
        }
      } else if (input === 'password') {
        this.errorMessage4 = null;

        if (this.password.length < 8) {
          this.errorMessage4 = 'Password must be atleast 8 characters.';
        } else if (/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/.test(this.password)) {
          this.successMessage = 'Strong password.';
          this.errorMessage4 = null;
          this.errorMessage5 = null;
        } else {
          this.errorMessage5 = 'Password must be alphanumeric characters. It should contain 1 number, 1 special character and 1 capital letter.';
        }
      } else if (input === 'confirmPass') {
        this.errorMessage6 = null;
        this.successMessage = null;

        if (this.password.localeCompare(this.confirmPass) !== 0) {
          this.errorMessage6 = 'Password did not match.';
        } else {
          this.errorMessage6 = null;
        }
      } else if (this.userType !== null && this.userName.length >= 6 && this.email !== null && this.password !== null && this.password.length >= 6 && this.password.localeCompare(this.confirmPass) === 0 && this.type !== null) {
        this.errorMessage = null;
      } else {
        this.errorMessage7 = 'Please fill in all required fields.';
        this.errorMessage7 = null;
      }
=======
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

      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_0__["default"].url + "retrieveCategory").then(function (response) {
        _this14.categoryData = response.data.addCategory;
      });
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.btnModal[data-v-48ebf362]{\r\n    width: 100px;\n}\n.modalFont[data-v-48ebf362]{\r\n    font-size: 15px;\n}\n.alert-box[data-v-48ebf362] {\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 20%;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n    padding-top: 30px;\r\n    padding-bottom: 10px;\r\n    transition: .2s;\n}\n.blurred-background[data-v-48ebf362] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n    background: rgba(54, 54, 54, .7);\n}\nimg[data-v-48ebf362]{\r\n    cursor: default;\n}\nspan[data-v-48ebf362]{\r\n    font-size: 12px;\n}\nhr[data-v-48ebf362]{\r\n    border: 1px solid #17D817;\n}\n.termsCondition[data-v-48ebf362]{\r\n    margin-top: 6%;\r\n    font-size: 15px;\r\n    text-align: center;\n}\n.form-control[data-v-48ebf362]{\r\n    border: 1px solid #17D817;\r\n    border-radius: 5px;\r\n    width: 100%;\n}\n.bRegister[data-v-48ebf362]{\r\n    color: #0A8C0F;\r\n    cursor: pointer;\n}\np[data-v-48ebf362]{\r\n    font-size: 20px;\n}\n.btnRegister[data-v-48ebf362]{\r\n    margin-top: 2%;\r\n    margin-bottom: 2%;\r\n    background-color: #17D817;\r\n    font-weight: bold;\r\n    width: 100%;\n}\n.containerWidth[data-v-48ebf362]{\r\n    width: 30%;\r\n    text-align: left;\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\n}\n@media screen and (max-width: 600px) {\n.containerWidth[data-v-48ebf362]{\r\n        text-align: left;\r\n        width: 100%;\r\n        margin-left: 0px !important;\r\n        margin-right: 0px !important;\n}\n}\n@media screen and (max-width: 900px) {\n.containerWidth[data-v-48ebf362]{\r\n        text-align: left;\r\n        width: 70%;\n}\n}\n@media screen and (max-width: 1000px) {\n.containerWidth[data-v-48ebf362]{\r\n        text-align: left;\r\n        width: 60%;\n}\n}\r\n", ""]);
=======
exports.push([module.i, "\n.errorColor[data-v-62e92aac]{\r\n    color: red;\n}\n[data-v-62e92aac]::-webkit-scrollbar {\r\n  width: 2px;\n}\n.my-custom-scrollbar[data-v-62e92aac][data-v-62e92aac] {\r\n    position: relative;\r\n    height: 500px;\r\n    width: 100%;\r\n    overflow: auto;\n}\n.fileStyle[data-v-62e92aac]{\r\n    font-size: 17px !important;\r\n    width: 97px;\r\n    margin-top: 3%;\r\n    margin-bottom: 3%;\n}\n.addOnsImage[data-v-62e92aac]{\r\n    width: 250px !important; \r\n    height: 250px !important; \r\n    margin-top: 2% !important;\n}\n.navButton[data-v-62e92aac]{\r\n    float: left;\r\n    width: 200px;\n}\n.borderStyle1[data-v-62e92aac]{\r\n    border-left: 1px solid #d8dce3;\r\n    border-top: 1px solid #d8dce3;\r\n    border-right: 1px solid #d8dce3;\n}\n.btnBorderStyle[data-v-62e92aac]{\r\n    margin-top: -0.7%;\r\n    border-bottom: 1px solid #d8dce3;\n}\n.borderStyle[data-v-62e92aac]{\r\n    border-left: 3px solid grey;\r\n    border-top: 3px solid grey;\r\n    border-right: 3px solid grey;\n}\n.btnBorderStyle1[data-v-62e92aac]{\r\n    border-bottom: 3px solid grey;\n}\n.table tr[data-v-62e92aac]{\r\n   text-align: center;\n}\nimg[data-v-62e92aac]{\r\n    height: 50px;\r\n    width: 100px;\n}\nhr[data-v-62e92aac]{\r\n    border: 1px solid gray;\n}\nlabel[data-v-62e92aac]{\r\n    font-size: 20px !important;\n}\n.blurred-background[data-v-62e92aac] {\r\n    position: fixed;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    text-align: center;\r\n    background: rgb(54, 54, 54, .7);\n}\n.alert-box[data-v-62e92aac] {\r\n    width: 400px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 180px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box2[data-v-62e92aac] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 150px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 30px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.alert-box3[data-v-62e92aac] {\r\n    width: 550px;\r\n    background: white;\r\n    display: inline-block;\r\n    margin-top: 50px;\r\n    font-weight: lighter;\r\n    border-radius: 3px;\r\n    font-size: 20px;\r\n    padding: 20px;\r\n    transition: .2s;\r\n    text-align: left;\r\n    box-shadow: 5px 5px gray;\n}\n.productTable[data-v-62e92aac] {\r\n    width: 100%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.categoryTable[data-v-62e92aac]{\r\n    width: 70%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.addOnsTable[data-v-62e92aac]{\r\n    width: 50%;\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\n}\n.my-custom-scrollbar[data-v-62e92aac] {\r\n    position: relative;\r\n    height: 500px;\r\n    width:70%;\r\n    overflow: auto;\n}\n.table-wrapper-scroll-y[data-v-62e92aac] {\r\n    display: contents;\n}\n.div[data-v-62e92aac] {\r\n    /* border-style: solid; */\r\n    margin-top: 3%;\r\n    margin-bottom: 5%;\n}\n.btnModal[data-v-62e92aac]{\r\n    float: right;\r\n    margin-right: 1%;\n}\n#buttonAdd[data-v-62e92aac] {\r\n    float: right;\n}\r\n", ""]);
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
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
<<<<<<< HEAD
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("center", [
        _c("img", {
          staticStyle: { height: "150px", "margin-top": "5%" },
          attrs: { src: _vm.image }
        }),
        _vm._v(" "),
        _c("p", [
          _vm._v("Register to "),
          _c(
            "b",
            {
              staticClass: "bRegister",
              on: {
                click: function($event) {
                  return _vm.redirect("/")
                }
              }
            },
            [_vm._v("Driptea")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("center", [
        _c("div", { staticClass: "containerWidth" }, [
          _c("i", [
            _vm.errorMessage7 !== null
              ? _c("span", { staticClass: "text-danger text-center" }, [
                  _vm._v(_vm._s(_vm.errorMessage7))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "userType" } }, [
                _vm._v("Account Type:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage8 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage8))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userType,
                    expression: "userType"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "userType" },
                domProps: { value: _vm.userType },
                on: {
                  keyup: function($event) {
                    return _vm.validate("userType")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.userType = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "userName" } }, [
                _vm._v("Username:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage2 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage2))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage3 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage3))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userName,
                    expression: "userName"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "userName" },
                domProps: { value: _vm.userName },
                on: {
                  keyup: function($event) {
                    return _vm.validate("userName")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.userName = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "password" } }, [
                _vm._v("Password:")
              ]),
              _c("br"),
              _vm._v(" "),
              _vm.successMessage !== null
                ? _c("span", { staticClass: "text-success text-center" }, [
                    _vm._v(_vm._s(_vm.successMessage))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage4 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage4))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage5 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage5))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.password,
                    expression: "password"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "password" },
                domProps: { value: _vm.password },
                on: {
                  keyup: function($event) {
                    return _vm.validate("password")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.password = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { attrs: { for: "confirmPassword" } }, [
                _vm._v("Confirm password:")
              ]),
              _c("br"),
              _vm._v(" "),
              _c("i", [
                _vm.errorMessage6 !== null
                  ? _c("span", { staticClass: "text-danger text-center" }, [
                      _vm._v(_vm._s(_vm.errorMessage6))
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.confirmPass,
                    expression: "confirmPass"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "password", id: "confirmPassword" },
                domProps: { value: _vm.confirmPass },
                on: {
                  keyup: function($event) {
                    return _vm.validate("confirmPass")
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.confirmPass = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
=======
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
            : _vm._e(),
          _vm._v(" "),
          _vm.cup
            ? _c(
                "button",
                {
                  staticClass: "btn btn-primary btnModal",
                  attrs: { type: "button" },
                  on: { click: _vm.showCupType }
                },
                [_vm._v("+ Cup Type")]
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
                        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
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
                                              return _vm.NAStatusUpdate(item.id)
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
                      "table table-bordered table-striped addOnsTable",
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
    ),
    _vm._v(" "),
    _vm.showCupTypeModal
      ? _c(
          "div",
          { staticClass: "blurred-background", attrs: { id: "modal" } },
          [
            _c(
              "div",
              { staticClass: "alert-box" },
              [
                _c("center", [_c("h1", [_vm._v("Adding Cup Type")])]),
                _c("hr"),
                _vm._v(" "),
                _c("form", { attrs: { action: "" } }, [
                  _vm.errorMessage !== null
                    ? _c("span", { staticClass: "errorColor" }, [
                        _vm._v(_vm._s(_vm.errorMessage))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "cup" } }, [
                      _vm._v("Cup Type :")
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputCup,
                          expression: "inputCup"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "addOns" },
                      domProps: { value: _vm.inputCup },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.inputCup = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "quantity" } }, [
                      _vm._v("Cup Quantity :")
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputCupQuantity,
                          expression: "inputCupQuantity"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", id: "addOns" },
                      domProps: { value: _vm.inputCupQuantity },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.inputCupQuantity = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "cupPrice" } }, [
                      _vm._v("Additional Price :")
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.inputCupPrice,
                          expression: "inputCupPrice"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", min: "1", id: "price" },
                      domProps: { value: _vm.inputCupPrice },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.inputCupPrice = $event.target.value
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
                  _vm.btnCupType
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: { click: _vm.addingCupType }
                        },
                        [_vm._v("Add Cup Type")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.btnEditCupType
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: { click: _vm.editingCupType }
                        },
                        [_vm._v("Edit Cup Type")]
                      )
                    : _vm._e()
                ])
              ],
              1
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.showAddOnsModal
      ? _c(
          "div",
          { staticClass: "blurred-background", attrs: { id: "modal" } },
          [
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
            _c(
              "button",
              {
                staticClass: "btn btnRegister",
                attrs: { type: "submit" },
                on: { click: _vm.register }
              },
              [_vm._v("Register")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.showSuccess
        ? _c(
            "div",
            { staticClass: "blurred-background", attrs: { id: "modal" } },
            [
              _c("div", { staticClass: "alert-box" }, [
                _c("h5", { staticClass: "text-success" }, [
                  _vm._v("Registered Successfully")
                ]),
                _c("hr"),
                _vm._v(" "),
<<<<<<< HEAD
                _c("p", { staticClass: "modalFont" }, [
                  _vm._v("Username: " + _vm._s(_vm.userName))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "modalFont" }, [
                  _vm._v("Password: " + _vm._s(_vm.password))
                ]),
=======
                _c("form", { attrs: { action: "" } }, [
                  _vm.errorMessage !== null
                    ? _c("span", { staticClass: "errorColor" }, [
                        _vm._v(_vm._s(_vm.errorMessage))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
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
                          value: _vm.inputAddOns,
                          expression: "inputAddOns"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", id: "addOns" },
                      domProps: { value: _vm.inputAddOns },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.inputAddOns = $event.target.value
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
                          value: _vm.addOnsPrice,
                          expression: "addOnsPrice"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number", min: "1", id: "price" },
                      domProps: { value: _vm.addOnsPrice },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.addOnsPrice = $event.target.value
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
                  _vm.addonsShow
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: { click: _vm.addAddOns }
                        },
                        [_vm._v("Add Add-ons")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.editAddOnsShow
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          attrs: { type: "button" },
                          on: { click: _vm.editAddOnsData }
                        },
                        [_vm._v("Edit Add-ons")]
                      )
                    : _vm._e()
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
                                    .call($event.target.options, function(o) {
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
                            _vm._l(_vm.categoryData, function(item, index) {
                              return _c(
                                "option",
                                {
                                  key: index,
                                  domProps: { value: item.productCategory }
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
                                            _vm.lowPrice = $event.target.value
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
                                      staticStyle: { "margin-right": "3%" }
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
                                        domProps: { value: _vm.highPrice },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.highPrice = $event.target.value
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
                                          _vm.overPrice = $event.target.value
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
                                        { attrs: { for: "onlinelowPrice" } },
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
                                        domProps: { value: _vm.onlinelowPrice },
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
                                      staticStyle: { "margin-right": "3%" }
                                    },
                                    [
                                      _c(
                                        "label",
                                        { attrs: { for: "onlinehighPrice" } },
                                        [_vm._v("Online High Dose Price:")]
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
                                      { attrs: { for: "onlineoverPrice" } },
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
                                      domProps: { value: _vm.onlineoverPrice },
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
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
                _vm._v(" "),
                _c(
                  "form",
                  {
<<<<<<< HEAD
                    staticClass: "btn btn-primary btnModal",
                    on: { click: _vm.hide }
                  },
                  [_vm._v("OK")]
=======
                    attrs: { enctype: "multipart/form-data", action: "" },
                    on: { submit: _vm.formSubmit }
                  },
                  [
                    _vm.errorMessage !== null
                      ? _c("span", { staticClass: "errorColor" }, [
                          _vm._v(_vm._s(_vm.errorMessage))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
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
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/basic/register.vue":
/*!*****************************************!*\
  !*** ./resources/js/basic/register.vue ***!
  \*****************************************/
=======
/***/ "./resources/js/modules/addingAdmin/add.vue":
/*!**************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue ***!
  \**************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=48ebf362&scoped=true& */ "./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/basic/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.vue?vue&type=template&id=62e92aac&scoped=true& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&");
/* harmony import */ var _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.vue?vue&type=script&lang=js& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48ebf362",
=======
  _add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62e92aac",
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/basic/register.vue"
=======
component.options.__file = "resources/js/modules/addingAdmin/add.vue"
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/basic/register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
=======
/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& ***!
  \**************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=style&index=0&id=48ebf362&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_id_48ebf362_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true& ***!
  \************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=style&index=0&id=62e92aac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_style_index_0_id_62e92aac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true& ***!
  \*********************************************************************************************/
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=48ebf362&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/register.vue?vue&type=template&id=48ebf362&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_48ebf362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./add.vue?vue&type=template&id=62e92aac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/addingAdmin/add.vue?vue&type=template&id=62e92aac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_vue_vue_type_template_id_62e92aac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> e7ed02b2c94a41da246f5e39f7c1abce3ebcb8ae



/***/ })

}]);