<template>
  <div class="subsonglist">
     <div class="top-img" :style="{backgroundImage: 'url(' + topImg + ')'}">
     </div>
     <div class="charts-title">
      </div>
      <h2>排行榜-{{chartsTitle}}</h2>
      <img src="static/img/return.png" class="returnSonglist" @click="returnSonglist() " alt="">
    <ul class="songlist">
      <li v-for="(song,index) in songList" @click="playSong(song,songList)">
        <h4>{{index+1}}. {{song.songname}}</h4>
        <p>{{song.songname}}-{{song.singername}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'subsonglist',
    data () {
      return {
        chartsTitle:this.currentChart.chartsTitle,
        chartsId:this.currentChart.chartsId,
        songList:{},
        topImg:""
      }

    },
    props:["currentChart"],
    methods:{
    getNewsList:function(){

      var _this = this;
      var request = require('superagent');
      request('get','https://route.showapi.com/213-4').query({
          showapi_appid:'34353',
          showapi_test_draft:'false',
          topid:this.chartsId,
          showapi_timestamp:this.formatterDateTime(),
          showapi_sign:'9537e658bc624a06823d3eed6defb08a',

      }).then(function(res){
           var re = JSON.parse(res.text)
            _this.songList =re.showapi_res_body.pagebean.songlist; 
            _this.topImg = _this.songList[0].albumpic_big;
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
    playSong:function(song,songList){
      var songInfo = [];
      songInfo = [song,songList]
      this.$emit('song',songInfo);
    },
    returnSonglist:function(){
      this.$emit('songlistShow',true);
    }

  },
  mounted: function() {

      this.getNewsList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin:0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.returnSonglist{
  width: 40px;
  position: absolute;
  top:420px;
  right:20px;
}
.top-img{
  width: 100%; 
  padding-top: 100%;
  background: no-repeat;
  background-size:cover;
  position: relative;
}
.subsonglist{
  background: #000;
  color:#fff;

}
.charts-title{
  width: 100%;
  height:100px;
  background: #000;
  -webkit-filter: blur(20px); /* Chrome, Opera */
 -moz-filter: blur(20px);
  -ms-filter: blur(20px);    
  filter: blur(20px); 
  position: absolute;
  top:480px;
}
.subsonglist h2{
  position: absolute;
  left:20px;
}
.subsonglist ul{
  width: 90%;
  margin:100px auto;
}
.songlist li{
  width: 100%;
  height: 60px;

}
.songlist li p{
  text-indent: 20px;
  color:#ccc;
}
</style>
