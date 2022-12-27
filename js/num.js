
    //调用方法
    NumDynamic("span0",1,41);
    /**
    * 动态数字方法
    * ID    => 对应ID
    * speed => 递增速度 
    * value => 接入的数字
    */
    function NumDynamic(ID,speed,value){
    	var span1 = document.getElementById(ID);
    	if(value>0){
	    	var num = 0;
	        var t = setInterval(function(){
		       num++;
		       span1.innerText = num;
			        if(num==value){
			        	clearInterval(t);
			        }       
	        },speed);
    	}else{
    		span1.innerText = value;
    	}
    }	

	
    //调用方法
    NumDynamic("span1",1,66);
    /**
    * 动态数字方法
    * ID    => 对应ID
    * speed => 递增速度 
    * value => 接入的数字
    */
    function NumDynamic(ID,speed,value){
    	var span2 = document.getElementById(ID);
    	if(value>0){
	    	var num = 0;
	        var t = setInterval(function(){
		       num++;
		       span2.innerText = num;
			        if(num==value){
			        	clearInterval(t);
			        }       
	        },speed);
    	}else{
    		span2.innerText = value;
    	}
    }	
	
    //调用方法
    NumDynamic("span2",1,40);
    /**
    * 动态数字方法
    * ID    => 对应ID
    * speed => 递增速度 
    * value => 接入的数字
    */
    function NumDynamic(ID,speed,value){
    	var span1 = document.getElementById(ID);
    	if(value>0){
	    	var num = 0;
	        var t = setInterval(function(){
		       num++;
		       span1.innerText = num;
			        if(num==value){
			        	clearInterval(t);
			        }       
	        },speed);
    	}else{
    		span1.innerText = value;
    	}
    }	

	
