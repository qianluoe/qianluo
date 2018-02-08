const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
    module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins:[ // 添加plugins节点配置插件
            new htmlWebpackPlugin({
                template:path.join(__dirname, './src/index.html'),//模板路径
                filename:'index.html'//自动生成的HTML文件的名称
            })
    ],
        module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则,use调用时是从右往左的
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(png|jpg|gif)$/, use: 'url-loader' },
            { test: /\.(ttf|woff|woff2|svg|eot)$/, use: 'url-loader' },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    }
}