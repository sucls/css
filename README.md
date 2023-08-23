## CSS预处理器

### Less


### Sass

基于缩进的语法检查

### Scss

基于; {} 的语法

Sass3 即 Scss

Compass
Foundation

### 对比

1、Less环境较Sass简单
Cass的安装需要安装Ruby环境，Less基于JavaScript，是需要引入Less.js来处理代码输出css到浏览器，也可以在开发环节使用Less，然后编译成css文件，直接放在项目中，有less.app、SimpleLess、CodeKit.app这样的工具，也有在线编辑地址。

2、Less使用较Sass简单
LESS 并没有裁剪 CSS 原有的特性，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。只要你了解 CSS 基础就可以很容易上手。

3、从功能出发，Sass较Less略强大一些
①sass有变量和作用域。

$variable，like php；
#｛$variable｝like ruby；
变量有全局和局部之分，并且有优先级。
②sass有函数的概念

@function和@return以及函数参数（还有不定参）可以让你像js开发那样封装你想要的逻辑。
@mixin类似function但缺少像function的编程逻辑，更多的是提高css代码段的复用性和模块化，这个用的人也是最多的。
ruby提供了非常丰富的内置原生api。
③进程控制：

条件：@if @else；
循环遍历：@for @each @while
继承：@extend
引用：@import
④数据结构：

$list类型=数组；
$map类型=object；
其余的也有string、number、function等类型

4、Less与Sass处理机制不一样
  前者是通过客户端处理的，后者是通过服务端处理，相比较之下前者解析会比后者慢一点

5、关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$。