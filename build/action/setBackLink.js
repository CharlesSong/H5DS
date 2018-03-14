/*
* @Author: summerstarlee
* @Date:   2018-03-14 10:29:26
* @Last Modified by:   summerstarlee
* @Last Modified time: 2018-03-14 10:29:59
*/

var Sequelize = require('sequelize');
var { result } = require('../lib/result');
var { updateSQL } = require('../sql/updateSQL');
var sd = require('silly-datetime');

// 新建app
exports.setBackLink = function(req, res) {


  let uid = req.session.user.id;
  let appid = parseInt(req.body.id, 10);
  // 如果是管理员
  if(req.session.user.usertype === 1) {
    uid = req.body.uid;
  }
  updateSQL('h5ds_apps', {
    backlink:{type: Sequelize.CHAR},
  }, {
    backlink:req.body.backlink
  }, {owner: uid, id: appid}, (ret) => {
    if (ret) {
      result(req, res, {
        code: 200,
        data: '/index.html',
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
  });
}