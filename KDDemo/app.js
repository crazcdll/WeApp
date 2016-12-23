//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  // 查询快递信息
  getExpressInfo: function(nu, cb){
    wx.request({
      url: 'https://route.showapi.com/64-19?showapi_appid=29459&showapi_sign=7906d6d91e4a43758998614a29982d84&com=auto&nu='+nu,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {}, // 设置请求的 header
      success: function(res){
        // success
        cb(res.data);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },


  globalData:{
    userInfo:null
  }
})