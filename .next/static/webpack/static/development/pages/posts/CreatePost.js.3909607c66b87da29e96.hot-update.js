webpackHotUpdate("static\\development\\pages\\posts\\CreatePost.js",{

/***/ "./pages/posts/CreatePost.tsx":
/*!************************************!*\
  !*** ./pages/posts/CreatePost.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/form/Form */ "./components/form/Form.tsx");




var _this = undefined,
    _jsxFileName = "E:\\TestTaskNextJs\\testDevOps\\TestTast\\nextjs-blog\\pages\\posts\\CreatePost.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

var createPost = function createPost() {
  _s();

  var initialState = {
    title: null,
    body: null
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      textState = _useState[0],
      setTextState = _useState[1];

  var pushPost = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "post",
                url: "https://simple-blog-api.crew.red/posts/",
                data: _objectSpread({}, textState)
              });

            case 3:
              data = _context.sent;
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              console.log("POST ERROR", _context.t0);
              throw new Error();

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function pushPost() {
      return _ref.apply(this, arguments);
    };
  }();

  if (textState.body && textState.title) {
    pushPost();
  }

  var addhandler = function addhandler(title, body) {
    var mainPost = {
      title: title,
      body: body
    };
    setTextState(mainPost);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAdd: addhandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "\u2190 Back to home"))));
};

_s(createPost, "yBjCFvH1RStHgOxsLXT/6qEmWwQ=");

/* harmony default export */ __webpack_exports__["default"] = (createPost);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0U3RhdGUiLCJzZXRUZXh0U3RhdGUiLCJwdXNoUG9zdCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJhZGRoYW5kbGVyIiwibWFpblBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGlDQUE5Qzs7QUFLQSxJQUFNQyxVQUFvQixHQUFHLFNBQXZCQSxVQUF1QixHQUFNO0FBQUE7O0FBQ2pDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBSyxFQUFFLElBRFk7QUFFbkJDLFFBQUksRUFBRTtBQUZhLEdBQXJCOztBQURpQyxrQkFLQ0Msc0RBQVEsQ0FBUUgsWUFBUixDQUxUO0FBQUEsTUFLMUJJLFNBTDBCO0FBQUEsTUFLZkMsWUFMZTs7QUFNakMsTUFBTUMsUUFBUTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTVgsNENBQUssQ0FBQztBQUN2Qlksc0JBQU0sRUFBRSxNQURlO0FBRXZCQyxtQkFBRyxFQUFFLHlDQUZrQjtBQUd2QkMsb0JBQUksb0JBQU9MLFNBQVA7QUFIbUIsZUFBRCxDQUZYOztBQUFBO0FBRVBLLGtCQUZPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFjYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFkYSxvQkFlUCxJQUFJQyxLQUFKLEVBZk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWtCQSxNQUFJRixTQUFTLENBQUNGLElBQVYsSUFBa0JFLFNBQVMsQ0FBQ0gsS0FBaEMsRUFBdUM7QUFDckNLLFlBQVE7QUFDVDs7QUFFRCxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDWixLQUFELEVBQWlCQyxJQUFqQixFQUFtQztBQUNwRCxRQUFNWSxRQUFlLEdBQUU7QUFDckJiLFdBQUssRUFBRUEsS0FEYztBQUVyQkMsVUFBSSxFQUFFQTtBQUZlLEtBQXZCO0FBS0FHLGdCQUFZLENBQUNTLFFBQUQsQ0FBWjtBQUNELEdBUEQ7O0FBU0EsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQU0sU0FBSyxFQUFFRCxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBRkYsQ0FERjtBQVVELENBL0NEOztHQUFNZCxVOztBQWdEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLjM5MDk2MDdjNjZiODdkYTI5ZTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiO1xyXG5pbnRlcmZhY2UgSXRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IGNyZWF0ZVBvc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgYm9keTogbnVsbCxcclxuICB9O1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSB1c2VTdGF0ZTxJdGV4dD4oaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBwdXNoUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvXCIsXHJcbiAgICAgICAgZGF0YTogeyAuLi50ZXh0U3RhdGUgfSxcclxuICAgICAgfSk7XHJcbiAgICAvLyB0cnkge1xyXG4gICAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgLy8gICAgIG1ldGhvZDogXCJkZWxldGVcIixcclxuICAgIC8vICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvXCIsXHJcbiAgICAvLyAgICBcclxuICAgIC8vICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBPU1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGlmICh0ZXh0U3RhdGUuYm9keSAmJiB0ZXh0U3RhdGUudGl0bGUpIHtcclxuICAgIHB1c2hQb3N0KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhZGRoYW5kbGVyID0gKHRpdGxlPzogc3RyaW5nLCBib2R5Pzogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBtYWluUG9zdDogSXRleHQ9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBib2R5OiBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRUZXh0U3RhdGUobWFpblBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBvbkFkZD17YWRkaGFuZGxlcn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrVG9Ib21lXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=