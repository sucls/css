## Scss

[Scss中文网](https://www.sass.hk/)

### 语法

和less非常相似

eg：
```cass
body{
    div{ // body div { ...}
        +p{  // 兄弟元素

        }
        ~p{  // 

        }
    }
    &[data-theme="dark"]{ // body[data-theme="dark"] {  }

    }
}

```

### 变量

> 变量类型
+ 数字，1, 2, 13, 10px
+ 字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
+ 颜色，blue, #04a3f9, rgba(255,0,0,0.5)
+ 布尔型，true, false
+ 空值，null
+ 数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
+ maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)

eg:
```scss
$color: red

body{
    background: $color;
}
```

> 变量的作用域
```scss
p{
    $fontSize: 16px;
    // ...
}
```

> 运算

数字： 
颜色：

### mixin

语法 @mixin @include
```scss
@mixin mix{
    border: 1px solid #ddd;
}

body{
    div{
        @include mix;
        padding: 10px;
    }
}
```

### extend
```
%mix{
    border: 1px solid #ddd;
}

body{
    div{
        @extend %mix;
        padding: 10px;
    }
}
```

### @function

```scss

@function pxToVw( $px){
    @return $px/$page-width*100vw;
}

$page-width: 1024;

main{
    width: pxToVw( 856 );
}

```

### 循环

```scss

$class: "item";

@for $i from 1 throuth 5{
    .#{$class}-#{$i}{
        height: 10 + $i + px;
    }
}
```


### 扩展

BEM CSS命名法
Block Element modifier



```css
 .grid-button__disable{

 }

 .page-button__prev{

 }

 .page-button__next{
    
 }
```