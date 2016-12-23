// pages/express/express.js
var app = getApp()
Page({
  data:{
    expressNu: null,
    expressInfo: null
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
  // 查询快递
  btnClick: function(){
    // console.log(this.data.expressNu);
    var thispage = this;
    app.getExpressInfo(this.data.expressNu, function(data){
        console.log(data);
        thispage.setData({expressInfo: data})
    });
  },
  // 输入框的 input 方法
  input: function(e){
    // console.log(e)
    this.setData({expressNu: e.detail.value})
  }
})