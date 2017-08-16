<template>
	<div class="news-box">
		<el-form ref="form" :model="form" :rules="rules" label-width="80px" labelPosition="right">
			<el-form-item label="新闻标题" prop="title">
				<el-input v-model="form.title"></el-input>
			</el-form-item>
			<el-form-item label="新闻摘要" prop="desc">
				<el-input v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item label="新闻来源">
				<el-input v-model="form.source"></el-input>
			</el-form-item>
			<el-form-item label="新闻分类" prop="category">
				<el-radio-group v-model="form.category">
					<el-radio label="VR行业">VR行业</el-radio>
					<el-radio label="VR设备">VR设备</el-radio>
					<el-radio label="VR应用">VR应用</el-radio>
					<el-radio label="VR人物">VR人物</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="新闻内容" prop="content">
				<el-input type="textarea" v-model="form.content"></el-input>
			</el-form-item>
			<el-form-item label="图片">
				<div class="news-img">
				<img :src="newsData.pic_location">
			</div>
			</el-form-item>
			
			<el-form-item class="btn">
				<el-button type="primary" @click="onSubmit('form')">确认发布</el-button>
				<el-button @click="cancel()">取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script type="text/javascript">
export default {
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
				category: [
					{required: true, message: '请选择新闻的分类！', trigger: 'change'}
				],
				title: [
					{required: true, message: '请填写新闻的标题！', trigger: 'blur'},
				],
				desc: [
					{required: true, message: '请填写新闻的摘要！', trigger: 'blur'},
				],
				content: [
					{required: true, message: '请填写新闻的内容！', trigger: 'blur'},
				]
			}
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
			}).then((response) => {
				self.newsData = response.data;
				self.form.title = self.newsData.title
				self.form.desc = self.newsData.news_abstract
				self.form.source = self.newsData.source
				self.form.date = self.newsData.last_edit_time
				self.form.category = ''//待定
				self.form.content = self.newsData.content
			}).catch((error) => {
				console.log(error);
			});
		},
		onSubmit(form) {
			this.$refs[form].validate((valid) => {
			      if (valid) {
			        	alert('submit!');
			        	var myDate = new Date()
			        	var str = this.parseDate(myDate)
			        	this.$axios.post('http://localhost:8080'+this.hostURL+'/updateNews/'+this.id, {
						id: this.id,
						tag: this.form.category,
						title: this.form.title,
						last_edit_time: "发布时间：" + str,
						source: this.form.source,
						news_abstract: this.form.desc,
						content: this.form.content
			        	}).then((response) => {
						this.$router.push('/admin/news-management/list')
			        	}).then((error) => {
			        		console.log(error)
			        	})
			      } else {
			        	console.log('error submit!!');
			       	return false;
			      }
			});
		},
		cancel() {
			this.$router.push('/admin/news-management/list')
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
		var arr = location.href.split('?');
		var news_id = arr[1];
		self.id = news_id;
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

.btn {
	display: block;
	padding-left: 500px;
}

.news-comment {
	margin-top: 20px;
	text-align: center;
}
</style>