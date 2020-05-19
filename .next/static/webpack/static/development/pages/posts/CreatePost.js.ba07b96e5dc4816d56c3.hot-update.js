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


// interface Itext {
//     title: string;
//     body: string;
//   }
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

  var changeHandler = function changeHandler(event) {
    setTextState({
      title: event.target.value,
      body: event.target.value
    });
  };

  var changeHandlerTitle = function changeHandlerTitle(event) {
    setTextTitle(event.target.value);
  };

  var changeHandlerBody = function changeHandlerBody(event) {
    setTextBody(event.target.value);
  };

  var keyPress = function keyPress(event) {
    // if(event.key==='Enter'){
    //    props.onAdd(textTitle!,textBody!)
    //     setTextTitle('')
    //     setTextBody('')
    // }
    if (event.key === 'Enter') {
      props.onAdd(textState.title, textState.body); //  setTextState('')
    }
  };

  return (// <div className="input-field">
    //     <form className='form'>
    //   <input 
    //   onChange={changeHandlerTitle}
    //   value={textTitle}
    //   onKeyPress={keyPress}
    //   placeholder='Enter Title'
    //   type="text" id="title" />
    //   <label htmlFor="title" className="active">
    //   Enter Title
    //   </label>
    //   <input 
    //   onChange={changeHandlerBody}
    //   value={textBody}
    //   onKeyPress={keyPress}
    //   placeholder='Enter description'
    //   type="text" id="body" />
    //   <label htmlFor="body" className="active">
    //  Enter description
    //   </label>
    //   <h3> Fill the blanks and press Enter</h3>
    //   </form>
    // </div>
    __jsx("div", {
      className: "input-field",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 5
      }
    }, __jsx("form", {
      className: "form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx("input", {
      onChange: changeHandler,
      value: textState.title,
      onKeyPress: keyPress,
      placeholder: "Enter Title",
      type: "text",
      id: "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }
    }), __jsx("label", {
      htmlFor: "title",
      className: "active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 7
      }
    }, "Enter Title"), __jsx("input", {
      onChange: changeHandler,
      value: textState.body,
      onKeyPress: keyPress,
      placeholder: "Enter description",
      type: "text",
      id: "body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }
    }), __jsx("label", {
      htmlFor: "body",
      className: "active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, "Enter description"), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }
    }, " Fill the blanks and press Enter")))
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VIYW5kbGVyVGl0bGUiLCJjaGFuZ2VIYW5kbGVyQm9keSIsImtleVByZXNzIiwia2V5Iiwib25BZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBSyxFQUFFLElBRFU7QUFFakJDLFFBQUksRUFBRTtBQUZXLEdBQXJCOztBQUR5QyxrQkFLVEMsc0RBQVEsRUFMQztBQUFBLE1BS3BDQyxTQUxvQztBQUFBLE1BS3pCQyxZQUx5Qjs7QUFBQSxtQkFNWEYsc0RBQVEsRUFORztBQUFBLE1BTXBDRyxRQU5vQztBQUFBLE1BTTFCQyxXQU4wQjs7QUFBQSxtQkFPVEosc0RBQVEsQ0FBQ0gsWUFBRCxDQVBDO0FBQUEsTUFPcENRLFNBUG9DO0FBQUEsTUFPekJDLFlBUHlCOztBQVUzQyxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxDQUFDQyxLQUFELEVBQXVDO0FBQ3pERixnQkFBWSxDQUFDO0FBQUNSLFdBQUssRUFBQ1UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQXBCO0FBQTBCWCxVQUFJLEVBQUNTLEtBQUssQ0FBQ0MsTUFBTixDQUFhQztBQUE1QyxLQUFELENBQVo7QUFDSCxHQUZDOztBQWdCQSxNQUFNQyxrQkFBa0IsR0FBQyxTQUFuQkEsa0JBQW1CLENBQUNILEtBQUQsRUFBdUM7QUFDNUROLGdCQUFZLENBQUNNLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVo7QUFDSCxHQUZEOztBQUdBLE1BQU1FLGlCQUFpQixHQUFDLFNBQWxCQSxpQkFBa0IsQ0FBQ0osS0FBRCxFQUF1QztBQUMzREosZUFBVyxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFYO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRyxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDTCxLQUFELEVBQ2Y7QUFDRjtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsUUFBR0EsS0FBSyxDQUFDTSxHQUFOLEtBQVksT0FBZixFQUF1QjtBQUNwQmxCLFdBQUssQ0FBQ21CLEtBQU4sQ0FBWVYsU0FBUyxDQUFDUCxLQUF0QixFQUE0Qk8sU0FBUyxDQUFDTixJQUF0QyxFQURvQixDQUd2QjtBQUVDO0FBQ0UsR0FmRDs7QUFnQkEsU0FDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTSxlQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNGO0FBQ0EsY0FBUSxFQUFFUSxhQURWO0FBRUEsV0FBSyxFQUFFRixTQUFTLENBQUNQLEtBRmpCO0FBR0EsZ0JBQVUsRUFBRWUsUUFIWjtBQUlBLGlCQUFXLEVBQUMsYUFKWjtBQUtBLFVBQUksRUFBQyxNQUxMO0FBS1ksUUFBRSxFQUFDLE9BTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURFLEVBT0Y7QUFBTyxhQUFPLEVBQUMsT0FBZjtBQUF1QixlQUFTLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRSxFQVVGO0FBQ0EsY0FBUSxFQUFFTixhQURWO0FBRUEsV0FBSyxFQUFFRixTQUFTLENBQUNOLElBRmpCO0FBR0EsZ0JBQVUsRUFBRWMsUUFIWjtBQUlBLGlCQUFXLEVBQUMsbUJBSlo7QUFLQSxVQUFJLEVBQUMsTUFMTDtBQUtZLFFBQUUsRUFBQyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRSxFQWdCRjtBQUFPLGFBQU8sRUFBQyxNQUFmO0FBQXNCLGVBQVMsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWhCRSxFQW1CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQW5CRSxDQURKO0FBeEJGO0FBZ0RELENBaEdEOztHQUFNbEIsSTs7S0FBQUEsSTtBQWlHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLmJhMDdiOTZlNWRjNDgxNmQ1NmMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIEZvcm1Qcm9wc3tcclxuICAgIG9uQWRkKHRpdGxlOnN0cmluZyxib2R5OnN0cmluZyk6dm9pZFxyXG59XHJcbi8vIGludGVyZmFjZSBJdGV4dCB7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgYm9keTogc3RyaW5nO1xyXG4vLyAgIH1cclxuY29uc3QgRm9ybTogUmVhY3QuRkM8Rm9ybVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgIGJvZHk6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgY29uc3QgW3RleHRUaXRsZSwgc2V0VGV4dFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbdGV4dEJvZHksIHNldFRleHRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbdGV4dFN0YXRlLCBzZXRUZXh0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXI9KGV2ZW50OkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgc2V0VGV4dFN0YXRlKHt0aXRsZTpldmVudC50YXJnZXQudmFsdWUsYm9keTpldmVudC50YXJnZXQudmFsdWV9KVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXJUaXRsZT0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAgIHNldFRleHRUaXRsZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXJCb2R5PShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgc2V0VGV4dEJvZHkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBrZXlQcmVzcz0oZXZlbnQ6UmVhY3QuS2V5Ym9hcmRFdmVudCk9PlxyXG4gIHtcclxuLy8gaWYoZXZlbnQua2V5PT09J0VudGVyJyl7XHJcbi8vICAgIHByb3BzLm9uQWRkKHRleHRUaXRsZSEsdGV4dEJvZHkhKVxyXG4gIFxyXG4vLyAgICAgc2V0VGV4dFRpdGxlKCcnKVxyXG4vLyAgICAgc2V0VGV4dEJvZHkoJycpXHJcblxyXG4vLyB9XHJcbmlmKGV2ZW50LmtleT09PSdFbnRlcicpe1xyXG4gICBwcm9wcy5vbkFkZCh0ZXh0U3RhdGUudGl0bGUsdGV4dFN0YXRlLmJvZHkpXHJcbiAgXHJcbi8vICBzZXRUZXh0U3RhdGUoJycpXHJcblxyXG59XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAvLyAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtJz5cclxuICAgIC8vICAgPGlucHV0IFxyXG4gICAgLy8gICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlclRpdGxlfVxyXG4gICAgLy8gICB2YWx1ZT17dGV4dFRpdGxlfVxyXG4gICAgLy8gICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgIC8vICAgcGxhY2Vob2xkZXI9J0VudGVyIFRpdGxlJ1xyXG4gICAgLy8gICB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAvPlxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAvLyAgIEVudGVyIFRpdGxlXHJcbiAgICAvLyAgIDwvbGFiZWw+XHJcbiAgICAvLyAgIDxpbnB1dCBcclxuICAgIC8vICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJCb2R5fVxyXG4gICAgLy8gICB2YWx1ZT17dGV4dEJvZHl9XHJcbiAgICAvLyAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgLy8gICBwbGFjZWhvbGRlcj0nRW50ZXIgZGVzY3JpcHRpb24nXHJcbiAgICAvLyAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJib2R5XCIgLz5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJib2R5XCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAvLyAgRW50ZXIgZGVzY3JpcHRpb25cclxuICAgIC8vICAgPC9sYWJlbD5cclxuICAgIC8vICAgPGgzPiBGaWxsIHRoZSBibGFua3MgYW5kIHByZXNzIEVudGVyPC9oMz5cclxuICAgIC8vICAgPC9mb3JtPlxyXG4gICAgLy8gPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkXCI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtJz5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cclxuICAgICAgdmFsdWU9e3RleHRTdGF0ZS50aXRsZX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUaXRsZSdcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICBFbnRlciBUaXRsZVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxyXG4gICAgICB2YWx1ZT17dGV4dFN0YXRlLmJvZHl9XHJcbiAgICAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgZGVzY3JpcHRpb24nXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJib2R5XCIgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJib2R5XCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgRW50ZXIgZGVzY3JpcHRpb25cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGgzPiBGaWxsIHRoZSBibGFua3MgYW5kIHByZXNzIEVudGVyPC9oMz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=