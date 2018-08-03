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
            api.user.login(this.userName, this.passwd).then((data) => {
                console.log("登陆成功! ===== ");
                console.log(data);
                if (data.success) {
                    let dataObj = data.data;
                    let jwt = dataObj.jwt;
                    store.setItem("token", jwt).then(() => {
                        let menuList = dataObj.menuList;
                        let stringify = JSON.stringify(menuList);

                        let _this = this;
                        store.setItem("routers", stringify).then((data) => {
                            util.addRouters(menuList, function () {
                                _this.$router.push({name: "about"});
                            });
                        });
                    })
                } else {
                    console.log("登陆失败!");
                }
            }).catch((err) => {
                console.log("------------");
            });
        }
    }
}