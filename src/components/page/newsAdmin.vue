<template>
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
	</div>
</template>

<script type="text/javascript">
export default {
	data() {
		return {
			hostURL: "/VR",
			newsData: {}
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
		}
	},
	mounted() {
		var self = this;
		var arr = location.href.split('?');
		var news_id = arr[1];
		self.getNewsData(news_id);
	}
}
</script>

<style type="text/css" scoped>
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
</style>