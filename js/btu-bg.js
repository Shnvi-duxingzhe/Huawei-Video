    // 1. 获取所有按钮元素
    
    var btns = document.getElementById("redBtn").onclick = function(){
        document.body.style.background = "red"
    }

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        // 1. 先把所有的颜色先清空
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.backgroundColor = '';
        }
        // 2. 添加样式
        this.style.backgroundColor = 'pink';
    }
}