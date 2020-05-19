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
    setTextState({
      title: event.target.value,
      body: null
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiY2hhbmdlSGFuZGxlclRpdGxlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNoYW5nZUhhbmRsZXJCb2R5Iiwia2V5UHJlc3MiLCJrZXkiLCJvbkFkZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBSyxFQUFFLElBRFU7QUFFakJDLFFBQUksRUFBRTtBQUZXLEdBQXJCOztBQUR5QyxrQkFLVEMsc0RBQVEsRUFMQztBQUFBLE1BS3BDQyxTQUxvQztBQUFBLE1BS3pCQyxZQUx5Qjs7QUFBQSxtQkFNWEYsc0RBQVEsRUFORztBQUFBLE1BTXBDRyxRQU5vQztBQUFBLE1BTTFCQyxXQU4wQjs7QUFBQSxtQkFPVEosc0RBQVEsQ0FBQ0gsWUFBRCxDQVBDO0FBQUEsTUFPcENRLFNBUG9DO0FBQUEsTUFPekJDLFlBUHlCLGtCQVU3QztBQUNBO0FBQ0E7OztBQWNFLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ0MsS0FBRCxFQUF1QztBQUM5RDtBQUNBRixnQkFBWSxDQUFDO0FBQUNSLFdBQUssRUFBQ1UsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQXBCO0FBQTBCWCxVQUFJLEVBQUM7QUFBL0IsS0FBRCxDQUFaO0FBQ0QsR0FIRDs7QUFJQSxNQUFNWSxpQkFBaUIsR0FBQyxTQUFsQkEsaUJBQWtCLENBQUNILEtBQUQsRUFBdUM7QUFDN0Q7QUFDQUYsZ0JBQVksQ0FBQztBQUFDUixXQUFLLEVBQUNVLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsTUFBVCxDQUFnQkMsS0FBdkI7QUFBNkJYLFVBQUksRUFBQ1MsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxNQUFULENBQWdCQztBQUFsRCxLQUFELENBQVo7QUFDRCxHQUhEOztBQUlBLE1BQU1FLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNKLEtBQUQsRUFDZjtBQUNGO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxRQUFHQSxLQUFLLENBQUNLLEdBQU4sS0FBWSxPQUFmLEVBQXVCO0FBQ3BCakIsV0FBSyxDQUFDa0IsS0FBTixDQUFZVCxTQUFTLENBQUNQLEtBQXRCLEVBQTRCTyxTQUFTLENBQUNOLElBQXRDO0FBQ0FnQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCWCxTQUF6QjtBQUNBQyxrQkFBWSxDQUFDO0FBQUNSLGFBQUssRUFBQyxFQUFQO0FBQVVDLFlBQUksRUFBQztBQUFmLE9BQUQsQ0FBWixDQUhvQixDQUt2QjtBQUVDO0FBQ0UsR0FqQkQ7O0FBa0JBLFNBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU0sZUFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRjtBQUNBLGNBQVEsRUFBRVEsa0JBRFY7QUFFQSxXQUFLLEVBQUVGLFNBQVMsQ0FBQ1AsS0FGakI7QUFHQSxnQkFBVSxFQUFFYyxRQUhaO0FBSUEsaUJBQVcsRUFBQyxhQUpaO0FBS0EsVUFBSSxFQUFDLE1BTEw7QUFLWSxRQUFFLEVBQUMsT0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREUsRUFPRjtBQUFPLGFBQU8sRUFBQyxPQUFmO0FBQXVCLGVBQVMsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBFLEVBVUY7QUFDQSxjQUFRLEVBQUVELGlCQURWO0FBRUEsV0FBSyxFQUFFTixTQUFTLENBQUNOLElBRmpCO0FBR0EsZ0JBQVUsRUFBRWEsUUFIWjtBQUlBLGlCQUFXLEVBQUMsbUJBSlo7QUFLQSxVQUFJLEVBQUMsTUFMTDtBQUtZLFFBQUUsRUFBQyxNQUxmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRSxFQWdCRjtBQUFPLGFBQU8sRUFBQyxNQUFmO0FBQXNCLGVBQVMsRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWhCRSxFQW1CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQW5CRSxDQURKO0FBeEJGO0FBZ0RELENBcEdEOztHQUFNakIsSTs7S0FBQUEsSTtBQXFHU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLmU1NjJjMzE3NGJkYmQ1OGNiMzhmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIEZvcm1Qcm9wc3tcclxuICAgIG9uQWRkKHRpdGxlPzpzdHJpbmcsYm9keT86c3RyaW5nKTp2b2lkXHJcbn1cclxuLy8gaW50ZXJmYWNlIEl0ZXh0IHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBib2R5OiBzdHJpbmc7XHJcbi8vICAgfVxyXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgYm9keTogbnVsbCxcclxuICAgICAgfTtcclxuICBjb25zdCBbdGV4dFRpdGxlLCBzZXRUZXh0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0Qm9keSwgc2V0VGV4dEJvZHldID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbi8vICAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbi8vICAgICBzZXRUZXh0U3RhdGUoe3RpdGxlOmV2ZW50WzBdLnRhcmdldC52YWx1ZSxib2R5OmV2ZW50WzFdLnRhcmdldC52YWx1ZX0pXHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlclRpdGxlPShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgIC8vICAgc2V0VGV4dFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgIHNldFRleHRTdGF0ZSh7dGl0bGU6ZXZlbnQudGFyZ2V0LnZhbHVlLGJvZHk6bnVsbH0pXHJcbiAgfVxyXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXJCb2R5PShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgIC8vICAgc2V0VGV4dEJvZHkoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0VGV4dFN0YXRlKHt0aXRsZTpldmVudFswXS50YXJnZXQudmFsdWUsYm9keTpldmVudFsxXS50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuICBjb25zdCBrZXlQcmVzcz0oZXZlbnQ6UmVhY3QuS2V5Ym9hcmRFdmVudCk9PlxyXG4gIHtcclxuLy8gaWYoZXZlbnQua2V5PT09J0VudGVyJyl7XHJcbi8vICAgIHByb3BzLm9uQWRkKHRleHRUaXRsZSEsdGV4dEJvZHkhKVxyXG4gIFxyXG4vLyAgICAgc2V0VGV4dFRpdGxlKCcnKVxyXG4vLyAgICAgc2V0VGV4dEJvZHkoJycpXHJcblxyXG4vLyB9XHJcbmlmKGV2ZW50LmtleT09PSdFbnRlcicpe1xyXG4gICBwcm9wcy5vbkFkZCh0ZXh0U3RhdGUudGl0bGUsdGV4dFN0YXRlLmJvZHkpXHJcbiAgIGNvbnNvbGUubG9nKCd0ZXh0U3RhdGUnLCB0ZXh0U3RhdGUpXHJcbiAgIHNldFRleHRTdGF0ZSh7dGl0bGU6XCJcIixib2R5OlwiXCJ9KVxyXG4gIFxyXG4vLyAgc2V0VGV4dFN0YXRlKCcnKVxyXG5cclxufVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgLy8gICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybSc+XHJcbiAgICAvLyAgIDxpbnB1dCBcclxuICAgIC8vICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJUaXRsZX1cclxuICAgIC8vICAgdmFsdWU9e3RleHRUaXRsZX1cclxuICAgIC8vICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAvLyAgIHBsYWNlaG9sZGVyPSdFbnRlciBUaXRsZSdcclxuICAgIC8vICAgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgLz5cclxuICAgIC8vICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgLy8gICBFbnRlciBUaXRsZVxyXG4gICAgLy8gICA8L2xhYmVsPlxyXG4gICAgLy8gICA8aW5wdXQgXHJcbiAgICAvLyAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyQm9keX1cclxuICAgIC8vICAgdmFsdWU9e3RleHRCb2R5fVxyXG4gICAgLy8gICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgIC8vICAgcGxhY2Vob2xkZXI9J0VudGVyIGRlc2NyaXB0aW9uJ1xyXG4gICAgLy8gICB0eXBlPVwidGV4dFwiIGlkPVwiYm9keVwiIC8+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwiYm9keVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgLy8gIEVudGVyIGRlc2NyaXB0aW9uXHJcbiAgICAvLyAgIDwvbGFiZWw+XHJcbiAgICAvLyAgIDxoMz4gRmlsbCB0aGUgYmxhbmtzIGFuZCBwcmVzcyBFbnRlcjwvaDM+XHJcbiAgICAvLyAgIDwvZm9ybT5cclxuICAgIC8vIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZFwiPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZm9ybSc+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJUaXRsZX1cclxuICAgICAgdmFsdWU9e3RleHRTdGF0ZS50aXRsZX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBUaXRsZSdcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgLz5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgICBFbnRlciBUaXRsZVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyQm9keX1cclxuICAgICAgdmFsdWU9e3RleHRTdGF0ZS5ib2R5fVxyXG4gICAgICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIGRlc2NyaXB0aW9uJ1xyXG4gICAgICB0eXBlPVwidGV4dFwiIGlkPVwiYm9keVwiIC8+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYm9keVwiIGNsYXNzTmFtZT1cImFjdGl2ZVwiPlxyXG4gICAgIEVudGVyIGRlc2NyaXB0aW9uXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxoMz4gRmlsbCB0aGUgYmxhbmtzIGFuZCBwcmVzcyBFbnRlcjwvaDM+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0iXSwic291cmNlUm9vdCI6IiJ9