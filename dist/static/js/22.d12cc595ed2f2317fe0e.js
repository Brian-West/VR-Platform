webpackJsonp([22],{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(593)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(513),
  /* template */
  __webpack_require__(566),
  /* scopeId */
  "data-v-0f12c484",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 513:
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
	data: function () {
		return {
			activeName2: 'first',
			allowSubmit: true,
			hostURL: "/VR",
			successType: "success",
			cancelType: "primary",
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
			state: 0,
			textarea: "",
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
			if (this.newsData.tag == 1) return 'VR行业';
			if (this.newsData.tag == 2) return 'VR设备';
			if (this.newsData.tag == 2) return 'VR应用';
			if (this.newsData.tag == 2) return 'VR人物';
		}
	},
	methods: {
		codeParsing(code) {
			var msg = (Title, Message) => {
				this.$message({
					title: Title,
					message: Message,
					type: 'error'
				});
			};
			switch (code) {
				case -1:
					msg('系统错误', '未知错误，请上报管理员');
					break;
				case 201:
					msg('输入域错误', '验证码错误');
					break;
				case 300:
					msg('输入域错误', '邮箱或密码错误');
					break;
				case 301:
					msg('权限问题', '用户已禁用，请联系管理员');
					break;
				case 302:
					msg('权限问题', '用户未激活，请去邮箱激活用户');
					break;
				case 303:
					msg('注册问题', '邮箱已占用，请更改邮箱');
					break;
				case 304:
					msg('注册问题', '昵称已占用，请更改昵称');
					break;
				case 400:
					msg('权限问题', '用户未登录，请重新登录');
					break;
				case 401:
					msg('权限问题', '用户无权访问，请联系管理员');
					break;
				case 402:
					msg('操作错误', '删除错误,请刷新重试');
					break;
				case 500:
					msg('系统错误', '未知错误，请上报管理员');
					break;
				case 600:
					msg('TIME_OUT', '访问超时，请检查网络连接');
					break;
				case 700:
					msg('激活错误', '非法激活链接，请联系管理员');
					break;
				case 800:
					msg('激活错误', '用户已被激活，请直接登录');
					break;
				default:
					break;
			}
		},
		getNewsData(id) {
			var self = this;
			self.newsData = {};
			self.$axios({
				url: '/news/' + id,
				method: 'get',
				baseURL: 'http://localhost:8080' + self.hostURL
			}).then(response => {
				self.newsData = response.data;
				console.log(self.state);
			}).catch(error => {
				console.log(error);
			});
		},
		//留言
		postTextArea() {
			var self = this;
			self.$axios({
				url: '/MessageLeaving/' + localStorage.getItem('ms_userid'), //{uid}
				method: 'post',
				baseURL: self.hostURL,
				data: {
					content: self.textarea, //时间在后台取得
					belong: self.newsData.id
				}
			}).catch(error => {
				console.log(error);
			});
		},
		refreshNewData() {
			var self = this;
			var text = self.textarea;
			console.log(text);
			if (text != "") {
				self.$message('评论成功！');
				self.postTextArea();
				self.new_data.new_comments.reverse();
				self.new_data.new_comments.push({
					id: "",
					user: {
						id: "",
						nickname: localStorage.getItem("ms_username")
					},
					message: text,
					upvote: "0",
					belong: "0",
					releasetime: "刚刚",
					messageResponses: [{
						user: {
							id: "",
							nickname: null
						},
						messageResponse: "",
						releasetime: null
					}],
					state: 0
				});
				self.new_data.new_comments.reverse();
				// console.log("self id:"+self.hot_data.hot_comments[0].id);
				var len = self.new_data.new_comments.length;
				self.new_reply.replys = [];
				for (var i = 0; i < len; i++) self.new_reply.replys.push({
					appear: 0,
					textarea: ""
				});
				self.textarea = "";
			}
		},
		//回复-热评
		replyHotClick(item, index) {
			var self = this;
			if (!self.hot_reply.replys[index].appear) {
				self.hot_reply.replys[index].appear = 1;
			} else {
				if (self.hot_reply.replys[index].textarea == '') self.hot_reply.replys[index].appear = 0;else {
					//发送数据给后台：回复内容+评论id
					self.$axios({
						url: '/MessageResponse/' + localStorage.getItem('ms_userid'), //{uid}
						method: 'post',
						baseURL: self.hostURL,
						data: {
							content: self.hot_reply.replys[index].textarea,
							leavingid: item.id
						}
					}).catch(error => {
						console.log(error);
					});
					self.$message('回复成功！');
					self.hot_data.hot_comments[index].messageResponses.push({
						user: {
							id: "",
							nickname: localStorage.getItem('ms_username')
						},
						messageResponse: self.hot_reply.replys[index].textarea,
						releasetime: "刚刚"
					});
					self.hot_reply.replys[index].textarea = '';
					self.hot_reply.replys[index].appear = 0;
				}
			}
		},
		//回复-最新评价
		replyNewClick(item, index) {
			var self = this;
			if (!self.new_reply.replys[index].appear) {
				self.new_reply.replys[index].appear = 1;
			} else {
				if (self.new_reply.replys[index].textarea == '') self.new_reply.replys[index].appear = 0;else {
					//发送数据给后台
					self.$axios({
						url: '/MessageResponse/' + localStorage.getItem('ms_userid'), //{uid}
						method: 'post',
						baseURL: self.hostURL,
						data: {
							content: self.new_reply.replys[index].textarea,
							leavingid: item.id
						}
					}).catch(error => {
						console.log(error);
					});
					self.$message('回复成功！');
					self.new_data.new_comments[index].messageResponses.push({
						user: {
							id: "",
							nickname: localStorage.getItem('ms_username')
						},
						messageResponse: self.new_reply.replys[index].textarea,
						releasetime: "刚刚"
					});
					self.new_reply.replys[index].textarea = '';
					self.new_reply.replys[index].appear = 0;
				}
			}
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
				url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=' + localStorage.getItem("salesModel") + '&condition=time',
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

		//评论点赞（用于后台存储被点赞的评论）
		postCommLike(item, val) {
			var self = this;
			self.$axios({
				url: '/MessageLeaving/upvote/' + localStorage.getItem('ms_userid'),
				method: 'post',
				baseURL: self.hostURL,
				data: {
					id: item.id,
					value: val
				}
			}).catch(error => {
				console.log(error);
			});
		},
		commentLikeClick(item) {
			var self = this;
			self.state = self.state == 1 ? 0 : 1;
			var value = self.state == 1 ? 1 : -1;
			item.upvote += value;
			self.postCommLike(item, value);
		},
		//获取新闻点赞数
		//getNewsUpvote() {
		//	var self = this;
		//	self.$axios({
		//		url: '/news/getUpvote/' + localStorage.getItem('ms_userid'),
		//		method: 'post',
		//		baseURL: self.hostURL,
		//		data: {
		//			belong: self.newsData.id
		//		}
		//	}).then((response) => {
		//		self.newsData.upvote = response.data;
		//	}).catch((error) => {
		//		console.log(error);
		//	});
		//},
		//点赞
		postNewsLike(val) {
			var self = this;
			self.$axios({
				url: '/news/upvote/' + localStorage.getItem('ms_userid'),
				method: 'post',
				baseURL: self.hostURL,
				data: {
					name: self.newsData.id,
					value: val
				}
			}).catch(error => {
				console.log(error);
			});
		},
		newsLikeClick() {
			var self = this;
			self.state = self.state == 1 ? 0 : 1;
			var value = self.state == 1 ? 1 : -1;
			self.newsData.upvote += value;
			console.log(self.state + " " + self.newsData.upvote);
			self.postNewsLike(value);
		},
		//点踩
		postNewsUnlike(val) {
			var self = this;
			self.$axios({
				url: '/news/downvote/' + localStorage.getItem('ms_userid'),
				method: 'post',
				baseURL: self.hostURL,
				data: {
					name: self.newsData.id,
					value: val
				}
			}).catch(error => {
				console.log(error);
			});
		},
		newsUnlikeClick() {
			var self = this;
			self.state = self.state == -1 ? 0 : -1;
			var value = self.state == -1 ? 1 : -1;
			self.newsData.downvote += value;
			console.log(self.state + " " + self.newsData.downvote);
			self.postNewsUnlike(value);
		}
	},
	mounted() {
		var self = this;
		var arr = location.href.split('?');
		var news_id = arr[1];
		console.log(news_id);
		self.getNewsData(news_id);
		//self.getNewsUpvote();
		self.getHotComments();
		self.getNewComments();
	}
});

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".crumbs[data-v-0f12c484]{text-decoration:none}.bread[data-v-0f12c484]{font-size:16px}.form-box[data-v-0f12c484]{width:300px;margin-top:50px;margin-left:0;box-shadow:0 0 8px 0 rgba(232,237,250,.9),0 2px 4px 0 rgba(232,237,250,.9);padding:50px 50px 50px 10px}.submit-btn[data-v-0f12c484]{width:220px;margin-left:80px}.submit-btn button[data-v-0f12c484]{width:100%}.news-box[data-v-0f12c484]{padding:28px;width:800px;border:1px solid #e1e1e1;box-shadow:0 0 2px rgba(0,0,0,.1)}.news-title[data-v-0f12c484]{font-size:22px;color:#287d7c;line-height:50px;font-weight:400;display:block}.borderline[data-v-0f12c484]{border-bottom:1px dotted #bfbfbf}.artinfo[data-v-0f12c484]{float:left;padding-bottom:5px;color:#999;margin:0;padding:0;display:block}.author[data-v-0f12c484]{color:#666}.article p[data-v-0f12c484]{padding:30px 0 50px;font-size:18px;color:#333;line-height:200%;text-indent:2em}.article[data-v-0f12c484]{display:inline-block;line-height:26px;padding-bottom:25px}.news-img[data-v-0f12c484]{text-align:center}.news-comment[data-v-0f12c484]{margin-top:20px;text-align:center}.comment[data-v-0f12c484]{margin:20px;width:100%}.my-comment[data-v-0f12c484]{float:left;width:80%}.comment-btn[data-v-0f12c484]{margin-left:10px}.comment-content[data-v-0f12c484]{display:flex;width:100%;padding:15px 5px 5px;border-bottom:1px solid #ddd}.user-name[data-v-0f12c484]{font-size:15px;color:#666;width:15%;text-align:left}.comment-reply[data-v-0f12c484]{width:70%}.user-comment[data-v-0f12c484]{font-size:17px;text-align:left;width:100%;padding-bottom:15px}.reply-container[data-v-0f12c484]{width:80%;margin:10px 0 0 50px;border-bottom:1px solid #ddd}.sub-reply-content[data-v-0f12c484]{display:flex}.reply-name[data-v-0f12c484]{color:#20a0ff;font-size:13px;text-align:right;flex:1}.reply-content[data-v-0f12c484]{float:right;width:80%}.sub-reply-content[data-v-0f12c484]{font-size:13px;text-align:left;width:100%}.reply-time[data-v-0f12c484]{color:#666;width:100%;text-align:right;font-size:10px;padding:5px 0}.comment-time[data-v-0f12c484]{color:#666;font-size:10px;width:100%;text-align:left;margin-top:10px}.comment-right[data-v-0f12c484]{flex:1;padding:10px}.comment-content-btn[data-v-0f12c484],.reply-btn[data-v-0f12c484]{width:100%}", ""]);

