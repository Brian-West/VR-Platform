<!-- 判断是在哪个path下 -->
<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		<template v-if="ok">
			<el-submenu index="1" @select="handleSelect">
				<template slot="title"><span class="text">已发布</span></template>
				<el-menu-item index="1-1">全部</el-menu-item>
				<el-menu-item index="1-2">VR行业</el-menu-item>
				<el-menu-item index="1-3">VR设备</el-menu-item>
				<el-menu-item index="1-4">VR应用</el-menu-item>
				<el-menu-item index="1-5">VR人物</el-menu-item>
			</el-submenu>
			<el-menu-item index="2"><span class="text">待审核</span></el-menu-item>
			<el-menu-item index="3"><span class="text">已删除</span></el-menu-item>
			<div class="block search">
			    	<el-date-picker v-model="time" type="datetimerange" placeholder="选择时间范围"></el-date-picker>
			</div>
			<el-button class="btn-search" type="primary" icon="search" @click="search()">搜索</el-button>
			<ul class="news-list">
				<li class="news-item" v-for="news in newsList">
					<a href="javascript:void(0);" class="link-tit" title="">
			      	             <img :src="news.pic_location" @click="newsClick(news)">
			      	             <span class="news-title" @click="newsClick(news)">{{news.title}}</span>
			      	             <el-button-group id="group" >
			      	             		<el-button type="info" size="small" icon="edit" @click="newsEdit(news)">编辑</el-button>
			      	             		<el-button type="danger" size="small" icon="delete" @click="newsDelete(news.id)">删除</el-button>
			      	             </el-button-group>
			      	             <span class="news-desc">{{news.news_abstract}}</span>
			      		</a>
				</li>
			</ul>
			<div class="pagination" v-if="activeIndex=='1-1'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[0][0]" layout="prev, next">
				</el-pagination>
			</div>
			<div class="pagination" v-if="activeIndex=='1-2'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[0][1]" layout="prev, next">
				</el-pagination>
			</div>
			<div class="pagination" v-if="activeIndex=='1-3'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[0][2]" layout="prev, next">
				</el-pagination>
			</div>
			<div class="pagination" v-if="activeIndex=='1-4'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[0][3]" layout="prev, next">
				</el-pagination>
			</div>
			<div class="pagination" v-if="activeIndex=='1-5'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[0][4]" layout="prev, next">
				</el-pagination>
			</div>
			<div class="pagination" v-if="activeIndex=='2'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[1]" layout="prev, next">
				</el-pagination>
			</div>
			<div class="pagination" v-if="activeIndex=='3'">
				<el-pagination id="change" @current-change="handleCurrentChange" :currentPage.sync="pageNum[2]" layout="prev, next">
				</el-pagination>
			</div>
		</template>
		<template v-else>
			<div>eeeeeeeeeeeee</div>
		</template>
	</el-menu>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			activeIndex: '1-1',
			hostURL: '/VR',
			newsList: [],
			pageNum: [[1, 1, 1, 1, 1], 1, 1],
			curCategory: 0,
			time: [new Date(2000, 10, 10, 10, 10, 0), new Date(2000, 10, 11, 10, 10, 0)]
		}
	},
	computed: {
		ok: function() {
			return this.$route.path == '/admin/news-management/list';
		}
	},
	methods: {
	      handleSelect(key, keyPath) {
	      		var self = this;
	        	console.log(key, keyPath);
	        	self.activeIndex = key;
	        	switch (key) {
	        		case '1-1':
	        			self.curCategory = 0
	        			self.getNews(self.pageNum[0][0], self.curCategory, 0);
	        			break;
	        		case '1-2':
	        			self.curCategory = 0
	        			self.getNews(self.pageNum[0][1], self.curCategory, 0);
	        			break;
	        		case '1-3':
	        			self.curCategory = 0
	        			self.getNews(self.pageNum[0][2], self.curCategory, 0);
	        			break;
	        		case '1-4':
	        			self.curCategory = 0
	        			self.getNews(self.pageNum[0][3], self.curCategory, 0);
	        			break;
	        		case '1-5':
	        			self.curCategory = 0
	        			self.getNews(self.pageNum[0][4], self.curCategory, 0);
	        			break;
	        		case '2':
	        			self.getNews(self.pageNum[1], 0, 1);
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
	      		if(category != 0) {
	      			str = str + '/' + category;
	      		}
	      		self.$axios({
	      			url: '/news_list/' + str,
	      			method: 'get',
	      			baseURL: 'http://localhost:8080'+self.hostURL
	      		}).then((response) => {
	      			self.newsList = [];
	      			self.newsList = response.data;
	      			console.log(self.newsList);
	      		}).catch((error) => {
	      			self.$message({
	      				type: 'info',
	      				message: 'connect fail'
	      			});
	      		});
	      },
	      handleCurrentChange(e) {
			var self= this;
			console.log(e);
			switch (self.activeIndex) {
	        		case '1-1':
	        			self.getNews(e, self.curCategory, 0);
	        			break;
	        		case '1-2':
	        			self.getNews(e, self.curCategory, 0);
	        			break;
	        		case '1-3':
	        			self.getNews(e, self.curCategory, 0);
	        			break;
	        		case '1-4':
	        			self.getNews(e, self.curCategory, 0);
	        			break;
				case '1-5':
	        			self.getNews(e, self.curCategory, 0);
	        			break;
	        		case '2':
	        			self.getNews(e, 0, 1);
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
			self.$router.push('/admin/news?' + news.id);//要改
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
					baseURL: 'http://localhost:8080'+this.hostURL
				}).then((response) => {
					this.$message({
			   			type: 'success',
			   			message: '删除成功!'
			   		})
			   		var self = this
			   		switch (this.activeIndex) {
			   			case '1-1':
			   				self.curCategory = 0
			   				self.getNews(self.pageNum[0][0], self.curCategory, 0);
			   				break;
			   			case '1-2':
			   				self.curCategory = 0
			   				self.getNews(self.pageNum[0][1], self.curCategory, 0);
			   				break;
			   			case '1-3':
			   				self.curCategory = 0
			   				self.getNews(self.pageNum[0][2], self.curCategory, 0);
			   				break;
			   			case '1-4':
			   				self.curCategory = 0
			   				self.getNews(self.pageNum[0][3], self.curCategory, 0);
			   				break;
			   			case '1-5':
			   				self.curCategory = 0
			   				self.getNews(self.pageNum[0][4], self.curCategory, 0);
			   				break;
			   			case '2':
			   				self.getNews(self.pageNum[1], 0, 1);
			   				break;
			   			case '3':
			   				self.getNews(self.pageNum[2], 0, 2);
			   				break;
			   			default:
			   				break;
			   		}
				}).catch((error) => {
					console.log(error);
				})
			}).catch(() => {
			  	this.$message({
			    		type: 'info',
			   		message: '已取消删除'
				});          
			});
		},
		search() {
			var foo = this.time
			var d1 = this.parseDate(foo[0])
			var d2 = this.parseDate(foo[1])
			this.$axios.post('http://localhost:8080' + this.hostURL + '/getNewsByRange', {
				from: d1,
				to: d2
			}).then((response) => {
				this.newsList = []
				this.newsList = response.data
			}).then((error) => {
				console.log(error)
			})
		},
		parseDate(myDate) {
			var str = myDate.getFullYear() + '-'
			str += (myDate.getMonth() < 9 ? '0' + (myDate.getMonth()+1) : (myDate.getMonth()+1)) + '-'
			str += (myDate.getDate() < 10 ? '0' + myDate.getDate()  : myDate.getDate()) + ' '
			str += (myDate.getHours() < 10 ? '0' + myDate.getHours()  : myDate.getHours()) + ':'
			str += (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()) + ':'
			str += (myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds())
			return str;
		}
	},
	mounted() {
		var self = this;
		self.getNews(self.pageNum[0][0], self.curCategory, 0);
	}
}
</script>

