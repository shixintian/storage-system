var express = require('express');

// 引入入库物资数据模型
var inStorageModel = require('../models/inStorage');

var router = express.Router();

module.exports = router;

// 展示入库物资
router.get('/', function (req, res) {

    inStorageModel.show(function (err, result) {
        if (err) return;
        // console.log(result)
        res.render('inStorage/index', {});
    });



});