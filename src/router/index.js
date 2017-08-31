import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/components/recommend'
import Hello from '@/components/Hello'
import songlist from '@/components/songlist'
import subsonglist from '@/components/subsonglist'
import songPlay from '@/components/songPlay'
import search from '@/components/search'
import nav1 from '@/components/nav'
import slide from '@/components/slide/slide.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'recommend',
        component: recommend,
        meta: { keepAlive: true }
    }, {
        path: '/charts',
        name: 'Hello',
        component: Hello
    }, {
        path: '/search',
        name: 'search',
        component: search
    }, {
        path: '/songlist',
        name: 'songlist',
        component: songlist
    }, {
        path: '/subsonglist',
        name: 'subsonglist',
        component: subsonglist
    }, {
        path: '/songPlay',
        name: 'songPlay',
        component: songPlay
    }, {
        path: '/nav1',
        name: 'nav1',
        component: nav1
    }]
})