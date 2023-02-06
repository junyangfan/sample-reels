$(function(){
	$("#element").typed({
        strings: ["Web page making"]
        });
    $('.introduce').typed({
    	 strings: ["Hello, I'm PaLidan, loving to creat new things and share with people."]
    })
    $('#me').hover(function(){
    	$(this).addClass('me-spin');
    },function(){
    	$(this).removeClass('me-spin');
    });
    
    $('#carousel').carousel({
    	interval:false,
    });
    $('.my_more').click(function(){
    	$('.my_feeling').trigger('click');
    	
    });
    $('#side').click(function(){
    	$('.side_content').toggle();
    	$('.content-head').toggleClass('move');
    	$(this).children().toggleClass('side_close');
    });
    
    $(document).on('click',function(event){//点击空白处影藏登陆框
		//var target=$('.login');
		//alert($('.login').is(event.target))判断login内部有没有属于document元素。如果有不能关闭
		//alert($('.login').has(event.target).length);//登陆框是1，外面是0，因为只有一个login属于document
		if(!$('#items').is(event.target)&&$('#items').has(event.target).length==0&&!$('.slideup').is(event.target)&&$('.slideup').has(event.target).length==0)
		{   if($('#items').hasClass('in'))
			{   
				$('.slideup').trigger('click');
			}
			
		}
	});
	
	
	
})
