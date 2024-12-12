"use strict";
exports.id = 911;
exports.ids = [911];
exports.modules = {

/***/ 4904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4189);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
const formatClass=classes=>classes.length>0?classes.join(' '):undefined;const CustomLink=({buttonStyle,children,className,nav,outline,to,...props})=>{const classes=className?[className]:[];if(nav){classes.push('link_nav');}if(buttonStyle){classes.push('link_button');}if(outline){classes.push('link_outline');}if(to.startsWith('/')&&/\.[0-9a-z]+$/i.test(to)){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",Object.assign({className:formatClass(classes),href:(0,gatsby__WEBPACK_IMPORTED_MODULE_1__.withPrefix)(to)},props),children);}if(to.startsWith('/')){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,Object.assign({className:formatClass(classes),to:to},props),children);}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",Object.assign({className:formatClass(classes),href:to},props),children);};CustomLink.defaultProps={buttonStyle:false,className:'',nav:false,outline:false};CustomLink.propTypes={buttonStyle:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),className:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),children:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),nav:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),outline:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),to:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);

/***/ }),

/***/ 3785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4189);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
function SEO({description,lang,meta,title}){const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("4123507481");const{defaultDescription,defaultTitle,siteUrl}=site.siteMetadata;const seo={description:description||defaultDescription,title:title||defaultTitle,url:siteUrl};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang},title:seo.title,titleTemplate:`%s | ${defaultTitle}`,meta:[{name:'description',content:seo.description},{property:'og:title',content:seo.title},{property:'og:description',content:seo.description},{property:'og:type',content:'website'},{property:'og:url',content:seo.url},{property:'twitter:title',content:seo.title},{property:'twitter:description',content:seo.description}].concat(meta)});}SEO.defaultProps={lang:'en',meta:[],description:''};SEO.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ 1105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4189);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_link_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4904);
/* harmony import */ var _components_seo_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3785);
const NotFoundPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_seo_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{description:"Page not found",title:"404"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"missing"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"The page you were looking for could not be found."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_link_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{className:"missing__link",nav:true,to:"/"},"Home")));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-index-js.js.map