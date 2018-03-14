/*
* @Author: summerstarlee
* @Date:   2018-03-14 10:18:05
* @Last Modified by:   summerstarlee
* @Last Modified time: 2018-03-14 10:22:54
*/

// 获取图片素材分类
export function getSysImgTypes() {
    return $.ajax({
        type: 'post',
        url: '/api/getSysImgTypes',
        dataType: 'json'
    });
}

// 保存APP
// obj : { name: '', pageSize: 20, pageNum: 1 }
export function saveData(obj) {
  console.log('saveData',obj)
    return $.ajax({
        type: 'post',
        url: '/api/saveData',
        data: obj,
        dataType: 'json'
    });
}

//设置backlink的值
// obj:{id:'',uid:'',backlink:''}
export function setBackLink(obj){
  console.log('setBackLink',obj)
  return $.ajax({
    type:'post',
    url:'api/setBackLink',
    data:obj,
    dataType:'json'
  })
}


export function addBrowseNum(obj){
  console.log('addBrowseNum',obj)
  return $.ajax({
    type:'post',
    url:'api/addBrowseNum',
    data:obj,
    dataType:'json'
  })
}

export function checkBrowsenum(obj){
  console.log('browsenum',obj)
  return $.ajax({
    type:'post',
    url:'api/checkBrowsenum',
    data:obj,
    dataType:'json'
  })
}


// 获取模板素材
// obj : { name: '', pageSize: 20, pageNum: 1 }
export function getSysTpls(obj) {
    return $.ajax({
        type: 'post',
        url: '/api/getSysTpls',
        data: obj,
        dataType: 'json'
    });
}

// 获取模板素材分类
export function getSysTplsTypes() {
    return $.ajax({
        type: 'post',
        url: '/api/getSysTplsTypes',
        dataType: 'json'
    });
}

// 获取我的模板
export function getUserTpls(data) {
    return $.ajax({
        data: data,
        type: 'post',
        url: '/api/getUserTpls',
        dataType: 'json'
    });
}

// 添加我的模板
export function addUserTpls(data){
    return $.ajax({
        data: data,
        type: 'post',
        url: '/api/addUserTpls',
        dataType: 'json'
    });
}

// 删除我的模板
export function delUserTpls(data){
    return $.ajax({
        data: data,
        type: 'post',
        url: '/api/delUserTpls',
        dataType: 'json'
    });
}

// 获取图片素材
// obj : { name: '', pageSize: 20, pageNum: 1 }
export function getSysImgs(obj) {
    return $.ajax({
        type: 'post',
        url: '/api/getSysImgs',
        data: obj,
        dataType: 'json'
    });
}

// 获取app json
// obj : { appid: 1 }
export function getAppData(obj) {
    //获取APP对象
    return $.ajax({
        type: 'post',
        url: '/api/getUserApp',
        data: obj,
        dataType: 'json'
    });
}

// 获取我的图片
// obj : { pageSize: 20, pageNum: 1 }
export function getUserImgs(obj) {
    return $.ajax({
        type: 'post',
        url: '/api/getUserImgs',
        data: obj,
        dataType: 'json'
    });
}

// 获取音乐
// obj : { pageSize: 20, pageNum: 1 }
export function getMp3(obj) {
    return $.ajax({
        type: 'post',
        url: '/api/getMp3',
        data: obj,
        dataType: 'json'
    });
}

// 上传图片
// obj : { imgData: xx}
export function uploadImgBase64(obj) {
    return $.ajax({
        type: 'post',
        url: '/api/uploadBase64',
        data: obj,
        dataType: 'json'
    });
}

/**
 * @desc 删除用户图片
 * @param id 图片ID
*/
export function delImg(obj) {
    return $.ajax({
        type: 'post',
        url: '/api/delUserImgs',
        data: obj,
        dataType: 'json'
    });
}
