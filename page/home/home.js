// page/home/home.js
Page({

  //---------------3.一些自定义的逻辑函数,监听wxml的事件-----------------------
  handleUserInfo(event) {

    console.log(event)
  },

  handleviewClick(){
    console.log('哈哈哈被点击了')
  },

  /**
   * --------------2.页面的初始数据,以方便被wxml引用------------
   */
  data: {
    message:'哈哈哈',
    list:[
      {name:'kobe',age:18},
      {name:'shary',age:28}
    ],

    it:[],

    num:[]
    
  },


  //----------------1.监听页面生命周期函数------------------------

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const _this=this;

    wx.request({//发起网络请求
      url: 'https://www.baidu.com/',
      /*箭头函数中的this是层层向上找的，如果要使用function的格式，就要在函数开头先定义
      const _this=this
      */
      success: (res) =>{//回调函数
        console.log(res)
        const data=res.cookies.data;
        this.setData({
          it:data})
      }
    })

    for(var i=0;i<100;i++){

      this.setData({
        num:i
      })

    }
    
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
    
  },

  //---------------4.监听其他事件------------------------

  //监听页面滚动
  onPageScroll(obj){//page满屏时才生效
    console.log(obj)
  },

  //监听滚动到底部
  onReachBottom() {//page满屏时才生效
    console.log('动到底部')
  },

  //监听下拉刷新
  onPullDownRefresh(){//一定要先在json文件里使能下拉
    console.log('用户下拉')
  }
})