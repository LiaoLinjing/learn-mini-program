// page/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepath:''

  },

  handlechoosePic(){
    console.log('选择拍照')
    wx.chooseImage({
      success: (res) => {//返回的res里面会有图片的路径，把拿到的路径放到image的src里面
        console.log(res)
        const path=res.tempFilePaths[0]
        this.setData({
          imagepath:path
        })
      },
    })
  },

  handleimageload(){
    console.log('图片加载完成')
  }
 
})