var express = require('express');

// 引入库存报表数据模型
var storageReportModel = require('../models/storageReport');

var router = express.Router();

module.exports = router;

router.get('/', function (req, res) {

    storageReportModel.show(function (err, result) {
        if (err) return;
        res.render('storageReport/index', {});
    });



});