/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/team",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./views/Team/sections/Staff/Staff.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./views/Team/sections/Staff/Staff.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Staff_staff__inner__36cTp {\\n  padding: calc(var(--gap) * 16) 0; }\\n  @media (min-width: 768px) {\\n    .Staff_staff__inner__36cTp {\\n      padding: calc(var(--gap) * 20) 0; } }\\n\\n.Staff_staff__list__2Gtu9 {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  margin: 0 calc(var(--gap) * -4); }\\n\\n.Staff_staff__item__1YA1L {\\n  width: 50%;\\n  padding: 0 calc(var(--gap) * 4);\\n  margin: 0 0 calc(var(--gap) * 12) 0; }\\n  @media (min-width: 768px) {\\n    .Staff_staff__item__1YA1L {\\n      width: 25%; } }\\n\\n.Staff_employer__30aau {\\n  max-width: 280px; }\\n  .Staff_employer__thumb__2ESXZ {\\n    position: relative; }\\n    .Staff_employer__thumb__2ESXZ::after {\\n      content: '';\\n      display: block;\\n      padding-bottom: 120%; }\\n    .Staff_employer__thumb__2ESXZ img {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Staff.module.scss\",\"webpack://../../../../styles/viewport.scss\"],\"names\":[],\"mappings\":\"AAKE;EACE,gCAAgC,EAAA;ECFlC;IDCA;MAII,gCAAgC,EAAA,EAEnC;;AAED;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,+BAA+B,EAAA;;AAGjC;EACE,UAAU;EACV,+BAA+B;EAC/B,mCAAmC,EAAA;ECnBrC;IDgBA;MAMI,UAAU,EAAA,EAEb;;AAGH;EACE,gBAAgB,EAAA;EAMhB;IACE,kBAAkB,EAAA;IADnB;MAKG,WAAW;MACX,cAAc;MACd,oBAAoB,EAAA;IAPvB;MAWG,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,WAAW;MACX,YAAY;MACZ,iBAAiB,EAAA\",\"sourcesContent\":[\"\\n      @import \\\"./styles/viewport.scss\\\";\\n      @import \\\"./styles/mixins.scss\\\";\\n    \\n.staff {\\n  &__inner {\\n    padding: calc(var(--gap) * 16) 0;\\n    \\n    @include tablet {\\n      padding: calc(var(--gap) * 20) 0;\\n    }\\n  }\\n\\n  &__list {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-between;\\n    margin: 0 calc(var(--gap) * -4);\\n  }\\n\\n  &__item {\\n    width: 50%;\\n    padding: 0 calc(var(--gap) * 4);\\n    margin: 0 0 calc(var(--gap) * 12) 0;\\n\\n    @include tablet {\\n      width: 25%;\\n    }\\n  }\\n}\\n\\n.employer {\\n  max-width: 280px;\\n\\n  &__inner {\\n\\n  }\\n\\n  &__thumb {\\n    position: relative;\\n    // margin: 0 0 calc(var(--gap) * 6) 0;\\n\\n    &::after {\\n      content: '';\\n      display: block;\\n      padding-bottom: 120%;\\n    }\\n\\n    img {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n    }\\n  }\\n}\",\"$tablet-viewport: 768px;\\n$desktop-viewport: 992px;\\n\\n@mixin tablet {\\n  @media (min-width: $tablet-viewport) {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet-max {\\n  @media (max-width: $tablet-viewport - 1px) {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop {\\n  @media (min-width: $desktop-viewport) {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop-max {\\n  @media (max-width: $desktop-viewport - 1px) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"staff__inner\": \"Staff_staff__inner__36cTp\",\n\t\"staff__list\": \"Staff_staff__list__2Gtu9\",\n\t\"staff__item\": \"Staff_staff__item__1YA1L\",\n\t\"employer\": \"Staff_employer__30aau\",\n\t\"employer__thumb\": \"Staff_employer__thumb__2ESXZ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvVGVhbS9zZWN0aW9ucy9TdGFmZi9TdGFmZi5tb2R1bGUuc2Nzcz84ZjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSxzRUFBc0UscUNBQXFDLEVBQUUsK0JBQStCLGtDQUFrQyx5Q0FBeUMsRUFBRSxFQUFFLCtCQUErQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxvQ0FBb0MsRUFBRSwrQkFBK0IsZUFBZSxvQ0FBb0Msd0NBQXdDLEVBQUUsK0JBQStCLGlDQUFpQyxtQkFBbUIsRUFBRSxFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxtQ0FBbUMseUJBQXlCLEVBQUUsNENBQTRDLG9CQUFvQix1QkFBdUIsNkJBQTZCLEVBQUUseUNBQXlDLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDBCQUEwQixFQUFFLFNBQVMsK0hBQStILGlCQUFpQixNQUFNLEtBQUssd0JBQXdCLEtBQUssVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGtCQUFrQixPQUFPLE1BQU0scUJBQXFCLEtBQUssaUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sVUFBVSxVQUFVLGlCQUFpQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxnRkFBZ0YseUNBQXlDLGdCQUFnQixjQUFjLHVDQUF1Qyw2QkFBNkIseUNBQXlDLE9BQU8sS0FBSyxlQUFlLG9CQUFvQixzQkFBc0IscUNBQXFDLHNDQUFzQyxLQUFLLGVBQWUsaUJBQWlCLHNDQUFzQywwQ0FBMEMseUJBQXlCLG1CQUFtQixPQUFPLEtBQUssR0FBRyxlQUFlLHFCQUFxQixnQkFBZ0IsT0FBTyxnQkFBZ0IseUJBQXlCLDRDQUE0QyxrQkFBa0Isb0JBQW9CLHVCQUF1Qiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLEtBQUssR0FBRywyQkFBMkIsMkJBQTJCLG1CQUFtQiwwQ0FBMEMsZUFBZSxLQUFLLEdBQUcsdUJBQXVCLGdEQUFnRCxlQUFlLEtBQUssR0FBRyxvQkFBb0IsMkNBQTJDLGVBQWUsS0FBSyxHQUFHLHdCQUF3QixpREFBaUQsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ255RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL3ZpZXdzL1RlYW0vc2VjdGlvbnMvU3RhZmYvU3RhZmYubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuU3RhZmZfc3RhZmZfX2lubmVyX18zNmNUcCB7XFxuICBwYWRkaW5nOiBjYWxjKHZhcigtLWdhcCkgKiAxNikgMDsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5TdGFmZl9zdGFmZl9faW5uZXJfXzM2Y1RwIHtcXG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWdhcCkgKiAyMCkgMDsgfSB9XFxuXFxuLlN0YWZmX3N0YWZmX19saXN0X18yR3R1OSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIGNhbGModmFyKC0tZ2FwKSAqIC00KTsgfVxcblxcbi5TdGFmZl9zdGFmZl9faXRlbV9fMVlBMUwge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1nYXApICogNCk7XFxuICBtYXJnaW46IDAgMCBjYWxjKHZhcigtLWdhcCkgKiAxMikgMDsgfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIC5TdGFmZl9zdGFmZl9faXRlbV9fMVlBMUwge1xcbiAgICAgIHdpZHRoOiAyNSU7IH0gfVxcblxcbi5TdGFmZl9lbXBsb3llcl9fMzBhYXUge1xcbiAgbWF4LXdpZHRoOiAyODBweDsgfVxcbiAgLlN0YWZmX2VtcGxveWVyX190aHVtYl9fMkVTWFoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgLlN0YWZmX2VtcGxveWVyX190aHVtYl9fMkVTWFo6OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTIwJTsgfVxcbiAgICAuU3RhZmZfZW1wbG95ZXJfX3RodW1iX18yRVNYWiBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vU3RhZmYubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmlld3BvcnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLRTtFQUNFLGdDQUFnQyxFQUFBO0VDRmxDO0lEQ0E7TUFJSSxnQ0FBZ0MsRUFBQSxFQUVuQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUdqQztFQUNFLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsbUNBQW1DLEVBQUE7RUNuQnJDO0lEZ0JBO01BTUksVUFBVSxFQUFBLEVBRWI7O0FBR0g7RUFDRSxnQkFBZ0IsRUFBQTtFQU1oQjtJQUNFLGtCQUFrQixFQUFBO0lBRG5CO01BS0csV0FBVztNQUNYLGNBQWM7TUFDZCxvQkFBb0IsRUFBQTtJQVB2QjtNQVdHLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuICAgICAgQGltcG9ydCBcXFwiLi9zdHlsZXMvdmlld3BvcnQuc2Nzc1xcXCI7XFxuICAgICAgQGltcG9ydCBcXFwiLi9zdHlsZXMvbWl4aW5zLnNjc3NcXFwiO1xcbiAgICBcXG4uc3RhZmYge1xcbiAgJl9faW5uZXIge1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWdhcCkgKiAxNikgMDtcXG4gICAgXFxuICAgIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1nYXApICogMjApIDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwIGNhbGModmFyKC0tZ2FwKSAqIC00KTtcXG4gIH1cXG5cXG4gICZfX2l0ZW0ge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAwIGNhbGModmFyKC0tZ2FwKSAqIDQpO1xcbiAgICBtYXJnaW46IDAgMCBjYWxjKHZhcigtLWdhcCkgKiAxMikgMDtcXG5cXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgICB3aWR0aDogMjUlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5lbXBsb3llciB7XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcblxcbiAgJl9faW5uZXIge1xcblxcbiAgfVxcblxcbiAgJl9fdGh1bWIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8vIG1hcmdpbjogMCAwIGNhbGModmFyKC0tZ2FwKSAqIDYpIDA7XFxuXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTIwJTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIH1cXG4gIH1cXG59XCIsXCIkdGFibGV0LXZpZXdwb3J0OiA3NjhweDtcXG4kZGVza3RvcC12aWV3cG9ydDogOTkycHg7XFxuXFxuQG1peGluIHRhYmxldCB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogJHRhYmxldC12aWV3cG9ydCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIHRhYmxldC1tYXgge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQtdmlld3BvcnQgLSAxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBkZXNrdG9wIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZGVza3RvcC12aWV3cG9ydCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGRlc2t0b3AtbWF4IHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkZGVza3RvcC12aWV3cG9ydCAtIDFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3RhZmZfX2lubmVyXCI6IFwiU3RhZmZfc3RhZmZfX2lubmVyX18zNmNUcFwiLFxuXHRcInN0YWZmX19saXN0XCI6IFwiU3RhZmZfc3RhZmZfX2xpc3RfXzJHdHU5XCIsXG5cdFwic3RhZmZfX2l0ZW1cIjogXCJTdGFmZl9zdGFmZl9faXRlbV9fMVlBMUxcIixcblx0XCJlbXBsb3llclwiOiBcIlN0YWZmX2VtcGxveWVyX18zMGFhdVwiLFxuXHRcImVtcGxveWVyX190aHVtYlwiOiBcIlN0YWZmX2VtcGxveWVyX190aHVtYl9fMkVTWFpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./views/Team/sections/Staff/Staff.module.scss\n");

/***/ })

});