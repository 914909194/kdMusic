<template>
  <div class="hello">
    <div v-for="chart in charts">
      <div @click="hidSongList(chart)">
         <songlist v-if="songlistShow" :chart="chart" ></songlist>
      </div>
     </div>
      <subsonglist  v-if="subsonglistShow" :currentChart="currentChart" @song="getSong" @songlistShow="returnSonglist"></subsonglist>
      <songPlay v-if="songPlayShow" :SongfromSubsonglist ="playSong" @backCompShow="returnSubsonglistShow" ></songPlay>  
  </div>

</template>

<script>
import songlist from './songlist';
import subsonglist from './subsonglist';
import songPlay from './songPlay';
export default {
  name: 'hello',
  data () {
    return {
        songlistShow:true,
        subsonglistShow:false,
        songPlayShow:false,
        currentChart:{},
        playSong:{},
        charts:[
            {
              chartsTitle:"欧美",
              chartsId:3,
              chartsImg:"../static/img/western.jpg"
            },
             {
              chartsTitle:"内地",
              chartsId:5,
              chartsImg:"../static/img/chinese.jpg"
            },
             {
              chartsTitle:"港台",
              chartsId:6,
              chartsImg:"../static/img/hongkong.jpg"
            },
             {
              chartsTitle:"日本",
              chartsId:17,
              chartsImg:"../static/img/jpan.jpg"
            },
             {
              chartsTitle:"热歌",
              chartsId:26,
              chartsImg:"../static/img/sell.jpg"

            },
            {
              chartsTitle:"新歌",
              chartsId:27,
              chartsImg:"../static/img/western.jpg"
            }
        ]
      
    }
  },
  components:{
    'songlist':songlist,
    'subsonglist':subsonglist,
    'songPlay':songPlay
  
  },
  methods:{
      hidSongList:function(topid){
        this.songlistShow = false;
        this.subsonglistShow = true;
        this.currentChart = topid;
    },
      getSong:function(song){
        if(song){
          this.songPlayShow = true;
          this.subsonglistShow = false;
        }
        this.playSong = song;
    },
    returnSubsonglistShow:function(state){
        console.log(11);
      if(state){
          this.subsonglistShow = state;
          this.songPlayShow = !state;
      }
    },
    returnSonglist:function(state){

      this.songlistShow = state;
      this.subsonglistShow = !state;
     
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
div.hello{
  margin-top: -10px;
  height:100%;
}
a {
  color: #42b983;
}

</style>
