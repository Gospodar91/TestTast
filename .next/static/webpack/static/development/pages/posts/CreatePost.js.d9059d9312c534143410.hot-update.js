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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.post["Content-Type"] = "application/json; charset=UTF-8";

var createPost = function createPost() {
  _s();

  var initialState = {
    title: null,
    body: null
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      postTitle = _useState[0],
      setPostTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      postBody = _useState2[0],
      setPostBody = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(initialState),
      total = _useState3[0],
      TotalState = _useState3[1];

  var pushPost = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_4___default()({
                method: "post",
                url: "https://simple-blog-api.crew.red/posts/",
                data: _objectSpread(_objectSpread({}, postTitle), postBody)
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

  if (postTitle && postBody) {
    pushPost();
  }

  var addhandler = function addhandler(title, body) {
    var titlePost = {
      title: title
    };
    var postMain = {
      body: body
    };
    setPostTitle(titlePost);
    setPostBody(postMain);
  };

  var addhandler2 = function addhandler2(title, body) {
    var mainPost = {
      title: title,
      body: body
    };
    setPostTitle(mainPost);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onAdd: addhandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, "\u2190 Back to home"))));
};

_s(createPost, "gG7ZO2ajyWKXnOQXocI7p6oQ0z4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9DcmVhdGVQb3N0LnRzeCJdLCJuYW1lcyI6WyJheGlvcyIsImRlZmF1bHRzIiwiaGVhZGVycyIsInBvc3QiLCJjcmVhdGVQb3N0IiwiaW5pdGlhbFN0YXRlIiwidGl0bGUiLCJib2R5IiwidXNlU3RhdGUiLCJwb3N0VGl0bGUiLCJzZXRQb3N0VGl0bGUiLCJwb3N0Qm9keSIsInNldFBvc3RCb2R5IiwidG90YWwiLCJUb3RhbFN0YXRlIiwicHVzaFBvc3QiLCJtZXRob2QiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwiYWRkaGFuZGxlciIsInRpdGxlUG9zdCIsInBvc3RNYWluIiwiYWRkaGFuZGxlcjIiLCJtYWluUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkMsSUFBdkIsQ0FBNEIsY0FBNUIsSUFBOEMsaUNBQTlDOztBQWNBLElBQU1DLFVBQW9CLEdBQUcsU0FBdkJBLFVBQXVCLEdBQU07QUFBQTs7QUFDakMsTUFBTUMsWUFBWSxHQUFDO0FBQ2pCQyxTQUFLLEVBQUMsSUFEVztBQUVqQkMsUUFBSSxFQUFDO0FBRlksR0FBbkI7O0FBRGlDLGtCQUtDQyxzREFBUSxDQUFTLElBQVQsQ0FMVDtBQUFBLE1BSzFCQyxTQUwwQjtBQUFBLE1BS2ZDLFlBTGU7O0FBQUEsbUJBTURGLHNEQUFRLENBQVEsSUFBUixDQU5QO0FBQUEsTUFNMUJHLFFBTjBCO0FBQUEsTUFNaEJDLFdBTmdCOztBQUFBLG1CQU9MSixzREFBUSxDQUFDSCxZQUFELENBUEg7QUFBQSxNQU8xQlEsS0FQMEI7QUFBQSxNQU9uQkMsVUFQbUI7O0FBVWpDLE1BQU1DLFFBQVE7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRU1mLDRDQUFLLENBQUM7QUFDdkJnQixzQkFBTSxFQUFFLE1BRGU7QUFFdkJDLG1CQUFHLEVBQUUseUNBRmtCO0FBR3ZCQyxvQkFBSSxrQ0FBT1QsU0FBUCxHQUFxQkUsUUFBckI7QUFIbUIsZUFBRCxDQUZYOztBQUFBO0FBRVBPLGtCQUZPO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRYkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFSYSxvQkFTUCxJQUFJQyxLQUFKLEVBVE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUk4sUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVlBLE1BQUlOLFNBQVMsSUFBSUUsUUFBakIsRUFBMkI7QUFDekJJLFlBQVE7QUFDVDs7QUFFRCxNQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDaEIsS0FBRCxFQUFnQkMsSUFBaEIsRUFBaUM7QUFDbEQsUUFBTWdCLFNBQWlCLEdBQUc7QUFDeEJqQixXQUFLLEVBQUVBO0FBRGlCLEtBQTFCO0FBR0EsUUFBTWtCLFFBQWUsR0FBRztBQUN0QmpCLFVBQUksRUFBRUE7QUFEZ0IsS0FBeEI7QUFJQUcsZ0JBQVksQ0FBQ2EsU0FBRCxDQUFaO0FBQ0FYLGVBQVcsQ0FBQ1ksUUFBRCxDQUFYO0FBQ0QsR0FWRDs7QUFZQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDbkIsS0FBRCxFQUFnQkMsSUFBaEIsRUFBaUM7QUFDbkQsUUFBTW1CLFFBQWdCLEdBQUc7QUFDdkJwQixXQUFLLEVBQUVBLEtBRGdCO0FBRXZCQyxVQUFJLEVBQUNBO0FBRmtCLEtBQXpCO0FBTUFHLGdCQUFZLENBQUNnQixRQUFELENBQVo7QUFFRCxHQVREOztBQVdBLFNBQ0UsbUVBQ0UsTUFBQyw2REFBRDtBQUFNLFNBQUssRUFBRUosVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsQ0FERixDQUZGLENBREY7QUFVRCxDQTNERDs7R0FBTWxCLFU7O0FBNERTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccG9zdHNcXENyZWF0ZVBvc3QuanMuZDkwNTlkOTMxMmM1MzQxNDM0MTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9mb3JtL0Zvcm1cIjtcclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0W1wiQ29udGVudC1UeXBlXCJdID0gXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04XCI7XHJcblxyXG5pbnRlcmZhY2UgSXRpdGxlIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBJQm9keSB7XHJcbiAgYm9keTogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBJdG90YWx7XHJcbiAgdGl0bGU6c3RyaW5nXHJcbiAgYm9keTpzdHJpbmdcclxufVxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVBvc3Q6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICB0aXRsZTpudWxsLFxyXG4gICAgYm9keTpudWxsXHJcbiAgfVxyXG4gIGNvbnN0IFtwb3N0VGl0bGUsIHNldFBvc3RUaXRsZV0gPSB1c2VTdGF0ZTxJdGl0bGU+KG51bGwpO1xyXG4gIGNvbnN0IFtwb3N0Qm9keSwgc2V0UG9zdEJvZHldID0gdXNlU3RhdGU8SUJvZHk+KG51bGwpO1xyXG4gIGNvbnN0IFt0b3RhbCwgVG90YWxTdGF0ZV0gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xyXG4gIFxyXG5cclxuICBjb25zdCBwdXNoUG9zdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zaW1wbGUtYmxvZy1hcGkuY3Jldy5yZWQvcG9zdHMvXCIsXHJcbiAgICAgICAgZGF0YTogeyAuLi5wb3N0VGl0bGUsIC4uLnBvc3RCb2R5IH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQT1NUIEVSUk9SXCIsIGVycm9yKTtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBpZiAocG9zdFRpdGxlICYmIHBvc3RCb2R5KSB7XHJcbiAgICBwdXNoUG9zdCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkaGFuZGxlciA9ICh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlUG9zdDogSXRpdGxlID0ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcG9zdE1haW46IElCb2R5ID0ge1xyXG4gICAgICBib2R5OiBib2R5LFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRQb3N0VGl0bGUodGl0bGVQb3N0KTtcclxuICAgIHNldFBvc3RCb2R5KHBvc3RNYWluKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRoYW5kbGVyMiA9ICh0aXRsZTogc3RyaW5nLCBib2R5OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IG1haW5Qb3N0OiBJdG90YWwgPSB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgYm9keTpib2R5XHJcbiAgICB9O1xyXG4gIFxyXG5cclxuICAgIHNldFBvc3RUaXRsZShtYWluUG9zdCk7XHJcbiAgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIG9uQWRkPXthZGRoYW5kbGVyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tUb0hvbWVcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGE+4oaQIEJhY2sgdG8gaG9tZTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==