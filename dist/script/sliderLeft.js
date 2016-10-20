var sliderLeft =( function (ele,rightEle){
    // 获取所有行，对每一行设置监听  
    var lines = ele;  
    var len = lines.length;  
    var lastX,lastXForMobile;  
    var winW = $('.wrapper').width() || $(window).width();
        
    // 设定常规信息区域宽度=屏幕宽度  
    // 用于记录被按下的对象  
    var pressedObj;  
    //定义一个用于存储滑动过的对象的数组  
    var pressedObj1=[];  
    // 用于记录按下的点  
    var start;  

    //由于右边闪现一下所以做这个sb的处理
    setTimeout(function(){
        rightEle.css('opacity', '1');
    }, 100);

    // 网页在移动端运行时的监听  
    for (var i = 0; i < len; ++i) {  
        var leftELe = $(lines[i]).children().first();
        leftELe.width(winW)
        var childLength = $(lines[i]).find(rightEle).children('div').length;
        $(lines[i]).width(winW + rightEle.width()*childLength +childLength*10)
        // console.log(childLength)
        lines[i].addEventListener('touchstart', function(e) {  
            // console.log(e)
            lastXForMobile = e.changedTouches[0].pageX;  
            //记录手指触摸点的横坐标  
            pressedObj = this;  
            // 记录被按下的对象  
            // 记录开始按下时的点  
            var touches = event.touches[0];  
            start = {  
                x : touches.pageX, // 横坐标  
                y : touches.pageY // 纵坐标  
            };  
        });  
        lines[i].addEventListener('touchmove', function(e) {  
            // 计算划动过程中x和y的变化量  
            var touches = event.touches[0];  
            delta = {  
                x : touches.pageX - start.x,  
                y : touches.pageY - start.y  
            };  

            // 横向位移大于纵向位移，阻止纵向滚动  
            if (Math.abs(delta.x) > Math.abs(delta.y)) {  
                event.preventDefault();  
            }  
        });  

        lines[i].addEventListener('touchend', function(e) {  
            var diffX = e.changedTouches[0].pageX - lastXForMobile;  
            if (diffX < -100) {  
                for(var i = 0; i < pressedObj1.length; ++i){  
                    $(pressedObj1[i]).animate({marginLeft:"0"}, 100);  
                    //清空数组  
                    if(i==(pressedObj1.length-1)){  
                        pressedObj1=[];  
                    }  
                }  
                // 左边按钮的个数
                var thisWidth = $(this).find(rightEle).children('div').length;

                $(pressedObj).animate({marginLeft :-thisWidth*40 }, 100);// 左滑  
                pressedObj1.push(this);   
                //记录被滑的这个对象，已被下一次滑动删除这个对象的左移效果  
            } else if (diffX > 100) {  
                $(pressedObj).animate({marginLeft : "0"}, 100);// 右滑  
            }  
        });  
    }  
});