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
			activeName2: 'first',
			hostURL: "/VR",
			newsData: {},
			successType: "success",
			cancelType: "primary",

			display_hot: false,
			display_new: false,
			hot_data: {
				hot_comments: [{
					id: 1,
					user: {
						id: 1,
						nickname: null
					},
					message: "1",
					upvote: 2,
					belong: "8",
					releasetime: null,
					messageResponses: [{
						user: {
							id: 10,
							nickname: null
						},
						messageResponse: "555",
						releasetime: null
					}],
					state: 0
				}]
			},
			new_data: {
				new_comments: [{
					id: 2,
					user: {
						id: 2,
						nickname: null
					},
					message: "2",
					upvote: 3,
					belong: "4",
					releasetime: null,
					messageResponses: [{
						user: {
							id: 11,
							nickname: null
						},
						messageResponse: "5555",
						releasetime: null
					}],
					state: 0
				}]
			},
			hot_reply: {
				replys: [{
					appear: 0,
					textarea: ""
				}]
			},
			new_reply: {
				replys: [{
					appear: 0,
					textarea: ""
				}]
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
				self.getHotComments();
				self.getNewComments();
			}).catch(error => {
				console.log(error);
			});
		},
		/*获得评论*/
		//1.获得热评
		getHotComments() {
			var self = this;
			self.hot_data = {
				hot_comments: [{
					id: "",
					user: {
						id: "",
						nickname: null
					},
					message: "",
					upvote: "",
					belong: "",
					releasetime: null,
					messageResponses: [{
						user: {
							id: "",
							nickname: null
						},
						messageResponse: "",
						releasetime: null
					}],
					state: 0
				}]
			};
			self.hot_reply = {
				replys: [{
					appear: 0,
					textarea: ""
				}]
			};
			self.$axios({
				url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=' + self.newsData.id + '&condition=hot',
				method: 'get',
				baseURL: self.hostURL
				// data:{
				// condition:"hot",
				// belong:localStorage.getItem("salesModel")
				// }
			}).then(response => {
				console.log("resp id:" + response.data[0].id);
				console.log("self id:" + self.hot_data.hot_comments[0].id);
				self.display_hot = true;
				self.hot_data.hot_comments = response.data;
				self.hot_data.hot_comments.reverse();
				console.log("self id:" + self.hot_data.hot_comments[0].id);
				var len = self.hot_data.hot_comments.length;
				self.hot_reply.replys = [];
				for (var i = 0; i < len; i++) self.hot_reply.replys.push({
					appear: 0,
					textarea: ""
				});
			}).catch(error => {
				console.log(error);
			});
		},
		//2.获得最新评论
		getNewComments() {
			var self = this;
			self.new_data = {
				new_comments: [{
					id: "",
					user: {
						id: "",
						nickname: null
					},
					message: "",
					upvote: "",
					belong: "",
					releasetime: null,
					messageResponses: [{
						user: {
							id: "",
							nickname: null
						},
						messageResponse: "",
						releasetime: null
					}],
					state: 0
				}]
			};
			self.new_reply = {
				replys: [{
					appear: 0,
					textarea: ""
				}]
			};
			self.$axios({
				url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=' + self.newsData.id + '&condition=time',
				method: 'get',
				baseURL: self.hostURL
				// data:{
				// condition:"time",
				// belong:localStorage.getItem("salesModel")
				// }
			}).then(response => {
				console.log("resp id:" + response.data[0].id);
				console.log("self id:" + self.new_data.new_comments[0].id);
				self.display_new = true;
				self.new_data.new_comments = response.data;
				self.new_data.new_comments.reverse();
				console.log("self id:" + self.new_data.new_comments[0].id);
				var len = self.new_data.new_comments.length;
				self.new_reply.replys = [];
				for (var i = 0; i < len; i++) self.new_reply.replys.push({
					appear: 0,
					textarea: ""
				});
			}).catch(error => {
				console.log(error);
			});
		},
		//获取新闻点赞数
		//getNewsUpvote() {
		//	var self = this;
		//	self.$axios({
		//		url: '/news/getUpvote/' + self.newsData.id,// + localStorage.getItem('ms_userid'),
		//		method: 'post',
		//		baseURL: self.hostURL,
		//		//data: {
		//		//	belong: localStorage.getItem("salesModel")
		//		//}
		//	}).then((response) => {
		//		self.newsData.upvote = response.data;
		//	}).catch((error) => {
		//		console.log(error);
		//	});
		//},
		newsEdit(id) {
			this.$router.push('/admin/newsEdit?' + id);
		}
	},
	mounted() {
		var self = this;
		var arr = location.href.split('?');
		var news_id = arr[1];
		self.getNewsData(news_id);
		//self.getNewsUpvote();
	}
});

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-107af9fe]{text-decoration:none}.bread[data-v-107af9fe]{font-size:16px}.news-box[data-v-107af9fe]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-107af9fe]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-107af9fe]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-107af9fe]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-107af9fe]{color:#666}.article p[data-v-107af9fe]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-107af9fe]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-107af9fe]{text-align:center}.news-comment[data-v-107af9fe]{margin-top:20px;text-align:center}.comment[data-v-107af9fe]{margin:20px;width:100%}.my-comment[data-v-107af9fe]{float:left;width:80%}.comment-btn[data-v-107af9fe]{margin-left:10px}.comment-content[data-v-107af9fe]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name[data-v-107af9fe]{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply[data-v-107af9fe]{width:70%}.user-comment[data-v-107af9fe]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-107af9fe]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-107af9fe]{display:flex}.reply-name[data-v-107af9fe]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-107af9fe]{float:right;width:80%}.sub-reply-content[data-v-107af9fe]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-107af9fe]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-107af9fe]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-107af9fe]{flex:1;padding:10px}.comment-content-btn[data-v-107af9fe],.reply-btn[data-v-107af9fe]{width:100%}", ""]);

// exports


/***/ }),

