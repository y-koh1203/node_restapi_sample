'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public/static')));

//受けとったパラメーターをもとにJSONを返却
app.get('/api/v1/user/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        id: req.params.id
    });
});

// 無効なURLを指定された場合のルーティング
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/404.html'));
});

app.listen(3030);
