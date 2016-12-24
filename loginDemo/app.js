App({
  onLaunch: function () {
    console.log("App Launch")
  },
  onShow: function () {
    console.log("App Show")
  },
  onHide: function () {
    console.log("App Hide")
  },
  onError: function (msg) {
    console.log("App Error")
  },
  appData: {
      userinfo: null
  }
})