<template>
  <div class="nav1">
    <ul class="nav-bar">
        <li v-for="(val,index ) in arr">
          <router-link  class="remove_a" :to="val.link">
              <span @click="changeSelect(index)" v-bind:class="{select:val.isSelect}">{{val.con}}</span>
          </router-link>   
        </li>
      </ul>  
  </div>
</template>
<script>

export default {
  name: 'nav1',
  data:function(){
    return {
       arr:[
            {
              con:"推荐",
              link:"/",
              isSelect:true
            },
            {
              con:"排行榜",
              link:"charts",
              isSelect:false
            },
            {
              con:"搜索",
              link:"search",
              isSelect:false
            }

       ],
    }
  },
   watch: {
   '$route' (to, from) {
     console.log(this.getStatus(this.$route.path))
   }
 },
  created(){
    console.log(this.getStatus(this.$route.path))
  },
  methods:{
      changeSelect:function(index){
          this.arr.forEach(function(value,key){
            value.isSelect = false;
          })
          this.arr[index].isSelect = true;
      },
      getStatus (urlStr) {
      var urlStrArr = urlStr.split('/')
      return urlStrArr[urlStrArr.length - 1]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.remove_a{
  text-decoration: none;
}
.router-link-active{
   color:#31c27c;
}
span {
  margin: 0;
  color:rgba(0,0,0,.6);
}
.select{
  color:#31c27c;

}
.nav-bar{
  width: 100%;
  height: 40px;  
  background: #fff;
  text-align: center;
  display: -webkit-box;;
}
.nav-bar span{
    padding: 0 33px;
    display: block;
    -webkit-box-flex: 1;
    position: relative;
    line-height: 40px;
    font-size: 16px;
}
.nav-bar span.select::after{
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #31c27c;
    text-decoration: none;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;

}

li {
  display: inline-block;
  margin: 0 10px;
}


</style>
