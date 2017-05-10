/**
 * Created by Administrator on 2017/5/10.
 */
// 处理teacher数据表的数据

var db = require('../config/db');

// 下一步通过db处理数据
// 查询所有员工
exports.show = function (callback) {
    // console.log('huil show')

    db.query('SELECT * FROM `rpt_warehouse_goods_sale`', callback);

}