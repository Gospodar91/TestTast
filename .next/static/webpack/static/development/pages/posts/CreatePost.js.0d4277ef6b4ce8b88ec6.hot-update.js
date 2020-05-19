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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      postTitle = _useState[0],
      setPostTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      postBody = _useState2[0],
      setPostBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      total = _useState3[0],
      TotalState = _useState3[1];

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
                // data: { ...postTitle, ...postBody },
                data: _objectSpread({}, total)
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
  }

  var addhandler = function addhandler(title, body) {
    var titlePost = {
      title: title
    };
    var postMain = {
      body: body
    };
    setPostTitle(titlePost);
    setPostBody(postMain);
  };

  var addhandler2 = function addhandler2(title, body) {
    var mainPost = {
      title: title,
      body: body
    };
    TotalState(mainPost);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAdd: addhandler2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, "\u2190 Back to home"))));
};

_s(createPost, "gG7ZO2ajyWKXnOQXocI7p6oQ0z4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJwb3N0VGl0bGUiLCJzZXRQb3N0VGl0bGUiLCJwb3N0Qm9keSIsInNldFBvc3RCb2R5IiwidG90YWwiLCJUb3RhbFN0YXRlIiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlUG9zdCIsInBvc3RNYWluIiwiYWRkaGFuZGxlcjIiLCJtYWluUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMsaUNBQTlDOztBQWNBLElBQU1DLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFDakMsTUFBTUMsWUFBWSxHQUFDO0FBQ2pCQyxTQUFLLEVBQUMsSUFEVztBQUVqQkMsUUFBSSxFQUFDO0FBRlksR0FBbkI7O0FBRGlDLGtCQUtDQyxzREFBUSxDQUFTLElBQVQsQ0FMVDtBQUFBLE1BSzFCQyxTQUwwQjtBQUFBLE1BS2ZDLFlBTGU7O0FBQUEsbUJBTURGLHNEQUFRLENBQVEsSUFBUixDQU5QO0FBQUEsTUFNMUJHLFFBTjBCO0FBQUEsTUFNaEJDLFdBTmdCOztBQUFBLG1CQU9MSixzREFBUSxDQUFDSCxZQUFELENBUEg7QUFBQSxNQU8xQlEsS0FQMEI7QUFBQSxNQU9uQkMsVUFQbUI7O0FBVWpDLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1mLDRDQUFLLENBQUM7QUFDdkJnQixzQkFBTSxFQUFFLE1BRGU7QUFFdkJDLG1CQUFHLEVBQUUseUNBRmtCO0FBR3ZCO0FBQ0FDLG9CQUFJLG9CQUFLTCxLQUFMO0FBSm1CLGVBQUQsQ0FGWDs7QUFBQTtBQUVQSyxrQkFGTztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBU2JDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBVGEsb0JBVVAsSUFBSUMsS0FBSixFQVZPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJOLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFhQSxNQUFJTixTQUFTLElBQUlFLFFBQWpCLEVBQTJCO0FBQ3pCSSxZQUFRO0FBQ1Q7O0FBR0QsTUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2hCLEtBQUQsRUFBZ0JDLElBQWhCLEVBQWlDO0FBQ2xELFFBQU1nQixTQUFpQixHQUFHO0FBQ3hCakIsV0FBSyxFQUFFQTtBQURpQixLQUExQjtBQUdBLFFBQU1rQixRQUFlLEdBQUc7QUFDdEJqQixVQUFJLEVBQUVBO0FBRGdCLEtBQXhCO0FBSUFHLGdCQUFZLENBQUNhLFNBQUQsQ0FBWjtBQUNBWCxlQUFXLENBQUNZLFFBQUQsQ0FBWDtBQUNELEdBVkQ7O0FBWUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ25CLEtBQUQsRUFBZ0JDLElBQWhCLEVBQWlDO0FBQ25ELFFBQU1tQixRQUFnQixHQUFHO0FBQ3ZCcEIsV0FBSyxFQUFFQSxLQURnQjtBQUV2QkMsVUFBSSxFQUFDQTtBQUZrQixLQUF6QjtBQU1BTyxjQUFVLENBQUNZLFFBQUQsQ0FBVjtBQUVELEdBVEQ7O0FBV0EsU0FDRSxtRUFFRSxNQUFDLDZEQUFEO0FBQU0sU0FBSyxFQUFFRCxXQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBSEYsQ0FERjtBQVdELENBOUREOztHQUFNckIsVTs7QUErRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcQ3JlYXRlUG9zdC5qcy4wZDQyNzdlZjZiNGNlOGI4OGVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vRm9ybVwiO1xyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIjtcclxuXHJcbmludGVyZmFjZSBJdGl0bGUge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIElCb2R5IHtcclxuICBib2R5OiBzdHJpbmc7XHJcbn1cclxuaW50ZXJmYWNlIEl0b3RhbHtcclxuICB0aXRsZTpzdHJpbmdcclxuICBib2R5OnN0cmluZ1xyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlUG9zdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIHRpdGxlOm51bGwsXHJcbiAgICBib2R5Om51bGxcclxuICB9XHJcbiAgY29uc3QgW3Bvc3RUaXRsZSwgc2V0UG9zdFRpdGxlXSA9IHVzZVN0YXRlPEl0aXRsZT4obnVsbCk7XHJcbiAgY29uc3QgW3Bvc3RCb2R5LCBzZXRQb3N0Qm9keV0gPSB1c2VTdGF0ZTxJQm9keT4obnVsbCk7XHJcbiAgY29uc3QgW3RvdGFsLCBUb3RhbFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XHJcbiAgXHJcblxyXG4gIGNvbnN0IHB1c2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy9cIixcclxuICAgICAgICAvLyBkYXRhOiB7IC4uLnBvc3RUaXRsZSwgLi4ucG9zdEJvZHkgfSxcclxuICAgICAgICBkYXRhOnsuLi50b3RhbH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQT1NUIEVSUk9SXCIsIGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpZiAocG9zdFRpdGxlICYmIHBvc3RCb2R5KSB7XHJcbiAgICBwdXNoUG9zdCgpO1xyXG4gIH1cclxuIFxyXG5cclxuICBjb25zdCBhZGRoYW5kbGVyID0gKHRpdGxlOiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgdGl0bGVQb3N0OiBJdGl0bGUgPSB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIH07XHJcbiAgICBjb25zdCBwb3N0TWFpbjogSUJvZHkgPSB7XHJcbiAgICAgIGJvZHk6IGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFBvc3RUaXRsZSh0aXRsZVBvc3QpO1xyXG4gICAgc2V0UG9zdEJvZHkocG9zdE1haW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZGhhbmRsZXIyID0gKHRpdGxlOiBzdHJpbmcsIGJvZHk6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgbWFpblBvc3Q6IEl0b3RhbCA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBib2R5OmJvZHlcclxuICAgIH07XHJcbiAgXHJcblxyXG4gICAgVG90YWxTdGF0ZShtYWluUG9zdCk7XHJcbiAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHsvKiA8Rm9ybSBvbkFkZD17YWRkaGFuZGxlcn0gLz4gKi99XHJcbiAgICAgIDxGb3JtIG9uQWRkPXthZGRoYW5kbGVyMn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrVG9Ib21lXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=