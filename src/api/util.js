import router from "../router.js";
import store from "localforage";

/**
 * router管理类(暂时)
 */
export default {
    /*
        是否已经动态添加过路由了, 如果添加过了则会跳过,
        刷新页面此值为自动变为false, 退出系统里需要手动清除此值, 目前在app.js中清除
     */
    hasAddRouter: false,
    addRouters: function (routerData, callback) {
        // 使用不同的方式加载路由
        store.getItem("routers").then((data) => {
            if (data) {
                let parseData = JSON.parse(data);
                this.__addRouteData(parseData, callback);
            } else {
                this.__addRouteData(routerData, callback);
            }
        });
    },
    __lazyLoad: function(path) {
        return () => import(`@/views/${path}.vue`);
    },
    __addRouterOne: function (config) {
        config.component = this.__lazyLoad(config.component)
        return config;
    }
    ,
    __addErrorPage: function(data) {
        return data.push(this.__addRouterOne({
            path: "*",
            component: "error/ErrorPage"
        }));
    },
    __addRouteData: function (data, callback) {
        // 处理路由数据
        if (data && !this.hasAddRouter) {
            this.hasAddRouter = true;
            for (let i = 0; i < data.length; i++) {
                let routerArrElement = data[i];
                if (routerArrElement.component) {
                    let path = routerArrElement.component;
                    routerArrElement.component = this.__lazyLoad(path);
                }
            }

            // 动态添加404页面
           this.__addErrorPage(data);

            router.addRoutes(data);

            if (callback) {
                callback();
            }
        }
    }
}