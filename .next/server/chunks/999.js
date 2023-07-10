"use strict";
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 9009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1527);
/* harmony import */ var disqus_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(disqus_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3532);




const Comments = ({ title , slug  })=>{
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "block py-20 text-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Spinner__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(disqus_react__WEBPACK_IMPORTED_MODULE_2__.DiscussionEmbed, {
        shortname: process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME,
        config: {
            url: process.env.NEXT_PUBLIC_SITE_URL,
            identifier: slug,
            title: title
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comments);


/***/ }),

/***/ 3532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Spinner = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "spinner relative inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-white border-opacity-20",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "relative z-20 text-sm uppercase tracking-wider",
                children: "Loading"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute z-10 h-full w-full animate-spin rounded-full border-l-2 border-t-2 border-white border-opacity-50 bg-grey-lighten"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);


/***/ }),

/***/ 4571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TR": () => (/* reexport */ utils_Logo),
  "ej": () => (/* reexport */ utils_PortfolioFilters),
  "OT": () => (/* reexport */ utils_SectionHeading),
  "$j": () => (/* reexport */ Spinner/* default */.Z)
});

// UNUSED EXPORTS: Comments

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/utils/Logo.jsx


const Logo = ({ url ="/" , text =false  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: url,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "sitelogo py-2",
            children: text ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-4xl font-bold uppercase leading-none text-primary",
                children: "Bieber"
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: "h-8 max-h-full w-auto",
                    src: "/images/logo.png",
                    alt: "Bieber"
                })
            })
        })
    });
};
/* harmony default export */ const utils_Logo = (Logo);

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/fetchers/index.js + 1 modules
var fetchers = __webpack_require__(8579);
;// CONCATENATED MODULE: ./src/components/utils/PortfolioFilters.jsx



const PortfolioFilters = ({ currentFilter , filterHandler  })=>{
    const { data  } = (0,external_react_query_.useQuery)("portfolio-filters", fetchers/* getPortfolioFilters */.ez);
    if (!data) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "portfolio-filters flex flex-wrap justify-center gap-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: `btn btn-small ${currentFilter === "" ? "" : "btn-transparent"}`,
                onClick: ()=>filterHandler("")
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: "All"
                })
            }),
            data?.map((filter)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: `btn btn-small ${currentFilter === filter.value ? "before:invisible" : "btn-transparent"}`,
                    onClick: ()=>filterHandler(filter.value)
                    ,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: filter.title
                    })
                }, filter.id)
            )
        ]
    });
};
/* harmony default export */ const utils_PortfolioFilters = (PortfolioFilters);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__(7446);
;// CONCATENATED MODULE: ./src/components/utils/SectionHeading.jsx


const SectionHeading = ({ title , watermark , animated =true  })=>{
    const parallax = (0,external_react_scroll_parallax_.useParallax)({
        translateX: animated ? [
            -200,
            200
        ] : null,
        easing: "easeInOut"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "section-heading relative overflow-hidden pb-14 text-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: "relative z-10 mb-2 uppercase",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary bg-opacity-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-primary"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                ref: parallax.ref,
                className: "pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading opacity-5",
                children: watermark
            })
        ]
    });
};
/* harmony default export */ const utils_SectionHeading = (SectionHeading);

// EXTERNAL MODULE: ./src/components/utils/Spinner.jsx
var Spinner = __webpack_require__(3532);
// EXTERNAL MODULE: ./src/components/utils/Comments.jsx
var Comments = __webpack_require__(9009);
;// CONCATENATED MODULE: ./src/components/utils/index.js








/***/ }),

/***/ 8579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Vf": () => (/* binding */ getClientReviews),
  "s0": () => (/* binding */ getEducationBackground),
  "H9": () => (/* binding */ getInformation),
  "Ry": () => (/* binding */ getJobExperience),
  "UU": () => (/* binding */ getLanguageskills),
  "ez": () => (/* binding */ getPortfolioFilters),
  "r3": () => (/* binding */ getPortfolios),
  "U2": () => (/* binding */ getServices),
  "QM": () => (/* binding */ getTechskills)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/fetchers/http.js

const http = external_axios_default().create({
    baseURL: "http://localhost:3000/api",
    headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
        "Content-Type": "application/json"
    }
});


;// CONCATENATED MODULE: ./src/fetchers/index.js

const getInformation = async ()=>{
    let res = await http.get(`/information.json`);
    return res.data;
};
const getServices = async ()=>{
    let res = await http.get(`/services.json`);
    return res.data;
};
const getTechskills = async ()=>{
    let res = await http.get(`/techskills.json`);
    return res.data;
};
const getLanguageskills = async ()=>{
    let res = await http.get(`/languageskills.json`);
    return res.data;
};
const getPortfolioFilters = async ()=>{
    let res = await http.get(`/portfoliofilters.json`);
    return res.data;
};
const getPortfolios = async ()=>{
    let res = await http.get(`/portfolios.json`);
    return res.data;
};
const getJobExperience = async ()=>{
    let res = await http.get(`/jobexperience.json`);
    return res.data;
};
const getEducationBackground = async ()=>{
    let res = await http.get(`/educationbackground.json`);
    return res.data;
};
const getClientReviews = async ()=>{
    let res = await http.get(`/clientsreview.json`);
    return res.data;
};



/***/ }),

/***/ 4646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XI": () => (/* binding */ imageLoader),
/* harmony export */   "f8": () => (/* binding */ shimmer),
/* harmony export */   "s3": () => (/* binding */ toBase64)
/* harmony export */ });
const shimmer = (w, h)=>`
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="g">
            <stop stop-color="#ededed" offset="20%" />
            <stop stop-color="#e5e5e5" offset="50%" />
            <stop stop-color="#dadada" offset="70%" />
        </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#1a2c38" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" fill-opacity="0.1" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`
;
const toBase64 = (str)=> true ? Buffer.from(str).toString("base64") : 0
;
const imageLoader = (src)=>{
    return src;
};


/***/ })

};
;