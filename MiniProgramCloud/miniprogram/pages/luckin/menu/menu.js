// miniprogram/menu/menu.js
Page({
  data: {
    imgArr: [
      {
        url: '../../../images/luckin1.jpg',
        spunique: 'spunique0'
      },
      {
        url: '../../../images/luckin2.jpg',
        spunique: 'spunique1'
      }, 
      {
        url: '../../../images/luckin3.png',
        spunique: 'spunique2'
      },
    ],
    isshowPopView: false,
    indicatorDots1: true,
    autoplay1: true,
    interval1: 5000,
    duration1: 1000,
    circular1: true,
    storeName: '峰汇中心店',
    distance: '125',
    indexSize: 0,
    indicatorDots: false,
    autoplay: false,
    duration: 0, //可以控制动画
    list: '',
    detail: [
      {
        id: 1,
        title: '人气 Top',
        list: [
          {
            title: '榛果拿铁',
            subtitle: '默认: 大/单糖/热',
          }
        ],
      },
      {
        id: 2,
        title: '大师咖啡',
        list: [
          {
            title: '拿铁',
            subtitle: '默认: 大/无糖/热',
          },
          {
            title: '香草拿铁',
            subtitle: '默认: 大/单糖/热',
          },
          {
            title: '焦糖拿铁',
            subtitle: '默认: 大/单糖/热',
          },
          {
            title: '标准美式',
            subtitle: '默认: 大/无糖/无奶/热',
          },
          {
            title: '加浓美式',
            subtitle: '默认: 大/无糖/无奶/热',
          },
          {
            title: '焦糖标准美式',
            subtitle: '默认: 大/单糖/无奶/热',
          },
          {
            title: '焦糖加浓美式',
            subtitle: '默认: 大/单糖/无奶/热',
          },
          {
            title: '黑金气泡美式',
            subtitle: '默认: 大',
          },
          {
            title: '澳瑞白',
            subtitle: '默认: 大/无糖/热',
          },
          {
            title: '卡布奇诺',
            subtitle: '默认: 大/无糖/热',
          },
          {
            title: '焦糖玛奇朵',
            subtitle: '默认: 大/单糖/热',
          },
          {
            title: '摩卡',
            subtitle: '默认: 大/默认奶油/单糖/热',
          }
        ],
      },
      {
        id: 3,
        title: '零度拿铁',
        list: [
          {
            title: '红茶拿铁',
            subtitle: '默认: 大/热',
          },
          {
            title: '抹茶拿铁',
            subtitle: '默认: 大/热',
          }
        ],
      },
      {
        id: 4,
        title: '瑞纳冰',
        list: [
          {
            title: '小雪荔枝瑞纳冰',
            subtitle: '默认: 大',
          },
          {
            title: '卡布奇诺瑞纳冰',
            subtitle: '默认: 大/默认奶油',
          },
          {
            title: '百香芒果瑞纳冰',
            subtitle: '默认: 大',
          },
          {
            title: '巧克力瑞纳冰',
            subtitle: '默认: 大/默认奶油',
          },
          {
            title: '抹茶瑞纳冰',
            subtitle: '默认: 大/默认奶油',
          }
        ],
      },
      {
        id: 5,
        title: '经典饮品',
        list: [
          {
            title: '石榴蔓越莓苏打水',
            subtitle: '默认: 大',
          },
          {
            title: '柑橘百香果',
            subtitle: '默认: 大/热',
          },
          {
            title: '巧克力',
            subtitle: '默认: 大/热',
          },
          {
            title: '纯牛奶',
            subtitle: '默认: 大/热',
          },
          {
            title: '依云矿泉水330ml',
            subtitle: '',
          },
          {
            title: '巴黎水330ml',
            subtitle: '',
          }
        ],
      },
      {
        id: 6,
        title: '健康轻食',
        list: [
          {
            title: '夏威夷菠萝火腿卷(单卷)',
            subtitle: '',
          },
          {
            title: '意大利烤鸡卷(单卷)',
            subtitle: '',
          },
          {
            title: '火腿鲜蔬卷(单卷)',
            subtitle: '',
          },
          {
            title: '巧克力麦芬',
            subtitle: '',
          },
          {
            title: '芝士蓝莓蛋糕',
            subtitle: '',
          },
          {
            title: '蛋香火腿芝士三明治',
            subtitle: '',
          },
          {
            title: '火腿芝士羊角',
            subtitle: '',
          },
          {
            title: '蔓越莓司康',
            subtitle: '',
          },
          {
            title: '巧克力司康',
            subtitle: '',
          },
          {
            title: '蓝莓麦芬',
            subtitle: '',
          },
          {
            title: '香椰提子麦芬',
            subtitle: '',
          },
          {
            title: '香蕉核桃麦芬',
            subtitle: '',
          },
          {
            title: '提拉米苏蛋糕',
            subtitle: '',
          },
          {
            title: '黑森林蛋糕',
            subtitle: '',
          },
          {
            title: '尼斯吞拿鱼三明治',
            subtitle: '',
          }
        ],
      },
      {
        id: 7,
        title: '鲜榨果蔬汁',
        list: [
          {
            title: 'NFC鲜榨橙汁',
            subtitle: '',
          },
          {
            title: 'NFC鲜榨芒果混合果汁',
            subtitle: '',
          },
          {
            title: '猕猴桃复合果汁',
            subtitle: '',
          },
          {
            title: 'NFC鲜榨蓝莓草莓混合果汁',
            subtitle: '',
          },
          {
            title: 'NFC鲜榨荔枝汁',
            subtitle: '',
          }
        ],
      }
    ],
  },
  change(e) {
    this.setData({
      indexSize: e.detail.current
    })
  },
  scrollTo(e) {
    this.setData({
      indexSize: e.target.dataset.index
    })
  },
  orderCoffee: function () {
    this.setData({
      isshowPopView: true
    })
  },
  touchToDismiss: function () {
    this.setData({
      isshowPopView: false
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
