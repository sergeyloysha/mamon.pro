/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./views/Team/sections/Staff/Staff.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./views/Team/sections/Staff/Staff.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Staff_staff__inner__36cTp {\\n  padding: calc(var(--gap) * 16) 0; }\\n  @media (min-width: 768px) {\\n    .Staff_staff__inner__36cTp {\\n      padding: calc(var(--gap) * 20) 0; } }\\n\\n.Staff_staff__list__2Gtu9 {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  margin: 0 calc(var(--gap) * -4); }\\n\\n.Staff_staff__item__1YA1L {\\n  width: 50%;\\n  padding: 0 calc(var(--gap) * 4);\\n  margin: 0 0 calc(var(--gap) * 12) 0; }\\n  @media (min-width: 768px) {\\n    .Staff_staff__item__1YA1L {\\n      width: 25%; } }\\n\\n.Staff_employer__30aau {\\n  max-width: 200px; }\\n  .Staff_employer__thumb__2ESXZ {\\n    position: relative; }\\n    .Staff_employer__thumb__2ESXZ::after {\\n      content: '';\\n      display: block;\\n      padding-bottom: 120%; }\\n    .Staff_employer__thumb__2ESXZ img {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover; }\\n  .Staff_employer__meta__3TtCg {\\n    padding: calc(var(--gap) * 4) 0 0 0; }\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://Staff.module.scss\",\"webpack://../../../../styles/viewport.scss\"],\"names\":[],\"mappings\":\"AAKE;EACE,gCAAgC,EAAA;ECFlC;IDCA;MAII,gCAAgC,EAAA,EAEnC;;AAED;EACE,aAAa;EACb,eAAe;EACf,8BAA8B;EAC9B,+BAA+B,EAAA;;AAGjC;EACE,UAAU;EACV,+BAA+B;EAC/B,mCAAmC,EAAA;ECnBrC;IDgBA;MAMI,UAAU,EAAA,EAEb;;AAGH;EACE,gBAAgB,EAAA;EAMhB;IACE,kBAAkB,EAAA;IADnB;MAIG,WAAW;MACX,cAAc;MACd,oBAAoB,EAAA;IANvB;MAUG,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,WAAW;MACX,YAAY;MACZ,iBAAiB,EAAA;EAIrB;IACE,mCAAmC,EAAA\",\"sourcesContent\":[\"\\n      @import \\\"./styles/viewport.scss\\\";\\n      @import \\\"./styles/mixins.scss\\\";\\n    \\n.staff {\\n  &__inner {\\n    padding: calc(var(--gap) * 16) 0;\\n    \\n    @include tablet {\\n      padding: calc(var(--gap) * 20) 0;\\n    }\\n  }\\n\\n  &__list {\\n    display: flex;\\n    flex-wrap: wrap;\\n    justify-content: space-between;\\n    margin: 0 calc(var(--gap) * -4);\\n  }\\n\\n  &__item {\\n    width: 50%;\\n    padding: 0 calc(var(--gap) * 4);\\n    margin: 0 0 calc(var(--gap) * 12) 0;\\n\\n    @include tablet {\\n      width: 25%;\\n    }\\n  }\\n}\\n\\n.employer {\\n  max-width: 200px;\\n\\n  &__inner {\\n\\n  }\\n\\n  &__thumb {\\n    position: relative;\\n\\n    &::after {\\n      content: '';\\n      display: block;\\n      padding-bottom: 120%;\\n    }\\n\\n    img {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 100%;\\n      height: 100%;\\n      object-fit: cover;\\n    }\\n  }\\n\\n  &__meta {\\n    padding: calc(var(--gap) * 4) 0 0 0;\\n  }\\n}\",\"$tablet-viewport: 768px;\\n$desktop-viewport: 992px;\\n\\n@mixin tablet {\\n  @media (min-width: $tablet-viewport) {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet-max {\\n  @media (max-width: $tablet-viewport - 1px) {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop {\\n  @media (min-width: $desktop-viewport) {\\n    @content;\\n  }\\n}\\n\\n@mixin desktop-max {\\n  @media (max-width: $desktop-viewport - 1px) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"staff__inner\": \"Staff_staff__inner__36cTp\",\n\t\"staff__list\": \"Staff_staff__list__2Gtu9\",\n\t\"staff__item\": \"Staff_staff__item__1YA1L\",\n\t\"employer\": \"Staff_employer__30aau\",\n\t\"employer__thumb\": \"Staff_employer__thumb__2ESXZ\",\n\t\"employer__meta\": \"Staff_employer__meta__3TtCg\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdmlld3MvVGVhbS9zZWN0aW9ucy9TdGFmZi9TdGFmZi5tb2R1bGUuc2Nzcz84ZjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSxzRUFBc0UscUNBQXFDLEVBQUUsK0JBQStCLGtDQUFrQyx5Q0FBeUMsRUFBRSxFQUFFLCtCQUErQixrQkFBa0Isb0JBQW9CLG1DQUFtQyxvQ0FBb0MsRUFBRSwrQkFBK0IsZUFBZSxvQ0FBb0Msd0NBQXdDLEVBQUUsK0JBQStCLGlDQUFpQyxtQkFBbUIsRUFBRSxFQUFFLDRCQUE0QixxQkFBcUIsRUFBRSxtQ0FBbUMseUJBQXlCLEVBQUUsNENBQTRDLG9CQUFvQix1QkFBdUIsNkJBQTZCLEVBQUUseUNBQXlDLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDBCQUEwQixFQUFFLGtDQUFrQywwQ0FBMEMsRUFBRSxTQUFTLCtIQUErSCxpQkFBaUIsTUFBTSxLQUFLLHdCQUF3QixLQUFLLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxNQUFNLHFCQUFxQixLQUFLLGlCQUFpQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsVUFBVSxpQkFBaUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sZ0ZBQWdGLHlDQUF5QyxnQkFBZ0IsY0FBYyx1Q0FBdUMsNkJBQTZCLHlDQUF5QyxPQUFPLEtBQUssZUFBZSxvQkFBb0Isc0JBQXNCLHFDQUFxQyxzQ0FBc0MsS0FBSyxlQUFlLGlCQUFpQixzQ0FBc0MsMENBQTBDLHlCQUF5QixtQkFBbUIsT0FBTyxLQUFLLEdBQUcsZUFBZSxxQkFBcUIsZ0JBQWdCLE9BQU8sZ0JBQWdCLHlCQUF5QixrQkFBa0Isb0JBQW9CLHVCQUF1Qiw2QkFBNkIsT0FBTyxhQUFhLDJCQUEyQixlQUFlLGdCQUFnQixvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLEtBQUssZUFBZSwwQ0FBMEMsS0FBSyxHQUFHLDJCQUEyQiwyQkFBMkIsbUJBQW1CLDBDQUEwQyxlQUFlLEtBQUssR0FBRyx1QkFBdUIsZ0RBQWdELGVBQWUsS0FBSyxHQUFHLG9CQUFvQiwyQ0FBMkMsZUFBZSxLQUFLLEdBQUcsd0JBQXdCLGlEQUFpRCxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDMTVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi92aWV3cy9UZWFtL3NlY3Rpb25zL1N0YWZmL1N0YWZmLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlN0YWZmX3N0YWZmX19pbm5lcl9fMzZjVHAge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1nYXApICogMTYpIDA7IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuU3RhZmZfc3RhZmZfX2lubmVyX18zNmNUcCB7XFxuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1nYXApICogMjApIDA7IH0gfVxcblxcbi5TdGFmZl9zdGFmZl9fbGlzdF9fMkd0dTkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMCBjYWxjKHZhcigtLWdhcCkgKiAtNCk7IH1cXG5cXG4uU3RhZmZfc3RhZmZfX2l0ZW1fXzFZQTFMIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAwIGNhbGModmFyKC0tZ2FwKSAqIDQpO1xcbiAgbWFyZ2luOiAwIDAgY2FsYyh2YXIoLS1nYXApICogMTIpIDA7IH1cXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICAuU3RhZmZfc3RhZmZfX2l0ZW1fXzFZQTFMIHtcXG4gICAgICB3aWR0aDogMjUlOyB9IH1cXG5cXG4uU3RhZmZfZW1wbG95ZXJfXzMwYWF1IHtcXG4gIG1heC13aWR0aDogMjAwcHg7IH1cXG4gIC5TdGFmZl9lbXBsb3llcl9fdGh1bWJfXzJFU1haIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgIC5TdGFmZl9lbXBsb3llcl9fdGh1bWJfXzJFU1haOjphZnRlciB7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDEyMCU7IH1cXG4gICAgLlN0YWZmX2VtcGxveWVyX190aHVtYl9fMkVTWFogaW1nIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuICAuU3RhZmZfZW1wbG95ZXJfX21ldGFfXzNUdENnIHtcXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1nYXApICogNCkgMCAwIDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vU3RhZmYubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi8uLi8uLi9zdHlsZXMvdmlld3BvcnQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFLRTtFQUNFLGdDQUFnQyxFQUFBO0VDRmxDO0lEQ0E7TUFJSSxnQ0FBZ0MsRUFBQSxFQUVuQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLCtCQUErQixFQUFBOztBQUdqQztFQUNFLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IsbUNBQW1DLEVBQUE7RUNuQnJDO0lEZ0JBO01BTUksVUFBVSxFQUFBLEVBRWI7O0FBR0g7RUFDRSxnQkFBZ0IsRUFBQTtFQU1oQjtJQUNFLGtCQUFrQixFQUFBO0lBRG5CO01BSUcsV0FBVztNQUNYLGNBQWM7TUFDZCxvQkFBb0IsRUFBQTtJQU52QjtNQVVHLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCLEVBQUE7RUFJckI7SUFDRSxtQ0FBbUMsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gICAgICBAaW1wb3J0IFxcXCIuL3N0eWxlcy92aWV3cG9ydC5zY3NzXFxcIjtcXG4gICAgICBAaW1wb3J0IFxcXCIuL3N0eWxlcy9taXhpbnMuc2Nzc1xcXCI7XFxuICAgIFxcbi5zdGFmZiB7XFxuICAmX19pbm5lciB7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ2FwKSAqIDE2KSAwO1xcbiAgICBcXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcXG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWdhcCkgKiAyMCkgMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDAgY2FsYyh2YXIoLS1nYXApICogLTQpO1xcbiAgfVxcblxcbiAgJl9faXRlbSB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBhZGRpbmc6IDAgY2FsYyh2YXIoLS1nYXApICogNCk7XFxuICAgIG1hcmdpbjogMCAwIGNhbGModmFyKC0tZ2FwKSAqIDEyKSAwO1xcblxcbiAgICBAaW5jbHVkZSB0YWJsZXQge1xcbiAgICAgIHdpZHRoOiAyNSU7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmVtcGxveWVyIHtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuXFxuICAmX19pbm5lciB7XFxuXFxuICB9XFxuXFxuICAmX190aHVtYiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgJjo6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMjAlO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgfVxcbiAgfVxcblxcbiAgJl9fbWV0YSB7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tZ2FwKSAqIDQpIDAgMCAwO1xcbiAgfVxcbn1cIixcIiR0YWJsZXQtdmlld3BvcnQ6IDc2OHB4O1xcbiRkZXNrdG9wLXZpZXdwb3J0OiA5OTJweDtcXG5cXG5AbWl4aW4gdGFibGV0IHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdGFibGV0LXZpZXdwb3J0KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdGFibGV0LW1heCB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogJHRhYmxldC12aWV3cG9ydCAtIDFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGRlc2t0b3Age1xcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRkZXNrdG9wLXZpZXdwb3J0KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZGVza3RvcC1tYXgge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRkZXNrdG9wLXZpZXdwb3J0IC0gMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzdGFmZl9faW5uZXJcIjogXCJTdGFmZl9zdGFmZl9faW5uZXJfXzM2Y1RwXCIsXG5cdFwic3RhZmZfX2xpc3RcIjogXCJTdGFmZl9zdGFmZl9fbGlzdF9fMkd0dTlcIixcblx0XCJzdGFmZl9faXRlbVwiOiBcIlN0YWZmX3N0YWZmX19pdGVtX18xWUExTFwiLFxuXHRcImVtcGxveWVyXCI6IFwiU3RhZmZfZW1wbG95ZXJfXzMwYWF1XCIsXG5cdFwiZW1wbG95ZXJfX3RodW1iXCI6IFwiU3RhZmZfZW1wbG95ZXJfX3RodW1iX18yRVNYWlwiLFxuXHRcImVtcGxveWVyX19tZXRhXCI6IFwiU3RhZmZfZW1wbG95ZXJfX21ldGFfXzNUdENnXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./views/Team/sections/Staff/Staff.module.scss\n");

/***/ })

});