webpackJsonp([2],{

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(508),
  /* template */
  __webpack_require__(565),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 507:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			name: 'root',
			hostUrl: '/VR',
			items: [{
				icon: 'el-icon-menu',
				index: '0',
				title: '产品中心',
				subs: [{
					index: '/user/product-list',
					title: '产品列表'
				}]
			}, {
				icon: 'el-icon-menu',
				index: '1',
				title: '产品对比',
				subs: [{
					index: '',
					title: '查看对比'
				}]
			}, {
				icon: 'el-icon-menu',
				index: '2',
				title: 'VR资讯',
				subs: [{
					index: '/user/news-list',
					title: '新闻资讯'
				}, {
					index: '1',
					title: '可以拓展'
				}]
			}, {
				icon: 'el-icon-menu',
				index: '3',
				title: '满意度调查',
				subs: [{
					index: '/user/questionaire',
					title: '问卷填写'
				}]
			}, {
				icon: 'el-icon-setting',
				index: '4',
				title: '个人信息管理',
				subs: [{
					index: '/user/change-nick',
					title: '修改昵称'
				}, {
					index: '/user/change-password',
					title: '修改密码'
				}]
			}],
			onRoutes: '/user/news-list'
		};
	},
	computed: {
		username() {
			let username = localStorage.getItem('ms_username');
			return username ? username : this.name;
		}
	},
	methods: {
		handleCommand(command) {
			if (command == 'loginout') {
				this.$axios({
					url: '/user/logoff',
					method: 'get',
					baseURL: this.hostUrl
				}).then(response => {
					localStorage.removeItem('ms_username');
					sessionStorage.clear();
					this.$router.push('/login');
				}).catch(error => {
					localStorage.removeItem('ms_username');
					sessionStorage.clear();
					this.$router.push('/login');
				});
			}
		},
		check(item) {
			if (item.title == '查看对比') {
				var t = JSON.parse(localStorage.getItem('compare_data'));
				if (t.data.length == 0) {
					this.$message("您还没有加入对比的产品");
				} else {
					this.$router.push('/user/product-compare');
				}
			}
		}
	}
});

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userHeader_vue__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__userHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userSidebar_vue__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userSidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__userSidebar_vue__);
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
    components: {
        vHead: __WEBPACK_IMPORTED_MODULE_0__userHeader_vue___default.a
    },
    mounted() {
        console.log("home active");
        // console.log(sessionStorage.getItem('ms_type'));
        // var sessionType = sessionStorage.getItem('ms_type')
        // if(sessionType != 0){
        //     this.$router.push('/nologin');
        // }
    }
});

/***/ }),

/***/ 509:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            hello: "hahahaha",
            items: [{
                icon: 'el-icon-menu',
                index: '1',
                title: 'VR资讯',
                subs: [{
                    index: '/user/news-list',
                    title: '新闻资讯'
                }]
            }, {
                icon: 'el-icon-setting',
                index: '2',
                title: '个人信息管理',
                subs: [{
                    index: '/user/change-nick',
                    title: '修改昵称'
                }, {
                    index: '/user/change-password',
                    title: '修改密码'
                }]
            }]
        };
    },
    computed: {
        onRoutes() {
            // return this.$route.path.replace('/','');
        }
    }
});

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".sidebar[data-v-29d37a32]{display:block;position:absolute;width:250px;left:0;top:70px;bottom:0;background:#2e363f}.sidebar>ul[data-v-29d37a32]{height:100%}", ""]);

// exports


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".header[data-v-396706b2]{position:relative;box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff}.header .logo[data-v-396706b2]{float:left;width:300px;text-align:center}.nav-menu[data-v-396706b2]{float:left;margin-top:10px;line-height:70px}.user-info[data-v-396706b2]{float:right;padding-right:50px;font-size:16px;color:#fff}.user-info .el-dropdown-link[data-v-396706b2]{position:relative;display:inline-block;padding-left:50px;color:#fff;cursor:pointer;vertical-align:middle}.user-info .user-logo[data-v-396706b2]{position:absolute;left:0;top:15px;width:40px;height:40px;border-radius:50%}.el-dropdown-menu__item[data-v-396706b2]{text-align:center}.nav-tab[data-v-396706b2]{font-size:16px}", ""]);

// exports


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(601)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(507),
  /* template */
  __webpack_require__(574),
  /* scopeId */
  "data-v-396706b2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(598)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(509),
  /* template */
  __webpack_require__(571),
  /* scopeId */
  "data-v-29d37a32",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('v-head'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "move",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar"
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.onRoutes,
      "id": "navigator",
      "theme": "dark",
      "unique-opened": "",
      "router": ""
    }
  }, [_vm._l((_vm.items), function(item) {
    return [(item.subs) ? [_c('el-submenu', {
      attrs: {
        "index": item.index
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title))]), _vm._v(" "), _vm._l((item.subs), function(subItem, i) {
      return _c('el-menu-item', {
        key: i,
        attrs: {
          "index": subItem.index
        }
      }, [_vm._v(_vm._s(subItem.title) + "\n                    ")])
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n                ")])]]
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("虚拟现实产品质量评估平台")]), _vm._v(" "), _c('div', {
    staticClass: "nav-menu"
  }, [_c('el-menu', {
    staticClass: "el-menu-demo",
    attrs: {
      "theme": "dark",
      "default-active": _vm.onRoutes,
      "mode": "horizontal",
      "id": "navigator",
      "unique-opened": "",
      "router": ""
    }
  }, [_vm._l((_vm.items), function(item) {
    return [(item.subs) ? [_c('el-submenu', {
      attrs: {
        "index": item.index
      }
    }, [_c('template', {
      slot: "title"
    }, [_c('span', {
      staticClass: "nav-tab"
    }, [_vm._v(_vm._s(item.title))])]), _vm._v(" "), _vm._l((item.subs), function(subItem, i) {
      return _c('el-menu-item', {
        key: i,
        attrs: {
          "index": subItem.index
        },
        on: {
          "click": function($event) {
            _vm.check(subItem)
          }
        }
      }, [_c('span', [_vm._v(_vm._s(subItem.title))])])
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n\t\t\t\t\t\t")])]]
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "user-info"
  }, [_c('el-dropdown', {
    attrs: {
      "trigger": "hover"
    },
    on: {
      "command": _vm.handleCommand
    }
  }, [_c('span', {
    staticClass: "el-dropdown-link"
  }, [_vm._v("\n                    \t\t" + _vm._s(_vm.username) + "\n                \t\t")]), _vm._v(" "), _c('el-dropdown-menu', {
    slot: "dropdown"
  }, [_c('el-dropdown-item', {
    attrs: {
      "command": "loginout"
    }
  }, [_vm._v("注销")])], 1)], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(538);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("0e4d6d74", content, true);

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(541);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("90cd34fa", content, true);

/***/ })

});