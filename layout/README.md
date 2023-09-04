## 布局效果

+ [现代化页面](./modern.html)
  
+ [图片瀑布流布局](./image-cassade.html)
  + [imagesLoaded](https://imagesloaded.desandro.com/)
  + [Jquery](https://jquery.com/download/)
  + [图标](https://www.remixicon.cn/ )

```
  . 基于 column-count 实现（目前通过该方法）
      column-count: 6;
      图片不能设置成绝对定位 position: relative;

  . 基于 flex 布局实现
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
      height: 1000px;

   . 基于js实现
      图片定位设置成绝对定位，position: relative;
      计算图片的位置：top、left
```