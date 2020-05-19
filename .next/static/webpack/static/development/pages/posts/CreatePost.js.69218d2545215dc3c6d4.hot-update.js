webpackHotUpdate("static\\development\\pages\\posts\\CreatePost.js",{

/***/ "./components/form/Form.tsx":
/*!**********************************!*\
  !*** ./components/form/Form.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "E:\\TestTaskNextJs\\testDevOps\\TestTast\\nextjs-blog\\components\\form\\Form.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Form = function Form(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      textTitle = _useState[0],
      setTextTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      textBody = _useState2[0],
      setTextBody = _useState2[1];

  var changeHandlerTitle = function changeHandlerTitle(event) {
    setTextTitle(event.target.value);
  };

  var changeHandlerBody = function changeHandlerBody(event) {
    setTextBody(event.target.value);
  };

  var keyPress = function keyPress(event) {
    if (event.key === 'Enter') {
      props.onAdd(textTitle, textBody);
      setTextTitle('');
    }
  };

  return __jsx("div", {
    className: "input-field todoForm",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("input", {
    onChange: changeHandlerTitle,
    value: textTitle,
    onKeyPress: keyPress,
    placeholder: "Enter Title",
    type: "text",
    id: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "title",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "Enter Title"), __jsx("input", {
    onChange: changeHandlerBody,
    value: textBody,
    onKeyPress: keyPress,
    placeholder: "Enter Title",
    type: "text",
    id: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "title",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Enter Title"));
};

_s(Form, "I42LuRhUvI7JBKYyGT/Oao3zEEg=");

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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

/***/ }),

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      postTitle = _useState[0],
      setPostTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
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
  }(); // pushPost();
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
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\u2190 Back to home"))));
};

_s(createPost, "hYAZmyAGjezUCYGjM9AzzhaELgU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdHMvQ3JlYXRlUG9zdC50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwiY2hhbmdlSGFuZGxlclRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUhhbmRsZXJCb2R5Iiwia2V5UHJlc3MiLCJrZXkiLCJvbkFkZCIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwicG9zdCIsImNyZWF0ZVBvc3QiLCJwb3N0VGl0bGUiLCJzZXRQb3N0VGl0bGUiLCJwb3N0Qm9keSIsInNldFBvc3RCb2R5IiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlIiwiYm9keSIsInRpdGxlUG9zdCIsInBvc3RNYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFNQSxJQUFNQSxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsRUFEQztBQUFBLE1BQ3BDQyxTQURvQztBQUFBLE1BQ3pCQyxZQUR5Qjs7QUFBQSxtQkFFWEYsc0RBQVEsRUFGRztBQUFBLE1BRXBDRyxRQUZvQztBQUFBLE1BRTFCQyxXQUYwQjs7QUFHM0MsTUFBTUMsa0JBQWtCLEdBQUMsU0FBbkJBLGtCQUFtQixDQUFDQyxLQUFELEVBQXVDO0FBQzVESixnQkFBWSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFaO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBQyxTQUFsQkEsaUJBQWtCLENBQUNILEtBQUQsRUFBdUM7QUFDM0RGLGVBQVcsQ0FBQ0UsS0FB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RixDQUFYO0FBRUQsR0FiRDs7QUFlQSxTQUNFLG1FQUNFLE1BQUMsNkRBQUQ7QUFBTSxTQUFLLEVBQUVKLFVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0FIRixDQURGO0FBV0QsQ0E5Q0Q7O0dBQU1aLFU7O0FBK0NTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXENyZWF0ZVBvc3QuanMuNjkyMThkMjU0NTIxNWRjM2M2ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgRm9ybVByb3Bze1xyXG4gICAgb25BZGQodGl0bGU6c3RyaW5nLGJvZHk6c3RyaW5nKTp2b2lkXHJcbn1cclxuY29uc3QgRm9ybTogUmVhY3QuRkM8Rm9ybVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0VGl0bGUsIHNldFRleHRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgW3RleHRCb2R5LCBzZXRUZXh0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlclRpdGxlPShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgc2V0VGV4dFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlckJvZHk9KGV2ZW50OkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICBzZXRUZXh0Qm9keShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGtleVByZXNzPShldmVudDpSZWFjdC5LZXlib2FyZEV2ZW50KT0+XHJcbiAge1xyXG5pZihldmVudC5rZXk9PT0nRW50ZXInKXtcclxuICAgcHJvcHMub25BZGQodGV4dFRpdGxlISx0ZXh0Qm9keSEpXHJcbiAgXHJcbiAgICBzZXRUZXh0VGl0bGUoJycpXHJcblxyXG59XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIHRvZG9Gb3JtXCI+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJUaXRsZX1cclxuICAgICAgdmFsdWU9e3RleHRUaXRsZX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUaXRsZSdcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICBFbnRlciBUaXRsZVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyQm9keX1cclxuICAgICAgdmFsdWU9e3RleHRCb2R5fVxyXG4gICAgICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFRpdGxlJ1xyXG4gICAgICB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgIEVudGVyIFRpdGxlXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vRm9ybVwiO1xyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIjtcclxuXHJcbmludGVyZmFjZSBJdGl0bGV7XHJcbiAgdGl0bGU6c3RyaW5nXHJcbn1cclxuaW50ZXJmYWNlIElCb2R5e1xyXG4gIGJvZHk6c3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RUaXRsZSwgc2V0UG9zdFRpdGxlXSA9IHVzZVN0YXRlPEl0aXRsZT4oKTtcclxuICBjb25zdCBbcG9zdEJvZHksIHNldFBvc3RCb2R5XSA9IHVzZVN0YXRlPElCb2R5PigpO1xyXG5cclxuICBjb25zdCBwdXNoUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvXCIsXHJcbiAgICAgICAgLy8gZGF0YTogcG9zdFRpdGxlLHNldEJvZHlcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBPU1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICB9O1xyXG4gICAgLy8gcHVzaFBvc3QoKTtcclxuICBcclxuICAgIC8vIHB1c2hQb3N0KCk7XHJcbiAgXHJcbiAgY29uc3QgYWRkaGFuZGxlciA9ICh0aXRsZTogc3RyaW5nLGJvZHk6c3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZVBvc3Q6IEl0aXRsZSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAvLyBib2R5OmJvZHlcclxuICAgIH07XHJcbiAgICBjb25zdCBwb3N0TWFpbjogSUJvZHkgPSB7XHJcbiAgICAgIGJvZHk6Ym9keSxcclxuICAgICAgLy8gYm9keTpib2R5XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFBvc3RUaXRsZSgodGl0bGVQb3N0KSk7XHJcbiAgICBzZXRQb3N0Qm9keSgocG9zdE1haW4pKTtcclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybSBvbkFkZD17YWRkaGFuZGxlcn0gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja1RvSG9tZVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT7ihpAgQmFjayB0byBob21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9