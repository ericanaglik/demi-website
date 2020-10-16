webpackHotUpdate("frontity-test",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './fonts/fonts'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(NavContainer,null,state.theme.menu.map((_ref2)=>{var{name,href,submenu}=_ref2;// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===href;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(NavItem,{key:name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:href,\"aria-current\":isCurrentPage?\"page\":undefined},name),submenu&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(SubNavContainer,null,submenu.map((_ref3)=>{var{name,href}=_ref3;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\",{href:href},name);})));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"1kyo6ic\",styles:\"list-style:none;display:flex;width:848px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmljYW5hZ2xpay9mcm9udGl0eS10ZXN0L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDK0IiLCJmaWxlIjoiL1VzZXJzL2VyaWNhbmFnbGlrL2Zyb250aXR5LXRlc3QvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tICcuL2ZvbnRzL2ZvbnRzJztcblxuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKCh7bmFtZSwgaHJlZiwgc3VibWVudX0pID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gaHJlZjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtocmVmfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeyBzdWJtZW51ICYmIChcbiAgICAgICAgICAgIDxTdWJOYXZDb250YWluZXI+XG4gICAgICAgICAgICAgIHsgc3VibWVudS5tYXAoKHtuYW1lLCBocmVmfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N1Yk5hdkNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApO1xuICAgIH0pfVxuICA8L05hdkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC1mYW1pbHk6XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN1Yk5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHZpc2liaWxpdHk6ICR7KHtzdWJtZW51fSkgPT4gc3VibWVudSAmJiAnaGlkZGVuJ307XG4gIFxuICAke05hdkl0ZW19OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6ICR7KHtzdWJtZW51fSkgPT4gc3VibWVudSAmJiAndmlzaWJsZSd9O1xuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavItem\"})( false?undefined:{name:\"yneumx\",styles:\"padding:0;margin:0 16px;color:#fff;font-size:0.9em;font-family:box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmljYW5hZ2xpay9mcm9udGl0eS10ZXN0L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEMEIiLCJmaWxlIjoiL1VzZXJzL2VyaWNhbmFnbGlrL2Zyb250aXR5LXRlc3QvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tICcuL2ZvbnRzL2ZvbnRzJztcblxuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKCh7bmFtZSwgaHJlZiwgc3VibWVudX0pID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gaHJlZjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtocmVmfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeyBzdWJtZW51ICYmIChcbiAgICAgICAgICAgIDxTdWJOYXZDb250YWluZXI+XG4gICAgICAgICAgICAgIHsgc3VibWVudS5tYXAoKHtuYW1lLCBocmVmfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N1Yk5hdkNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApO1xuICAgIH0pfVxuICA8L05hdkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC1mYW1pbHk6XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN1Yk5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHZpc2liaWxpdHk6ICR7KHtzdWJtZW51fSkgPT4gc3VibWVudSAmJiAnaGlkZGVuJ307XG4gIFxuICAke05hdkl0ZW19OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6ICR7KHtzdWJtZW51fSkgPT4gc3VibWVudSAmJiAndmlzaWJsZSd9O1xuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var SubNavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n2\",label:\"SubNavContainer\"})(\"visibility:\",(_ref4)=>{var{submenu}=_ref4;return submenu&&'hidden';},\";\",NavItem,\":hover &{visibility:\",(_ref5)=>{var{submenu}=_ref5;return submenu&&'visible';},\";}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmljYW5hZ2xpay9mcm9udGl0eS10ZXN0L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGa0MiLCJmaWxlIjoiL1VzZXJzL2VyaWNhbmFnbGlrL2Zyb250aXR5LXRlc3QvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcbmltcG9ydCBHbG9iYWxGb250cyBmcm9tICcuL2ZvbnRzL2ZvbnRzJztcblxuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKCh7bmFtZSwgaHJlZiwgc3VibWVudX0pID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gaHJlZjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtocmVmfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgeyBzdWJtZW51ICYmIChcbiAgICAgICAgICAgIDxTdWJOYXZDb250YWluZXI+XG4gICAgICAgICAgICAgIHsgc3VibWVudS5tYXAoKHtuYW1lLCBocmVmfSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9PntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1N1Yk5hdkNvbnRhaW5lcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApO1xuICAgIH0pfVxuICA8L05hdkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC1mYW1pbHk6XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN1Yk5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIHZpc2liaWxpdHk6ICR7KHtzdWJtZW51fSkgPT4gc3VibWVudSAmJiAnaGlkZGVuJ307XG4gIFxuICAke05hdkl0ZW19OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6ICR7KHtzdWJtZW51fSkgPT4gc3VibWVudSAmJiAndmlzaWJsZSd9O1xuICB9XG5gOyJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwidGhlbWUiLCJtZW51IiwibWFwIiwibmFtZSIsImhyZWYiLCJzdWJtZW51IiwiaXNDdXJyZW50UGFnZSIsInJvdXRlciIsImxpbmsiLCJ1bmRlZmluZWQiLCJjb25uZWN0IiwiTmF2Q29udGFpbmVyIiwiTmF2SXRlbSIsIlN1Yk5hdkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQU1BOzs7O0dBS0EsR0FBTUEsSUFBRyxDQUFHLFlBQUMsQ0FBRUMsS0FBRixDQUFELFlBQ1YsMkRBQUMsWUFBRCxNQUNHQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsR0FBakIsQ0FBcUIsU0FBMkIsSUFBMUIsQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWFDLE9BQWIsQ0FBMEIsT0FDL0M7QUFDQSxHQUFNQyxjQUFhLENBQUdQLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxJQUFiLEdBQXNCSixJQUE1QyxDQUNBLE1BQ0UsMkRBQUMsT0FBRCxFQUFTLEdBQUcsQ0FBRUQsSUFBZCxFQUVFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFQyxJQUFaLENBQWtCLGVBQWNFLGFBQWEsQ0FBRyxNQUFILENBQVlHLFNBQXpELEVBQ0dOLElBREgsQ0FGRixDQUtJRSxPQUFPLEVBQ1AsMERBQUMsZUFBRCxNQUNJQSxPQUFPLENBQUNILEdBQVIsQ0FBWSxTQUFrQixJQUFqQixDQUFDQyxJQUFELENBQU9DLElBQVAsQ0FBaUIsT0FDOUIsTUFDRSxnRUFBRyxJQUFJLENBQUVBLElBQVQsRUFBZ0JELElBQWhCLENBREYsQ0FHQyxDQUpELENBREosQ0FOSixDQURGLENBaUJELENBcEJBLENBREgsQ0FEVSxFQUFaLENBMEJlTyx1SEFBTyxDQUFDWixHQUFELENBQXRCLEVBRUEsR0FBTWEsYUFBWSxtaUhBQWxCLENBZUEsR0FBTUMsUUFBTyxtdUhBQWIsQ0FtQ0EsR0FBTUMsZ0JBQWUsd0lBQ0wsYUFBQyxDQUFDUixPQUFELENBQUQsYUFBZUEsUUFBTyxFQUFJLFFBQTFCLEVBREssS0FHakJPLE9BSGlCLHdCQUlILGFBQUMsQ0FBQ1AsT0FBRCxDQUFELGFBQWVBLFFBQU8sRUFBSSxTQUExQixFQUpHLG1zR0FBckIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuaW1wb3J0IEdsb2JhbEZvbnRzIGZyb20gJy4vZm9udHMvZm9udHMnO1xuXG5cbi8qKlxuICogTmF2aWdhdGlvbiBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBuYXZpZ2F0aW9uIGxpbmtzXG4gKi9cbmNvbnN0IE5hdiA9ICh7IHN0YXRlIH0pID0+IChcbiAgPE5hdkNvbnRhaW5lcj5cbiAgICB7c3RhdGUudGhlbWUubWVudS5tYXAoKHtuYW1lLCBocmVmLCBzdWJtZW51fSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBocmVmO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgIDxMaW5rIGxpbms9e2hyZWZ9IGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7IHN1Ym1lbnUgJiYgKFxuICAgICAgICAgICAgPFN1Yk5hdkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgeyBzdWJtZW51Lm1hcCgoe25hbWUsIGhyZWZ9KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17aHJlZn0+e25hbWV9PC9hPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU3ViTmF2Q29udGFpbmVyPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvTmF2Q29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODQ4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LWZhbWlseTpcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3ViTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgdmlzaWJpbGl0eTogJHsoe3N1Ym1lbnV9KSA9PiBzdWJtZW51ICYmICdoaWRkZW4nfTtcbiAgXG4gICR7TmF2SXRlbX06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogJHsoe3N1Ym1lbnV9KSA9PiBzdWJtZW51ICYmICd2aXNpYmxlJ307XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})