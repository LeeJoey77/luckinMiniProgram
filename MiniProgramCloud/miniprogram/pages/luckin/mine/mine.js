// miniprogram/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cellitemArr: [
      {
        celltitle: "收货地址",
        cellicon: "../../../images/diamand.png",
        cellid: "cellid1"
      },
      {
        celltitle: "咖啡钱包",
        cellicon: "../../../images/diamand.png",
        cellid: "cellid2"
      },
      {
        celltitle: "优惠券",
        cellicon: "../../../images/diamand.png",
        cellid: "cellid3"
      },
      {
        celltitle: "发票管理",
        cellicon: "../../../images/diamand.png",
        cellid: "cellid4"
      },
      {
        celltitle: "客户服务",
        cellicon: "../../../images/diamand.png",
        cellid: "cellid5"
      },
    ],
    username: "用户登录",
    imageUrl: "../../../images/luckinlogo.jpeg",
    userInformation: {}
  },
  tologinpage: function (options) {
    console.log(this.data.userInformation)
    if (Object.keys(this.data.userInformation).length === 0) {
      wx.navigateTo({
        url: '/pages/luckin/logIn/logIn',
      })
    } else {
      let imagePath = this.data.userInformation['avatarUrl'];
      let userName = this.data.userInformation['nickName'];
      let gender = this.data.userInformation['gender'];
      wx.navigateTo({
        url: '/pages/luckin/setting/setting?imageUrl=' + imagePath + '&username=' + userName + '&gender=' + gender
      })
    }
   
  },
  todetailpage: function (options) {

  },
  toaffiliatepage: function (options) {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        let tempUserInfo = res.data;
        console.log(tempUserInfo)
        if (Object.keys(tempUserInfo).length != 0) {
          console.log('不为空')
          that.setData({
            userInformation: tempUserInfo,
            username: tempUserInfo['nickName'],
            imageUrl: tempUserInfo['avatarUrl']
          })
        } else {
          console.log('为空')
          that.setData({
            userInformation: {},
            username: "用户登录",
            imageUrl: "../../../images/luckinlogo.jpeg"
          })
        }
        
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})