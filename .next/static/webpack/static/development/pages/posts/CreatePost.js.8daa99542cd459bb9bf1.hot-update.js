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
      setTextState = _useState3[1]; //   const changeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
  //     setTextState({title:event[0].target.value,body:event[1].target.value})
  // }


  var changeHandlerTitle = function changeHandlerTitle(event) {
    //   setTextTitle(event.target.value)
    setTextState();
  };

  var changeHandlerBody = function changeHandlerBody(event) {
    //   setTextBody(event.target.value)
    setTextState({
      title: event[0].target.value,
      body: event[1].target.value
    });
  };

  var keyPress = function keyPress(event) {
    // if(event.key==='Enter'){
    //    props.onAdd(textTitle!,textBody!)
    //     setTextTitle('')
    //     setTextBody('')
    // }
    if (event.key === 'Enter') {
      props.onAdd(textState.title, textState.body);
      console.log('textState', textState);
      setTextState({
        title: "",
        body: ""
      }); //  setTextState('')
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
        lineNumber: 87,
        columnNumber: 5
      }
    }, __jsx("form", {
      className: "form",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }
    }, __jsx("input", {
      onChange: changeHandlerTitle,
      value: textState.title,
      onKeyPress: keyPress,
      placeholder: "Enter Title",
      type: "text",
      id: "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 7
      }
    }), __jsx("label", {
      htmlFor: "title",
      className: "active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }
    }, "Enter Title"), __jsx("input", {
      onChange: changeHandlerBody,
      value: textState.body,
      onKeyPress: keyPress,
      placeholder: "Enter description",
      type: "text",
      id: "body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }
    }), __jsx("label", {
      htmlFor: "body",
      className: "active",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }
    }, "Enter description"), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiY2hhbmdlSGFuZGxlclRpdGxlIiwiZXZlbnQiLCJjaGFuZ2VIYW5kbGVyQm9keSIsInRhcmdldCIsInZhbHVlIiwia2V5UHJlc3MiLCJrZXkiLCJvbkFkZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBSyxFQUFFLElBRFU7QUFFakJDLFFBQUksRUFBRTtBQUZXLEdBQXJCOztBQUR5QyxrQkFLVEMsc0RBQVEsRUFMQztBQUFBLE1BS3BDQyxTQUxvQztBQUFBLE1BS3pCQyxZQUx5Qjs7QUFBQSxtQkFNWEYsc0RBQVEsRUFORztBQUFBLE1BTXBDRyxRQU5vQztBQUFBLE1BTTFCQyxXQU4wQjs7QUFBQSxtQkFPVEosc0RBQVEsQ0FBQ0gsWUFBRCxDQVBDO0FBQUEsTUFPcENRLFNBUG9DO0FBQUEsTUFPekJDLFlBUHlCLGtCQVU3QztBQUNBO0FBQ0E7OztBQWNFLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ0MsS0FBRCxFQUF1QztBQUM5RDtBQUNBRixnQkFBWTtBQUNiLEdBSEQ7O0FBSUEsTUFBTUcsaUJBQWlCLEdBQUMsU0FBbEJBLGlCQUFrQixDQUFDRCxLQUFELEVBQXVDO0FBQzdEO0FBQ0FGLGdCQUFZLENBQUM7QUFBQ1IsV0FBSyxFQUFDVSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNFLE1BQVQsQ0FBZ0JDLEtBQXZCO0FBQTZCWixVQUFJLEVBQUNTLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0UsTUFBVCxDQUFnQkM7QUFBbEQsS0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFJQSxNQUFNQyxRQUFRLEdBQUMsU0FBVEEsUUFBUyxDQUFDSixLQUFELEVBQ2Y7QUFDRjtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsUUFBR0EsS0FBSyxDQUFDSyxHQUFOLEtBQVksT0FBZixFQUF1QjtBQUNwQmpCLFdBQUssQ0FBQ2tCLEtBQU4sQ0FBWVQsU0FBUyxDQUFDUCxLQUF0QixFQUE0Qk8sU0FBUyxDQUFDTixJQUF0QztBQUNBZ0IsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlgsU0FBekI7QUFDQUMsa0JBQVksQ0FBQztBQUFDUixhQUFLLEVBQUMsRUFBUDtBQUFVQyxZQUFJLEVBQUM7QUFBZixPQUFELENBQVosQ0FIb0IsQ0FLdkI7QUFFQztBQUNFLEdBakJEOztBQWtCQSxTQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Y7QUFDQSxjQUFRLEVBQUVRLGtCQURWO0FBRUEsV0FBSyxFQUFFRixTQUFTLENBQUNQLEtBRmpCO0FBR0EsZ0JBQVUsRUFBRWMsUUFIWjtBQUlBLGlCQUFXLEVBQUMsYUFKWjtBQUtBLFVBQUksRUFBQyxNQUxMO0FBS1ksUUFBRSxFQUFDLE9BTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURFLEVBT0Y7QUFBTyxhQUFPLEVBQUMsT0FBZjtBQUF1QixlQUFTLEVBQUMsUUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRSxFQVVGO0FBQ0EsY0FBUSxFQUFFSCxpQkFEVjtBQUVBLFdBQUssRUFBRUosU0FBUyxDQUFDTixJQUZqQjtBQUdBLGdCQUFVLEVBQUVhLFFBSFo7QUFJQSxpQkFBVyxFQUFDLG1CQUpaO0FBS0EsVUFBSSxFQUFDLE1BTEw7QUFLWSxRQUFFLEVBQUMsTUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkUsRUFnQkY7QUFBTyxhQUFPLEVBQUMsTUFBZjtBQUFzQixlQUFTLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFoQkUsRUFtQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FuQkUsQ0FESjtBQXhCRjtBQWdERCxDQXBHRDs7R0FBTWpCLEk7O0tBQUFBLEk7QUFxR1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcQ3JlYXRlUG9zdC5qcy44ZGFhOTk1NDJjZDQ1OWJiOWJmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBGb3JtUHJvcHN7XHJcbiAgICBvbkFkZCh0aXRsZT86c3RyaW5nLGJvZHk/OnN0cmluZyk6dm9pZFxyXG59XHJcbi8vIGludGVyZmFjZSBJdGV4dCB7XHJcbi8vICAgICB0aXRsZTogc3RyaW5nO1xyXG4vLyAgICAgYm9keTogc3RyaW5nO1xyXG4vLyAgIH1cclxuY29uc3QgRm9ybTogUmVhY3QuRkM8Rm9ybVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgIGJvZHk6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgY29uc3QgW3RleHRUaXRsZSwgc2V0VGV4dFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbdGV4dEJvZHksIHNldFRleHRCb2R5XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcclxuICBjb25zdCBbdGV4dFN0YXRlLCBzZXRUZXh0U3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcclxuXHJcblxyXG4vLyAgIGNvbnN0IGNoYW5nZUhhbmRsZXI9KGV2ZW50OkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4vLyAgICAgc2V0VGV4dFN0YXRlKHt0aXRsZTpldmVudFswXS50YXJnZXQudmFsdWUsYm9keTpldmVudFsxXS50YXJnZXQudmFsdWV9KVxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXJUaXRsZT0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAvLyAgIHNldFRleHRUaXRsZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRUZXh0U3RhdGUoKVxyXG4gIH1cclxuICBjb25zdCBjaGFuZ2VIYW5kbGVyQm9keT0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICAvLyAgIHNldFRleHRCb2R5KGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIHNldFRleHRTdGF0ZSh7dGl0bGU6ZXZlbnRbMF0udGFyZ2V0LnZhbHVlLGJvZHk6ZXZlbnRbMV0udGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcbiAgY29uc3Qga2V5UHJlc3M9KGV2ZW50OlJlYWN0LktleWJvYXJkRXZlbnQpPT5cclxuICB7XHJcbi8vIGlmKGV2ZW50LmtleT09PSdFbnRlcicpe1xyXG4vLyAgICBwcm9wcy5vbkFkZCh0ZXh0VGl0bGUhLHRleHRCb2R5ISlcclxuICBcclxuLy8gICAgIHNldFRleHRUaXRsZSgnJylcclxuLy8gICAgIHNldFRleHRCb2R5KCcnKVxyXG5cclxuLy8gfVxyXG5pZihldmVudC5rZXk9PT0nRW50ZXInKXtcclxuICAgcHJvcHMub25BZGQodGV4dFN0YXRlLnRpdGxlLHRleHRTdGF0ZS5ib2R5KVxyXG4gICBjb25zb2xlLmxvZygndGV4dFN0YXRlJywgdGV4dFN0YXRlKVxyXG4gICBzZXRUZXh0U3RhdGUoe3RpdGxlOlwiXCIsYm9keTpcIlwifSlcclxuICBcclxuLy8gIHNldFRleHRTdGF0ZSgnJylcclxuXHJcbn1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgIC8vICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0nPlxyXG4gICAgLy8gICA8aW5wdXQgXHJcbiAgICAvLyAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyVGl0bGV9XHJcbiAgICAvLyAgIHZhbHVlPXt0ZXh0VGl0bGV9XHJcbiAgICAvLyAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgLy8gICBwbGFjZWhvbGRlcj0nRW50ZXIgVGl0bGUnXHJcbiAgICAvLyAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIC8+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgIC8vICAgRW50ZXIgVGl0bGVcclxuICAgIC8vICAgPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0IFxyXG4gICAgLy8gICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlckJvZHl9XHJcbiAgICAvLyAgIHZhbHVlPXt0ZXh0Qm9keX1cclxuICAgIC8vICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAvLyAgIHBsYWNlaG9sZGVyPSdFbnRlciBkZXNjcmlwdGlvbidcclxuICAgIC8vICAgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAvPlxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgIC8vICBFbnRlciBkZXNjcmlwdGlvblxyXG4gICAgLy8gICA8L2xhYmVsPlxyXG4gICAgLy8gICA8aDM+IEZpbGwgdGhlIGJsYW5rcyBhbmQgcHJlc3MgRW50ZXI8L2gzPlxyXG4gICAgLy8gICA8L2Zvcm0+XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0nPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyVGl0bGV9XHJcbiAgICAgIHZhbHVlPXt0ZXh0U3RhdGUudGl0bGV9XHJcbiAgICAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgVGl0bGUnXHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICAgRW50ZXIgVGl0bGVcclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGlucHV0IFxyXG4gICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlckJvZHl9XHJcbiAgICAgIHZhbHVlPXt0ZXh0U3RhdGUuYm9keX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBkZXNjcmlwdGlvbidcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICBFbnRlciBkZXNjcmlwdGlvblxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aDM+IEZpbGwgdGhlIGJsYW5rcyBhbmQgcHJlc3MgRW50ZXI8L2gzPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==