webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _pages_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/operations */ "./pages/operations.js");



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
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "\u2026"), __jsx("section", {
    className: "".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headingMd, " ").concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.padding1px),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.headingLg,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, "Blog"), __jsx("ul", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.list,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
        lineNumber: 62,
        columnNumber: 12
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/posts/[id]",
      as: "/posts/".concat(id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 3
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, title)), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 3
      }
    }), __jsx("small", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.lightText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 3
      }
    }, __jsx(Date, {
      dateString: date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnZXRBbGxQb3N0c0Zyb21TZXJ2ZXIiLCJhbGxQb3N0c0RhdGFGcm9tU2VydmVyIiwiZ2V0QWxsUG9zdHMiLCJwcm9wcyIsIkhvbWUiLCJhbGxQb3N0c0RhdGEiLCJ1dGlsU3R5bGVzIiwiaGVhZGluZ01kIiwicGFkZGluZzFweCIsImhlYWRpbmdMZyIsImxpc3QiLCJtYXAiLCJpZCIsImRhdGUiLCJ0aXRsZSIsImxpc3RJdGVtIiwibGlnaHRUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQVdTLFNBQWVBLHFCQUF0QjtBQUFBO0FBQUE7Ozs0TUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0Msa0NBREQsR0FDMEJDLFdBQVcsRUFEckM7QUFBQSw2Q0FFRTtBQUNMQyxtQkFBSyxFQUFFO0FBQ0xGLHNDQUFzQixFQUF0QkE7QUFESztBQURGLGFBRkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVVSLElBQU1HLElBQUksR0FBQyxTQUFMQSxJQUFLLE9BQTZDO0FBQUEsTUFBMUNDLFlBQTBDLFFBQTFDQSxZQUEwQztBQUFBLE1BQTNCSixzQkFBMkIsUUFBM0JBLHNCQUEyQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxTQUNFLE1BQUMsMERBQUQ7QUFBUSxRQUFJLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLEVBWUU7QUFBUyxhQUFTLFlBQUtLLCtEQUFVLENBQUNDLFNBQWhCLGNBQTZCRCwrREFBVSxDQUFDRSxVQUF4QyxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLCtEQUFVLENBQUNHLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUksYUFBUyxFQUFFSCwrREFBVSxDQUFDSSxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLFlBQVksQ0FBQ00sR0FBYixDQUFpQjtBQUFBLFFBQUdDLEVBQUgsU0FBR0EsRUFBSDtBQUFBLFFBQU9DLElBQVAsU0FBT0EsSUFBUDtBQUFBLFFBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFdBQ2pCO0FBQUksZUFBUyxFQUFFUiwrREFBVSxDQUFDUyxRQUExQjtBQUFvQyxTQUFHLEVBQUVILEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDVCxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsUUFBRSxtQkFBWUEsRUFBWixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJRSxLQUFKLENBREYsQ0FEUyxFQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKUyxFQUtUO0FBQU8sZUFBUyxFQUFFUiwrREFBVSxDQUFDVSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxJQUFEO0FBQU0sZ0JBQVUsRUFBRUgsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTFMsQ0FEaUI7QUFBQSxHQUFqQixDQURILENBRkYsQ0FaRixDQURGO0FBK0JELENBL0NBOztLQUFNVCxJO0FBZ0RRQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTM2MWNiYmY2NTI2M2Y0NGU4NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgLH0gZnJvbSAnLi4vbGliL3Bvc3RzJ1xuaW1wb3J0IHsgb3BlcmF0aW9uc30gZnJvbSAnLi4vcGFnZXMvb3BlcmF0aW9ucydcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gZ2V0U29ydGVkUG9zdHNEYXRhKClcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhXG4gICAgfVxuICB9XG59XG5cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNGcm9tU2VydmVyKCkge1xuICAgIGNvbnN0IGFsbFBvc3RzRGF0YUZyb21TZXJ2ZXIgPSBnZXRBbGxQb3N0cygpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFsbFBvc3RzRGF0YUZyb21TZXJ2ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gY29uc3QgSG9tZT0oeyBhbGxQb3N0c0RhdGEgLCBhbGxQb3N0c0RhdGFGcm9tU2VydmVyfSkgPT57XG4gIC8vIGNvbnN0IFtwb3N0U3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFtdKTtcbiAgLy8gY29uc3QgIGdldFBvc3RzID1hc3luYyAoKSA9PiB7XG4gIC8vICAgYXdhaXQgb3BlcmF0aW9ucy5nZXRBbGxQb3N0cygpLnRoZW4oZGF0YSA9PiB7XG4gIC8vICAgICByZXR1cm4oIFxuICAvLyAgICAgICBjb25zb2xlLmxvZygnZGF0VUVJSUlhJywgZGF0YSksc2V0U3RhdGUoJ2hoaGhoaGgnKSkgXG4gICAgXG4gIC8vICAgfSlcbiAgLy8gIGF3YWl0IGNvbnNvbGUubG9nKCdwb3N0U3RhdGUnLCBwb3N0U3RhdGUpO1xuICAvLyB9O1xuICAvLyBnZXRQb3N0cygpO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGdldFBvc3RzKCk7XG4gIC8vIH0sIFtwb3N0U3RhdGVdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgXG4gICAgICA8SGVhZD7igKY8L0hlYWQ+XG4gICAgICB7Lyoge3Bvc3RTdGF0ZSYmIHBvc3RTdGF0ZS5tYXAoKGVsZW0pPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgIHtlbGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAge2VsZW0uaWR9XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICB7ZWxlbS5ib2R5fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICkpfSAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5oZWFkaW5nTWR9ICR7dXRpbFN0eWxlcy5wYWRkaW5nMXB4fWB9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZ30+QmxvZzwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMubGlzdH0+XG4gICAgICAgICAge2FsbFBvc3RzRGF0YS5tYXAoKHsgaWQsIGRhdGUsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saXN0SXRlbX0ga2V5PXtpZH0+XG4gIDxMaW5rIGhyZWY9XCIvcG9zdHMvW2lkXVwiIGFzPXtgL3Bvc3RzLyR7aWR9YH0+XG4gICAgPGE+e3RpdGxlfTwvYT5cbiAgPC9MaW5rPlxuICA8YnIgLz5cbiAgPHNtYWxsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5saWdodFRleHR9PlxuICAgIDxEYXRlIGRhdGVTdHJpbmc9e2RhdGV9IC8+XG4gIDwvc21hbGw+XG48L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=