<template>
  <div class="search">
    <div class="search-bar">
     <span @click="cancle()">取消</span>
       <div class="search-content">
         <img src="static/img/search.png" @click="searchSong" alt="">
         <input type="text" placeholder="搜索歌曲" v-model="searchContent" @keyup.enter="searchSong">
       </div>
    </div>
     <ul class="search-result">
         <li  v-for="content in contentlist" @click="playSong(content,contentlist)">
           <img src="static/img/music2.png" alt="">
           <div>
              <h6>{{content.songname}}</h6>
              <p>{{content.singername}}</p>
           </div>
         </li>
      </ul>
      <img src="static/img/loading_icon.gif" alt="" class="loading">
     <div class="release-loading" v-show="releaseShow">上拉加载</div>
      <songPlay v-if="songplayShow" :SongfromSearch="songInfo"  @backCompShow="returnSearch"></songPlay>
  </div>
</template>

<script>
import songPlay from './songPlay';
export default {
    data(){
        return{
          searchContent:"",
          contentlist:[],
          songplayShow:false,
          songInfo:[],
          page:1,
          searchresultWidth:0,
          releaseShow:false,
          loadingShow:false,
          loadState:false,
        }
    },
    components:{
      'songPlay':songPlay
    },
    watch:{
      loadState:function(){
        console.log(this.loadState);
        if(this.loadState==false){
           $('.loading').css({"display":"none"});
           $('.release-loading').html('上拉加载');
           $('.release-loading').height("40").css({"display":"block"});

        }
      }
    },
    methods:{
    getNewsList:function(keyword){
      var _this = this;
      var request = require('superagent');
      request('get','https://route.showapi.com/213-1').query({
          keyword:keyword,
          page:this.page,
          showapi_appid:'34353',
          showapi_test_draft:'false',
          showapi_timestamp:this.formatterDateTime(),
          showapi_sign:'9537e658bc624a06823d3eed6defb08a'
      }).then(function(res){
            var re = JSON.parse(res.text);
            var searchResult=re.showapi_res_body.pagebean.contentlist; 
         
            for(var i =0;i<searchResult.length;i++){
                _this.contentlist.push(searchResult[i]);
            }
           
             _this.releaseShow = true;
             _this.loadState = false; 
      });
    },
    formatterDateTime:function () {
      var date=new Date()
      var month=date.getMonth() + 1
          var datetime = date.getFullYear()
                  + ""// "年"
                  + (month >= 10 ? month : "0"+ month)
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
      cancle:function(){
         this.contentlist = [];
      },
      searchSong:function(){
          this.getNewsList(this.searchContent);

      },
      playSong:function(content,contentlist){
        this.songplayShow = true;
        this.songInfo = [content,contentlist];
        this.contentlist=[];
      },
      returnSearch:function(){
          this.songplayShow = false;
      },
      loadData:function(){
        var _this = this;
        var startY =0;
         var endY =0
        $('.search-result').on("touchstart",function(){
            var touch = event.targetTouches[0];
           startY = touch.pageY;
           _this.loadState = true;

        });
           $('.search-result').on("touchmove",function(){
            var touch = event.targetTouches[0];

               endY = touch.pageY;
              if(endY - startY>=-100){
                $('.release-loading').css({"height":"+=2"});
                $('.release-loading').html('松开加载更多');

              }
             
          });
         $('.search-result').on("touchend",function(){
                     $('.release-loading').css({"display":"none"});
                      $('.loading').css({"display":"block"});
                      _this.page = _this.page+1;
                       console.log(_this.page);
                      _this.getNewsList(_this.searchContent);
                      $(this).on('touchstart',null);
                       $(this).on('touchmove',null);
        });

      }
  },
  mounted:function(){
      this.loadData();
  }

 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar{
  width: 100%;
  height:60px;
  background: #f4f4f4;
  padding: 10px;
}
.search-content{
  width: 315px;
  height: 36px;
  background: #fff;
}
.search-content input{
  margin: 8px ;
  border: none;
  float: right;
  width: 250px;
}
.search-content input:focus{
  outline: none;
}
.search-content img{
  width: 18px;
  height: 18px;
  margin:9px;
}
.search-bar span{
  width: 40px;
  height: 36px;
  float: right;
  line-height: 36px;
  text-align: center;
}
.search-result h6{ 
  display: inline;
  font-size: 16px;
}
.search-result img{
  margin: -10px 20px;

}
.search-result div{
  display: inline-block;
  margin-top: 10px;
}
.search-result p{
  font-size: 14px;
}
.loading{
  width: 40%;
  display: block;
  margin: 0 auto;
  display: none;
  background: #ccc;
}
.release-loading{
  height:40px;
  width: 100%;
  display:inline-block;
  line-height: 40px;
  text-align: center;
 
}
ul{
  list-style: none;
  padding:0;
  margin:0;
}
li{
  border-bottom: 1px solid #ccc;
  height: 60px;
  background: #fff;
}
</style>
