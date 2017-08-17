webpackJsonp([10],{

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(592)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(527),
  /* template */
  __webpack_require__(564),
  /* scopeId */
  "data-v-07f5f870",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 527:
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
			newsData: {},
			id: '',
			form: {
				title: '',
				desc: '',
				source: '',
				category: '',
				content: ''
			},
			rules: {
				category: [{ required: true, message: '请选择新闻的分类！', trigger: 'change' }],
				title: [{ required: true, message: '请填写新闻的标题！', trigger: 'blur' }],
				desc: [{ required: true, message: '请填写新闻的摘要！', trigger: 'blur' }],
				content: [{ required: true, message: '请填写新闻的内容！', trigger: 'blur' }]
			}
		};
	},
	computed: {
		category() {
			if (this.newsData.tag == null) return '全部';
			//待续
		}
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
				self.form.title = self.newsData.title;
				self.form.desc = self.newsData.news_abstract;
				self.form.source = self.newsData.source;
				self.form.date = self.newsData.last_edit_time;
				self.form.category = ''; //待定
				self.form.content = self.newsData.content;
			}).catch(error => {
				console.log(error);
			});
		},
		onSubmit(form) {
			this.$refs[form].validate(valid => {
				if (valid) {
					alert('submit!');
					var myDate = new Date();
					var str = this.parseDate(myDate);
					this.$axios.post('http://localhost:8080' + this.hostURL + '/updateNews/' + this.id, {
						id: this.id,
						tag: this.form.category,
						title: this.form.title,
						last_edit_time: "发布时间：" + str,
						source: this.form.source,
						news_abstract: this.form.desc,
						content: this.form.content
					}).then(response => {
						this.$router.push('/admin/news-management/list');
					}).then(error => {
						console.log(error);
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		cancel() {
			this.$router.push('/admin/news-management/list');
		},
		parseDate(myDate) {
			var str = myDate.getFullYear() + '-';
			str += (myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
			str += (myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()) + ' ';
			str += (myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()) + ':';
			str += (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()) + ':';
			str += myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds();
			return str;
		}
	},
	mounted() {
		var self = this;
		var arr = location.href.split('?');
		var news_id = arr[1];
		self.id = news_id;
		self.getNewsData(news_id);
	}
});

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-07f5f870]{text-decoration:none}.bread[data-v-07f5f870]{font-size:16px}.news-box[data-v-07f5f870]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-07f5f870]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-07f5f870]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-07f5f870]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-07f5f870]{color:#666}.article p[data-v-07f5f870]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-07f5f870]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-07f5f870]{text-align:center}.btn[data-v-07f5f870]{display:block;padding-left:500px}.news-comment[data-v-07f5f870]{margin-top:20px;text-align:center}", ""]);

// exports


/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', {
    attrs: {
      "to": "/admin/news-management/list"
    }
  }, [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" "), _c('span', {
    staticClass: "bread"
  }, [_vm._v("新闻列表")])]), _vm._v(" "), _c('el-breadcrumb-item', [_c('span', {
    staticClass: "bread"
  }, [_vm._v(_vm._s(_vm.category))])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "news-box"
  }, [_c('el-form', {
    ref: "form",
    attrs: {
      "model": _vm.form,
      "rules": _vm.rules,
      "label-width": "80px",
      "labelPosition": "right"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "新闻标题",
      "prop": "title"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.title),
      callback: function($$v) {
        _vm.form.title = $$v
      },
      expression: "form.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新闻摘要",
      "prop": "desc"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.desc),
      callback: function($$v) {
        _vm.form.desc = $$v
      },
      expression: "form.desc"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新闻来源"
    }
  }, [_c('el-input', {
    model: {
      value: (_vm.form.source),
      callback: function($$v) {
        _vm.form.source = $$v
      },
      expression: "form.source"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新闻分类",
      "prop": "category"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.form.category),
      callback: function($$v) {
        _vm.form.category = $$v
      },
      expression: "form.category"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "VR行业"
    }
  }, [_vm._v("VR行业")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "VR设备"
    }
  }, [_vm._v("VR设备")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "VR应用"
    }
  }, [_vm._v("VR应用")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "VR人物"
    }
  }, [_vm._v("VR人物")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "新闻内容",
      "prop": "content"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.form.content),
      callback: function($$v) {
        _vm.form.content = $$v
      },
      expression: "form.content"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片"
    }
  }, [_c('div', {
    staticClass: "news-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.newsData.pic_location
    }
  })])]), _vm._v(" "), _c('el-form-item', {
    staticClass: "btn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.onSubmit('form')
      }
    }
  }, [_vm._v("确认发布")]), _vm._v(" "), _c('el-button', {
    on: {
      "click": function($event) {
        _vm.cancel()
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("df2e8abc", content, true);

/***/ })

});