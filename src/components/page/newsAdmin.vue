<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item to="/admin/news-management/list"><i class="el-icon-date"></i> <span class="bread">新闻列表</span></el-breadcrumb-item>
				<el-breadcrumb-item><span class="bread">{{category}}</span></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="news-box">
			<h2 class="news-title">{{newsData.title}}</h2>
			<div class="borderline clearfix">
				<p class="artinfo"><span class="author">{{newsData.source}}</span> {{newsData.last_edit_time}}</p>
			</div>
			<div class="article">
				<p>
					{{newsData.content}}
				</p>
			</div>
			<div class="news-img">
				<img :src="newsData.pic_location">
			</div>
			<div class="news-comment">
				<el-button-group style="margin-bottom:10px">
					<el-button icon="circle-check" size="small">赞{{newsData.upvote}}</el-button>
					<el-button size="small">踩{{newsData.downvote}}<i class="el-icon-circle-cross el-icon--right"></i></el-button>
				</el-button-group>
				<el-tabs v-model="activeName2" type="card" style="width:100%">
					<el-tab-pane label="最热评论" name="first">
						<div class="comment-content" v-for="(hot,index) in hot_data.hot_comments" v-show="display_hot">
							<p class="user-name">{{hot.user.nickname}}</p>
							<div class="comment-reply">
								<p class="user-comment">{{hot.message}}</p>
								<el-input style="{padding: 0 5px;}" v-show="hot_reply.replys[index].appear" type="textarea" placeholder="回复评论" v-model.trim="hot_reply.replys[index].textarea" resize=none>
								</el-input>
								<div class="reply-container" v-for="reply in hot.messageResponses">
									<div class="sub-reply-content">
										<p class="reply-name">{{reply.user.nickname}}：</p>
										<div class="reply-content">
											<p class="sub-reply-content">{{reply.messageResponse}}</p>
										</div>
									</div>
									<p class="reply-time">{{reply.releasetime}}</p>
								</div>
							</div>
							<div class="comment-right">
								<div class="comment-content-btn">
									<el-button type="primary" icon="circle-check" size="small" :type="hot.state==1?successType:cancelType">赞{{hot.upvote}}</el-button>
								</div>
								<p class="comment-time">{{hot.releasetime}}</p>
							</div>
						</div>
					</el-tab-pane>
					<el-tab-pane label="最新评论" name="second">
						<div class="comment-content" v-for="(new_,index) in new_data.new_comments" v-show="display_new">
							<p class="user-name">{{new_.user.nickname}}</p>
							<div class="comment-reply">
								<p class="user-comment">{{new_.message}}</p>
								<el-input style="{padding: 0 5px;}" v-show="new_reply.replys[index].appear" type="textarea" placeholder="回复评论" v-model.trim="new_reply.replys[index].textarea" resize=none>
								</el-input>
								<div class="reply-container" v-for="reply in new_.messageResponses">
									<div class="sub-reply-content">
										<p class="reply-name">{{reply.user.nickname}}：</p>
										<div class="reply-content">
											<p class="sub-reply-content">{{reply.messageResponse}}</p>
										</div>
									</div>
									<p class="reply-time">{{reply.releasetime}}</p>
								</div>
							</div>
							<div class="comment-right">
								<div class="comment-content-btn">
									<el-button type="primary" icon="circle-check" size="small" :type="new_.state==1?successType:cancelType">赞{{new_.upvote}}</el-button>
								</div>
								<p class="comment-time">{{new_.releasetime}}</p>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
				<el-button type="primary" icon="edit" @click="newsEdit(newsData.id)">编辑</el-button>
				<!-- <el-button-group>
					<el-button type="primary" icon="circle-check">赞</el-button>
					<el-button type="primary">踩<i class="el-icon-circle-cross el-icon--right"></i></el-button>
				</el-button-group>
				<el-tabs v-model="activeName2" type="card">
					<el-tab-pane label="最热评论" name="first">最热评论</el-tab-pane>
					<el-tab-pane label="最新评论" name="second">最新评论</el-tab-pane>
				</el-tabs> -->
			</div>
		</div>
	</div>
	
</template>

