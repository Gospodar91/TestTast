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
      setTextBody('');
    }
  };

  return __jsx("div", {
    className: "input-field",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
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
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "title",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Enter Title"), __jsx("input", {
    onChange: changeHandlerBody,
    value: textBody,
    onKeyPress: keyPress,
    placeholder: "Enter body",
    type: "text",
    id: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "body",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Enter description"), __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, " Fill the blanks and press Enter"));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwiY2hhbmdlSGFuZGxlclRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUhhbmRsZXJCb2R5Iiwia2V5UHJlc3MiLCJrZXkiLCJvbkFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLEVBREM7QUFBQSxNQUNwQ0MsU0FEb0M7QUFBQSxNQUN6QkMsWUFEeUI7O0FBQUEsbUJBRVhGLHNEQUFRLEVBRkc7QUFBQSxNQUVwQ0csUUFGb0M7QUFBQSxNQUUxQkMsV0FGMEI7O0FBRzNDLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ0MsS0FBRCxFQUF1QztBQUM1REosZ0JBQVksQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsaUJBQWlCLEdBQUMsU0FBbEJBLGlCQUFrQixDQUFDSCxLQUFELEVBQXVDO0FBQzNERixlQUFXLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNKLEtBQUQsRUFDZjtBQUNGLFFBQUdBLEtBQUssQ0FBQ0ssR0FBTixLQUFZLE9BQWYsRUFBdUI7QUFDcEJaLFdBQUssQ0FBQ2EsS0FBTixDQUFZWCxTQUFaLEVBQXVCRSxRQUF2QjtBQUVDRCxrQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBRSxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUVIO0FBQ0UsR0FURDs7QUFVQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0EsWUFBUSxFQUFFQyxrQkFEVjtBQUVBLFNBQUssRUFBRUosU0FGUDtBQUdBLGNBQVUsRUFBRVMsUUFIWjtBQUlBLGVBQVcsRUFBQyxhQUpaO0FBS0EsUUFBSSxFQUFDLE1BTEw7QUFLWSxNQUFFLEVBQUMsT0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQXVCLGFBQVMsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLEVBVUU7QUFDQSxZQUFRLEVBQUVELGlCQURWO0FBRUEsU0FBSyxFQUFFTixRQUZQO0FBR0EsY0FBVSxFQUFFTyxRQUhaO0FBSUEsZUFBVyxFQUFDLFlBSlo7QUFLQSxRQUFJLEVBQUMsTUFMTDtBQUtZLE1BQUUsRUFBQyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQWdCRTtBQUFPLFdBQU8sRUFBQyxNQUFmO0FBQXNCLGFBQVMsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWhCRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQW5CRixDQURGO0FBdUJELENBMUNEOztHQUFNWixJOztLQUFBQSxJO0FBMkNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXENyZWF0ZVBvc3QuanMuOTEyZTIwZGVlNTdiOTBhNDg3MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgRm9ybVByb3Bze1xyXG4gICAgb25BZGQodGl0bGU6c3RyaW5nLGJvZHk6c3RyaW5nKTp2b2lkXHJcbn1cclxuY29uc3QgRm9ybTogUmVhY3QuRkM8Rm9ybVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0VGl0bGUsIHNldFRleHRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgW3RleHRCb2R5LCBzZXRUZXh0Qm9keV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlclRpdGxlPShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgc2V0VGV4dFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlckJvZHk9KGV2ZW50OkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICBzZXRUZXh0Qm9keShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGtleVByZXNzPShldmVudDpSZWFjdC5LZXlib2FyZEV2ZW50KT0+XHJcbiAge1xyXG5pZihldmVudC5rZXk9PT0nRW50ZXInKXtcclxuICAgcHJvcHMub25BZGQodGV4dFRpdGxlISx0ZXh0Qm9keSEpXHJcbiAgXHJcbiAgICBzZXRUZXh0VGl0bGUoJycpXHJcbiAgICBzZXRUZXh0Qm9keSgnJylcclxuXHJcbn1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlclRpdGxlfVxyXG4gICAgICB2YWx1ZT17dGV4dFRpdGxlfVxyXG4gICAgICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFRpdGxlJ1xyXG4gICAgICB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgIEVudGVyIFRpdGxlXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJCb2R5fVxyXG4gICAgICB2YWx1ZT17dGV4dEJvZHl9XHJcbiAgICAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgYm9keSdcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICBFbnRlciBkZXNjcmlwdGlvblxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aDM+IEZpbGwgdGhlIGJsYW5rcyBhbmQgcHJlc3MgRW50ZXI8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=