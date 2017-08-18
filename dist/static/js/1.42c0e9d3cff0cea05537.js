webpackJsonp([1],{

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(615)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(505),
  /* template */
  __webpack_require__(588),
  /* scopeId */
  "data-v-b14e7ca2",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 504:
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

/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			name: 'root',
			hostUrl: '/VR'
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
		}
	}
});

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminHeader_vue__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adminHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__adminHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue__);
//
//
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
		vHead: __WEBPACK_IMPORTED_MODULE_0__adminHeader_vue___default.a,
		vSidebar: __WEBPACK_IMPORTED_MODULE_1__adminSidebar_vue___default.a
	},
	mounted() {
		console.log("home active");
		// console.log(sessionStorage.getItem('ms_type'));
		// var sessionType = sessionStorage.getItem('ms_type')
		// if(sessionType != 1){
		//     this.$router.push('/nologin');
		// }
	}

});

/***/ }),

/***/ 506:
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
			items: [
			// {
			//     icon: 'el-icon-menu',
			//     index: '/admin/administrator',
			//     title: '用户管理'
			// },

			{
				icon: 'el-icon-menu',
				index: '/admin/news-management',
				title: '新闻模块管理',
				subs: [{
					index: '/admin/news-management/list',
					title: '新闻列表'
				}, {
					index: '/admin/news-management/2',
					title: '待定'
				}]
			}, {
				icon: 'el-icon-menu',
				index: '111',
				title: '产品模块管理'
			}, {
				icon: 'el-icon-menu',
				index: '111',
				title: '论坛模块管理'
			}, {
				icon: 'el-icon-menu',
				index: '111',
				title: '百科模块管理'
			}, {
				icon: 'el-icon-menu',
				index: '111',
				title: '评价模块管理'
			}, {
				icon: 'el-icon-menu',
				index: '111',
				title: '媒体自评测模块管理'
			}]
		};
	},
	computed: {
		onRoutes() {
			return this.$route.path;
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			var self = this;
			console.log(key, keyPath);
			self.$router.push(key);
		}
	}
});

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".sidebar[data-v-6213133c]{display:block;position:absolute;width:250px;left:-5px;top:70px;bottom:0;background:#3241f}.sidebar>ul[data-v-6213133c]{height:100%}", ""]);

// exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".header[data-v-98decb46]{position:relative;box-sizing:border-box;width:100%;height:70px;font-size:22px;line-height:70px;color:#fff}.header .logo[data-v-98decb46]{float:left;width:400px;text-align:center}.user-info[data-v-98decb46]{float:right;padding-right:50px;font-size:16px;color:#fff}.user-info .el-dropdown-link[data-v-98decb46]{position:relative;display:inline-block;padding-left:50px;color:#fff;cursor:pointer;vertical-align:middle}.user-info .user-logo[data-v-98decb46]{position:absolute;left:0;top:15px;width:40px;height:40px;border-radius:50%}.el-dropdown-menu__item[data-v-98decb46]{text-align:center}", ""]);

// exports


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(82)(undefined);
// imports


// module
exports.push([module.i, ".content[data-v-b14e7ca2]{background:#dfe6ec}", ""]);

// exports


/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(613)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(504),
  /* template */
  __webpack_require__(586),
  /* scopeId */
  "data-v-98decb46",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(605)

var Component = __webpack_require__(185)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(578),
  /* scopeId */
  "data-v-6213133c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar"
  }, [_c('el-menu', {
    staticClass: "el-menu-vertical-demo",
    attrs: {
      "default-active": _vm.onRoutes,
      "theme": "dark",
      "unique-opened": "",
      "router": ""
    },
    on: {
      "select": _vm.handleSelect
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
      }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(subItem.title) + "\n\t\t\t\t\t")])
    })], 2)] : [_c('el-menu-item', {
      attrs: {
        "index": item.index
      }
    }, [_c('i', {
      class: item.icon
    }), _vm._v(_vm._s(item.title) + "\n\t\t\t\t")])]]
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 586:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "logo"
  }, [_vm._v("虚拟现实产品质量评估平台(管理员)")])])
}]}

/***/ }),

/***/ 588:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('v-head'), _vm._v(" "), _c('v-sidebar'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('transition', {
    attrs: {
      "name": "move",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(545);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("edbba0be", content, true);

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(553);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("5bebcd79", content, true);

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(555);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(186)("52e0f7eb", content, true);

/***/ })

});