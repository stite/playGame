# playGame
用极简的计算方法算出输赢
# 极简计算代码

```javascript
// 1:石头、2:剪刀、3:布
an = parseInt(Math.random()*3)+1;  // 用户
bn = parseInt(Math.random()*3)+1;  // 电脑
// 计算
reset=an==bn?'平手':an==(bn+1)%3?'你输了':'你赢了';
```
> 图片不停跳动的原理

```javascript
function domUpdata(user,computer){
    warn.style.opacity = '0';
    clearInterval(domTimer);
    domTimer = setInterval(function(){
        this.n?this.n:this.n=1;this.n++
        this.n>3?this.n=1:this.n;
        userImg.src = 'images/t-'+this.n+'.png';
        comImg.src = 'images/t-'+this.n+'.png';
    },100);
    setTimeout(function(){
        clearInterval(domTimer);
        userImg.src = 'images/t-'+user+'.png';
        comImg.src = 'images/t-'+computer+'.png';
        warn.style.opacity = 1;
        warn.innerText = reset;
    },1000)
    
}
```

[个人博客](http://www.stite.net)
* 纯属练手  ^_^
