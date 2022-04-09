const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const moduleLoaderPlugin = require('./extra/webpack/plugin/moduleLoaderPlugin');
const removeDirPlugin = require('./extra/webpack/plugin/removeDirPlugin');
const addEntryPlugin = require('./extra/webpack/plugin/addEntryPlugin');
const assetPathPlugin = require('./extra/webpack/plugin/assetPathPlugin');
const addChunkAndModulePlugin = require('./extra/webpack/plugin/addChunkAndModulePlugin');
const moveDirPlugin = require('./extra/webpack/plugin/moveDirPlugin');

const getEntry = function () {
  if (process.env.run === 'build-package') {
    return {
      main: ['./src/package/index.js']
    };
  } else if (['dev', 'build-main'].includes(process.env.run)) {
    return './src/main.js';
  } else if (process.env.run === 'dev-test-lib') {
    return './src/test-lib.js';
  }
};

const getOutput = function () {
  if (process.env.run === 'build-package') {
    return {
      filename: '[name].js',
      path: path.resolve(__dirname, './lib'),
      libraryTarget: 'commonjs2'
    };
  } else if (process.env.run === "build-main") {
    return {
      filename: 'js/[name]-[hash].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/me-smart-ui/'
    };
  } else if (['dev', 'dev-test-lib'].includes(process.env.run)) {
    return {
      filename: 'js/[name]-[hash].js',
      path: path.resolve(__dirname, './dist')
    };
  }
};

const plugins = [
  new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "css/vue-[name]-[hash].css"
  }), new VueLoaderPlugin(),
  new moduleLoaderPlugin(),
  new removeDirPlugin(['./lib', './dist']),
  new addEntryPlugin(), new assetPathPlugin(),
  new moveDirPlugin([['./lib/iconfont', './lib/css/iconfont']])
];

if (['dev', 'build-main', 'dev-test-lib'].includes(process.env.run)) {
  plugins.push(new HtmlWebpackPlugin({
    title: 'myWebpack',
    fileName: 'index.html',
    template: './public/index.html'
  }));

  plugins.push(new CompressionWebpackPlugin({
    algorithm: 'gzip',
    test: new RegExp('\.'),
    include: new RegExp('\.'),
    threshold: 10240,
    minRatio: 0.8
  }))
}

// 样式自动补全
const autoprefixer = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [require('autoprefixer')({
        browsers: [ //浏览器列表
          'ie>=10',
          'Firefox>=20',
          'Safari>=5',
          'Android>=4',
          'Ios>=6',
          'last 4 version',
        ]
      })]
    }

  }
}

module.exports = {
  entry: getEntry(),
  output: getOutput(),
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendors: false,
        default: false
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    open: true
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: {
          loaders: {
            css: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', autoprefixer],
            scss: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', autoprefixer, 'sass-loader'],
            js: 'babel-loader'
          }
        }
      }]
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules|\\lib/
    }, {
      test: /\.css$/,
      use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', autoprefixer]
    }, {
      test: /\.scss$/,
      use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', autoprefixer, 'sass-loader']
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'images/[hash].[ext]'
        }
      }]
    }, {
      test: /\.(ttf|woff|woff2)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10,
          name: 'iconfont/[name]-[hash].[ext]'
        }
      }]
    }]
  },
  plugins: plugins
};