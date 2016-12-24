//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    post: [],
    hot: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      method: 'GET',
      success: function(res){
        // success
        that.setData({
          post: res.data
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    }),
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      method: 'GET',
      success: function(res){
        // success
        that.setData({
          hot: res.data
        });
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 点击某个主题函数
  onTouch: function(event){
    wx.navigateTo({
      url: '../post/post?id='+event.currentTarget.id,
      success: function(res){
        // success
      },
      fail: function(e) {
        // fail
        console.log(e)
      },
      complete: function() {
        // complete
      }
    })
  }
})
