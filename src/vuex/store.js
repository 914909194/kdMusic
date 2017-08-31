// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// const state = {
// 	isPlay:{},
// 	songList:[    ],
// 	DateTime:0
	
// }

// const mutations = {
// 	   formatterDateTime: function (state) {
//                 var date = new Date()
//                 var month = date.getMonth() + 1
//                 var datetime = date.getFullYear()
//                     + ""// "年"
//                     + (month >= 10 ? month : "0" + month)
//                     + ""// "月"
//                     + (date.getDate() < 10 ? "0" + date.getDate() : date
//                             .getDate())
//                     + ""
//                     + (date.getHours() < 10 ? "0" + date.getHours() : date
//                             .getHours())
//                     + ""
//                     + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
//                             .getMinutes())
//                     + ""
//                     + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
//                             .getSeconds());
//                 state.DateTime = datetime;
//             } ,
// 	  getNewsList: function (state) {
//                 var _this = this;
//                 var request = require('superagent');
//                 request('get', 'https://route.showapi.com/213-4').query({
//                     showapi_appid: '34353',
//                     showapi_test_draft: 'false',
//                     topid: state.topid,
//                     showapi_timestamp: state.DateTime,
//                     showapi_sign: '9537e658bc624a06823d3eed6defb08a'

//                 }).then(function (res) {
//                     var re = JSON.parse(res.text)
//                     state.songList = re.showapi_res_body.pagebean.songlist;
//                 });
//             },
         
	
// }
// // const actions={
// // 	increment:({commit})=>commit('increment'),
// // 	decrement:({commit})=>commit('decrement')
// // }//commit 要干嘛

// // const getters={

// // }
// export default new Vuex.Store({
// 	state,
// 	mutations
// })