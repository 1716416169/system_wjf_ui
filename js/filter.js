window.onload=function()//用window的onload事件，窗体加载完毕的时候
{
    var result=document.cookie
   /* var start = str.indexOf("=");//获得字符串的开始位置
    var result = str.substring(start+1,document.cookie.length);*/
    console.log(result)
    if (result=="user"){
        console.log(result)
    }else if(result=="manger") {
        console.log(result)
    }else {
        alert("请登录")
        window.location.href="login.html"

    }

}