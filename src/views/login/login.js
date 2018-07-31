import store from "localforage";
import api from "../../api/"
import util from "../../api/util.js";
import Home from '@/views/home/Home.vue';
import About from '@/views/about/About.vue';

// const routerArr = [
//     {
//         path: '/',
//         name: 'home',
//         component: () => import("@/views/home/Home.vue"),
//         meta: ["cliList","ab-cd"]
//     },
//     {
//         path: '/about',
//         name: 'about',
//         component: () => import("@/views/about/About.vue"),
//         meta: ["addNews2", "modNews", "delNews"]
//     }
// ];

export default {
    name: "login",
    data() {
        return {
            username: "admin",
            passwd: "admin"
        }
    },
    methods: {
        login: function () {
            if (this.username === "admin" && this.passwd === "admin") {
                console.log("登陆成功!");
                store.setItem("token", "234324234").then((data) => {

                    api.menu.getList().then((data) => {
                        let stringify = JSON.stringify(data);
                        // let routerArr = data;
                        //
                        // for (let i = 0; i < routerArr.length; i++) {
                        //     let routerArrElement = routerArr[i];
                        //     if (routerArrElement.component) {
                        //         let path = routerArrElement.component;
                        //         routerArr[i].component = () => import(`@/views/${path}.vue`);
                        //     }
                        // }

                        // const Home = resovle => (require("@/views/home/Home.vue"), resovle);
                        // const Home2 = () => (import("@/views/home/Home.vue"));

                        let _this = this;
                        store.setItem("routers", stringify).then((data) => {
                            util.addRouters(data, function () {
                                _this.$router.push({name: "about"});
                            });

                        });
                    });

                })
            } else {
                console.log("登陆失败!");
            }
        }
    }
}