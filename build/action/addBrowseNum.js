/*
* @Author: summerstarlee
* @Date:   2018-03-14 10:18:05
* @Last Modified by:   summerstarlee
* @Last Modified time: 2018-03-14 10:19:25
*/

var Sequelize = require('sequelize');
var { result } = require('../lib/result');
var { createSQL } = require('../sql/createSQL');


// 新建app
exports.addBrowseNum = function(req, res) {

  createSQL({
    obj: {
      usernum: 0,
      app_id: req.body.app_id,
    },
    sequeObj: {
      id: { type: Sequelize.INTEGER, primaryKey: true },
      app_id: { type: Sequelize.INTEGER },
    },
    table: 'usernum',
    callBack: ret => {
      if (ret) {
        result(req, res, {
          code: 200,
          data: ret.insertId,
          msg: "成功",
          success: true
        });
      } else {
        // 返回值
        result(req, res, {
          code: 500,
          data: ret,
          msg: "失败",
          success: false
        })
      }
    }
  })

}