<script type="text/javascript">
export default {
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
							nickname: null,
						},
						messageResponse: "555",
						releasetime: null
					}],
					state: 0,
				}],
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
							nickname: null,
						},
						messageResponse: "5555",
						releasetime: null
					}],
					state: 0,
				}],
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
		}
	},
	computed: {
		category() {
			if(this.newsData.tag == null) return '全部'
			if(this.newsData.tag =='1') return 'VR行业'
			if(this.newsData.tag =='2') return 'VR设备'
			if(this.newsData.tag =='3') return 'VR应用'
			if(this.newsData.tag =='4') return 'VR人物'
		}
	},
	methods: {
		getNewsData(id) {
			var self = this;
			self.newsData = {};
			self.$axios({
				url: '/news/' + id,
				method: 'get',
				baseURL: 'http://localhost:8080'+self.hostURL
			}).then((response) => {
				self.newsData = response.data;
			}).catch((error) => {
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
							nickname: null,
						},
						messageResponse: "",
						releasetime: null
					}],
					state: 0,
				}]
			};
			self.hot_reply = {
				replys: [{
					appear: 0,
					textarea: ""
				}]
			};
			self.$axios({
				url: '/MessageLeaving/show/' + localStorage.getItem('ms_userid') + '?belong=' + localStorage.getItem("salesModel") + '&condition=hot',
				method: 'get',
				baseURL: self.hostURL,
				// data:{
				// condition:"hot",
				// belong:localStorage.getItem("salesModel")
				// }
			}).then((response) => {
				console.log("resp id:" + response.data[0].id);
				console.log("self id:" + self.hot_data.hot_comments[0].id);
				self.display_hot = true;
				self.hot_data.hot_comments = response.data;
				self.hot_data.hot_comments.reverse();
				console.log("self id:" + self.hot_data.hot_comments[0].id);
				var len = self.hot_data.hot_comments.length;
				self.hot_reply.replys = [];
				for (var i = 0; i < len; i++)
					self.hot_reply.replys.push({
						appear: 0,
						textarea: ""
					});
			}).catch((error) => {
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
							nickname: null,
						},
						messageResponse: "",
						releasetime: null
					}],
					state: 0,
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
				baseURL: self.hostURL,
				// data:{
				// condition:"time",
				// belong:localStorage.getItem("salesModel")
				// }
			}).then((response) => {
				console.log("resp id:" + response.data[0].id);
				console.log("self id:" + self.new_data.new_comments[0].id);
				self.display_new = true;
				self.new_data.new_comments = response.data;
				self.new_data.new_comments.reverse();
				console.log("self id:" + self.new_data.new_comments[0].id);
				var len = self.new_data.new_comments.length;
				self.new_reply.replys = [];
				for (var i = 0; i < len; i++)
					self.new_reply.replys.push({
						appear: 0,
						textarea: ""
					});
			}).catch((error) => {
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
		self.getHotComments();
		self.getNewComments();
	}
}
</script>

<style type="text/css" scoped>
.crumbs {
	text-decoration: none;
}

.bread {
	font-size: 16px;
}

.news-box {
	padding: 28px;
	width: 800px;
	border: 1px solid #E1E1E1;
	box-shadow: 0 0 2px rgba(0, 0, 0, .1);
}

.news-title {
	font-size: 22px;
	color: #287D7C;
	line-height: 50px;
	font-weight: normal;
	display: block;
}
.borderline {
	border-bottom: 1px dotted #BFBFBF;
}

.artinfo {
	float: left;
	padding-bottom: 5px;
	color: #999;
	margin: 0;
	padding: 0;
	display: block;
}

.author {
	color: #666;
}

.article p {
	padding: 30px 0 50px;
	font-size: 18px;
	color: #333;
	line-height: 200%;
	text-indent: 2em;
}

.article {
	display: inline-block;
	line-height: 26px;
	padding-bottom: 25px;
}

.news-img {
	text-align: center;
}

.news-comment {
	margin-top: 20px;
	text-align: center;
}

.comment {
	margin: 20px;
	width: 100%;
}

.my-comment {
	float: left;
	width: 80%;
}

.comment-btn {
	margin-left: 10px;
}

.comment-content {
	display: flex;
	width: 100%;
	padding: 15px 5px 5px 5px;
	border-bottom: 1px solid #DDDDDD;
}

.user-name {
	font-size: 15px;
	color: #666666;
	width: 15%;
	text-align: left;
}

.comment-reply {
	/*flex:1;*/
	width: 70%;
}

.user-comment {
	font-size: 17px;
	text-align: left;
	/*font-weight: lighter; */
	width: 100%;
	padding-bottom: 15px;
}

.reply-container {
	/*background:#DDDDDD;*/
	width: 80%;
	margin: 10px 0 0 50px;
	/*padding: 10px 5px 15px 20px;*/
	border-bottom: 1px solid #DDDDDD;
}

.sub-reply-content {
	width: 100%;
	display: flex;
}

.reply-name {
	color: #20A0FF;
	font-size: 13px;
	text-align: right;
	flex: 1;
}

.reply-content {
	float: right;
	width: 80%;
	/*margin-left: -20%;*/
	/*overflow: hidden;*/
}

.sub-reply-content {
	font-size: 13px;
	text-align: left;
	width: 100%;
}

.reply-time {
	color: #666666;
	width: 100%;
	text-align: right;
	font-size: 10px;
	padding: 5px 0;
}

.comment-time {
	/*position: relative;*/
	color: #666666;
	font-size: 10px;
	width: 100%;
	text-align: left;
	margin-top: 10px;
	/*bottom: 0;*/
}

.comment-right {
	/*text-align: left;*/
	/*width: 15%;*/
	flex: 1;
	padding: 10px;
}

.comment-content-btn {
	width: 100%;
}

.reply-btn {
	width: 100%;
}
</style>