webpackHotUpdate("frontity-test",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,state.theme.menu.map((_ref2)=>{var{name,href}=_ref2;// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===href;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:href,\"aria-current\":isCurrentPage?\"page\":undefined},name));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"1kyo6ic\",styles:\"list-style:none;display:flex;width:848px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmljYW5hZ2xpay9mcm9udGl0eS10ZXN0L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCK0IiLCJmaWxlIjoiL1VzZXJzL2VyaWNhbmFnbGlrL2Zyb250aXR5LXRlc3QvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxuICA8TmF2Q29udGFpbmVyPlxuICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoe25hbWUsIGhyZWZ9KSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gc3RhdGUucm91dGVyLmxpbmsgPT09IGhyZWY7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgPExpbmsgbGluaz17aHJlZn0gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApO1xuICAgIH0pfVxuICA8L05hdkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavItem\"})( false?undefined:{name:\"1wyirlq\",styles:\"padding:0;margin:0 16px;color:#fff;font-size:0.9em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#fff;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lcmljYW5hZ2xpay9mcm9udGl0eS10ZXN0L3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDMEIiLCJmaWxlIjoiL1VzZXJzL2VyaWNhbmFnbGlrL2Zyb250aXR5LXRlc3QvcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4gKFxuICA8TmF2Q29udGFpbmVyPlxuICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoe25hbWUsIGhyZWZ9KSA9PiB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgbGluayBtYXRjaGVkIHRoZSBjdXJyZW50IHBhZ2UgdXJsXG4gICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gc3RhdGUucm91dGVyLmxpbmsgPT09IGhyZWY7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TmF2SXRlbSBrZXk9e25hbWV9PlxuICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgPExpbmsgbGluaz17aHJlZn0gYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkl0ZW0+XG4gICAgICApO1xuICAgIH0pfVxuICA8L05hdkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwidGhlbWUiLCJtZW51IiwibWFwIiwibmFtZSIsImhyZWYiLCJpc0N1cnJlbnRQYWdlIiwicm91dGVyIiwibGluayIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJOYXZDb250YWluZXIiLCJOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQTs7OztHQUtBLEdBQU1BLElBQUcsQ0FBRyxZQUFDLENBQUVDLEtBQUYsQ0FBRCxZQUNWLDJEQUFDLFlBQUQsTUFDR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEdBQWpCLENBQXFCLFNBQWtCLElBQWpCLENBQUNDLElBQUQsQ0FBT0MsSUFBUCxDQUFpQixPQUN0QztBQUNBLEdBQU1DLGNBQWEsQ0FBR04sS0FBSyxDQUFDTyxNQUFOLENBQWFDLElBQWIsR0FBc0JILElBQTVDLENBQ0EsTUFDRSwyREFBQyxPQUFELEVBQVMsR0FBRyxDQUFFRCxJQUFkLEVBRUUsMERBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUVDLElBQVosQ0FBa0IsZUFBY0MsYUFBYSxDQUFHLE1BQUgsQ0FBWUcsU0FBekQsRUFDR0wsSUFESCxDQUZGLENBREYsQ0FRRCxDQVhBLENBREgsQ0FEVSxFQUFaLENBaUJlTSx1SEFBTyxDQUFDWCxHQUFELENBQXRCLEVBRUEsR0FBTVksYUFBWSxtM0ZBQWxCLENBZUEsR0FBTUMsUUFBTyx3aUdBQWIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiAoXG4gIDxOYXZDb250YWluZXI+XG4gICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKCh7bmFtZSwgaHJlZn0pID0+IHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSBzdGF0ZS5yb3V0ZXIubGluayA9PT0gaHJlZjtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgICAgICA8TGluayBsaW5rPXtocmVmfSBhcmlhLWN1cnJlbnQ9e2lzQ3VycmVudFBhZ2UgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICk7XG4gICAgfSl9XG4gIDwvTmF2Q29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODQ4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})