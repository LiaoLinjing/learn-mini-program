// page/home/home.js

// 逻辑层

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'code',
    age:18,

    // 例如从服务器上获取了一个列表的数据,
    students:[
      {id:118,name:'kobe',age:30},//对象
      { id: 111, name: 'jam', age: 28 },//对象
      { id: 112, name: 'coco', age: 17 },//对象
      { id: 113, name: 'cindy', age: 20 },//对象

    ],

    cn:0

  },

  handleBtnLICK(){//按钮点击处理函数（自定义函数）
    
    // 1.错误的做法，虽然实际上cn是改变了，但是界面是不会刷新的，所以界面是不显示的
    // this.data.cn +=1
    // console.log(this.data.cn)//打印显示

    // 2.this.setData
    this.setData({cn:this.data.cn+1})

  },

  handleBtnLess(){
    this.setData({ cn: this.data.cn - 1 })
  }

})