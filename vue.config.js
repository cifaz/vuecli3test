const env = process.env;
module.exports = {
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps
        sourceMap: false,
        modules: false,
        // css预设器配置项
        loaderOptions: {
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
        },
    },

    configureWebpack: {
        // rules: [
        //     {
        //         test: /\.(eot|ttf|woff|svg)$/,
        //         use: 'file-loader'
        //     }
        // ]
        // plugins: [
        //     {
        //         options: {
        //             rules: [
        //                 {
        //                     test: /\.(eot|ttf|woff|svg)$/,
        //                     use: 'file-loader'
        //                 }
        //             ]
        //         }
        //     }
        // ]
    },

    chainWebpack: config => {

        // config.module
        //     .rule("svg")
        //     .test(/\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)$/)
        //     .use('url')
        //     .loader('url-loader').end();
    },

    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        host: env.VUE_APP_HOST,
        port: env.VUE_APP_PORT,
        https: false,
        hotOnly: false,
        compress: true,
        proxy: null, // 设置代理
        // 日志级别 none error warning info
        clientLogLevel: env.VUE_APP_LOGLEVEL,
        hot: true,
        inline: true,
        // 是否在浏览器中显示信息
        noInfo: true,
        // 启动成功后是否自动打开浏览器
        open: env.VUE_APP_OPEN,
        before: app => {
        }
    },
}