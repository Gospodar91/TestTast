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

  var initialState = {
    title: null,
    body: null
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      textTitle = _useState[0],
      setTextTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      textBody = _useState2[0],
      setTextBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState),
      textState = _useState3[0],
      setTextState = _useState3[1];

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
      setTextBody('');
    }
  };

  return __jsx("div", {
    className: "input-field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("form", {
    className: "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
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
      lineNumber: 54,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "title",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Enter Title"), __jsx("input", {
    onChange: changeHandlerBody,
    value: textBody,
    onKeyPress: keyPress,
    placeholder: "Enter description",
    type: "text",
    id: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "body",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "Enter description"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, " Fill the blanks and press Enter")));
};

_s(Form, "l/KKQO1abSEUHuEngwp/ETW65wc=");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiY2hhbmdlSGFuZGxlclRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUhhbmRsZXJCb2R5Iiwia2V5UHJlc3MiLCJrZXkiLCJvbkFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBVUEsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBSyxFQUFFLElBRFU7QUFFakJDLFFBQUksRUFBRTtBQUZXLEdBQXJCOztBQUR5QyxrQkFLVEMsc0RBQVEsRUFMQztBQUFBLE1BS3BDQyxTQUxvQztBQUFBLE1BS3pCQyxZQUx5Qjs7QUFBQSxtQkFNWEYsc0RBQVEsRUFORztBQUFBLE1BTXBDRyxRQU5vQztBQUFBLE1BTTFCQyxXQU4wQjs7QUFBQSxtQkFPVEosc0RBQVEsQ0FBUUgsWUFBUixDQVBDO0FBQUEsTUFPcENRLFNBUG9DO0FBQUEsTUFPekJDLFlBUHlCOztBQXdCM0MsTUFBTUMsa0JBQWtCLEdBQUMsU0FBbkJBLGtCQUFtQixDQUFDQyxLQUFELEVBQXVDO0FBQzVETixnQkFBWSxDQUFDTSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFaO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxpQkFBaUIsR0FBQyxTQUFsQkEsaUJBQWtCLENBQUNILEtBQUQsRUFBdUM7QUFDM0RKLGVBQVcsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWDtBQUNILEdBRkQ7O0FBR0EsTUFBTUUsUUFBUSxHQUFDLFNBQVRBLFFBQVMsQ0FBQ0osS0FBRCxFQUNmO0FBQ0YsUUFBR0EsS0FBSyxDQUFDSyxHQUFOLEtBQVksT0FBZixFQUF1QjtBQUNwQmpCLFdBQUssQ0FBQ2tCLEtBQU4sQ0FBWWIsU0FBWixFQUF1QkUsUUFBdkI7QUFFQ0Qsa0JBQVksQ0FBQyxFQUFELENBQVo7QUFDQUUsaUJBQVcsQ0FBQyxFQUFELENBQVg7QUFFSDtBQUNFLEdBVEQ7O0FBVUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Y7QUFDQSxZQUFRLEVBQUVHLGtCQURWO0FBRUEsU0FBSyxFQUFFTixTQUZQO0FBR0EsY0FBVSxFQUFFVyxRQUhaO0FBSUEsZUFBVyxFQUFDLGFBSlo7QUFLQSxRQUFJLEVBQUMsTUFMTDtBQUtZLE1BQUUsRUFBQyxPQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERSxFQU9GO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBdUIsYUFBUyxFQUFDLFFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEUsRUFVRjtBQUNBLFlBQVEsRUFBRUQsaUJBRFY7QUFFQSxTQUFLLEVBQUVSLFFBRlA7QUFHQSxjQUFVLEVBQUVTLFFBSFo7QUFJQSxlQUFXLEVBQUMsbUJBSlo7QUFLQSxRQUFJLEVBQUMsTUFMTDtBQUtZLE1BQUUsRUFBQyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRSxFQWdCRjtBQUFPLFdBQU8sRUFBQyxNQUFmO0FBQXNCLGFBQVMsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRSxFQW1CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQW5CRSxDQURKLENBREY7QUF5QkQsQ0FqRUQ7O0dBQU1qQixJOztLQUFBQSxJO0FBa0VTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXENyZWF0ZVBvc3QuanMuMmRiYmFlYjliMGNmZTU1ZjhmYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgRm9ybVByb3Bze1xyXG4gICAgb25BZGQodGl0bGU6c3RyaW5nLGJvZHk6c3RyaW5nKTp2b2lkXHJcbn1cclxuaW50ZXJmYWNlIEl0ZXh0IHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBib2R5OiBzdHJpbmc7XHJcbiAgfVxyXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgYm9keTogbnVsbCxcclxuICAgICAgfTtcclxuICBjb25zdCBbdGV4dFRpdGxlLCBzZXRUZXh0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0Qm9keSwgc2V0VGV4dEJvZHldID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSB1c2VTdGF0ZTxJdGV4dD4oaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlclRpdGxlPShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgc2V0VGV4dFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlckJvZHk9KGV2ZW50OkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICBzZXRUZXh0Qm9keShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGtleVByZXNzPShldmVudDpSZWFjdC5LZXlib2FyZEV2ZW50KT0+XHJcbiAge1xyXG5pZihldmVudC5rZXk9PT0nRW50ZXInKXtcclxuICAgcHJvcHMub25BZGQodGV4dFRpdGxlISx0ZXh0Qm9keSEpXHJcbiAgXHJcbiAgICBzZXRUZXh0VGl0bGUoJycpXHJcbiAgICBzZXRUZXh0Qm9keSgnJylcclxuXHJcbn1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0nPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyVGl0bGV9XHJcbiAgICAgIHZhbHVlPXt0ZXh0VGl0bGV9XHJcbiAgICAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgVGl0bGUnXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgRW50ZXIgVGl0bGVcclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlckJvZHl9XHJcbiAgICAgIHZhbHVlPXt0ZXh0Qm9keX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBkZXNjcmlwdGlvbidcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICBFbnRlciBkZXNjcmlwdGlvblxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aDM+IEZpbGwgdGhlIGJsYW5rcyBhbmQgcHJlc3MgRW50ZXI8L2gzPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==