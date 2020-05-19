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
      title: event[0].target.value,
      body: event[1].target.value
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybS50c3giXSwibmFtZXMiOlsiRm9ybSIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJ0ZXh0VGl0bGUiLCJzZXRUZXh0VGl0bGUiLCJ0ZXh0Qm9keSIsInNldFRleHRCb2R5IiwidGV4dFN0YXRlIiwic2V0VGV4dFN0YXRlIiwiY2hhbmdlSGFuZGxlciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjaGFuZ2VIYW5kbGVyVGl0bGUiLCJjaGFuZ2VIYW5kbGVyQm9keSIsImtleVByZXNzIiwia2V5Iiwib25BZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3pDLE1BQU1DLFlBQVksR0FBRztBQUNqQkMsU0FBSyxFQUFFLElBRFU7QUFFakJDLFFBQUksRUFBRTtBQUZXLEdBQXJCOztBQUR5QyxrQkFLVEMsc0RBQVEsRUFMQztBQUFBLE1BS3BDQyxTQUxvQztBQUFBLE1BS3pCQyxZQUx5Qjs7QUFBQSxtQkFNWEYsc0RBQVEsRUFORztBQUFBLE1BTXBDRyxRQU5vQztBQUFBLE1BTTFCQyxXQU4wQjs7QUFBQSxtQkFPVEosc0RBQVEsQ0FBQ0gsWUFBRCxDQVBDO0FBQUEsTUFPcENRLFNBUG9DO0FBQUEsTUFPekJDLFlBUHlCOztBQVUzQyxNQUFNQyxhQUFhLEdBQUMsU0FBZEEsYUFBYyxDQUFDQyxLQUFELEVBQXVDO0FBQ3pERixnQkFBWSxDQUFDO0FBQUNSLFdBQUssRUFBQ1UsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTQyxNQUFULENBQWdCQyxLQUF2QjtBQUE2QlgsVUFBSSxFQUFDUyxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNDLE1BQVQsQ0FBZ0JDO0FBQWxELEtBQUQsQ0FBWjtBQUNILEdBRkM7O0FBZ0JBLE1BQU1DLGtCQUFrQixHQUFDLFNBQW5CQSxrQkFBbUIsQ0FBQ0gsS0FBRCxFQUF1QztBQUM1RE4sZ0JBQVksQ0FBQ00sS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWjtBQUNILEdBRkQ7O0FBR0EsTUFBTUUsaUJBQWlCLEdBQUMsU0FBbEJBLGlCQUFrQixDQUFDSixLQUFELEVBQXVDO0FBQzNESixlQUFXLENBQUNJLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDSCxHQUZEOztBQUdBLE1BQU1HLFFBQVEsR0FBQyxTQUFUQSxRQUFTLENBQUNMLEtBQUQsRUFDZjtBQUNGO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxRQUFHQSxLQUFLLENBQUNNLEdBQU4sS0FBWSxPQUFmLEVBQXVCO0FBQ3BCbEIsV0FBSyxDQUFDbUIsS0FBTixDQUFZVixTQUFTLENBQUNQLEtBQXRCLEVBQTRCTyxTQUFTLENBQUNOLElBQXRDLEVBRG9CLENBR3ZCO0FBRUM7QUFDRSxHQWZEOztBQWdCQSxTQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0Y7QUFDQSxjQUFRLEVBQUVRLGFBRFY7QUFFQSxXQUFLLEVBQUVGLFNBQVMsQ0FBQ1AsS0FGakI7QUFHQSxnQkFBVSxFQUFFZSxRQUhaO0FBSUEsaUJBQVcsRUFBQyxhQUpaO0FBS0EsVUFBSSxFQUFDLE1BTEw7QUFLWSxRQUFFLEVBQUMsT0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREUsRUFPRjtBQUFPLGFBQU8sRUFBQyxPQUFmO0FBQXVCLGVBQVMsRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBFLEVBVUY7QUFDQSxjQUFRLEVBQUVOLGFBRFY7QUFFQSxXQUFLLEVBQUVGLFNBQVMsQ0FBQ04sSUFGakI7QUFHQSxnQkFBVSxFQUFFYyxRQUhaO0FBSUEsaUJBQVcsRUFBQyxtQkFKWjtBQUtBLFVBQUksRUFBQyxNQUxMO0FBS1ksUUFBRSxFQUFDLE1BTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVZFLEVBZ0JGO0FBQU8sYUFBTyxFQUFDLE1BQWY7QUFBc0IsZUFBUyxFQUFDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBaEJFLEVBbUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBbkJFLENBREo7QUF4QkY7QUFnREQsQ0FoR0Q7O0dBQU1sQixJOztLQUFBQSxJO0FBaUdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXENyZWF0ZVBvc3QuanMuMmJjNTE1ZGMyOTVmNTRiZjQwZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgRm9ybVByb3Bze1xyXG4gICAgb25BZGQodGl0bGU6c3RyaW5nLGJvZHk6c3RyaW5nKTp2b2lkXHJcbn1cclxuLy8gaW50ZXJmYWNlIEl0ZXh0IHtcclxuLy8gICAgIHRpdGxlOiBzdHJpbmc7XHJcbi8vICAgICBib2R5OiBzdHJpbmc7XHJcbi8vICAgfVxyXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxGb3JtUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgYm9keTogbnVsbCxcclxuICAgICAgfTtcclxuICBjb25zdCBbdGV4dFRpdGxlLCBzZXRUZXh0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0Qm9keSwgc2V0VGV4dEJvZHldID0gdXNlU3RhdGU8c3RyaW5nPigpO1xyXG4gIGNvbnN0IFt0ZXh0U3RhdGUsIHNldFRleHRTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG5cclxuXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlcj0oZXZlbnQ6Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pPT57XHJcbiAgICBzZXRUZXh0U3RhdGUoe3RpdGxlOmV2ZW50WzBdLnRhcmdldC52YWx1ZSxib2R5OmV2ZW50WzFdLnRhcmdldC52YWx1ZX0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlclRpdGxlPShldmVudDpDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik9PntcclxuICAgICAgc2V0VGV4dFRpdGxlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgY2hhbmdlSGFuZGxlckJvZHk9KGV2ZW50OkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KT0+e1xyXG4gICAgICBzZXRUZXh0Qm9keShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IGtleVByZXNzPShldmVudDpSZWFjdC5LZXlib2FyZEV2ZW50KT0+XHJcbiAge1xyXG4vLyBpZihldmVudC5rZXk9PT0nRW50ZXInKXtcclxuLy8gICAgcHJvcHMub25BZGQodGV4dFRpdGxlISx0ZXh0Qm9keSEpXHJcbiAgXHJcbi8vICAgICBzZXRUZXh0VGl0bGUoJycpXHJcbi8vICAgICBzZXRUZXh0Qm9keSgnJylcclxuXHJcbi8vIH1cclxuaWYoZXZlbnQua2V5PT09J0VudGVyJyl7XHJcbiAgIHByb3BzLm9uQWRkKHRleHRTdGF0ZS50aXRsZSx0ZXh0U3RhdGUuYm9keSlcclxuICBcclxuLy8gIHNldFRleHRTdGF0ZSgnJylcclxuXHJcbn1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgIC8vICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0nPlxyXG4gICAgLy8gICA8aW5wdXQgXHJcbiAgICAvLyAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyVGl0bGV9XHJcbiAgICAvLyAgIHZhbHVlPXt0ZXh0VGl0bGV9XHJcbiAgICAvLyAgIG9uS2V5UHJlc3M9e2tleVByZXNzfVxyXG4gICAgLy8gICBwbGFjZWhvbGRlcj0nRW50ZXIgVGl0bGUnXHJcbiAgICAvLyAgIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIC8+XHJcbiAgICAvLyAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgIC8vICAgRW50ZXIgVGl0bGVcclxuICAgIC8vICAgPC9sYWJlbD5cclxuICAgIC8vICAgPGlucHV0IFxyXG4gICAgLy8gICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlckJvZHl9XHJcbiAgICAvLyAgIHZhbHVlPXt0ZXh0Qm9keX1cclxuICAgIC8vICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAvLyAgIHBsYWNlaG9sZGVyPSdFbnRlciBkZXNjcmlwdGlvbidcclxuICAgIC8vICAgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAvPlxyXG4gICAgLy8gICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgIC8vICBFbnRlciBkZXNjcmlwdGlvblxyXG4gICAgLy8gICA8L2xhYmVsPlxyXG4gICAgLy8gICA8aDM+IEZpbGwgdGhlIGJsYW5rcyBhbmQgcHJlc3MgRW50ZXI8L2gzPlxyXG4gICAgLy8gICA8L2Zvcm0+XHJcbiAgICAvLyA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0nPlxyXG4gICAgICA8aW5wdXQgXHJcbiAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxyXG4gICAgICB2YWx1ZT17dGV4dFN0YXRlLnRpdGxlfVxyXG4gICAgICBvbktleVByZXNzPXtrZXlQcmVzc31cclxuICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIFRpdGxlJ1xyXG4gICAgICB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYWN0aXZlXCI+XHJcbiAgICAgIEVudGVyIFRpdGxlXHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCBcclxuICAgICAgb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XHJcbiAgICAgIHZhbHVlPXt0ZXh0U3RhdGUuYm9keX1cclxuICAgICAgb25LZXlQcmVzcz17a2V5UHJlc3N9XHJcbiAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciBkZXNjcmlwdGlvbidcclxuICAgICAgdHlwZT1cInRleHRcIiBpZD1cImJvZHlcIiAvPlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJhY3RpdmVcIj5cclxuICAgICBFbnRlciBkZXNjcmlwdGlvblxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8aDM+IEZpbGwgdGhlIGJsYW5rcyBhbmQgcHJlc3MgRW50ZXI8L2gzPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==