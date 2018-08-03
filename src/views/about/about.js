import api from "../../api/"

export default {
    name: "about",
    data() {
        return {
            abc: process.env.VUE_APP_ABC || 'no data',
            url: process.env.VUE_APP_API_BASE_URL || 'no data',
            apiUrl: process.env.VUE_APP_API_BASE_URL || 'no data',
        }
    },
    mounted() {
        api.user.getUserOne(2);
    },
    methods: {
        getEnv: function () {
            console.log(process.env);
        },
        getNews: function () {
            this.$api.news.getOne(2).then((data) => {
                console.log(data);
            })
        },
        addNews: function () {
            let news = {};
            news.title = "我是VUE新闻";
            news.readCount = 34324;

            this.$api.news.insert(news).then((data) => {
                console.log(data);
            });

        },
        delNews: function () {
            this.$api.news.del(11).then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
                console.log("请求失败啦!!!");
            });
        },
        modNews: function () {
            let news = {};
            news.title = "修改过后的新闻XX22222222222";
            news.readCount = 44;
            news.id = 4;
            this.$api.news.modNews(news).then((data) => {
                console.log(data);
            });
        }
    }
}
