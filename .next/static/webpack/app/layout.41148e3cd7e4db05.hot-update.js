"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"bf63e417883f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2NiOTkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiZjYzZTQxNzg4M2ZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/SignInBtn.tsx":
/*!**************************************!*\
  !*** ./app/components/SignInBtn.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignInBtn: function() { return /* binding */ SignInBtn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ SignInBtn auto */ \nvar _s = $RefreshSig$();\n\nconst SignInBtn = (props)=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \" bg-black px-9 py-2 text-white text- rounded-full\",\n        style: {\n            cursor: \"pointer\"\n        },\n        onClick: ()=>{\n            router.push(\"/auth/sign-in\");\n        },\n        children: props.children || \"Sign In\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\chris\\\\Downloads\\\\infsail_web\\\\app\\\\components\\\\SignInBtn.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignInBtn, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = SignInBtn;\nvar _c;\n$RefreshReg$(_c, \"SignInBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NpZ25JbkJ0bi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFFckMsTUFBTUMsWUFBWSxDQUFDQzs7SUFJeEIsTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCLHFCQUNFLDhEQUFDSTtRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFBRUMsUUFBUTtRQUFVO1FBQzNCQyxTQUFTO1lBQ1BMLE9BQU9NLElBQUksQ0FBQztRQUNkO2tCQUVDUCxNQUFNUSxRQUFRLElBQUk7Ozs7OztBQUd6QixFQUFFO0dBakJXVDs7UUFJSUQsc0RBQVNBOzs7S0FKYkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvU2lnbkluQnRuLnRzeD9lYmIzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ25JbkJ0biA9IChwcm9wczoge1xyXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9XCIgYmctYmxhY2sgcHgtOSBweS0yIHRleHQtd2hpdGUgdGV4dC0gcm91bmRlZC1mdWxsXCJcclxuICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvYXV0aC9zaWduLWluXCIpO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW4gfHwgXCJTaWduIEluXCJ9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59OyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJTaWduSW5CdG4iLCJwcm9wcyIsInJvdXRlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiY3Vyc29yIiwib25DbGljayIsInB1c2giLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SignInBtn.tsx\n"));

/***/ })

});