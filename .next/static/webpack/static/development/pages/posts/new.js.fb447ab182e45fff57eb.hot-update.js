webpackHotUpdate("static\\development\\pages\\posts\\new.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./pages/posts/new.tsx":
/*!*****************************!*\
  !*** ./pages/posts/new.tsx ***!
  \*****************************/
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
    _jsxFileName = "E:\\TestTaskNextJs\\testDevOps\\TestTast\\nextjs-blog\\pages\\posts\\new.tsx",
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

  if (textState.body && textState.title) {
    pushPost();
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
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9uZXcudHN4Il0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImNyZWF0ZVBvc3QiLCJpbml0aWFsU3RhdGUiLCJ0aXRsZSIsImJvZHkiLCJ1c2VTdGF0ZSIsInRleHRTdGF0ZSIsInNldFRleHRTdGF0ZSIsInB1c2hQb3N0IiwibWV0aG9kIiwidXJsIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsImFkZGhhbmRsZXIiLCJtYWluUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLENBQXVCQyxJQUF2QixDQUE0QixjQUE1QixJQUE4QyxpQ0FBOUM7O0FBRUEsSUFBTUMsVUFBb0IsR0FBRyxTQUF2QkEsVUFBdUIsR0FBTTtBQUFBOztBQUNqQyxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQUssRUFBRSxJQURZO0FBRW5CQyxRQUFJLEVBQUU7QUFGYSxHQUFyQjs7QUFEaUMsa0JBS0NDLHNEQUFRLENBQVFILFlBQVIsQ0FMVDtBQUFBLE1BSzFCSSxTQUwwQjtBQUFBLE1BS2ZDLFlBTGU7O0FBTWpDLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUVFYLDRDQUFLLENBQUM7QUFDdkJZLHNCQUFNLEVBQUUsUUFEZTtBQUV2QkMsbUJBQUcsRUFBRTtBQUZrQixlQUFELENBUmI7O0FBQUE7QUFRTEMsa0JBUks7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNiQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQWRhLG9CQWVQLElBQUlDLEtBQUosRUFmTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSTixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBa0JBLE1BQUlGLFNBQVMsQ0FBQ0YsSUFBVixJQUFrQkUsU0FBUyxDQUFDSCxLQUFoQyxFQUF1QztBQUNyQ0ssWUFBUTtBQUNUOztBQUNIQSxVQUFROztBQUNOLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNaLEtBQUQsRUFBZ0JDLElBQWhCLEVBQWlDO0FBQ2xELFFBQU1ZLFFBQWUsR0FBRztBQUN0QmIsV0FBSyxFQUFFQSxLQURlO0FBRXRCQyxVQUFJLEVBQUVBO0FBRmdCLEtBQXhCO0FBSUFHLGdCQUFZLENBQUNTLFFBQUQsQ0FBWjtBQUNELEdBTkQ7O0FBUUEsU0FDRSxtRUFDRSxNQUFDLDZEQUFEO0FBQU0sU0FBSyxFQUFFRCxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBRkYsQ0FERjtBQVVELENBOUNEOztHQUFNZCxVOztBQStDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxuZXcuanMuZmI0NDdhYjE4MmU0NWZmZjU3ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtL0Zvcm1cIjtcclxuaW1wb3J0IHsgSXRleHQgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9pbnRlcmZhY2VzXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiO1xyXG5cclxuY29uc3QgY3JlYXRlUG9zdDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgdGl0bGU6IG51bGwsXHJcbiAgICBib2R5OiBudWxsLFxyXG4gIH07XHJcbiAgY29uc3QgW3RleHRTdGF0ZSwgc2V0VGV4dFN0YXRlXSA9IHVzZVN0YXRlPEl0ZXh0Pihpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IHB1c2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zKHtcclxuICAgIC8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgLy8gICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy9cIixcclxuICAgIC8vICAgICBkYXRhOiB7IC4uLnRleHRTdGF0ZSB9LFxyXG4gICAgLy8gICB9KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgICAgdXJsOiBcImh0dHBzOi8vc2ltcGxlLWJsb2ctYXBpLmNyZXcucmVkL3Bvc3RzLzlcIixcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBPU1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGlmICh0ZXh0U3RhdGUuYm9keSAmJiB0ZXh0U3RhdGUudGl0bGUpIHtcclxuICAgIHB1c2hQb3N0KCk7XHJcbiAgfVxyXG5wdXNoUG9zdCgpXHJcbiAgY29uc3QgYWRkaGFuZGxlciA9ICh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG1haW5Qb3N0OiBJdGV4dCA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBib2R5OiBib2R5LFxyXG4gICAgfTtcclxuICAgIHNldFRleHRTdGF0ZShtYWluUG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIG9uQWRkPXthZGRoYW5kbGVyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tUb0hvbWVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==