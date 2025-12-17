// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Точка входа: исправленный путь, который соответствует вашей структуре папок (внутри папки js)
  entry: './src/js/index.js',

  output: {
    // Место, куда будет собираться бандл
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Очищает папку dist перед каждой сборкой
  },

  module: {
    rules: [
      // Правило для обработки CSS файлов и извлечения их в отдельный файл
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    // Плагин для автоматической генерации index.html из шаблона
    new HtmlWebpackPlugin({
      template: './src/index.html', // Убедитесь, что src/index.html существует
      filename: 'index.html',
    }),
    // Плагин для извлечения CSS в отдельный файл (используя имя файла style.css)
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  
  // Режим сборки: development или production
  mode: 'production', // Я изменил на production, как вы запрашивали в первой команде
};