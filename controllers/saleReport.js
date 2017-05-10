var express = require('express');

// 引入出库物资数据模型
var saleReportModel = require('../models/saleReport');

var router = express.Router();

module.exports = router;

// 展示入库物资
router.get('/', function (req, res) {

    saleReportModel.show(function (err, result) {
        if (err) return;
        // console.log(result)
        res.render('saleReport/index', {});
    });



});