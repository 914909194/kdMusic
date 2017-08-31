<template>
	<div class="reommend">
		<div class="img-container">	
		  <slide :slides="slides" :inv="inv"  :name="transitionName1" :target="target"></slide>
		</div>
		<div class="recommend-item">
			<h4>今日热门</h4>
			<div class="item" v-if="itemShow" @click="playSong(allSongList[3],allSongList[3][7])">
				<img :src="allSongList[3][7].albumpic_big" alt="">
				<h5>{{allSongList[3][7].songname}}</h5>
			</div>
			<div class="item" v-if="itemShow" @click="playSong(allSongList[2],allSongList[2][9])">
				<img :src="allSongList[2][9].albumpic_big" alt="">
				<h5>{{allSongList[2][9].songname}}</h5>
			</div>
			<div class="item" v-if="itemShow" @click="playSong(allSongList[2],allSongList[2][6])">
				<img :src="allSongList[2][6].albumpic_big" alt="">
				<h5>{{allSongList[2][6].songname}}</h5>
			</div>
			<div class="item" v-if="itemShow" @click="playSong(allSongList[2],allSongList[2][5])">
				<img :src="allSongList[2][5].albumpic_big" alt="">
				<h5>{{allSongList[2][5].songname}}</h5>
			</div>
		</div>
		 <songPlay v-if="songplayShow"  :SongfromRecommed="songInfo" @backCompShow="returnRecommed"></songPlay>
    </div>
  
</template>
<script>
import slide from '@/components/slide/slide.vue';
import songPlay from './songPlay';
export default {
	 components: {
	 	slide,
	 	'songPlay':songPlay
	 },
	  data(){
		return{
			allSongList:[],
			songList:[],
			newArr:[],
			iNow :0,
			imgWidth:0,
			imgHeight:0,
			songplayShow:false,
			songInfo:[],
			itemShow:true,
		     charts:[
	    		{
	              chartsId:4
	            },
	             {
	              chartsId:32
	            },
	             {
	              chartsId:26
	            },
	            {
	              chartsId:27
	            },
	             {
	              chartsId:3
	            }
        	],
         slides: [
          {
            src: "http://i.gtimg.cn/music/photo/mid_album_300/W/g/0001iCUt0DzsWg.jpg",
            href: ''
          }
        ],
        inv: 3000,
        styleObject: {
          width: this.imgWidth
        },
        transitionName1: 'move',
        transitionName2: 'fade',
        target: '_self'
      }
		
	  },
	  watch:{
	  	allSongList:function(){
	  		this.rendImg();
	  	}
	  },
	  methods:{
	  	       getNewsList: function (topid) {
                var _this = this;
                var request = require('superagent');
	                	 request('get', 'http://route.showapi.com/213-4').query({
	                    showapi_appid: '34353',
	                    showapi_test_draft: 'false',
	                    topid:topid ,
	                    showapi_timestamp: this.formatterDateTime(),
	                    showapi_sign: '9537e658bc624a06823d3eed6defb08a'

	                }).then(function (res) {
	                    var re = JSON.parse(res.text)
	                    _this.songList = re.showapi_res_body.pagebean.songlist;
	                     _this.allSongList.push(_this.songList )
	                }  )  
            },
            formatterDateTime: function () {
                var date = new Date()
                var month = date.getMonth() + 1
                var datetime = date.getFullYear()
                    + ""// "年"
                    + (month >= 10 ? month : "0" + month)
                    + ""// "月"
                    + (date.getDate() < 10 ? "0" + date.getDate() : date
                            .getDate())
                    + ""
                    + (date.getHours() < 10 ? "0" + date.getHours() : date
                            .getHours())
                    + ""
                    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                            .getMinutes())
                    + ""
                    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                            .getSeconds());
                return datetime;
            },
            rendImg:function(){
            	console.log(this.allSongList);
            	if(this.allSongList.length==5){
	            	  for(var i =0;i<this.allSongList.length;i++){
					     		var obj = {
						 		src:this.allSongList[i][0].albumpic_big,
						 		href:'charts'
						 	}
						 	this.slides.push(obj);
		                }; 
	            }
        	},
        	computedWidth:function(){
        		this.imgWidth = $('.img-container').width();
        		this.imgHeight= $('.img-container').width();
        	},
        	returnRecommed:function(){
        		this.songplayShow = false;
        		this.itemShow = true;
        	},
        	playSong:function(songlist,song){
        		this.songplayShow = true;
        		this.songInfo=[song,songlist];
        		this.itemShow = false;
        	}
	   },
	  mounted:function(){
		  for(var i =0;i<this.charts.length;i++){
		  	this.getNewsList(this.charts[i].chartsId);
		  };
		  var _this = this;
		  // console.log(this.allSongList); 是一个奇怪的空数组
		  //因为这个allSongList的值是在异步函数里改变的所以在mounted里获取它时哪个异步函数还没执行完，所以不能获取到改变后我所需要的信息
		  // 方法2  太笨
		  // setTimeout(function(){
		  // 	 console.log(_this.allSongList);
		  // },1300)
		 //方法1 改变它的格式
		  // var str = JSON.stringify(this.allSongList);
		  // var newArr = JSON.parse(str)
		  //方法3 promise
		  // var promise = new Promise(function(resolve,reject){
		  // 	 for(var i =0;i<_this.charts.length;i++){
		  // 	_this.getNewsList(_this.charts[i].chartsId);
		  // };
		  // 	resolve(_this.allSongList);
		  // })
		  // promise.then(function(data){
		  // 	console.log(data);
		  // })
		 //方法4 最终 watch！！
	  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-container{
	margin:0;
}
.recommend-item h4{
	margin: 10px  10px 0 10px ;
}
.recommend-item div{
	width: 45%;
	margin:2%;
	display: inline-block;
}
.recommend-item div img{
	width: 100%;
}
/*@import '../assets/css/img.css';*/
</style>
