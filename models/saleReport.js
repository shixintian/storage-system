/**
 * Created by Administrator on 2017/5/10.
 */

var db = require('../config/db');

exports.show = function (callback) {

    db.query('SELECT * FROM `rpt_warehouse_goods_sale`', callback);

}