"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__, _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nconst styles = {\n    global: (props)=>({\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"#FFFBF4\", \"#202023\")(props)\n            }\n        })\n};\nconst components = {\n    Heading: {\n        variants: {\n            \"header-section\": {\n                textDecoration: \"underline\",\n                textUnderlineOffset: 8,\n                textDecorationColor: \"#A6A2A2\"\n            }\n        }\n    },\n    Text: {\n        baseStyle: (props)=>({\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"#202023\", \"#FFFBF4\")(props)\n            })\n    },\n    Link: {\n        baseStyle: (props)=>({\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"#DE0D92\", \"#33f567\")(props)\n            })\n    },\n    Button: {\n        baseStyle: (props)=>({\n                colorScheme: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)(\"button_light\", \"button_dark\")(props)\n            })\n    }\n};\nconst fonts = {\n    heading: \"'Assistant'\"\n};\nconst colors = {\n    greenish: \"#CFD2CD\",\n    grayish: \"#A6A2A2\",\n    button_light: {\n        50: \"#f7fafc\",\n        500: \"#718096\",\n        900: \"#171923\"\n    },\n    button_dark: {\n        50: \"#A9C3AA\",\n        500: \"#718096\",\n        900: \"#364837\"\n    }\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config,\n    styles,\n    components,\n    colors,\n    fonts\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ0Y7QUFFN0MsTUFBTUUsU0FBUztJQUNYQyxrQkFBa0I7SUFDbEJDLG9CQUFvQjtBQUN4QjtBQUVBLE1BQU1DLFNBQVM7SUFDWEMsUUFBUUMsQ0FBQUEsUUFBVTtZQUNkQyxNQUFNO2dCQUNGQyxJQUFJUiw0REFBSUEsQ0FBQyxXQUFXLFdBQVdNO1lBQ25DO1FBQ0o7QUFDSjtBQUVBLE1BQU1HLGFBQWE7SUFDZkMsU0FBUztRQUNMQyxVQUFVO1lBQ04sa0JBQWtCO2dCQUNkQyxnQkFBZ0I7Z0JBQ2hCQyxxQkFBcUI7Z0JBQ3JCQyxxQkFBcUI7WUFDekI7UUFDSjtJQUNKO0lBQ0FDLE1BQU07UUFDRkMsV0FBV1YsQ0FBQUEsUUFBVTtnQkFDakJXLE9BQU9qQiw0REFBSUEsQ0FBQyxXQUFXLFdBQVdNO1lBQ3RDO0lBQ0o7SUFDQVksTUFBTTtRQUNGRixXQUFXVixDQUFBQSxRQUFVO2dCQUNqQlcsT0FBT2pCLDREQUFJQSxDQUFDLFdBQVcsV0FBV007WUFDdEM7SUFDSjtJQUNBYSxRQUFRO1FBQ0pILFdBQVdWLENBQUFBLFFBQVU7Z0JBQ2pCYyxhQUFhcEIsNERBQUlBLENBQUMsZ0JBQWdCLGVBQWVNO1lBQ3JEO0lBQ0o7QUFDSjtBQUVBLE1BQU1lLFFBQVE7SUFDVkMsU0FBUztBQUNiO0FBRUEsTUFBTUMsU0FBUztJQUNYQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsY0FBYztRQUNWLElBQUk7UUFDSixLQUFLO1FBQ0wsS0FBSztJQUNUO0lBQ0FDLGFBQWE7UUFDVCxJQUFJO1FBQ0osS0FBSztRQUNMLEtBQUs7SUFDVDtBQUNKO0FBRUEsTUFBTUMsUUFBUTdCLDZEQUFXQSxDQUFDO0lBQ3RCRTtJQUNBRztJQUNBSztJQUNBYztJQUNBRjtBQUNKO0FBRUEsaUVBQWVPLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZGFyc2htZWRpa29uZGEtaG9tZXBhZ2UvLi9saWIvdGhlbWUuanM/MzMzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IG1vZGUgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxyXG4gICAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGdsb2JhbDogcHJvcHMgPT4gKHtcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjRkZGQkY0JywgJyMyMDIwMjMnKShwcm9wcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgSGVhZGluZzoge1xyXG4gICAgICAgIHZhcmlhbnRzOiB7XHJcbiAgICAgICAgICAgICdoZWFkZXItc2VjdGlvbic6IHtcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDgsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbkNvbG9yOiAnI0E2QTJBMidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBUZXh0OiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnIzIwMjAyMycsICcjRkZGQkY0JykocHJvcHMpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBMaW5rOiB7XHJcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xyXG4gICAgICAgICAgICBjb2xvcjogbW9kZSgnI0RFMEQ5MicsICcjMzNmNTY3JykocHJvcHMpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBCdXR0b246IHtcclxuICAgICAgICBiYXNlU3R5bGU6IHByb3BzID0+ICh7XHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lOiBtb2RlKCdidXR0b25fbGlnaHQnLCAnYnV0dG9uX2RhcmsnKShwcm9wcylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBmb250cyA9IHtcclxuICAgIGhlYWRpbmc6IFwiJ0Fzc2lzdGFudCdcIlxyXG59XHJcblxyXG5jb25zdCBjb2xvcnMgPSB7XHJcbiAgICBncmVlbmlzaDogJyNDRkQyQ0QnLFxyXG4gICAgZ3JheWlzaDogJyNBNkEyQTInLFxyXG4gICAgYnV0dG9uX2xpZ2h0OiB7XHJcbiAgICAgICAgNTA6ICcjZjdmYWZjJyxcclxuICAgICAgICA1MDA6ICcjNzE4MDk2JyxcclxuICAgICAgICA5MDA6ICcjMTcxOTIzJyxcclxuICAgIH0sXHJcbiAgICBidXR0b25fZGFyazoge1xyXG4gICAgICAgIDUwOiAnI0E5QzNBQScsXHJcbiAgICAgICAgNTAwOiAnIzcxODA5NicsXHJcbiAgICAgICAgOTAwOiAnIzM2NDgzNycsXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gICAgY29uZmlnLFxyXG4gICAgc3R5bGVzLFxyXG4gICAgY29tcG9uZW50cyxcclxuICAgIGNvbG9ycyxcclxuICAgIGZvbnRzXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZSAiXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJtb2RlIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJUZXh0IiwiYmFzZVN0eWxlIiwiY29sb3IiLCJMaW5rIiwiQnV0dG9uIiwiY29sb3JTY2hlbWUiLCJmb250cyIsImhlYWRpbmciLCJjb2xvcnMiLCJncmVlbmlzaCIsImdyYXlpc2giLCJidXR0b25fbGlnaHQiLCJidXR0b25fZGFyayIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nclass Document extends (next_document__WEBPACK_IMPORTED_MODULE_2___default()) {\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {}, void 0, false, {\n                    fileName: \"D:\\\\Project\\\\github_website\\\\adarshmedikonda-homepage\\\\pages\\\\_document.js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ColorModeScript, {\n                            initialColorMode: _lib_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].config.initialColorMode\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\github_website\\\\adarshmedikonda-homepage\\\\pages\\\\_document.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\github_website\\\\adarshmedikonda-homepage\\\\pages\\\\_document.js\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                            fileName: \"D:\\\\Project\\\\github_website\\\\adarshmedikonda-homepage\\\\pages\\\\_document.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Project\\\\github_website\\\\adarshmedikonda-homepage\\\\pages\\\\_document.js\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Project\\\\github_website\\\\adarshmedikonda-homepage\\\\pages\\\\_document.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDd0I7QUFDMUM7QUFFakIsTUFBTU8saUJBQWlCTixzREFBWUE7SUFDOUNPLFNBQVU7UUFDTixxQkFDSSw4REFBQ04sK0NBQUlBO1lBQUNPLE1BQUs7OzhCQUNQLDhEQUFDTiwrQ0FBSUE7Ozs7OzhCQUNMLDhEQUFDTzs7c0NBQ0csOERBQUNWLDZEQUFlQTs0QkFBQ1csa0JBQWtCTCx5REFBWSxDQUFDSyxnQkFBZ0I7Ozs7OztzQ0FDaEUsOERBQUNQLCtDQUFJQTs7Ozs7c0NBQ0wsOERBQUNDLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJM0I7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2FkYXJzaG1lZGlrb25kYS1ob21lcGFnZS8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yTW9kZVNjcmlwdCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCBOZXh0RG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9saWIvdGhlbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIE5leHREb2N1bWVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWQgLz5cclxuICAgICAgICAgICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2xvck1vZGVTY3JpcHQgaW5pdGlhbENvbG9yTW9kZT17dGhlbWUuY29uZmlnLmluaXRpYWxDb2xvck1vZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgICAgICA8L0h0bWw+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIkNvbG9yTW9kZVNjcmlwdCIsIk5leHREb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJ0aGVtZSIsIkRvY3VtZW50IiwicmVuZGVyIiwibGFuZyIsImJvZHkiLCJpbml0aWFsQ29sb3JNb2RlIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/theme-tools");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();