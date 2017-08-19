webpackJsonp([9],{

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(618)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(528),
  /* template */
  __webpack_require__(591),
  /* scopeId */
  "data-v-d2a5d5fe",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 528:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			activeIndex: '1-1',
			hostURL: '/VR',
			newsList: [],
			pageNum: [[1, 1, 1, 1, 1], 1, 1],
			curCategory: 0,
			time: [new Date(2000, 10, 10, 10, 10, 0), new Date(2000, 10, 11, 10, 10, 0)],
			loading: false
		};
	},
	computed: {
		ok: function () {
			return this.$route.path == '/admin/news-management/list';
		},
		able() {
			if (this.activeIndex == '3') return false;else return true;
		},
		crawler() {
			if (this.activeIndex == '2') return true;else return false;
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			var self = this;
			console.log(key, keyPath);
			self.activeIndex = key;
			switch (key) {
				case '1-1':
					self.curCategory = 0;
					self.getNews(self.pageNum[0][0], self.curCategory, 1);
					break;
				case '1-2':
					self.curCategory = 1;
					self.getNews(self.pageNum[0][1], self.curCategory, 1);
					break;
				case '1-3':
					self.curCategory = 2;
					self.getNews(self.pageNum[0][2], self.curCategory, 1);
					break;
				case '1-4':
					self.curCategory = 3;
					self.getNews(self.pageNum[0][3], self.curCategory, 1);
					break;
				case '1-5':
					self.curCategory = 4;
					self.getNews(self.pageNum[0][4], self.curCategory, 1);
					break;
				case '2':
					self.getNews(self.pageNum[1], 0, 0);
					break;
				case '3':
					self.getNews(self.pageNum[2], 0, 2);
					break;
				default:
					break;
			}
		},
		getNews(str, category, flag) {
			var self = this;
			self.newsList = [];
			self.$axios({
				url: '/news_list/' + str + '/' + category + '/' + flag,
				method: 'get',
				baseURL: self.hostURL
			}).then(response => {
				self.newsList = [];
				self.newsList = response.data;
				console.log(self.newsList);
			}).catch(error => {
				self.$message({
					type: 'info',
					message: 'connect fail'
				});
			});
		},
		handleCurrentChange(e) {
			var self = this;
			console.log(e);
			switch (self.activeIndex) {
				case '1-1':
					self.getNews(e, self.curCategory, 1);
					break;
				case '1-2':
					self.getNews(e, self.curCategory, 1);
					break;
				case '1-3':
					self.getNews(e, self.curCategory, 1);
					break;
				case '1-4':
					self.getNews(e, self.curCategory, 1);
					break;
				case '1-5':
					self.getNews(e, self.curCategory, 1);
					break;
				case '2':
					self.getNews(e, 0, 0);
					break;
				case '3':
					self.getNews(e, 0, 2);
					break;
				default:
					break;
			}
		},
		newsClick(news) {
			var self = this;
			console.log(news);
			self.$router.push('/admin/news?' + news.id); //要改
		},
		newsEdit(news) {
			var self = this;
			console.log(news);
			self.$router.push('/admin/newsEdit?' + news.id);
		},
		newsDelete(id) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$axios({
					url: '/deleteNews/' + id,
					method: 'get',
					baseURL: this.hostURL
				}).then(response => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
					var self = this;
					switch (this.activeIndex) {
						case '1-1':
							self.curCategory = 0;
							self.getNews(self.pageNum[0][0], self.curCategory, 1);
							break;
						case '1-2':
							self.curCategory = 1;
							self.getNews(self.pageNum[0][1], self.curCategory, 1);
							break;
						case '1-3':
							self.curCategory = 2;
							self.getNews(self.pageNum[0][2], self.curCategory, 1);
							break;
						case '1-4':
							self.curCategory = 3;
							self.getNews(self.pageNum[0][3], self.curCategory, 1);
							break;
						case '1-5':
							self.curCategory = 4;
							self.getNews(self.pageNum[0][4], self.curCategory, 1);
							break;
						case '2':
							self.getNews(self.pageNum[1], 0, 0);
							break;
						case '3':
							self.getNews(self.pageNum[2], 0, 2);
							break;
						default:
							break;
					}
				}).catch(error => {
					console.log(error);
				});
			}).catch(() => {
				this.$message({
					type: 'info',
					message: '已取消删除'
				});
			});
		},
		search() {
			var foo = this.time;
			var d1 = this.parseDate(foo[0]);
			var d2 = this.parseDate(foo[1]);
			var push = 1;
			if (this.activeIndex == '2') push = 0;
			this.$axios.post(this.hostURL + '/getNewsByRange', {
				from: d1,
				to: d2,
				category: this.curCategory,
				is_push: push
			}).then(response => {
				this.newsList = [];
				this.newsList = response.data;
			}).then(error => {
				console.log(error);
			});
		},
		parseDate(myDate) {
			var str = myDate.getFullYear() + '-';
			str += (myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : myDate.getMonth() + 1) + '-';
			str += (myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()) + ' ';
			str += (myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()) + ':';
			str += (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()) + ':';
			str += myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds();
			return str;
		},
		startCrawling() {
			this.loading = true;
			this.$axios({
				url: '/news/crawler',
				method: 'get',
				baseURL: this.hostURL
			}).then(response => {
				this.loading = false;
				this.$message({
					type: 'info',
					message: 'succeed'
				});
				this.pageNum[1] = 0;
				this.getNews(this.pageNum[1], 0, 0);
			}).then(error => {
				this.loading = false;
				console.log(error);
				this.$message({
					type: 'info',
					message: 'connect fail'
				});
			});
		}
	},
	mounted() {
		var self = this;
		self.getNews(self.pageNum[0][0], self.curCategory, 1);
	}
});

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, "ul[data-v-d2a5d5fe]{list-style:none;display:block;-webkit-margin-before:1em;-webkit-margin-after:1em;-webkit-margin-start:0;-webkit-margin-end:0;-webkit-padding-start:40px;position:relative}li[data-v-d2a5d5fe]{list-style-type:none;padding-bottom:10px;border-bottom:1px solid #ccc}a[data-v-d2a5d5fe],a[data-v-d2a5d5fe]:hover,a[data-v-d2a5d5fe]:visited{text-decoration:none}.news-list[data-v-d2a5d5fe]{margin-top:5em}.text[data-v-d2a5d5fe]{font-size:15px}.news-item[data-v-d2a5d5fe]{height:124px;margin-bottom:24px;overflow:hidden}.news-list .news-item .link-tit[data-v-d2a5d5fe]{color:#e9c06c}.news-list .news-item img[data-v-d2a5d5fe]{display:block;float:left;margin-right:20px;width:200px}.news-list .news-item .news-title[data-v-d2a5d5fe]{display:block;font-size:22px;font-weight:lighter;color:#3e3e3e;line-height:50px;height:50px;overflow:hidden;width:70%;margin-right:0}.news-list .news-desc[data-v-d2a5d5fe]{display:block;height:60px;overflow:hidden;font-size:14px;color:#898989;line-height:1.5}#group[data-v-d2a5d5fe]{float:right;padding-bottom:100px}.search[data-v-d2a5d5fe]{position:absolute;width:20%;left:71%;top:1.3%}.btn-search[data-v-d2a5d5fe]{position:absolute;left:94%;top:1.3%}.crawler[data-v-d2a5d5fe]{position:absolute;left:64%;top:1.3%}", ""]);

