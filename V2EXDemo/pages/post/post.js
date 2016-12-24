// pages/post/post.js
Page({
  data: {
    post: [],
    comment: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var thisPage = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
      method: 'GET',
      success: function (res) {
        // success
        // console.log(res);
        thisPage.setData({
          post: res.data[0]
        })
        // console.log("post--" + post)
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    }),
      wx.request({
        url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
        method: 'GET',
        success: function (res) {
          // console.log(res)
          // success
          thisPage.setData({
            comment: res.data
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