/***/ 567:
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
  }, [_c('p', [_vm._v("\n\t\t\t\t" + _vm._s(_vm.newsData.content) + "\n\t\t\t")])]), _vm._v(" "), _c('div', {
    staticClass: "news-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.newsData.pic_location
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "news-comment"
  }, [_c('el-button-group', {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('el-button', {
    attrs: {
      "icon": "circle-check",
      "size": "small"
    }
  }, [_vm._v("赞" + _vm._s(_vm.newsData.upvote))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small"
    }
  }, [_vm._v("踩" + _vm._s(_vm.newsData.downvote)), _c('i', {
    staticClass: "el-icon-circle-cross el-icon--right"
  })])], 1), _vm._v(" "), _c('el-tabs', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "type": "card"
    },
    model: {
      value: (_vm.activeName2),
      callback: function($$v) {
        _vm.activeName2 = $$v
      },
      expression: "activeName2"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "最热评论",
      "name": "first"
    }
  }, _vm._l((_vm.hot_data.hot_comments), function(hot, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.display_hot),
        expression: "display_hot"
      }],
      staticClass: "comment-content"
    }, [_c('p', {
      staticClass: "user-name"
    }, [_vm._v(_vm._s(hot.user.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(hot.message))]), _vm._v(" "), _c('el-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.hot_reply.replys[index].appear),
        expression: "hot_reply.replys[index].appear"
      }],
      staticStyle: {
        "{padding": "0 5px"
      },
      attrs: {
        "type": "textarea",
        "placeholder": "回复评论",
        "resize": "none"
      },
      model: {
        value: (_vm.hot_reply.replys[index].textarea),
        callback: function($$v) {
          _vm.hot_reply.replys[index].textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
        },
        expression: "hot_reply.replys[index].textarea"
      }
    }), _vm._v(" "), _vm._l((hot.messageResponses), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.user.nickname) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.messageResponse))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(reply.releasetime))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": hot.state == 1 ? _vm.successType : _vm.cancelType
      }
    }, [_vm._v("赞" + _vm._s(hot.upvote))])], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(hot.releasetime))])])])
  })), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "最新评论",
      "name": "second"
    }
  }, _vm._l((_vm.new_data.new_comments), function(new_, index) {
    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.display_new),
        expression: "display_new"
      }],
      staticClass: "comment-content"
    }, [_c('p', {
      staticClass: "user-name"
    }, [_vm._v(_vm._s(new_.user.nickname))]), _vm._v(" "), _c('div', {
      staticClass: "comment-reply"
    }, [_c('p', {
      staticClass: "user-comment"
    }, [_vm._v(_vm._s(new_.message))]), _vm._v(" "), _c('el-input', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.new_reply.replys[index].appear),
        expression: "new_reply.replys[index].appear"
      }],
      staticStyle: {
        "{padding": "0 5px"
      },
      attrs: {
        "type": "textarea",
        "placeholder": "回复评论",
        "resize": "none"
      },
      model: {
        value: (_vm.new_reply.replys[index].textarea),
        callback: function($$v) {
          _vm.new_reply.replys[index].textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
        },
        expression: "new_reply.replys[index].textarea"
      }
    }), _vm._v(" "), _vm._l((new_.messageResponses), function(reply) {
      return _c('div', {
        staticClass: "reply-container"
      }, [_c('div', {
        staticClass: "sub-reply-content"
      }, [_c('p', {
        staticClass: "reply-name"
      }, [_vm._v(_vm._s(reply.user.nickname) + "：")]), _vm._v(" "), _c('div', {
        staticClass: "reply-content"
      }, [_c('p', {
        staticClass: "sub-reply-content"
      }, [_vm._v(_vm._s(reply.messageResponse))])])]), _vm._v(" "), _c('p', {
        staticClass: "reply-time"
      }, [_vm._v(_vm._s(reply.releasetime))])])
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "comment-right"
    }, [_c('div', {
      staticClass: "comment-content-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "circle-check",
        "size": "small",
        "type": new_.state == 1 ? _vm.successType : _vm.cancelType
      }
    }, [_vm._v("赞" + _vm._s(new_.upvote))])], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(new_.releasetime))])])])
  }))], 1), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "icon": "edit"
    },
    on: {
      "click": function($event) {
        _vm.newsEdit(_vm.newsData.id)
      }
    }
  }, [_vm._v("编辑")])], 1)])])
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