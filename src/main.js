import Vue from 'vue';
import App from './App.vue';
import directive from './directives/permission';
import router from './router';
import Base from './assets/js/base.js';
import api from './api/';
import http from './api/http.js';
import global from './api/global.js';
import store from "localforage";
import util from "./api/util";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "./assets/css/base.scss";

Base.debug();
// 挂载
Vue.prototype.$api = api;
Vue.prototype.$GLOBAL = global;
Vue.prototype.$base = Base;

Vue.config.productionTip = false;

Vue.use(ElementUI);

router.beforeEach((to, from, next) => {
    store.getItem("token").then((data) => {
        if (data) {
            // 登陆后, 加载所有路由
            global.token = data;
            util.addRouters();
        } else {
            router.push({name: "login"});
        }
    });
    next();
});

new Vue({
    router,
    directive,
    render: h => h(App),
}).$mount('#app');
