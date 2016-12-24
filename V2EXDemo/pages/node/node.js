// pages/node/node.js
Page({
  data: {
    nodes: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 获取节点列表
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/nodes/all.json',
      method: 'GET',
      success: function (res) {
        // success
        that.setData({
          nodes: res.data
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  nodeTap: function (event) {
    console.log(event);
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})