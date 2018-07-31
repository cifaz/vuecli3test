import http from "./http";

export default {
    getList: function () {
        return http.get("menuList");
    }
}