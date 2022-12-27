    //获得导航的所有选项
    var li=document.querySelectorAll(".nav li");
    //获得内容的所有div
    var div=document.querySelectorAll(".content div")
    for(var i=0;i<li.length;i++){
          //关键 让li与div建立联系
        li[i].index=i;
        li[i].onmouseover=function(){
           //将所有选项样式清空，所有内容隐藏
            for(var j=0;j<li.length;j++){
                li[j].className="";
                div[j].style.display="none"
            }
            //为鼠标悬浮的选项设置样式 其对应的div显现出来
            this.className="selected";
            div[this.index].style.display="block";
        }
    }