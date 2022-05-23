const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'impressum': {
      entry: './src/pages/Impressum/main.js',
      template: 'public/index.html',
      filename: 'impressum.html',
      title: 'Impressum',
      chunks: ['chunk-vendors', 'chunk-common', 'impressum']
    },
    'newToDo': {
      entry: './src/pages/NewToDo/main.js',
      template: 'public/index.html',
      filename: 'addToDo.html',
      title: 'Neues To-Do',
      chunks: ['chunk-vendors', 'chunk-common', 'newToDo']
    },
    'editToDo': {
      entry: './src/pages/EditToDo/main.js',
      template: 'public/index.html',
      filename: 'editToDo.html',
      title: 'To-Do bearbeiten',
      chunks: ['chunk-vendors', 'chunk-common', 'editToDo']
    }
  }
})
