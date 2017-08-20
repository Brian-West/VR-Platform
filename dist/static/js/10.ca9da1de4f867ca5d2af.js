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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			hostURL: "/VR",
			newsData: {
				id: 3,
				tag: null,
				title: "痛失手机江山的联想，想要在VR热潮中分一杯羹",
				path: "D:\\VR新闻爬虫\\test2",
				last_edit_time: "发布时间：2017-06-11 12:13:35",
				source: "来源：POPPUR",
				upvote: null,
				downvote: null,
				editor_id: null,
				author: "作者：",
				news_abstract: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只",
				content: "在很多人眼里，联想手机似乎是一个比较“玄学”的存在。在PC领域拼搏多年，联想终于打进智能手机市场。只可惜初出茅庐的联想并没有什么经验，无奈在苹果和小米的拉锯战中成为了炮灰。虽然联想在2014年收购了手机界骨灰级元老摩托罗拉，但这条路始终还是没有想象中的那么好走。先是苹果傲视群雄，后来OPPO、vivo崛起，势单力薄的联想手机想要站稳脚跟还是有点难的。根据此前的消息，联想手机业务分支品牌ZUK已经暂停运营了。痛失手机江山之后，联想将落脚点放在了潜力巨大的虚拟现实领域。去年10月，联想与微软进行了合作，未来两者将会在混合现实领域(包括增强现实和虚拟现实)共同谋求发展，开辟新天地。随后联想也很快推出了一款主打入门的混合现实头显，斩获了不少用户的好评。而在最近的CES亚洲展上，联想还推出了首款背包VR PC——Avalon  VR。这款PC外观设计精致，虽然采用了金属机身的设计，但整机的重量也仅有2.5kg(包括电池)。配置方面，Avalon  VR最高支持英特尔酷睿i7处理器，32GB DDR4内存以及512GB PCI-E固态硬盘，同时内置AMD Radeon  RX480/580独立显卡，足以轻松应对市面上所有VR游戏。此外，该电脑还采用了双电池设计，并且支持热插拔，官方称其普通模式下的续航时间可达10小时，即使是在高性能下进行VR体验也能坚持1.5小时。而为了帮助主机散热，该机还配备了水冷散热系统，出风口也设置在了背对背部的位置，避免热风吹向人体。根据联想的介绍，之后张艺谋VR体验店会全线采用Avalon  VR背包电脑，可见联想在VR界的地位还是值得被肯定的。而随着与微软的合作更加深入之后，未来联想还会在增强现实乃至混合现实界混出一片天地。不知道未来的PC市场究竟会变成怎样呢?真是越来越期待了呀。Via：POPPUR",
				pic_location: "http://www.vrrb.cn/d/file/kuaixun/2017-06-11/74ba6748a8a88ed7b083e961a7ff9da4.jpg",
				is_push: null
			},
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
			if (this.newsData.tag == '1') return 'VR行业';
			if (this.newsData.tag == '2') return 'VR设备';
			if (this.newsData.tag == '3') return 'VR应用';
			if (this.newsData.tag == '4') return 'VR人物';
			if (this.newsData.tag == '5') return '上市新品';
			if (this.newsData.tag == '6') return '现场快报';
			if (this.newsData.tag == '7') return '精彩文章';
		}
	},
	methods: {
		getNewsData(id) {
			var self = this;
			self.newsData = {};
			self.$axios({
				url: '/news/' + id,
				method: 'get',
				baseURL: self.hostURL
			}).then(response => {
				self.newsData = response.data;
				self.form.title = self.newsData.title;
				self.form.desc = self.newsData.news_abstract;
				self.form.source = self.newsData.source;
				self.form.date = self.newsData.last_edit_time;
				self.form.category = self.newsData.tag;
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
					this.$axios.post(this.hostURL + '/updateNews/' + this.newsData.id, {
						id: this.newsData.id,
						tag: this.form.category,
						title: this.form.title,
						last_edit_time: "发布时间：" + str,
						source: this.form.source,
						news_abstract: this.form.desc,
						content: this.form.content,
						author: this.newsData.author,
						is_push: 1,
						path: this.newsData.path,
						editor_id: this.newsData.editor_id,
						upvote: this.newsData.upvote,
						downvote: this.newsData.downvote,
						pic_location: this.newsData.pic_location
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
      "label": "1"
    }
  }, [_vm._v("VR行业")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "2"
    }
  }, [_vm._v("VR设备")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "3"
    }
  }, [_vm._v("VR应用")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "4"
    }
  }, [_vm._v("VR人物")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "5"
    }
  }, [_vm._v("上市新品")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "6"
    }
  }, [_vm._v("现场快报")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "7"
    }
  }, [_vm._v("精彩文章")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
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