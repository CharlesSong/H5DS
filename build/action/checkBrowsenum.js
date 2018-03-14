/*
* @Author: summerstarlee
* @Date:   2018-03-14 10:18:05
* @Last Modified by:   summerstarlee
* @Last Modified time: 2018-03-14 14:14:55
*/
var { result } = require('../lib/result');
var { readSQL } = require('../sql/readSQL');
var Sequelize = require('sequelize');


// 新建app
exports.checkBrowsenum = function(req, res) {

  console.log('checkBrowseNum',req.body)

  readSQL({
    req:req,
    table:'usernum',
    page:false,
    where:{
      app_id:req.body.app_id
    },
    sequeObj:{
      id:{type:Sequelize.INTEGER,primaryKey:true},
      app_id:{type:Sequelize.INTEGER}
    },
    callBack: (ret) => {
      if (ret) {
        result(req, res, {
          code: 200,
          data: ret,
          msg: '成功',
          success: true
        });
      } else {
        result(req, res, {
          code: 500,
          data: ret,
          msg: '失败',
          success: false
        });
      }
    }
  })
}
