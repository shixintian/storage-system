var express = require('express');

// 引入出库物资数据模型
var outStorageModel = require('../models/outStorage');

var router = express.Router();

module.exports = router;

// 展示入库物资
router.get('/', function (req, res) {

    outStorageModel.show(function (err, result) {
        if (err) return;
        // console.log(result)
        res.render('outStorage/index', {});
    });



});