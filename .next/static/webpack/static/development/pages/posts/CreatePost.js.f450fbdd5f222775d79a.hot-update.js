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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      postTitle = _useState[0],
      setPostTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      postBody = _useState2[0],
      setPostBody = _useState2[1];

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
                data: _objectSpread(_objectSpread({}, postTitle), postBody)
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAdd: addhandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwidXNlU3RhdGUiLCJwb3N0VGl0bGUiLCJzZXRQb3N0VGl0bGUiLCJwb3N0Qm9keSIsInNldFBvc3RCb2R5IiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlIiwiYm9keSIsInRpdGxlUG9zdCIsInBvc3RNYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxpQ0FBOUM7O0FBU0EsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFTLElBQVQsQ0FEbkI7QUFBQSxNQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxZQURLOztBQUFBLG1CQUVTRixzREFBUSxDQUFRLElBQVIsQ0FGakI7QUFBQSxNQUVoQkcsUUFGZ0I7QUFBQSxNQUVOQyxXQUZNOztBQUl2QixNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNViw0Q0FBSyxDQUFDO0FBQ3ZCVyxzQkFBTSxFQUFFLE1BRGU7QUFFdkJDLG1CQUFHLEVBQUUseUNBRmtCO0FBR3ZCQyxvQkFBSSxrQ0FBT1AsU0FBUCxHQUFxQkUsUUFBckI7QUFIbUIsZUFBRCxDQUZYOztBQUFBO0FBRVBLLGtCQUZPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFSYSxvQkFTUCxJQUFJQyxLQUFKLEVBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVlBLE1BQUlKLFNBQVMsSUFBSUUsUUFBakIsRUFBMkI7QUFDekJFLFlBQVE7QUFDVDs7QUFFRCxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQWdCQyxJQUFoQixFQUFpQztBQUNsRCxRQUFNQyxTQUFpQixHQUFHO0FBQ3hCRixXQUFLLEVBQUVBO0FBRGlCLEtBQTFCO0FBR0EsUUFBTUcsUUFBZSxHQUFHO0FBQ3RCRixVQUFJLEVBQUVBO0FBRGdCLEtBQXhCO0FBSUFaLGdCQUFZLENBQUNhLFNBQUQsQ0FBWjtBQUNBWCxlQUFXLENBQUNZLFFBQUQsQ0FBWDtBQUNELEdBVkQ7O0FBWUEsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQU0sU0FBSyxFQUFFSixVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBRkYsQ0FERjtBQVVELENBMUNEOztHQUFNYixVOztBQTJDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLmY0NTBmYmRkNWYyMjI3NzVkNzlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiO1xyXG5cclxuaW50ZXJmYWNlIEl0aXRsZSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSUJvZHkge1xyXG4gIGJvZHk6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgY3JlYXRlUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCBbcG9zdFRpdGxlLCBzZXRQb3N0VGl0bGVdID0gdXNlU3RhdGU8SXRpdGxlPihudWxsKTtcclxuICBjb25zdCBbcG9zdEJvZHksIHNldFBvc3RCb2R5XSA9IHVzZVN0YXRlPElCb2R5PihudWxsKTtcclxuXHJcbiAgY29uc3QgcHVzaFBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzL1wiLFxyXG4gICAgICAgIGRhdGE6IHsgLi4ucG9zdFRpdGxlLCAuLi5wb3N0Qm9keSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUE9TVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKHBvc3RUaXRsZSAmJiBwb3N0Qm9keSkge1xyXG4gICAgcHVzaFBvc3QoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZGhhbmRsZXIgPSAodGl0bGU6IHN0cmluZywgYm9keTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVBvc3Q6IEl0aXRsZSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHBvc3RNYWluOiBJQm9keSA9IHtcclxuICAgICAgYm9keTogYm9keSxcclxuICAgIH07XHJcblxyXG4gICAgc2V0UG9zdFRpdGxlKHRpdGxlUG9zdCk7XHJcbiAgICBzZXRQb3N0Qm9keShwb3N0TWFpbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIG9uQWRkPXthZGRoYW5kbGVyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tUb0hvbWVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==