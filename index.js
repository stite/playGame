var a = b = reset = domTimer = null;
var userImg = comImg = obj= warn = null;
var an = bn = 0;

window.onload = function(){

    // 查找Dom
    obj = document.querySelectorAll('button');
    userImg = document.getElementById('user');
    comImg = document.getElementById('computer');
    warn = document.getElementById('warn');

    for(var i=0; i<obj.length; i++){
        obj[i].onclick = function(){
            reckon(this.value);
        }
    }
}

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

function reckon(an){
    // 1:石头、2:剪刀、3:布
    an = parseInt(an);
    bn = parseInt(Math.random()*3)+1;  // 电脑
    // 计算
    reset=an==bn?'平手':an==(bn+1)%3?'你输了':'你赢了';

    // 修改DOM
    domUpdata(an,bn);
}

