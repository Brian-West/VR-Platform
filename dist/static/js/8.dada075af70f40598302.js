webpackJsonp([8],{

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(603)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(529),
  /* template */
  __webpack_require__(576),
  /* scopeId */
  "data-v-448a622d",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			message: "您没有登录，",
			tip: "点击此处登录"
		};
	}

});

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".message[data-v-448a622d]{position:absolute;top:0;width:100%;height:100%;background-color:#324157;text-align:center;color:#fff}h1[data-v-448a622d]{display:block;margin-top:20%;font-weight:400}.message a[data-v-448a622d]{color:#20a0ff}", ""]);

// exports


/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message"
  }, [_c('h1', [_vm._v(_vm._s(_vm.message)), _c('a', {
    attrs: {
      "href": "#/login"
    }
  }, [_vm._v(_vm._s(_vm.tip))])])])
},staticRenderFns: []}

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(543);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("59b85d12", content, true);

/***/ })

});