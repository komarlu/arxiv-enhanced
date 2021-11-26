"use strict";
self["webpackHotUpdatearxiv_enhanced"]("background",{

/***/ "./src/pages/Background/index.js":
/*!***************************************!*\
  !*** ./src/pages/Background/index.js ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);



(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

console.log('This is the background page.');
console.log('Put the background scripts here.');

function getCurrentTab() {
  return _getCurrentTab.apply(this, arguments);
}

function _getCurrentTab() {
  _getCurrentTab = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var queryOptions, tab;
    return _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryOptions = {
              active: true,
              lastFocusedWindow: true
            };
            _context.next = 3;
            return chrome.tabs.query(queryOptions);

          case 3:
            tab = _context.sent;
            console.log("XXXX");
            console.log(tab.url);
            return _context.abrupt("return", tab);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getCurrentTab.apply(this, arguments);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log('Got a message');
  getCurrentTab().then(function (response) {
    console.log(response); // console.log()
  }); // if (message === 'get-current-url') {
  //     sendResponse(current_tab);
  // }
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getCurrentTab, "getCurrentTab", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Background/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1748fbf1175a99199050")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=background.65466e6438ddc2846b18.hot-update.js.map