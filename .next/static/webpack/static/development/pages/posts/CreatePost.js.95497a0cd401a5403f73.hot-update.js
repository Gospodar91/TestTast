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
      lineNumber: 43,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0U3RhdGUiLCJzZXRUZXh0U3RhdGUiLCJwdXNoUG9zdCIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiRXJyb3IiLCJhZGRoYW5kbGVyIiwibWFpblBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGlDQUE5Qzs7QUFLQSxJQUFNQyxVQUFvQixHQUFHLFNBQXZCQSxVQUF1QixHQUFNO0FBQUE7O0FBQ2pDLE1BQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBSyxFQUFFLElBRFk7QUFFbkJDLFFBQUksRUFBRTtBQUZhLEdBQXJCOztBQURpQyxrQkFLQ0Msc0RBQVEsQ0FBQ0gsWUFBRCxDQUxUO0FBQUEsTUFLMUJJLFNBTDBCO0FBQUEsTUFLZkMsWUFMZTs7QUFNakMsTUFBTUMsUUFBUTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTVgsNENBQUssQ0FBQztBQUN2Qlksc0JBQU0sRUFBRSxNQURlO0FBRXZCQyxtQkFBRyxFQUFFLHlDQUZrQjtBQUd2QkMsb0JBQUksb0JBQU9MLFNBQVA7QUFIbUIsZUFBRCxDQUZYOztBQUFBO0FBRVBLLGtCQUZPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFSYSxvQkFTUCxJQUFJQyxLQUFKLEVBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVlBLE1BQUlGLFNBQVMsQ0FBQ0YsSUFBVixJQUFrQkUsU0FBUyxDQUFDSCxLQUFoQyxFQUF1QztBQUNyQ0ssWUFBUTtBQUNUOztBQUVELE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNaLEtBQUQsRUFBZ0JDLElBQWhCLEVBQWlDO0FBQ2xELFFBQU1ZLFFBQWdCLEdBQUc7QUFDdkJiLFdBQUssRUFBRUEsS0FEZ0I7QUFFdkJDLFVBQUksRUFBRUE7QUFGaUIsS0FBekI7QUFLQUcsZ0JBQVksQ0FBQ1MsUUFBRCxDQUFaO0FBQ0QsR0FQRDs7QUFTQSxTQUNFLG1FQUNFLE1BQUMsNkRBQUQ7QUFBTSxTQUFLLEVBQUVELFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0FGRixDQURGO0FBVUQsQ0F6Q0Q7O0dBQU1kLFU7O0FBMENTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXENyZWF0ZVBvc3QuanMuOTU0OTdhMGNkNDAxYTU0MDNmNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtL0Zvcm1cIjtcclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCI7XHJcbmludGVyZmFjZSBJdG90YWwge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG59XHJcbmNvbnN0IGNyZWF0ZVBvc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgYm9keTogbnVsbCxcclxuICB9O1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IHB1c2hQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy9cIixcclxuICAgICAgICBkYXRhOiB7IC4uLnRleHRTdGF0ZSB9LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUE9TVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgaWYgKHRleHRTdGF0ZS5ib2R5ICYmIHRleHRTdGF0ZS50aXRsZSkge1xyXG4gICAgcHVzaFBvc3QoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFkZGhhbmRsZXIgPSAodGl0bGU6IHN0cmluZywgYm9keTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBtYWluUG9zdDogSXRvdGFsID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIGJvZHk6IGJvZHksXHJcbiAgICB9O1xyXG5cclxuICAgIHNldFRleHRTdGF0ZShtYWluUG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIG9uQWRkPXthZGRoYW5kbGVyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tUb0hvbWVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==