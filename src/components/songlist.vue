<template>
    <div class="songlist">
        <div class="charts">
            <img :src="chartsImg" class="charts-img" alt="">
            <div class="charts-item">
                <h3>排行榜-{{chartsTitle}}</h3>
                    <div v-for="(song,index) in songList">
                        <p>{{index+1}}. <span>{{song.songname}}</span>-{{song.singername}}</p>
                    </div>
            </div>
        </div>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'songlist',
        data () {
            return {
                songList: {},
                topid: this.chart.chartsId,
                chartsImg: this.chart.chartsImg,
                chartsTitle: this.chart.chartsTitle,

            }
        },
        props: ["chart"],

        methods: {
            getNewsList: function () {
                var _this = this;
                var request = require('superagent');
                request('get', 'https://route.showapi.com/213-4').query({
                    showapi_appid: '34353',
                    showapi_test_draft: 'false',
                    topid: this.topid,
                    showapi_timestamp: this.formatterDateTime(),
                    showapi_sign: '9537e658bc624a06823d3eed6defb08a'

                }).then(function (res) {
                    var re = JSON.parse(res.text)
                    _this.songList = re.showapi_res_body.pagebean.songlist;
                });
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


        },
        mounted: function () {

            this.getNewsList();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    h3 {
        font-size: 16px;

    }

    .remove_a {
        text-decoration: none;
        color: #000;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
    }

    a {
        color: #42b983;
    }

    .charts {
        height: 100px;
        width: 95%;
        margin: 10px auto;
        display: -webkit-box;
        overflow: hidden;
        background: #fff;
    }

    .charts-img {
        width: 100px;
        height: 100px;
    }

    .charts-item {
        height: 100px;
        -webkit-box-flex: 1;
    }

    .charts-item h3 {
        line-height: 0;
        margin-left: 0;
        margin-left: 15px;
    }

    .charts-item p {
        width: 80%;
        margin: 3px 15px;
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 230px;
        height: 20px;
        color: rgba(0, 0, 0, .5);
    }

    .charts-item p span {
        color: #000;
    }
</style>
