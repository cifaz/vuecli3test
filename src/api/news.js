import http from "./http";

export default {
    getOne: function (id) {
        return http.get("news/" + id);
    },
    insert: function (data) {
        return http.post("news", data);
    },
    del: function (id) {
        let delete1 = http.delete("news/" + id);
        console.log(delete1);
        return delete1;
    },
    modNews: function (data) {
        return http.put("news/" + data.id, data);
    }
}