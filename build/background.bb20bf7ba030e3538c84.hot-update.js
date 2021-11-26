self["webpackHotUpdatearxiv_enhanced"]("background",{

/***/ "./src/pages/Background/index.js":
/*!***************************************!*\
  !*** ./src/pages/Background/index.js ***!
  \***************************************/
/***/ (() => {

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

console.log('This is the background page.');
console.log('Put the background scripts here.');
chrome.tabs.query({
  currentWindow: true,
  active: true
}, function (tabs) {
  console.log(tabs[0].url);
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c73f4a65340f69a2aca")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=background.bb20bf7ba030e3538c84.hot-update.js.map