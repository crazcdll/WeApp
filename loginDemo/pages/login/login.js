// pages/login/login.js
var app = getApp();
Page({
  data:{
    username: null,
    password: null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // 输入用户名
  usernameInput: function(event){
    this.setData({username: event.detail.value})
  },
  // 输入密码
  passwordInput: function(event){
    this.setData({password: event.detail.value})
  },
  // 点击登录
  loginBtnClick: function(){
    console.log(123)
    app.appData.userinfo = {username: this.data.username, password: this.data.password}
    console.log(app.appData)
    // this.setData({});
    // wx.switchTab({
    //   url: '../user/user',
    //   success: function(res){
    //     // success
    //   },
    //   fail: function(e) {
    //     console.log(e);
    //   },
    //   complete: function() {
    //     // complete
    //   }
    // })
    wx.switchTab({
      url: '../user/user',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})