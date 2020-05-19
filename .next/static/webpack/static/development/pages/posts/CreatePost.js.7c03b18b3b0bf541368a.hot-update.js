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
    placeholder: "Enter description",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwiY2hhbmdlSGFuZGxlclRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUhhbmRsZXJCb2R5Iiwia2V5UHJlc3MiLCJrZXkiLCJvbkFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUEsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1RDLHNEQUFRLEVBREM7QUFBQSxNQUNwQ0MsU0FEb0M7QUFBQSxNQUN6QkMsWUFEeUI7O0FBQUEsbUJBRVhGLHNEQUFRLEVBRkc7QUFBQSxNQUVwQ0csUUFGb0M7QUFBQSxNQUUxQkMsV0FGMEI7O0FBRzNDLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ0MsS0FBRCxFQUF1QztBQUM1REosZ0JBQVksQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsaUJBQWlCLEdBQUMsU0FBbEJBLGlCQUFrQixDQUFDSCxLQUFELEVBQXVDO0FBQzNERixlQUFXLENBQUNFLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNKLEtBQUQsRUFDZjtBQUNGLFFBQUdBLEtBQUssQ0FBQ0ssR0FBTixLQUFZLE9BQWYsRUFBdUI7QUFDcEJaLFdBQUssQ0FBQ2EsS0FBTixDQUFZWCxTQUFaLEVBQXVCRSxRQUF2QjtBQUVDRCxrQkFBWSxDQUFDLEVBQUQsQ0FBWjtBQUNBRSxpQkFBVyxDQUFDLEVBQUQsQ0FBWDtBQUVIO0FBQ0UsR0FURDs7QUFVQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0EsWUFBUSxFQUFFQyxrQkFEVjtBQUVBLFNBQUssRUFBRUosU0FGUDtBQUdBLGNBQVUsRUFBRVMsUUFIWjtBQUlBLGVBQVcsRUFBQyxhQUpaO0FBS0EsUUFBSSxFQUFDLE1BTEw7QUFLWSxNQUFFLEVBQUMsT0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFPLFdBQU8sRUFBQyxPQUFmO0FBQXVCLGFBQVMsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLEVBVUU7QUFDQSxZQUFRLEVBQUVELGlCQURWO0FBRUEsU0FBSyxFQUFFTixRQUZQO0FBR0EsY0FBVSxFQUFFTyxRQUhaO0FBSUEsZUFBVyxFQUFDLG1CQUpaO0FBS0EsUUFBSSxFQUFDLE1BTEw7QUFLWSxNQUFFLEVBQUMsTUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsRUFnQkU7QUFBTyxXQUFPLEVBQUMsTUFBZjtBQUFzQixhQUFTLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFoQkYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FuQkYsQ0FERjtBQXVCRCxDQTFDRDs7R0FBTVosSTs7S0FBQUEsSTtBQTJDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLjdjMDNiMThiM2IwYmY1NDEzNjhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIEZvcm1Qcm9wc3tcclxuICAgIG9uQWRkKHRpdGxlOnN0cmluZyxib2R5OnN0cmluZyk6dm9pZFxyXG59XHJcbmNvbnN0IEZvcm06IFJlYWN0LkZDPEZvcm1Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdGV4dFRpdGxlLCBzZXRUZXh0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0Qm9keSwgc2V0VGV4dEJvZHldID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXJUaXRsZT0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgIHNldFRleHRUaXRsZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXJCb2R5PShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgc2V0VGV4dEJvZHkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBrZXlQcmVzcz0oZXZlbnQ6UmVhY3QuS2V5Ym9hcmRFdmVudCk9PlxyXG4gIHtcclxuaWYoZXZlbnQua2V5PT09J0VudGVyJyl7XHJcbiAgIHByb3BzLm9uQWRkKHRleHRUaXRsZSEsdGV4dEJvZHkhKVxyXG4gIFxyXG4gICAgc2V0VGV4dFRpdGxlKCcnKVxyXG4gICAgc2V0VGV4dEJvZHkoJycpXHJcblxyXG59XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJUaXRsZX1cclxuICAgICAgdmFsdWU9e3RleHRUaXRsZX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUaXRsZSdcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICBFbnRlciBUaXRsZVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyQm9keX1cclxuICAgICAgdmFsdWU9e3RleHRCb2R5fVxyXG4gICAgICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGRlc2NyaXB0aW9uJ1xyXG4gICAgICB0eXBlPVwidGV4dFwiIGlkPVwiYm9keVwiIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYm9keVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgIEVudGVyIGRlc2NyaXB0aW9uXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxoMz4gRmlsbCB0aGUgYmxhbmtzIGFuZCBwcmVzcyBFbnRlcjwvaDM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==