// exports


/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-menu', {
    staticClass: "el-menu-demo",
    attrs: {
      "default-active": _vm.activeIndex,
      "mode": "horizontal"
    },
    on: {
      "select": _vm.handleSelect
    }
  }, [(_vm.ok) ? [_c('el-submenu', {
    attrs: {
      "index": "1"
    },
    on: {
      "select": _vm.handleSelect
    }
  }, [_c('template', {
    slot: "title"
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("已发布")])]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-1"
    }
  }, [_vm._v("全部")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-2"
    }
  }, [_vm._v("VR行业")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-3"
    }
  }, [_vm._v("VR设备")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-4"
    }
  }, [_vm._v("VR应用")]), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "1-5"
    }
  }, [_vm._v("VR人物")])], 2), _vm._v(" "), _c('el-menu-item', {
    attrs: {
      "index": "2"
    }
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("待审核")])]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.crawler),
      expression: "crawler"
    }],
    staticClass: "crawler",
    attrs: {
      "type": "primary",
      "loading": _vm.loading
    },
    on: {
      "click": function($event) {
        _vm.startCrawling()
      }
    }
  }, [_vm._v("爬取新闻")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.able),
      expression: "able"
    }],
    staticClass: "block search"
  }, [_c('el-date-picker', {
    attrs: {
      "type": "datetimerange",
      "placeholder": "选择时间范围"
    },
    model: {
      value: (_vm.time),
      callback: function($$v) {
        _vm.time = $$v
      },
      expression: "time"
    }
  })], 1), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.able),
      expression: "able"
    }],
    staticClass: "btn-search",
    attrs: {
      "type": "primary",
      "icon": "search"
    },
    on: {
      "click": function($event) {
        _vm.search()
      }
    }
  }, [_vm._v("搜索")]), _vm._v(" "), _c('ul', {
    staticClass: "news-list"
  }, _vm._l((_vm.newsList), function(news) {
    return _c('li', {
      staticClass: "news-item"
    }, [_c('a', {
      staticClass: "link-tit",
      attrs: {
        "href": "javascript:void(0);",
        "title": ""
      }
    }, [_c('img', {
      attrs: {
        "src": news.pic_location
      },
      on: {
        "click": function($event) {
          _vm.newsClick(news)
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "news-title",
      on: {
        "click": function($event) {
          _vm.newsClick(news)
        }
      }
    }, [_vm._v(_vm._s(news.title))]), _vm._v(" "), _c('el-button-group', {
      attrs: {
        "id": "group"
      }
    }, [_c('el-button', {
      attrs: {
        "type": "info",
        "size": "small",
        "icon": "edit"
      },
      on: {
        "click": function($event) {
          _vm.newsEdit(news)
        }
      }
    }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "danger",
        "size": "small",
        "icon": "delete"
      },
      on: {
        "click": function($event) {
          _vm.newsDelete(news.id)
        }
      }
    }, [_vm._v("删除")])], 1), _vm._v(" "), _c('span', {
      staticClass: "news-desc"
    }, [_vm._v(_vm._s(news.news_abstract))])], 1)])
  })), _vm._v(" "), (_vm.activeIndex == '1-1') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[0][0],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum[0],
          $$idx = 0;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[0][0] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.activeIndex == '1-2') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[0][1],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum[0],
          $$idx = 1;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[0][1] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.activeIndex == '1-3') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[0][2],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum[0],
          $$idx = 2;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[0][2] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.activeIndex == '1-4') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[0][3],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum[0],
          $$idx = 3;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[0][3] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.activeIndex == '1-5') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[0][4],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum[0],
          $$idx = 4;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[0][4] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.activeIndex == '2') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[1],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum,
          $$idx = 1;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[1] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.activeIndex == '3') ? _c('div', {
    staticClass: "pagination"
  }, [_c('el-pagination', {
    attrs: {
      "id": "change",
      "currentPage": _vm.pageNum[2],
      "layout": "prev, next"
    },
    on: {
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function($event) {
        var $$exp = _vm.pageNum,
          $$idx = 2;
        if (!Array.isArray($$exp)) {
          _vm.pageNum[2] = $event
        } else {
          $$exp.splice($$idx, 1, $event)
        }
      }
    }
  })], 1) : _vm._e()] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(558);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("4e96155a", content, true);

/***/ })

});