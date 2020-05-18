webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, getAllPostsFromServer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPostsFromServer", function() { return getAllPostsFromServer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);



var _this = undefined,
    _jsxFileName = "E:\\TestTaskNextJs\\testDevOps\\TestTast\\nextjs-blog\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var __N_SSG = true;
function getAllPostsFromServer() {
  return _getAllPostsFromServer.apply(this, arguments);
}

function _getAllPostsFromServer() {
  _getAllPostsFromServer = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var allPostsDataFromServer;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            allPostsDataFromServer = getAllPosts();
            return _context.abrupt("return", {
              props: {
                allPostsDataFromServer: allPostsDataFromServer
              }
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAllPostsFromServer.apply(this, arguments);
}

var Home = function Home(_ref) {
  var allPostsData = _ref.allPostsData,
      allPostsDataFromServer = _ref.allPostsDataFromServer;
  // const [postState, setState] = useState([]);
  // const  getPosts =async () => {
  //   await operations.getAllPosts().then(data => {
  //     return( 
  //       console.log('datUEIIIa', data),setState('hhhhhhh')) 
  //   })
  //  await console.log('postState', postState);
  // };
  // getPosts();
  // useEffect(() => {
  //   getPosts();
  // }, [postState]);
  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    home: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "\u2026"), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.padding1px),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "Blog"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, allPostsData.map(function (_ref2) {
    var id = _ref2.id,
        date = _ref2.date,
        title = _ref2.title;
    return __jsx("li", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.listItem,
      key: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 12
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/posts/[id]",
      as: "/posts/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 3
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 3
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 3
      }
    }, __jsx(Date, {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }
    })));
  }))));
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/operations.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRBbGxQb3N0c0Zyb21TZXJ2ZXIiLCJhbGxQb3N0c0RhdGFGcm9tU2VydmVyIiwiZ2V0QWxsUG9zdHMiLCJwcm9wcyIsIkhvbWUiLCJhbGxQb3N0c0RhdGEiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCIsImhlYWRpbmdMZyIsImxpc3QiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImxpc3RJdGVtIiwibGlnaHRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQVlTLFNBQWVBLHFCQUF0QjtBQUFBO0FBQUE7Ozs0TUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0Msa0NBREQsR0FDMEJDLFdBQVcsRUFEckM7QUFBQSw2Q0FFRTtBQUNMQyxtQkFBSyxFQUFFO0FBQ0xGLHNDQUFzQixFQUF0QkE7QUFESztBQURGLGFBRkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVVSLElBQU1HLElBQUksR0FBQyxTQUFMQSxJQUFLLE9BQTZDO0FBQUEsTUFBMUNDLFlBQTBDLFFBQTFDQSxZQUEwQztBQUFBLE1BQTNCSixzQkFBMkIsUUFBM0JBLHNCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBWUU7QUFBUyxhQUFTLFlBQUtLLCtEQUFVLENBQUNDLFNBQWhCLGNBQTZCRCwrREFBVSxDQUFDRSxVQUF4QyxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLCtEQUFVLENBQUNHLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUksYUFBUyxFQUFFSCwrREFBVSxDQUFDSSxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFlBQVksQ0FBQ00sR0FBYixDQUFpQjtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLFFBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFdBQ2pCO0FBQUksZUFBUyxFQUFFUiwrREFBVSxDQUFDUyxRQUExQjtBQUFvQyxTQUFHLEVBQUVILEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDVCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBRSxtQkFBWUEsRUFBWixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRSxLQUFKLENBREYsQ0FEUyxFQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKUyxFQUtUO0FBQU8sZUFBUyxFQUFFUiwrREFBVSxDQUFDVSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxJQUFEO0FBQU0sZ0JBQVUsRUFBRUgsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTFMsQ0FEaUI7QUFBQSxHQUFqQixDQURILENBRkYsQ0FaRixDQURGO0FBK0JELENBL0NBOztLQUFNVCxJO0FBZ0RRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDg5ZWVjNWU4MTFjMmE4NDcwOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgLH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBnZXRTb3J0ZWRQb3N0c0RhdGEoKVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGFcbiAgICB9XG4gIH1cbn1cblxuXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0c0Zyb21TZXJ2ZXIoKSB7XG4gICAgY29uc3QgYWxsUG9zdHNEYXRhRnJvbVNlcnZlciA9IGdldEFsbFBvc3RzKClcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWxsUG9zdHNEYXRhRnJvbVNlcnZlclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiBjb25zdCBIb21lPSh7IGFsbFBvc3RzRGF0YSAsIGFsbFBvc3RzRGF0YUZyb21TZXJ2ZXJ9KSA9PntcbiAgLy8gY29uc3QgW3Bvc3RTdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuICAvLyBjb25zdCAgZ2V0UG9zdHMgPWFzeW5jICgpID0+IHtcbiAgLy8gICBhd2FpdCBvcGVyYXRpb25zLmdldEFsbFBvc3RzKCkudGhlbihkYXRhID0+IHtcbiAgLy8gICAgIHJldHVybiggXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKCdkYXRVRUlJSWEnLCBkYXRhKSxzZXRTdGF0ZSgnaGhoaGhoaCcpKSBcbiAgICBcbiAgLy8gICB9KVxuICAvLyAgYXdhaXQgY29uc29sZS5sb2coJ3Bvc3RTdGF0ZScsIHBvc3RTdGF0ZSk7XG4gIC8vIH07XG4gIC8vIGdldFBvc3RzKCk7XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgZ2V0UG9zdHMoKTtcbiAgLy8gfSwgW3Bvc3RTdGF0ZV0pO1xuXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhvbWU+XG4gICBcbiAgICAgIDxIZWFkPuKApjwvSGVhZD5cbiAgICAgIHsvKiB7cG9zdFN0YXRlJiYgcG9zdFN0YXRlLm1hcCgoZWxlbSk9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAge2VsZW0udGl0bGV9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZWxlbS5pZH1cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIHtlbGVtLmJvZHl9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgKSl9ICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmhlYWRpbmdNZH0gJHt1dGlsU3R5bGVzLnBhZGRpbmcxcHh9YH0+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ0xnfT5CbG9nPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0fT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgZGF0ZSwgdGl0bGUgfSkgPT4gKFxuICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpc3RJdGVtfSBrZXk9e2lkfT5cbiAgPExpbmsgaHJlZj1cIi9wb3N0cy9baWRdXCIgYXM9e2AvcG9zdHMvJHtpZH1gfT5cbiAgICA8YT57dGl0bGV9PC9hPlxuICA8L0xpbms+XG4gIDxiciAvPlxuICA8c21hbGwgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XG4gICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cbiAgPC9zbWFsbD5cbjwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==