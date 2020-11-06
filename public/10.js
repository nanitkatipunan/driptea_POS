(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_loading_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/loading.vue */ "./resources/js/basic/loading.vue");
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth */ "./resources/js/services/auth/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./resources/js/router/index.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config.js */ "./resources/js/config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tableData: [],
      productData: [],
      category: ['Low Dose', 'High Dose', 'Over Dose'],
      loadingShow: false,
      categoryData: [],
      oneProd: [],
      prod: [],
      categoryName: 'Classic',
      finalData: [],
      count: 0,
      changeName: 'lowDose'
    };
  },
  components: {
    loading: _basic_loading_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.retrieveProducts();
    this.retrieveCategory();
    this.retrieveCheckout();
  },
  methods: {
    getCount: function getCount() {
      this.count++;
    },
    getAllValue: function getAllValue(item, items, index) {
      var total = 0;
      var category = 'lowDose';
      var lowLength = this.prod.length / 3;
      var highLength = lowLength + lowLength;
      var overLength = highLength + lowLength;
      var a = 0;

      for (var i = 0; i < this.prod.length; i++) {
        if (a < lowLength) {
          if (index === a) {
            category = 'lowDose';
            break;
          } else {
            a++;
          }
        } else if (a < highLength && a >= lowLength) {
          if (index === a) {
            category = 'highDose';
            break;
          } else {
            a++;
          }
        } else if (a < overLength && a >= highLength) {
          if (index === a) {
            category = 'overDose';
            break;
          } else {
            a++;
          }
        }
      } // if(index === 0 || index === 1 || index === 2){
      //     category = 'lowDose'
      // }else if(index === 3 || index === 4 || index === 5){
      //     category = 'highDose'
      // }else if(index === 6 || index === 7 || index === 8){
      //     category = 'overDose'
      // }


      items.forEach(function (el) {
        if (el.size === category) {
          if (el.order_product[0].id === item.id) {
            total += el.quantity;
          }
        }
      });
      return total;
    },
    getTotal: function getTotal(items) {
      var subTotal = 0;
      items.forEach(function (el) {
        subTotal += el.quantity;
      });
      return subTotal;
    },
    getDate: function getDate(date) {
      return moment__WEBPACK_IMPORTED_MODULE_4___default()(date).format('MM/DD/YYYY');
    },
    retrieveCheckout: function retrieveCheckout() {
      var _this = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'retrieveAllCheckouts', {}, _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].config).then(function (res) {
        _this.dataMethod(res.data.storeOrder);

        _this.loadingShow = false;
      });
    },
    dataMethod: function dataMethod(item) {
      var data = [];
      Object.keys(item).forEach(function (element) {
        data.push(item[element]);
      });
      this.finalData = data;
    },
    retrieveCategory: function retrieveCategory() {
      var _this2 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + 'retrieveCategoryAscending', {}, _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].config).then(function (res) {
        _this2.categoryData = res.data.addCategory;
        _this2.loadingShow = false;
      });
    },
    retrieveProducts: function retrieveProducts() {
      var _this3 = this;

      this.loadingShow = true;
      this.$axios.post(_services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].url + "retrieveAllProduct", {}, _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].config).then(function (response) {
        if (response.data.status) {
          _services_auth__WEBPACK_IMPORTED_MODULE_1__["default"].deauthenticate();
        }

        _this3.productData = response.data.product;
        _this3.loadingShow = false;

        _this3.getProdLength();
      });
    },
    getProdLength: function getProdLength() {
      var _this4 = this;

      this.loadingShow = true;
      var storeOneProd = [];
      this.productData.forEach(function (e) {
        if (e.productCategory === _this4.categoryName) {
          storeOneProd.push(e);
        }
      });
      this.oneProd = storeOneProd;
      var storeProd = [];

      for (var i = 0; i < this.category.length; i++) {
        this.productData.forEach(function (el) {
          if (el.productCategory === _this4.categoryName) {
            storeProd.push(el);
          }
        });
      }

      this.prod = storeProd;
      this.loadingShow = false;
    },
    changeCategory: function changeCategory(param) {
      this.categoryName = param;
      this.getProdLength();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loading[data-v-10802d66] {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: visible;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\n}\r\n\r\n/* Transparent Overlay */\n.loading[data-v-10802d66]:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\n}\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\n.loading[data-v-10802d66]:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\n}\n.loading[data-v-10802d66]:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  font-size: 10px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin-top: -0.5em;\r\n  -webkit-animation: spinner-data-v-10802d66 1500ms infinite linear;\r\n  animation: spinner-data-v-10802d66 1500ms infinite linear;\r\n  border-radius: 0.5em;\r\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n}\r\n\r\n/* Animation */\n@-webkit-keyframes spinner-data-v-10802d66 {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-10802d66 {\n0% {\r\n    transform: rotate(0deg);\n}\n100% {\r\n    transform: rotate(360deg);\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.zui-table[data-v-1e034772] {\r\n    border: none;\r\n    /* border-right: solid 1px #DDEFEF; */\r\n    border-collapse: separate;\r\n    border-spacing: 0;\r\n    font: normal 13px Arial, sans-serif;\n}\n.zui-table thead th[data-v-1e034772] {\r\n    /* background-color: #DDEFEF; */\r\n    border: none;\r\n    color: #336B6B;\r\n    padding: 10px;\r\n    text-align: left;\r\n    /* text-shadow: 1px 1px 1px #fff; */\r\n    white-space: nowrap;\n}\n.zui-table tbody td[data-v-1e034772] {\r\n    /* border-bottom: solid 1px #DDEFEF; */\r\n    color: #333;\r\n    padding: 10px;\r\n    /* text-shadow: 1px 1px 1px #fff; */\r\n    white-space: nowrap;\n}\n.zui-wrapper[data-v-1e034772] {\r\n    position: relative;\n}\n.zui-scroller[data-v-1e034772] {\r\n    margin-left: 570px;\r\n    overflow-x: scroll;\r\n    overflow-y: visible;\r\n    padding-bottom: 5px;\r\n    width: 500px;\n}\n.zui-table .zui-sticky-col[data-v-1e034772] {\r\n    /* border-left: solid 1px #DDEFEF; */\r\n    left: 0;\r\n    position: absolute;\r\n    top: auto;\r\n    width: 80px;\n}\n.zui-table .zui-sticky-col2[data-v-1e034772] {\r\n    /* border-right: solid 1px #DDEFEF; */\r\n    left: 80px;\r\n    position: absolute;\r\n    top: auto;\r\n    width: 110px;\n}\n.zui-table .zui-sticky-col3[data-v-1e034772] {\r\n    /* border-right: solid 1px #DDEFEF; */\r\n    left: 190px;\r\n    position: absolute;\r\n    top: auto;\r\n    width: 180px;\n}\n.zui-table .zui-sticky-col4[data-v-1e034772] {\r\n    /* border-right: solid 1px #DDEFEF; */\r\n    left: 370px;\r\n    position: absolute;\r\n    top: auto;\r\n    width: 200px;\n}\n.zui-table .zui-sticky-col5[data-v-1e034772] {\r\n    /* border-right: solid 1px #DDEFEF; */\r\n    left: 1070px;\r\n    position: absolute;\r\n    top: auto;\r\n    width: 100px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/loading.vue?vue&type=template&id=10802d66&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic/loading.vue?vue&type=template&id=10802d66&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "loading" }, [_vm._v("Loading…")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true& ***!
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
    "v-card",
    [
      _c(
        "div",
        { staticClass: "my-custom-scrollbar" },
        [
          _c("v-toolbar", {
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
                        _vm._l(_vm.categoryData, function(items, indexes) {
                          return _c(
                            "v-tab",
                            {
                              key: indexes,
                              on: {
                                click: function($event) {
                                  return _vm.changeCategory(
                                    items.productCategory
                                  )
                                }
                              }
                            },
                            [_vm._v(_vm._s(items.productCategory))]
                          )
                        })
                      ],
                      2
                    )
                  ]
                },
                proxy: true
              }
            ])
          }),
          _vm._v(" "),
          _c("center", [
            _c(
              "h2",
              {
                staticStyle: {
                  width: "100%",
                  "background-color": "#ff5b04",
                  color: "white",
                  "margin-bottom": "0%",
                  padding: "7px"
                }
              },
              [_vm._v(_vm._s(_vm.categoryName))]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "zui-wrapper" }, [
            _c("div", { staticClass: "zui-scroller" }, [
              _c(
                "table",
                { staticClass: "zui-table", attrs: { id: "table" } },
                [
                  _c("thead", [
                    _c(
                      "tr",
                      [
                        _c(
                          "th",
                          {
                            staticClass: "zui-sticky-col",
                            staticStyle: { "text-align": "center" },
                            attrs: { rowspan: "3" }
                          },
                          [_vm._v("#")]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "zui-sticky-col2",
                            staticStyle: { "text-align": "center" },
                            attrs: { rowspan: "3" }
                          },
                          [_vm._v("Date")]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "zui-sticky-col3",
                            staticStyle: { "text-align": "center" },
                            attrs: { rowspan: "3" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "zui-sticky-col4",
                            staticStyle: { "text-align": "center" },
                            attrs: { rowspan: "3" }
                          },
                          [_vm._v("Address")]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.category, function(item, index) {
                          return _c(
                            "th",
                            {
                              key: index,
                              staticStyle: { "text-align": "center" },
                              attrs: { colspan: _vm.oneProd.length }
                            },
                            [
                              _vm._v(
                                _vm._s(item) +
                                  "\n                                "
                              ),
                              _c(
                                "tr",
                                _vm._l(_vm.productData, function(i, ind) {
                                  return _vm.categoryName === i.productCategory
                                    ? _c(
                                        "th",
                                        {
                                          key: ind,
                                          staticStyle: {
                                            "text-align": "center"
                                          }
                                        },
                                        [_vm._v(_vm._s(i.productName))]
                                      )
                                    : _vm._e()
                                }),
                                0
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "zui-sticky-col5",
                            attrs: { rowspan: "3" }
                          },
                          [_vm._v("Total")]
                        )
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.finalData, function(items, indexes) {
                      return _c(
                        "tr",
                        { key: indexes },
                        [
                          _c(
                            "td",
                            {
                              staticClass: "zui-sticky-col",
                              staticStyle: { "text-align": "center" }
                            },
                            [_vm._v(_vm._s(items[0].customerId))]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "zui-sticky-col2",
                              staticStyle: { "text-align": "center" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.getDate(
                                    items[0].get_customer[0].created_at
                                  )
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "zui-sticky-col3",
                              staticStyle: { "text-align": "center" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  items[0].get_customer[0].customerName
                                    ? items[0].get_customer[0].customerName
                                    : " "
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "zui-sticky-col4",
                              staticStyle: { "text-align": "center" }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  items[0].get_customer[0].customerAddress
                                    ? items[0].get_customer[0].customerAddress
                                    : " "
                                )
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.prod, function(item, index) {
                            return _c(
                              "td",
                              {
                                key: index,
                                staticStyle: { "text-align": "center" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.getAllValue(item, items, index))
                                )
                              ]
                            )
                          }),
                          _vm._v(" "),
                          _c(
                            "td",
                            {
                              staticClass: "zui-sticky-col5",
                              staticStyle: {
                                "text-align": "center",
                                "font-weight": "bold"
                              }
                            },
                            [_vm._v(_vm._s(_vm.getTotal(items)) + " quantity")]
                          )
                        ],
                        2
                      )
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.loadingShow ? _c("loading") : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/basic/loading.vue":
/*!****************************************!*\
  !*** ./resources/js/basic/loading.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_10802d66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=10802d66&scoped=true& */ "./resources/js/basic/loading.vue?vue&type=template&id=10802d66&scoped=true&");
/* harmony import */ var _loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css& */ "./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _loading_vue_vue_type_template_id_10802d66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_10802d66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "10802d66",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/loading.vue?vue&type=style&index=0&id=10802d66&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_10802d66_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic/loading.vue?vue&type=template&id=10802d66&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/basic/loading.vue?vue&type=template&id=10802d66&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_10802d66_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=10802d66&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic/loading.vue?vue&type=template&id=10802d66&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_10802d66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_10802d66_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/config.js":
/*!********************************!*\
  !*** ./resources/js/config.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  PUSHER_APP_ID: '1095899',
  PUSHER_APP_KEY: '426e9e5cd2a694fa7c40',
  PUSHER_APP_SECRET: '4f62e10c794a3d0f2161',
  PUSHER_APP_CLUSTER: 'ap1'
});

/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue":
/*!***********************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderInventory.vue?vue&type=template&id=1e034772&scoped=true& */ "./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&");
/* harmony import */ var _orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderInventory.vue?vue&type=script&lang=js& */ "./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& */ "./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e034772",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/inventory/orderInventory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=style&index=0&id=1e034772&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_style_index_0_id_1e034772_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./orderInventory.vue?vue&type=template&id=1e034772&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/inventory/orderInventory.vue?vue&type=template&id=1e034772&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderInventory_vue_vue_type_template_id_1e034772_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);