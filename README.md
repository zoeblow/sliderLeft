# sliderLeft

sliderLeft 是一款模拟 QQ 这样的软件左滑操作(删除、重命名、置顶等 )，基于 zepto 和 zepto_fx 或者 jquery，因为我用到了 animate()方法。

## About

### 创建时间 2016-10-20 09:58

#### 作者 [@zoeblow](https://github.com/zoeblow)

#### Demo [在线 Demo](https://zoeblow.github.io/sliderLeft/index.html)

### 效果

![sliderLeft-preview](https://raw.githubusercontent.com/zoeblow/sliderLeft/master/sliderLeft.gif)

## 版本

> - V 1.0
> - 修改时间 ：2016-10-20 09:58
> - 描述：V 1.0 首次提交。
> - 本次就不做具体说明

---

## 调用方式

在 html 中引入 zepto_fx/jquery 之后引入 sliderLeft.js
完成之后即可直接使用

```html
<div class="line-wrapper">
  <div class="line-scroll-wrapper">
    <div class="line-normal-wrapper">轻松的方式符合u</div>
    <div class="left-btn">
      <div class="left-btn-child btn-del">删除</div>
    </div>
  </div>
</div>

<script type="text/javascript" src="../dest/script/zepto.min.js"></script>
<script type="text/javascript" src="../dest/script/fx.js"></script>
<script type="text/javascript" src="../dest/script/sliderLeft.js"></script>
<script>
  sliderLeft($(".line-scroll-wrapper"), $(".left-btn"));
</script>
```

---

## 参数

sliderLeft(ele,rightEle);

|   参数   | 取值类型 | 默认值 |                      描述                      |
| :------: | :------: | :----: | :--------------------------------------------: |
|   ele    |  String  | 必填项 | 那个区域需要用到滑动操作： zepto/jquery 选择器 |
| rightEle |  String  | 必填项 |   操作按钮组的选择器 ： zepto/jquery 选择器    |

---
