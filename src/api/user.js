import http from "./http";

export default {
    getUserOne: function (id) {
        return http.get("/user/" + id, {
            appId: "19990909"
        });
    },

    login: function (userName, passwd) {
        return http.post("/login", {
            userName: userName,
            password: passwd,
            appId: "19990909"
        })
    },

}