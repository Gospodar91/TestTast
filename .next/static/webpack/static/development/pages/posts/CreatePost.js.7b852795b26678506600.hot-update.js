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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "E:\\TestTaskNextJs\\testDevOps\\TestTast\\nextjs-blog\\pages\\posts\\CreatePost.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

// const postToAdd = {
//     title: 'NEXT JS',
//     body: 'Typescript',
//   };
var createPost = function createPost() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      postText = _useState[0],
      setPostText = _useState[1];

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
                method: "delete",
                url: "https://simple-blog-api.crew.red/posts/27" // data: postText,

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
    setPostText(post);
    console.log("textState", postText);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwidXNlU3RhdGUiLCJwb3N0VGV4dCIsInNldFBvc3RUZXh0IiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSw0Q0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLElBQXZCLENBQTRCLGNBQTVCLElBQThDLGlDQUE5Qzs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsRUFEakI7QUFBQSxNQUNoQkMsUUFEZ0I7QUFBQSxNQUNOQyxXQURNOztBQUd2QixNQUFNQyxRQUFRO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVNUiw0Q0FBSyxDQUFDO0FBQ3ZCUyxzQkFBTSxFQUFFLFFBRGU7QUFFdkJDLG1CQUFHLEVBQUUsMkNBRmtCLENBR3ZCOztBQUh1QixlQUFELENBRlg7O0FBQUE7QUFFUEMsa0JBRk87QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFiQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQVJhLG9CQVNQLElBQUlDLEtBQUosRUFUTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSTixRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBYUVBLFVBQVEsR0FoQmEsQ0FrQnJCOztBQUVGLE1BQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBbUI7QUFDcEMsUUFBTWIsSUFBVyxHQUFHO0FBQ2xCYSxXQUFLLEVBQUVBLEtBRFcsQ0FFbEI7O0FBRmtCLEtBQXBCO0FBS0FULGVBQVcsQ0FBRUosSUFBRixDQUFYO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJQLFFBQXpCO0FBQ0QsR0FSRDs7QUFVQSxTQUNFLG1FQUdFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURGLENBSEYsQ0FERjtBQVdELENBekNEOztHQUFNRixVOztBQTBDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBvc3RzXFxDcmVhdGVQb3N0LmpzLjdiODUyNzk1YjI2Njc4NTA2NjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtXCI7XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMucG9zdFtcIkNvbnRlbnQtVHlwZVwiXSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOFwiO1xyXG5cclxuaW50ZXJmYWNlIElGb3JtIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIC8vIGJvZHk6c3RyaW5nXHJcbn1cclxuXHJcbi8vIGNvbnN0IHBvc3RUb0FkZCA9IHtcclxuLy8gICAgIHRpdGxlOiAnTkVYVCBKUycsXHJcbi8vICAgICBib2R5OiAnVHlwZXNjcmlwdCcsXHJcbi8vICAgfTtcclxuY29uc3QgY3JlYXRlUG9zdCA9ICgpID0+IHtcclxuICBjb25zdCBbcG9zdFRleHQsIHNldFBvc3RUZXh0XSA9IHVzZVN0YXRlPElGb3JtPigpO1xyXG5cclxuICBjb25zdCBwdXNoUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcImRlbGV0ZVwiLFxyXG4gICAgICAgIHVybDogXCJodHRwczovL3NpbXBsZS1ibG9nLWFwaS5jcmV3LnJlZC9wb3N0cy8yN1wiLFxyXG4gICAgICAgIC8vIGRhdGE6IHBvc3RUZXh0LFxyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUE9TVCBFUlJPUlwiLCBlcnJvcik7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgICBwdXNoUG9zdCgpO1xyXG4gIFxyXG4gICAgLy8gcHVzaFBvc3QoKTtcclxuICBcclxuICBjb25zdCBhZGRoYW5kbGVyID0gKHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBvc3Q6IElGb3JtID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIC8vIGJvZHk6Ym9keVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRQb3N0VGV4dCgocG9zdCkpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0ZXh0U3RhdGVcIiwgcG9zdFRleHQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7LyogPEZvcm0gb25BZGQ9e2FkZGhhbmRsZXJ9IC8+ICovfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrVG9Ib21lXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBvc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=