// exports


/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "crumbs"
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" "), _c('span', {
    staticClass: "bread"
  }, [_vm._v("VR资讯")])]), _vm._v(" "), _c('el-breadcrumb-item', {
    attrs: {
      "to": "/user/news-list"
    }
  }, [_c('span', {
    staticClass: "bread"
  }, [_vm._v("新闻资讯")])]), _vm._v(" "), _c('el-breadcrumb-item', [_c('span', {
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
  }, [_c('div', {
    staticClass: "comment"
  }, [_c('div', {
    staticClass: "my-comment"
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 3,
      "placeholder": "请输入您对该新闻的评价",
      "resize": "none"
    },
    model: {
      value: (_vm.textarea),
      callback: function($$v) {
        _vm.textarea = (typeof $$v === 'string' ? $$v.trim() : $$v)
      },
      expression: "textarea"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "comment-btn"
  }, [_c('el-button-group', {
    staticStyle: {
      "margin-bottom": "10px"
    }
  }, [_c('el-button', {
    attrs: {
      "icon": "circle-check",
      "size": "small",
      "disabled": _vm.state == -1 ? true : false,
      "type": _vm.state == 1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.newsLikeClick()
      }
    }
  }, [_vm._v("赞" + _vm._s(_vm.newsData.upvote))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "size": "small",
      "disabled": _vm.state == 1 ? true : false,
      "type": _vm.state == -1 ? _vm.successType : _vm.cancelType
    },
    on: {
      "click": function($event) {
        _vm.newsUnlikeClick()
      }
    }
  }, [_vm._v("踩" + _vm._s(_vm.newsData.downvote)), _c('i', {
    staticClass: "el-icon-circle-cross el-icon--right"
  })])], 1), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.refreshNewData()
      }
    }
  }, [_vm._v("发表评论")])], 1)]), _vm._v(" "), _c('el-tabs', {
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
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(hot)
        }
      }
    }, [_vm._v("赞" + _vm._s(hot.upvote))]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.replyHotClick(hot, index)
        }
      }
    }, [_vm._v("回复")])], 1)], 1), _vm._v(" "), _c('p', {
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
      },
      on: {
        "click": function($event) {
          _vm.commentLikeClick(new_)
        }
      }
    }, [_vm._v("赞" + _vm._s(new_.upvote))]), _vm._v(" "), _c('div', {
      staticClass: "reply-btn"
    }, [_c('el-button', {
      attrs: {
        "type": "text"
      },
      on: {
        "click": function($event) {
          _vm.replyNewClick(new_, index)
        }
      }
    }, [_vm._v("回复")])], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "comment-time"
    }, [_vm._v(_vm._s(new_.releasetime))])])])
  }))], 1)], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(533);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("9a0224a2", content, true);

/***/ })

});