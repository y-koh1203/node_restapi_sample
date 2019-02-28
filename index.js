'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public/static')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

// 無効なURLを指定された場合のルーティング
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/404.html'));
});

app.listen(3030);
