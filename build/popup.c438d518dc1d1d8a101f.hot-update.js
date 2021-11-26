"use strict";
self["webpackHotUpdatearxiv_enhanced"]("popup",{

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
/* module decorator */ module = __webpack_require__.hmd(module);


var _this = undefined,
    _jsxFileName = "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};





var Popup = function Popup() {
  function onSubmitClick(comments, tags) {
    console.log("submit");
    console.log(comments);
    console.log(tags); // window.close();
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState2 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      comments = _React$useState2[0],
      setComments = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(''),
      _React$useState4 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      tags = _React$useState4[0],
      setTags = _React$useState4[1];

  var handleCommentsChange = function handleCommentsChange(event) {
    return setComments(event.target.value);
  };

  var handleTagsChange = function handleTagsChange(event) {
    return setTags(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
    fontWeight: 600,
    fontSize: {
      base: '2xl',
      sm: '4xl',
      md: '6xl'
    },
    lineHeight: '110%',
    paddingBottom: 4,
    color: '#282c34',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "ArXiv Enhanced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
    type: "text",
    color: '#282c34',
    placeholder: "Comments",
    value: comments,
    onChange: handleCommentsChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {
    type: "text",
    color: '#282c34',
    placeholder: "Tags",
    value: tags,
    onChange: handleTagsChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {
    color: '#282c34',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Completed Reading"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {
    w: "full",
    color: "gray.900",
    onClick: function onClick() {
      return onSubmitClick(comments, tags);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "Submit"))));
};

__signature__(Popup, "useState{[comments, setComments]('')}\nuseState{[tags, setTags]('')}");

var _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popup, "Popup", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx");
  reactHotLoader.register(_default, "default", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx");
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
/******/ 	__webpack_require__.h = () => ("bd8a3a4e23fcf7dac3a5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.c438d518dc1d1d8a101f.hot-update.js.map