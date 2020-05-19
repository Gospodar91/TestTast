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
      lineNumber: 72,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJwb3N0VGl0bGUiLCJzZXRQb3N0VGl0bGUiLCJwb3N0Qm9keSIsInNldFBvc3RCb2R5IiwidG90YWwiLCJUb3RhbFN0YXRlIiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlUG9zdCIsInBvc3RNYWluIiwiYWRkaGFuZGxlcjIiLCJtYWluUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMsaUNBQTlDOztBQWNBLElBQU1DLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFDakMsTUFBTUMsWUFBWSxHQUFDO0FBQ2pCQyxTQUFLLEVBQUMsSUFEVztBQUVqQkMsUUFBSSxFQUFDO0FBRlksR0FBbkI7O0FBRGlDLGtCQUtDQyxzREFBUSxDQUFTLElBQVQsQ0FMVDtBQUFBLE1BSzFCQyxTQUwwQjtBQUFBLE1BS2ZDLFlBTGU7O0FBQUEsbUJBTURGLHNEQUFRLENBQVEsSUFBUixDQU5QO0FBQUEsTUFNMUJHLFFBTjBCO0FBQUEsTUFNaEJDLFdBTmdCOztBQUFBLG1CQU9MSixzREFBUSxDQUFDSCxZQUFELENBUEg7QUFBQSxNQU8xQlEsS0FQMEI7QUFBQSxNQU9uQkMsVUFQbUI7O0FBVWpDLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1mLDRDQUFLLENBQUM7QUFDdkJnQixzQkFBTSxFQUFFLE1BRGU7QUFFdkJDLG1CQUFHLEVBQUUseUNBRmtCO0FBR3ZCQyxvQkFBSSxrQ0FBT1QsU0FBUCxHQUFxQkUsUUFBckI7QUFIbUIsZUFBRCxDQUZYOztBQUFBO0FBRVBPLGtCQUZPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFSYSxvQkFTUCxJQUFJQyxLQUFKLEVBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVlBLE1BQUlOLFNBQVMsSUFBSUUsUUFBakIsRUFBMkI7QUFDekJJLFlBQVE7QUFDVDs7QUFHRCxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDaEIsS0FBRCxFQUFnQkMsSUFBaEIsRUFBaUM7QUFDbEQsUUFBTWdCLFNBQWlCLEdBQUc7QUFDeEJqQixXQUFLLEVBQUVBO0FBRGlCLEtBQTFCO0FBR0EsUUFBTWtCLFFBQWUsR0FBRztBQUN0QmpCLFVBQUksRUFBRUE7QUFEZ0IsS0FBeEI7QUFJQUcsZ0JBQVksQ0FBQ2EsU0FBRCxDQUFaO0FBQ0FYLGVBQVcsQ0FBQ1ksUUFBRCxDQUFYO0FBQ0QsR0FWRDs7QUFZQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDbkIsS0FBRCxFQUFnQkMsSUFBaEIsRUFBaUM7QUFDbkQsUUFBTW1CLFFBQWdCLEdBQUc7QUFDdkJwQixXQUFLLEVBQUVBLEtBRGdCO0FBRXZCQyxVQUFJLEVBQUNBO0FBRmtCLEtBQXpCO0FBTUFPLGNBQVUsQ0FBQ1ksUUFBRCxDQUFWO0FBRUQsR0FURDs7QUFXQSxTQUNFLG1FQUVFLE1BQUMsNkRBQUQ7QUFBTSxTQUFLLEVBQUVELFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0FIRixDQURGO0FBV0QsQ0E3REQ7O0dBQU1yQixVOztBQThEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLjM5ZDI4ZDQxYjRmMDk1ODg5NDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiO1xyXG5cclxuaW50ZXJmYWNlIEl0aXRsZSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSUJvZHkge1xyXG4gIGJvZHk6IHN0cmluZztcclxufVxyXG5pbnRlcmZhY2UgSXRvdGFse1xyXG4gIHRpdGxlOnN0cmluZ1xyXG4gIGJvZHk6c3RyaW5nXHJcbn1cclxuXHJcblxyXG5jb25zdCBjcmVhdGVQb3N0OiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgdGl0bGU6bnVsbCxcclxuICAgIGJvZHk6bnVsbFxyXG4gIH1cclxuICBjb25zdCBbcG9zdFRpdGxlLCBzZXRQb3N0VGl0bGVdID0gdXNlU3RhdGU8SXRpdGxlPihudWxsKTtcclxuICBjb25zdCBbcG9zdEJvZHksIHNldFBvc3RCb2R5XSA9IHVzZVN0YXRlPElCb2R5PihudWxsKTtcclxuICBjb25zdCBbdG90YWwsIFRvdGFsU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuICBcclxuXHJcbiAgY29uc3QgcHVzaFBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzL1wiLFxyXG4gICAgICAgIGRhdGE6IHsgLi4ucG9zdFRpdGxlLCAuLi5wb3N0Qm9keSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUE9TVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKHBvc3RUaXRsZSAmJiBwb3N0Qm9keSkge1xyXG4gICAgcHVzaFBvc3QoKTtcclxuICB9XHJcbiBcclxuXHJcbiAgY29uc3QgYWRkaGFuZGxlciA9ICh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlUG9zdDogSXRpdGxlID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcG9zdE1haW46IElCb2R5ID0ge1xyXG4gICAgICBib2R5OiBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRQb3N0VGl0bGUodGl0bGVQb3N0KTtcclxuICAgIHNldFBvc3RCb2R5KHBvc3RNYWluKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRoYW5kbGVyMiA9ICh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG1haW5Qb3N0OiBJdG90YWwgPSB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keTpib2R5XHJcbiAgICB9O1xyXG4gIFxyXG5cclxuICAgIFRvdGFsU3RhdGUobWFpblBvc3QpO1xyXG4gIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPEZvcm0gb25BZGQ9e2FkZGhhbmRsZXJ9IC8+ICovfVxyXG4gICAgICA8Rm9ybSBvbkFkZD17YWRkaGFuZGxlcjJ9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja1RvSG9tZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9