<style type="text/css" scoped>
ul {
	list-style: none;
	display: block;
	-webkit-margin-before: 1em;
	-webkit-margin-after: 1em;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
	-webkit-padding-start: 40px;
	position: relative;
}

li {
	list-style-type: none;
	padding-bottom: 10px;
	border-bottom: 1px solid #ccc;
}

a {
	text-decoration: none;
}

a:hover,
a:visited {
	text-decoration: none;
}

.news-list {
	margin-top: 5em;
}
.text {
	font-size: 15px;
}

.news-item {
	height: 124px;
	margin-bottom: 24px;
	overflow: hidden;
}

.news-list .news-item .link-tit {
	color: #e9c06c;
}

.news-list .news-item img {
	display: block;
	float: left;
	margin-right: 20px;
	width: 200px;
}

.news-list .news-item .news-title {
	display: block;
	font-size: 22px;
	font-weight: lighter;
	color: #3e3e3e;
	line-height: 50px;
	height: 50px;
	overflow: hidden;
	width: 70%;
	margin-right: 0px;
}

.news-list .news-desc {
	display: block;
	height: 60px;
	overflow: hidden;
	font-size: 14px;
	color: #898989;
	line-height: 1.5;
}

#group {
	float: right;
	padding-bottom: 100px;
}

.search {
	position: absolute;
	width: 20%;
	left: 71%;
	top: 1.3%;
}
.btn-search {
	position: absolute;
	left: 94%;
	top: 1.3%;
}
</style>