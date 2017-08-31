<template>
  <div class="songplay">
      <img :src="isPlay.albumpic_big" class="big-img" alt="">
      <div class="songplay-title">
        <img src="/static/img/return.png" class="return" @click="returnback() " alt="">
        <h3>
          <span>{{isPlay.songname}} </span>
          <span class="singername">{{isPlay.singername}}</span> 
        </h3>
      </div>
     <img :src="isPlay.albumpic_big" class="small-img rotate" :class={pause:isPause} alt="">
      <div class="songplay-control">
        <div class="preve" @click="preve">
          <img src="/static/img/preve.png"  alt="">
        </div>
        <div class="play" @click="playpuase()"> 
          <img :src="playsrc"  alt="">
        </div>
       <div class="next" @click="next()">
          <img src="/static/img/next.png"  alt="">
       </div>
        
        <audio :src="isPlay.url" autoplay id="myAudio"></audio>
      </div>
     
  </div>
</template>

<script>

export default {
  name: 'songplay',                                              
   data:function(){
    return {
      song:[],
      isPlay:{},
      playing:true,
      playsrc:"/static/img/play.png",
      isPause:false,
    }
  },
  props:["SongfromSubsonglist","SongfromSearch","SongfromRecommed"],
  methods:{
    getSong:function(){
      
      this.isPlay = this.song[0];
    },
    returnback:function(){
      console.log(123)
      this.$emit('backCompShow',true);
    },
    playpuase:function(){
      var oMyAudio = document.querySelector('#myAudio');
       var oSmall = document.querySelector('.small-img');
    
     
      if(this.playing){
        oMyAudio.pause();
        this.playsrc = "/static/img/stop.png"


      }else{
        oMyAudio.play();
         this.playsrc = "/static/img/play.png";
      }

      this.playing= !this.playing;
      this.isPause = !this.isPause;
    },
    next:function(){
        var index = this.song[1].indexOf(this.isPlay);
        var songlist = this.song[1];
        index++;
        if(index == songlist.length){
          index = 0;
        }
        this.isPlay = songlist[index];   
    },
    preve:function(){
      var index = this.song[1].indexOf(this.isPlay);
      var songlist = this.song[1];
      index--;
      if(index == -1){
        index = songlist.length-1
      }
      this.isPlay = songlist[index];  
    },
    SongPlay:function(){
      if(this.SongfromSearch){
        this.song = this.SongfromSearch;
        this.song[0].url = this.song[0].m4a
      }else if(this.SongfromSubsonglist){
        this.song = this.SongfromSubsonglist;
      }else{
         this.song = this.SongfromRecommed;
      }
      this.getSong()
    }

  },
  created:function(){
        this.SongPlay()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.songplay{
  position: absolute;
  top:0;
  background: #ccc;
  height:100%;
  width: 100%;
}
.songplay-title{
  text-indent: 5%;
  overflow: hidden;
  height: 80px;
  border-bottom: 1px #000 solid; 
  
}
.songplay-title span{
  width: 300px;
}
.songplay-title  img{
  width: 30px;
  height: 30px;
  margin-top: 25px ;
  position: absolute;

}
.songplay-title h3{
   position: absolute;
   margin: 10px 20%;
}
.songplay-title h3 span{
  display: block;
} 
.songplay-title h3 span.singername{
  font-size: 18px;
  color:#303030;
}

.big-img{
  width: 100%;
  height: 100%;
 -webkit-filter: blur(50px);
  -moz-filter: blur(50px);
  -o-filter: blur(50px);
  -ms-filter: blur(50px);
  filter: blur(50px);
  position: fixed;
}
.small-img{
    width: 250px;
    height:250px;
    top: 50%;
    left: 50%;
    margin-top: -155px;
    margin-left: -125px;
    border-radius: 50%;
    position: fixed;
}
.rotate{
    animation: 15s Imgrotate linear infinite forwards;
}
.pause {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
}
@keyframes Imgrotate {
    form{
        /*transform: rotateZ(0deg);*/
    }to{
          transform: rotateZ(360deg);
         }
}
.songplay-control{
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 150px;

}
.songplay-control div{
 float: left;
 width: 33%;
 text-align: center;
 margin-top: 40px;
}
.songplay-control div img{
  width: 40px;
}

</style>
