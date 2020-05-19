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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      postTitle = _useState[0],
      setPostTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      postBody = _useState2[0],
      setPostBody = _useState2[1];

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
                method: "post",
                url: "https://simple-blog-api.crew.red/posts/" // data: postTitle,setBody

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

  if (postTitle && postBody) {
    pushPost();
  } // pushPost();
  // pushPost();


  var addhandler = function addhandler(title, body) {
    var titlePost = {
      title: title // body:body

    };
    var postMain = {
      body: body // body:body

    };
    setPostTitle(titlePost);
    setPostBody(postMain);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onAdd: addhandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, "\u2190 Back to home"))));
};

_s(createPost, "TdZMA5GakuAdRemWD0juYQEVXZw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwidXNlU3RhdGUiLCJwb3N0VGl0bGUiLCJzZXRQb3N0VGl0bGUiLCJwb3N0Qm9keSIsInNldFBvc3RCb2R5IiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlIiwiYm9keSIsInRpdGxlUG9zdCIsInBvc3RNYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGlDQUE5Qzs7QUFTQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQVMsSUFBVCxDQURuQjtBQUFBLE1BQ2hCQyxTQURnQjtBQUFBLE1BQ0xDLFlBREs7O0FBQUEsbUJBRVNGLHNEQUFRLENBQVEsSUFBUixDQUZqQjtBQUFBLE1BRWhCRyxRQUZnQjtBQUFBLE1BRU5DLFdBRk07O0FBSXZCLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1WLDRDQUFLLENBQUM7QUFDdkJXLHNCQUFNLEVBQUUsTUFEZTtBQUV2QkMsbUJBQUcsRUFBRSx5Q0FGa0IsQ0FHdkI7O0FBSHVCLGVBQUQsQ0FGWDs7QUFBQTtBQUVQQyxrQkFGTztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBUWJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBUmEsb0JBU1AsSUFBSUMsS0FBSixFQVRPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJOLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFZQSxNQUFHSixTQUFTLElBQUVFLFFBQWQsRUFBdUI7QUFDbkJFLFlBQVE7QUFDWCxHQWxCc0IsQ0FtQnZCO0FBRUE7OztBQUVBLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBZ0JDLElBQWhCLEVBQWlDO0FBQ2xELFFBQU1DLFNBQWlCLEdBQUc7QUFDeEJGLFdBQUssRUFBRUEsS0FEaUIsQ0FFeEI7O0FBRndCLEtBQTFCO0FBSUEsUUFBTUcsUUFBZSxHQUFHO0FBQ3RCRixVQUFJLEVBQUVBLElBRGdCLENBRXRCOztBQUZzQixLQUF4QjtBQUtBWixnQkFBWSxDQUFDYSxTQUFELENBQVo7QUFDQVgsZUFBVyxDQUFDWSxRQUFELENBQVg7QUFDRCxHQVpEOztBQWNBLFNBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFNLFNBQUssRUFBRUosVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixDQUhGLENBREY7QUFXRCxDQWhERDs7R0FBTWIsVTs7QUFpRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcQ3JlYXRlUG9zdC5qcy44ZDZlMGJmNGYzMGY0NTNjYjhiZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vRm9ybVwiO1xyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIjtcclxuXHJcbmludGVyZmFjZSBJdGl0bGUge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIElCb2R5IHtcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RUaXRsZSwgc2V0UG9zdFRpdGxlXSA9IHVzZVN0YXRlPEl0aXRsZT4obnVsbCk7XHJcbiAgY29uc3QgW3Bvc3RCb2R5LCBzZXRQb3N0Qm9keV0gPSB1c2VTdGF0ZTxJQm9keT4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHB1c2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy9cIixcclxuICAgICAgICAvLyBkYXRhOiBwb3N0VGl0bGUsc2V0Qm9keVxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUE9TVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYocG9zdFRpdGxlJiZwb3N0Qm9keSl7XHJcbiAgICAgIHB1c2hQb3N0KCk7XHJcbiAgfVxyXG4gIC8vIHB1c2hQb3N0KCk7XHJcblxyXG4gIC8vIHB1c2hQb3N0KCk7XHJcblxyXG4gIGNvbnN0IGFkZGhhbmRsZXIgPSAodGl0bGU6IHN0cmluZywgYm9keTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVBvc3Q6IEl0aXRsZSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAvLyBib2R5OmJvZHlcclxuICAgIH07XHJcbiAgICBjb25zdCBwb3N0TWFpbjogSUJvZHkgPSB7XHJcbiAgICAgIGJvZHk6IGJvZHksXHJcbiAgICAgIC8vIGJvZHk6Ym9keVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRQb3N0VGl0bGUodGl0bGVQb3N0KTtcclxuICAgIHNldFBvc3RCb2R5KHBvc3RNYWluKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEZvcm0gb25BZGQ9e2FkZGhhbmRsZXJ9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tUb0hvbWVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==