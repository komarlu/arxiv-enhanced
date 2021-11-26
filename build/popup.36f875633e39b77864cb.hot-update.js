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
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @notionhq/client */ "./node_modules/@notionhq/client/build/src/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/checkbox/dist/chakra-ui-checkbox.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
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






function getTodayDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}

var Popup = function Popup() {
  function addItemToDB(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _addItemToDB.apply(this, arguments);
  }

  function _addItemToDB() {
    _addItemToDB = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(notion, databaseId, paperLink, paperTitle, tags, comments, completedReading) {
      var response;
      return _home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return notion.pages.create({
                parent: {
                  database_id: databaseId
                },
                properties: {
                  'Paper Link': {
                    title: [{
                      "text": {
                        "content": paperLink
                      }
                    }]
                  },
                  'Paper Title': {
                    "type": 'rich_text',
                    "rich_text": [{
                      "text": {
                        "content": paperTitle
                      }
                    }]
                  },
                  'Added on': {
                    type: 'date',
                    date: {
                      start: getTodayDate()
                    }
                  },
                  'Comments': {
                    "type": 'rich_text',
                    "rich_text": [{
                      "text": {
                        "content": comments
                      }
                    }]
                  }
                }
              });

            case 3:
              response = _context.sent;
              console.log(response);
              console.log("Success! Entry added.");
              window.close();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0.body);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
    return _addItemToDB.apply(this, arguments);
  }

  function onSubmitClick(comments, tags, checked) {
    console.log("submit");
    console.log(comments);
    console.log(tags);
    console.log(checked); // window.close();

    var notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_4__.Client({
      auth: 'secret_22YhuOAcoLbRZD4QvNmVAn3qXjFl4IUAPxYh0Shar6I'
    }); // process.env.NOTION_KEY })

    var databaseId = '849569abcf6444fab78bc5d98a5c6d40'; // process.env.NOTION_DATABASE_ID

    var queryOptions = {
      active: true,
      currentWindow: true
    };
    chrome.tabs.query(queryOptions, function (tabs) {
      console.log("---------------");
      console.log("Within POPUP");
      console.log(tabs[0].url); // addItemToDB(notion, databaseId, 'one', 'two', tags, comments, checked);
    });
  }

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__.useState(''),
      _React$useState2 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      comments = _React$useState2[0],
      setComments = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__.useState(''),
      _React$useState4 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      tags = _React$useState4[0],
      setTags = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3__.useState(false),
      _React$useState6 = (0,_home_stroopwafel_Documents_projects_arxiv_enhanced_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      checked = _React$useState6[0],
      setChecked = _React$useState6[1];

  var handleCommentsChange = function handleCommentsChange(event) {
    return setComments(event.target.value);
  };

  var handleTagsChange = function handleTagsChange(event) {
    return setTags(event.target.value);
  };

  var handleCheckboxChange = function handleCheckboxChange(event) {
    return setChecked(event.target.checked);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {
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
      lineNumber: 109,
      columnNumber: 9
    }
  }, "ArXiv Enhanced"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    spacing: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
    type: "text",
    color: '#282c34',
    placeholder: "Comments",
    value: comments,
    onChange: handleCommentsChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
    type: "text",
    color: '#282c34',
    placeholder: "Tags",
    value: tags,
    onChange: handleTagsChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
    color: '#282c34',
    value: checked,
    onChange: handleCheckboxChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Completed Reading"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    w: "full",
    color: "gray.900",
    onClick: function onClick() {
      return onSubmitClick(comments, tags, checked);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "Submit"))));
};

__signature__(Popup, "useState{[comments, setComments]('')}\nuseState{[tags, setTags]('')}\nuseState{[checked, setChecked](false)}");

var _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getTodayDate, "getTodayDate", "/home/stroopwafel/Documents/projects/arxiv-enhanced/src/pages/Popup/Popup.jsx");
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
/******/ 	__webpack_require__.h = () => ("fb6f20cfab6f6460ff97")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.36f875633e39b77864cb.hot-update.js.map