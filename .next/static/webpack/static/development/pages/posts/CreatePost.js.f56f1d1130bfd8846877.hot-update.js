webpackHotUpdate("static\\development\\pages\\posts\\CreatePost.js",{

/***/ "./pages/posts/CreatePost.tsx":
/*!************************************!*\
  !*** ./pages/posts/CreatePost.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
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




axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

// const postToAdd = {
//     title: 'NEXT JS',
//     body: 'Typescript',
//   };
var createPost = function createPost() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      postText = _useState[0],
      setPostText = _useState[1];

  var pushPost = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "delete",
                url: "https://simple-blog-api.crew.red/posts/[]" // data: postText,

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

  pushPost(); // pushPost();

  var addhandler = function addhandler(title) {
    var post = {
      title: title // body:body

    };
    setPostText(function (prev) {
      return [post].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev));
    });
    console.log("textState", postText);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAdd: addhandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, "\u2190 Back to home"))));
};

_s(createPost, "R1BabosH/DVZhMkAdnZ7l/35RLk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwidXNlU3RhdGUiLCJwb3N0VGV4dCIsInNldFBvc3RUZXh0IiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGlDQUE5Qzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsRUFEakI7QUFBQSxNQUNoQkMsUUFEZ0I7QUFBQSxNQUNOQyxXQURNOztBQUd2QixNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNUiw0Q0FBSyxDQUFDO0FBQ3ZCUyxzQkFBTSxFQUFFLFFBRGU7QUFFdkJDLG1CQUFHLEVBQUUsMkNBRmtCLENBR3ZCOztBQUh1QixlQUFELENBRlg7O0FBQUE7QUFFUEMsa0JBRk87QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFiQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQVJhLG9CQVNQLElBQUlDLEtBQUosRUFUTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSTixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBWUVBLFVBQVEsR0FmYSxDQWlCckI7O0FBRUYsTUFBTU8sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNwQyxRQUFNYixJQUFXLEdBQUc7QUFDbEJhLFdBQUssRUFBRUEsS0FEVyxDQUVsQjs7QUFGa0IsS0FBcEI7QUFLQVQsZUFBVyxDQUFDLFVBQUNVLElBQUQ7QUFBQSxjQUFXZCxJQUFYLHNHQUFvQmMsSUFBcEI7QUFBQSxLQUFELENBQVg7QUFDQUwsV0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QlAsUUFBekI7QUFDRCxHQVJEOztBQVVBLFNBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFNLFNBQUssRUFBRVMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFHRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixDQUhGLENBREY7QUFXRCxDQXhDRDs7R0FBTVgsVTs7QUF5Q1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcQ3JlYXRlUG9zdC5qcy5mNTZmMWQxMTMwYmZkODg0Njg3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Zvcm0vRm9ybVwiO1xyXG5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLnBvc3RbXCJDb250ZW50LVR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIjtcclxuXHJcbmludGVyZmFjZSBJRm9ybSB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICAvLyBib2R5OnN0cmluZ1xyXG59XHJcblxyXG4vLyBjb25zdCBwb3N0VG9BZGQgPSB7XHJcbi8vICAgICB0aXRsZTogJ05FWFQgSlMnLFxyXG4vLyAgICAgYm9keTogJ1R5cGVzY3JpcHQnLFxyXG4vLyAgIH07XHJcbmNvbnN0IGNyZWF0ZVBvc3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bvc3RUZXh0LCBzZXRQb3N0VGV4dF0gPSB1c2VTdGF0ZTxJRm9ybT4oKTtcclxuXHJcbiAgY29uc3QgcHVzaFBvc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJkZWxldGVcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvW11cIixcclxuICAgICAgICAvLyBkYXRhOiBwb3N0VGV4dCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBPU1QgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICB9O1xyXG4gICAgcHVzaFBvc3QoKTtcclxuICBcclxuICAgIC8vIHB1c2hQb3N0KCk7XHJcbiAgXHJcbiAgY29uc3QgYWRkaGFuZGxlciA9ICh0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwb3N0OiBJRm9ybSA9IHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAvLyBib2R5OmJvZHlcclxuICAgIH07XHJcblxyXG4gICAgc2V0UG9zdFRleHQoKHByZXYpID0+IFtwb3N0LCAuLi5wcmV2XSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRleHRTdGF0ZVwiLCBwb3N0VGV4dCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIG9uQWRkPXthZGRoYW5kbGVyfSAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrVG9Ib21lXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=