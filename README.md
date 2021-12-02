# gitbook-mathjax-url
通过页面解析的方式使用MathJax

# 缘起
gitbook的公式插件，无论是mathjax还是katex，当页面中公式太多时，总是报错：.RangeError: Maximum call stack size exceeded
在实际文档中，其实真正的公式块并不多，而是很多地方使用了诸如$x$和$\Delta x$这种很简单很小的内嵌公式，由此，思考出了如下方案：
* 当要编辑复杂的公式时，用$$x = y$$这种方式（双$符号）来标识，然后使用katex或者mathjax等插件完成发布前转换；
* 当有简单的内联公式时，用$x$这种方式（单$符号）来标识，正常情况下katex和mathjax都只是处理双$内的公式，所以这种单$内的公式不会被处理，然后直接发布到html中，而在html中用网页内嵌js的方式在前端进行解析显示（为什么不全部用前端显示呢，因为这种前端显示方式的模式，对于要换行的公式要将双斜线\\更换为四斜线\\，这又和Typora不一致了）

# 实现方式
通过插件在页面中注入如下代码
``` html
<script type="text/javascript" src="https://cdn.bootcss.com/mathjax/2.7.3/latest.js?config=TeX-AMS-MML_HTMLorMML"></script>  
<script type="text/x-mathjax-config">  
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$','$']],
            processEscapes: true
        }
    });
</script> 
```

# 部署方式
在book.json中引用插件："mathjax-url@https://github.com/yunsean/gitbook-mathjax-url.git"
推荐方式如下：
``` json
    "plugins": [
        "latex-codecogs",
        "mathjax-url@https://github.com/yunsean/gitbook-mathjax-url.git",
        ...
    ],
```
即实现了前面说的单双$标识内的分别处理。

# 使用方式
使用参考
```
这种关系如下：
$$
a_{sl}=\eta\frac{a_{utip}}{q_{utip}}q_{sl}
$$
* $a_{sl}$是$a$在扫描线上特定值$q_{sl}$处的$a$值；
* $a_{utip}$是在稳定区尖端的$a$值；
* $q_{utip}$是在稳定区尖端的$q$值。
```
