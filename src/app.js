import router from "./router";
import store from "localforage";
import util from "./api/util"

export default {
    name: "App",
    methods: {
        logout: function () {
            store.removeItem("routers");
            store.removeItem("token").then((data) => {
                router.push({name: "login"});
                util.hasAddRouter = false;
            })
        }
    }
}