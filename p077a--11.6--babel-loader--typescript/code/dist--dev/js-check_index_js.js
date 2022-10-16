"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["js-check_index_js"],{

/***/ "./js-check/check-a01-handling-es6/es6-class.js":
/*!******************************************************!*\
  !*** ./js-check/check-a01-handling-es6/es6-class.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"classPropValue\": function() { return /* binding */ classPropValue; },\n/* harmony export */   \"staticPropValue\": function() { return /* binding */ staticPropValue; }\n/* harmony export */ });\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nconst staticPropValue = 'myStaticProp';\nconst classPropValue = 'myClassProp';\nclass MyClass {\n  constructor() {\n    _defineProperty(this, \"myClassProp\", classPropValue);\n    _defineProperty(this, \"getMyClassProp\", () => this.myClassProp);\n  }\n}\n_defineProperty(MyClass, \"myStaticProp\", staticPropValue);\n_defineProperty(MyClass, \"getMyStaticProp\", () => MyClass.myStaticProp);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyClass);\n\n\n//# sourceURL=webpack:///./js-check/check-a01-handling-es6/es6-class.js?");

/***/ }),

/***/ "./js-check/check-a01-handling-es6/es6-obj-spread.js":
/*!***********************************************************!*\
  !*** ./js-check/check-a01-handling-es6/es6-obj-spread.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"expected_myObj\": function() { return /* binding */ expected_myObj; }\n/* harmony export */ });\nconst a = {\n  a: 'a'\n};\nconst myObj = {\n  ...a,\n  b: 'b'\n};\nconst expected_myObj = {\n  a: 'a',\n  b: 'b'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (myObj);\n\n\n//# sourceURL=webpack:///./js-check/check-a01-handling-es6/es6-obj-spread.js?");

/***/ }),

/***/ "./js-check/check-a01-handling-es6/index.js":
/*!**************************************************!*\
  !*** ./js-check/check-a01-handling-es6/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _es6_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./es6-class.js */ \"./js-check/check-a01-handling-es6/es6-class.js\");\n/* harmony import */ var _es6_obj_spread_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es6-obj-spread.js */ \"./js-check/check-a01-handling-es6/es6-obj-spread.js\");\n/* eslint-disable */\n\n\n\nconsole.log('-------------- [start] Check ES6 Class');\nconst myClass = new _es6_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconsole.log('ES6 Class static property works: ', _es6_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMyStaticProp() === _es6_class_js__WEBPACK_IMPORTED_MODULE_0__.staticPropValue);\nconsole.log('ES6 Class property works: ', myClass.getMyClassProp() === _es6_class_js__WEBPACK_IMPORTED_MODULE_0__.classPropValue);\nconsole.log('ES6 Class property initializers are not on the prototype: ', myClass.__proto__.getMyClassProp === void 0);\nconsole.log('-------------- [done] Check ES6 Class');\nconsole.log('-------------- [start] Check ES6 Spread');\nconsole.log('ES6 spread works: ', JSON.stringify(_es6_obj_spread_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) === JSON.stringify(_es6_obj_spread_js__WEBPACK_IMPORTED_MODULE_1__.expected_myObj));\nconsole.log('-------------- [done] Check ES6 Spread');\nconsole.log('-------------- [start] Check polyfill');\nconst testPolyFill = [1, 2].includes(1);\nconsole.log('polyFill in browser works: ', testPolyFill);\nconsole.log('-------------- [done] Check polyfill');\n\n/* eslint-enable */\n\n//# sourceURL=webpack:///./js-check/check-a01-handling-es6/index.js?");

/***/ }),

/***/ "./js-check/check-a02-handling-async-function/index.js":
/*!*************************************************************!*\
  !*** ./js-check/check-a02-handling-async-function/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_async_fn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-async-fn.js */ \"./js-check/check-a02-handling-async-function/my-async-fn.js\");\n\n\n(0,_my_async_fn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n  console.log('AsyncFunction Work:', data === _my_async_fn_js__WEBPACK_IMPORTED_MODULE_0__.dataFromAsyncFn);\n});\n\n//# sourceURL=webpack:///./js-check/check-a02-handling-async-function/index.js?");

/***/ }),

/***/ "./js-check/check-a02-handling-async-function/my-async-fn.js":
/*!*******************************************************************!*\
  !*** ./js-check/check-a02-handling-async-function/my-async-fn.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataFromAsyncFn\": function() { return /* binding */ dataFromAsyncFn; }\n/* harmony export */ });\nconst dataFromAsyncFn = 'dataFromAsyncFn';\nconst myAsyncFunction = async () => dataFromAsyncFn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (myAsyncFunction);\n\n\n//# sourceURL=webpack:///./js-check/check-a02-handling-async-function/my-async-fn.js?");

/***/ }),

