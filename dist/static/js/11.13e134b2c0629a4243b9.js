webpackJsonp([11],{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(594)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(526),
  /* template */
  __webpack_require__(567),
  /* scopeId */
  "data-v-107af9fe",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			hostURL: "/VR",
			newsData: {}
		};
	},
	methods: {
		getNewsData(id) {
			var self = this;
			self.newsData = {};
			self.$axios({
				url: '/news/' + id,
				method: 'get',
				baseURL: 'http://localhost:8080' + self.hostURL
			}).then(response => {
				self.newsData = response.data;
			}).catch(error => {
				console.log(error);
			});
		}
	},
	mounted() {
		var self = this;
		var arr = location.href.split('?');
		var news_id = arr[1];
		self.getNewsData(news_id);
	}
});

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".news-box[data-v-107af9fe]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-107af9fe]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-107af9fe]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-107af9fe]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-107af9fe]{color:#666}.article p[data-v-107af9fe]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-107af9fe]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-107af9fe]{text-align:center}.news-comment[data-v-107af9fe]{margin-top:20px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news-box"
  }, [_c('h2', {
    staticClass: "news-title"
  }, [_vm._v(_vm._s(_vm.newsData.title))]), _vm._v(" "), _c('div', {
    staticClass: "borderline clearfix"
  }, [_c('p', {
    staticClass: "artinfo"
  }, [_c('span', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.newsData.source))]), _vm._v(" " + _vm._s(_vm.newsData.last_edit_time))])]), _vm._v(" "), _c('div', {
    staticClass: "article"
  }, [_c('p', [_vm._v("\n\t\t\t" + _vm._s(_vm.newsData.content) + "\n\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "news-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.newsData.pic_location
    }
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(534);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("4e3c11ff", content, true);

/***/ })

});