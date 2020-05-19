webpackHotUpdate("static\\development\\pages\\posts\\CreatePost.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/form/Form */ "./components/form/Form.tsx");



var _this = undefined,
    _jsxFileName = "E:\\TestTaskNextJs\\testDevOps\\TestTast\\nextjs-blog\\pages\\posts\\CreatePost.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

var createPost = function createPost() {
  _s();

  var initialState = {
    title: null,
    body: null
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialState),
      textState = _useState[0],
      setTextState = _useState[1];

  var pushPost = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: "delete",
                url: "https://simple-blog-api.crew.red/posts/9"
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

  if (textState.body && textState.title) {// pushPost();
  }

  pushPost();

  var addhandler = function addhandler(title, body) {
    var mainPost = {
      title: title,
      body: body
    };
    setTextState(mainPost);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onAdd: addhandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0U3RhdGUiLCJzZXRUZXh0U3RhdGUiLCJwdXNoUG9zdCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJhZGRoYW5kbGVyIiwibWFpblBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMsaUNBQTlDOztBQUtBLElBQU1DLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFDakMsTUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxTQUFLLEVBQUUsSUFEWTtBQUVuQkMsUUFBSSxFQUFFO0FBRmEsR0FBckI7O0FBRGlDLGtCQUtDQyxzREFBUSxDQUFRSCxZQUFSLENBTFQ7QUFBQSxNQUsxQkksU0FMMEI7QUFBQSxNQUtmQyxZQUxlOztBQU1qQyxNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVFNWCw0Q0FBSyxDQUFDO0FBQ3ZCWSxzQkFBTSxFQUFFLFFBRGU7QUFFdkJDLG1CQUFHLEVBQUU7QUFGa0IsZUFBRCxDQVJYOztBQUFBO0FBUVBDLGtCQVJPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFjYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFkYSxvQkFlUCxJQUFJQyxLQUFKLEVBZk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQWtCQSxNQUFJRixTQUFTLENBQUNGLElBQVYsSUFBa0JFLFNBQVMsQ0FBQ0gsS0FBaEMsRUFBdUMsQ0FDckM7QUFDRDs7QUFDQUssVUFBUTs7QUFFVCxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDWixLQUFELEVBQWlCQyxJQUFqQixFQUFtQztBQUNwRCxRQUFNWSxRQUFlLEdBQUU7QUFDckJiLFdBQUssRUFBRUEsS0FEYztBQUVyQkMsVUFBSSxFQUFFQTtBQUZlLEtBQXZCO0FBS0FHLGdCQUFZLENBQUNTLFFBQUQsQ0FBWjtBQUNELEdBUEQ7O0FBU0EsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQU0sU0FBSyxFQUFFRCxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBRkYsQ0FERjtBQVVELENBaEREOztHQUFNZCxVOztBQWlEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLjkxNDIyYjAwMzFjMDQzYWM0MWVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiO1xyXG5pbnRlcmZhY2UgSXRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IGNyZWF0ZVBvc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgYm9keTogbnVsbCxcclxuICB9O1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSB1c2VTdGF0ZTxJdGV4dD4oaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCBwdXNoUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAvLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIC8vICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvXCIsXHJcbiAgICAvLyAgICAgZGF0YTogeyAuLi50ZXh0U3RhdGUgfSxcclxuICAgIC8vICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvOVwiLFxyXG4gICAgICAgXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQT1NUIEVSUk9SXCIsIGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpZiAodGV4dFN0YXRlLmJvZHkgJiYgdGV4dFN0YXRlLnRpdGxlKSB7XHJcbiAgICAvLyBwdXNoUG9zdCgpO1xyXG4gIH1cclxuICAgcHVzaFBvc3QoKTtcclxuXHJcbiAgY29uc3QgYWRkaGFuZGxlciA9ICh0aXRsZT86IHN0cmluZywgYm9keT86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbWFpblBvc3Q6IEl0ZXh0PSB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keTogYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgc2V0VGV4dFN0YXRlKG1haW5Qb3N0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gb25BZGQ9e2FkZGhhbmRsZXJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja1RvSG9tZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9