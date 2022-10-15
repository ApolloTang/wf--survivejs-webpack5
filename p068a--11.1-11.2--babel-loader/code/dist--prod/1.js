"use strict";
(self["webpackChunkp002"] = self["webpackChunkp002"] || []).push([[1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_a01_handling_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _check_a02_handling_async_function_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _check_e01_handling_dynamic_import_lazy_load_a_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _es6_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _es6_obj_spread_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* eslint-disable */
console.log('-------------- [start] Check ES6 Class');

const myClass = new _es6_class_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
console.log('ES6 Class static property works: ', _es6_class_js__WEBPACK_IMPORTED_MODULE_0__["default"].getMyStaticProp() === _es6_class_js__WEBPACK_IMPORTED_MODULE_0__.staticPropValue);
console.log('ES6 Class property works: ', myClass.getMyClassProp() === _es6_class_js__WEBPACK_IMPORTED_MODULE_0__.classPropValue);
console.log('ES6 Class property initializers are not on the prototype: ', myClass.__proto__.getMyClassProp === void 0);
console.log('-------------- [done] Check ES6 Class');
console.log('-------------- [start] Check ES6 Spread');

console.log('ES6 spread works: ', JSON.stringify(_es6_obj_spread_js__WEBPACK_IMPORTED_MODULE_1__["default"]) === JSON.stringify(_es6_obj_spread_js__WEBPACK_IMPORTED_MODULE_1__.expected_myObj));
console.log('-------------- [done] Check ES6 Spread');
console.log('-------------- [start] Check polyfill');
const testPolyFill = [1, 2].includes(1);
console.log('polyFill in browser works: ', testPolyFill);
console.log('-------------- [done] Check polyfill');
/* eslint-enable */

/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classPropValue": function() { return /* binding */ classPropValue; },
/* harmony export */   "staticPropValue": function() { return /* binding */ staticPropValue; }
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const staticPropValue = 'myStaticProp';
const classPropValue = 'myClassProp';
class MyClass {
  constructor() {
    _defineProperty(this, "myClassProp", classPropValue);
    _defineProperty(this, "getMyClassProp", () => this.myClassProp);
  }
}
_defineProperty(MyClass, "myStaticProp", staticPropValue);
_defineProperty(MyClass, "getMyStaticProp", () => MyClass.myStaticProp);
/* harmony default export */ __webpack_exports__["default"] = (MyClass);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "expected_myObj": function() { return /* binding */ expected_myObj; }
/* harmony export */ });
const a = {
  a: 'a'
};
const myObj = {
  ...a,
  b: 'b'
};
const expected_myObj = {
  a: 'a',
  b: 'b'
};
/* harmony default export */ __webpack_exports__["default"] = (myObj);


/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_async_fn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


(0,_my_async_fn_js__WEBPACK_IMPORTED_MODULE_0__["default"])().then(data => {
  console.log('AsyncFunction Work:', data === _my_async_fn_js__WEBPACK_IMPORTED_MODULE_0__.dataFromAsyncFn);
});

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFromAsyncFn": function() { return /* binding */ dataFromAsyncFn; }
/* harmony export */ });
const dataFromAsyncFn = 'dataFromAsyncFn';
const myAsyncFunction = async () => dataFromAsyncFn;
/* harmony default export */ __webpack_exports__["default"] = (myAsyncFunction);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p1": function() { return /* binding */ p1; },
/* harmony export */   "p2": function() { return /* binding */ p2; }
/* harmony export */ });
/* harmony import */ var _content_for_lazy_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

const isBrowser = !(navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")); // https://github.com/jsdom/jsdom/issues/1537

const p1 = new Promise((rs, rj) => {
  __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(__webpack_require__, 13)).then(_ref => {
    let {
      default: content
    } = _ref;
    isBrowser && console.log('Dyanmic loading with promise is working :', content === _content_for_lazy_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    rs(content);
  }).catch(err => rj(err));
});
const p2 = new Promise(async (rs, rj) => {
  isBrowser && console.log('...loading lazy module');
  try {
    const {
      default: content
    } = await __webpack_require__.e(/* import() */ 2).then(__webpack_require__.bind(__webpack_require__, 13));
    isBrowser && console.log('Dynamic loading with async is working :', content === _content_for_lazy_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    rs(content);
  } catch (err) {
    rj(err);
  }
});


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const lazyContent = 'lazy loaded content';
/* harmony default export */ __webpack_exports__["default"] = (lazyContent);

/***/ })
]]);