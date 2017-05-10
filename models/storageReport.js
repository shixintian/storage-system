// 处理teacher数据表的数据

var db = require('../config/db');

// 下一步通过db处理数据
exports.show = function (callback) {
    // console.log('huil show')

    db.query('SELECT * FROM `warehouse_goods_info`', callback);

}