/***/ "./js-check/check-e01-handling-dynamic-import/content-for-lazy-module.js":
/*!*******************************************************************************!*\
  !*** ./js-check/check-e01-handling-dynamic-import/content-for-lazy-module.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst lazyContent = 'lazy loaded content';\n/* harmony default export */ __webpack_exports__[\"default\"] = (lazyContent);\n\n//# sourceURL=webpack:///./js-check/check-e01-handling-dynamic-import/content-for-lazy-module.js?");

/***/ }),

/***/ "./js-check/check-e01-handling-dynamic-import/lazy-load-a-module.js":
/*!**************************************************************************!*\
  !*** ./js-check/check-e01-handling-dynamic-import/lazy-load-a-module.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"p1\": function() { return /* binding */ p1; },\n/* harmony export */   \"p2\": function() { return /* binding */ p2; }\n/* harmony export */ });\n/* harmony import */ var _content_for_lazy_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-for-lazy-module.js */ \"./js-check/check-e01-handling-dynamic-import/content-for-lazy-module.js\");\n\nconst isBrowser = !(navigator.userAgent.includes(\"Node.js\") || navigator.userAgent.includes(\"jsdom\")); // https://github.com/jsdom/jsdom/issues/1537\n\nconst p1 = new Promise((rs, rj) => {\n  __webpack_require__.e(/*! import() */ \"js-check_check-e01-handling-dynamic-import_module-to-lazy-load_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./module-to-lazy-load */ \"./js-check/check-e01-handling-dynamic-import/module-to-lazy-load.js\")).then(_ref => {\n    let {\n      default: content\n    } = _ref;\n    isBrowser && console.log('Dyanmic loading with promise is working :', content === _content_for_lazy_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    rs(content);\n  }).catch(err => rj(err));\n});\nconst p2 = new Promise(async (rs, rj) => {\n  isBrowser && console.log('...loading lazy module');\n  try {\n    const {\n      default: content\n    } = await __webpack_require__.e(/*! import() */ \"js-check_check-e01-handling-dynamic-import_module-to-lazy-load_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./module-to-lazy-load */ \"./js-check/check-e01-handling-dynamic-import/module-to-lazy-load.js\"));\n    isBrowser && console.log('Dynamic loading with async is working :', content === _content_for_lazy_module_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    rs(content);\n  } catch (err) {\n    rj(err);\n  }\n});\n\n\n//# sourceURL=webpack:///./js-check/check-e01-handling-dynamic-import/lazy-load-a-module.js?");

/***/ }),

/***/ "./js-check/check-f01-handling-typescript/class-student.ts":
/*!*****************************************************************!*\
  !*** ./js-check/check-f01-handling-typescript/class-student.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"greeter\": function() { return /* binding */ greeter; }\n/* harmony export */ });\nclass Student {\n  constructor(firstName, middleInitial, lastName) {\n    this.firstName = firstName;\n    this.middleInitial = middleInitial;\n    this.lastName = lastName;\n    this.fullName = firstName + \" \" + middleInitial + \" \" + lastName;\n  }\n}\nfunction greeter(person) {\n  return \"Hello, \" + person.firstName + \" \" + person.lastName;\n}\nlet user = new Student(\"Jane\", \"M.\", \"User\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (Student);\n\n\n//# sourceURL=webpack:///./js-check/check-f01-handling-typescript/class-student.ts?");

/***/ }),

/***/ "./js-check/check-f01-handling-typescript/index.ts":
/*!*********************************************************!*\
  !*** ./js-check/check-f01-handling-typescript/index.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-student */ \"./js-check/check-f01-handling-typescript/class-student.ts\");\n\n\nconst user = new _class_student__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Jane\", \"M.\", \"User\");\nconst message = (0,_class_student__WEBPACK_IMPORTED_MODULE_0__.greeter)(user);\nconsole.log('typescript works: ', message == 'Hello, Jane User');\n\n//# sourceURL=webpack:///./js-check/check-f01-handling-typescript/index.ts?");

/***/ }),

/***/ "./js-check/index.js":
/*!***************************!*\
  !*** ./js-check/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _check_a01_handling_es6_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-a01-handling-es6/index.js */ \"./js-check/check-a01-handling-es6/index.js\");\n/* harmony import */ var _check_a02_handling_async_function_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-a02-handling-async-function/index.js */ \"./js-check/check-a02-handling-async-function/index.js\");\n/* harmony import */ var _check_e01_handling_dynamic_import_lazy_load_a_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-e01-handling-dynamic-import/lazy-load-a-module.js */ \"./js-check/check-e01-handling-dynamic-import/lazy-load-a-module.js\");\n/* harmony import */ var _check_f01_handling_typescript___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-f01-handling-typescript/ */ \"./js-check/check-f01-handling-typescript/index.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack:///./js-check/index.js?");

/***/ })

}]);