//获取应用实例
const app = getApp()

Page({
  data: {
    imgArr: [
      '../../../images/luckin1.jpg',
      '../../../images//luckin2.jpg',
      '../../../images//luckin3.png'
    ],
    isshow: true,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
    cellArr: [
      {
        title: "现在下单",
        subtitle: "ORDER NOW",
        iconsize: 44,
        unique: "unique_1",
        location: 1,
        type: 'switchTab',
        url: '../menu/menu'
      },
      {
        title: "咖啡钱包",
        subtitle: "COFFEE WALLET",
        iconsize: 44,
        unique: "unique_2",
        location: 2,
        type: 'navigate',
        url: '/pages/luckin/wallet/wallet'
      },
      {
        title: "送Ta咖啡",
        subtitle: "SEND COFFEE",
        iconsize: 44,
        unique: "unique_3",
        location: 3,
        type: 'navigate',
        url: '/pages/luckin/sendcoffee/sendcoffee'
      }
    ]
  },
  togetcouponpage: function () {
    wx.navigateTo({
      url: '../cupon/cupon',
    })
    /*
    wx.request({
      url: 'https://edu.51cto.com/index.php?do=spree$m=getGifts',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.log(res.data)
      },
      complete(res) {

      }
    })
    */
  },
  preventTouch: function () {
    console.log("遮挡层")
  },
  dismisspopview: function () {
    this.setData({
      isshow: false
    })
  },
  onLoad: function () {

  }
})
