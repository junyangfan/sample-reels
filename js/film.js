$(function(){
	$("#myCarousel").carousel({
		interval:4000,
	});
	/*$("#myCarousel1").carousel({
		interval:4000,
	});
	$("#myCarousel2").carousel({
		interval:4000,
	});*/
	$("#myCarousel3").carousel({
		interval:4000,
	});
	

	$('.nav-list ul li a,.nav-list1 ul li a').hover(//导航颜色设置
		function(){
		$(this).parent().css('background','dodgerblue');
		$(this).css('color','white')
		$(this).next().removeClass('nav_active');
	   },function(){
		$(this).parent().css('background','');
		$(this).css('color','');
		$('.nav-list ul li a').next().addClass('nav_active');
	});
	
	
	$('.icon-check').click(function(){//替换选择自动登录图标
		if($(this).hasClass('icon-checked'))
		{
			$(this).removeClass('icon-checked');
		}
		else
		{
			$(this).addClass('icon-checked');
		}
	})
	
	$('.nav-list1 ul li:first a').click(function(event){
		event.stopPropagation();//阻止事件冒泡，不然会触发document的事件
		$('.login').toggle();
		if($(this).next().hasClass('nav_active1'))
		{
			$(this).next().removeClass('nav_active1');
		}
		else
		{
			$(this).next().addClass('nav_active1');
		}
		return false;//怕不兼容，这个也写上	
	})
	$(document).click(function(event){//点击空白处影藏登陆框
		//var target=$('.login');
		//alert($('.login').is(event.target))判断login内部有没有属于document元素。如果有不能关闭
		//alert($('.login').has(event.target).length);//登陆框是1，外面是0，因为只有一个login属于document
		if(!$('.login').is(event.target)&&$('.login').has(event.target).length==0)
		{
			$('.login').hide();
			$('.nav-list1 ul li:first a').next().removeClass('nav_active1');
		}
		
	});
	//$('body').css({"overflow":"hidden"});
	//下面是注册界面
	$('.regin_number input,.regin_sms input,.regin_pass input,.regin_passtrue input,.login_num input,.login_passtrue input').on({
		'focus':function(){//获取焦点的时候外发光
	            $(this).parent().addClass('outlight');
	            },
	    'blur':function(){
	            $(this).parent().removeClass('outlight');
	            }
    });
	
	$('.regin_sex .sex_check').click(function(){//点击切换男女性别checked
		$(this).toggleClass('sex_checkon');
	})
	
	$('.regin_proon,.login_proon').click(function(){//点击切换条款和自动登录按钮图标
		if($(this).hasClass('on'))
		{
			$(this).removeClass('on');
			$(this).toggleClass('regin_prodown');
		}
		$(this).toggleClass('regin_prodown');
	})
	
	$('.nav-list1 ul:last-child').click(function(){/*开启注册界面,如果并且打开遮罩,将滚动条消失*/
		$('.regin_number input,.regin_sms input,.regin_pass input,.regin_passtrue input,.login_num input,.login_passtrue input').val('');
		$('.mask').toggle();
		$('.regin').toggle();
		if($('body').css('overflow')=='hidden')
		{
			$('body').css('overflow','');
		}
		else
		{
			$('body').css('overflow','hidden');
		}
		
	})
	$('.close').click(function(){//还可以通过close按钮来关闭注册见面
		$('.regin').toggle();
		$('.mask').toggle();
		if($('body').css('overflow')=='hidden')
		{
			$('body').css('overflow','');
		}
		else
		{
			$('body').css('overflow','hidden');
		}
	})
	$("body").on("keydown",function(e){//禁止火狐空格键和下键翻页 
	     if(e.keyCode==32||e.keyCode==40){
	       return false;
	     }
	  
	 });
       
    $('.hot_seach ul li').hover(function(){//热搜li背景效果
    	$(this).addClass('hot_seachbg');
    },function(){
    	$(this).removeClass('hot_seachbg');
    })
       
    $('#search_mess').on({//显示热搜
    	'focus':function(){
    	        $('.hot_seach').show();
    	        var winWidth=$(window).width();
				if(winWidth<1200){
						$('.hot_seach').css('left',20);
						$('.hot_seach').css('width',280);
					}
					else if(winWidth<1360){
						$('.hot_seach').css('left',10);
					}
					else{
						$('.hot_seach').css('left',4);
					}
			        },
        'blur':function(){
        	    $('.hot_seach').hide();
                }
    });
    
    var timer=null;
	function star(){	//封装成函数
		if(index==10)//这里也要做判断，不然在列表为9之后，传到这里的index就是10了，就不显示了
		 {
			index=0;
		 }
		$('.headpic_concent').removeClass('appear');//全部清掉appear
		$('.headpic_concent').css('opacity',0);//全部变成0
		$('#myCarousel_list li').removeClass('myCarouselList_appear');//清掉所有列表的颜色
		$('.circle li').removeClass('small_circle');//情调所有圆点颜色
		
		$('.headpic_concent').eq(index++).addClass('appear');//让当前图片的出现
		$('.circle li').eq(index-1).addClass('small_circle');//让小圆点变色
		$('#myCarousel_list li').eq(index-1).addClass('myCarouselList_appear');//让当前li显示颜色
		$('.headpic_concent').eq(index-1).stop().animate({'opacity':1},800);//让当前的opacity变成1
		 if(index==10)
		 {
			index=0;
		 }
	};
	var index=1;
	function headpic(){//头部大图加小圆点和列表显示函数
		timer=setInterval(star,5000); 
		$('.head_pic img').on({
			'mouseenter':function()
			{
				clearInterval(timer);
			},
			'mouseleave':function()
			{
				timer=setInterval(star,5000); 
			}
		});
		
	   $.each($('.circle li'), function(index1,value) {//点击小圆点改变轮播图，并记录当前位置
		$(this).on('click',function(){
		clearInterval(timer);
		$('.headpic_concent').css('opacity',0);//全部变成0
		$('.headpic_concent').removeClass('appear');//全部清掉
		$('.circle li').removeClass('small_circle');
		$('#myCarousel_list li').removeClass('myCarouselList_appear');//清掉所有列表的颜色
		
		$('.headpic_concent').eq(index1).addClass('appear');//让当前图片显示
		$('.headpic_concent').eq(index1).stop().animate({'opacity':1},800);//让当前的opacity变成1
		$('#myCarousel_list li').eq(index1).addClass('myCarouselList_appear');//让当前li显示颜色
		$('.circle li').eq(index1).addClass('small_circle');//让小圆点变色
		index=index1+1;//让定时器记录现在的位置
	 });
	});

	    $.each($('#myCarousel_list li'), function(index2,value) {
	    $(this).on({
	    'mouseenter':function(){
		clearInterval(timer);
		if(!($('.headpic_concent').eq(index2).hasClass('appear')))//判断当鼠标进入的时候，如果当前大图已经显示了，就不要再重新执行动画了
		{
			$('.headpic_concent').css('opacity',0);//全部变成0
		    $('.headpic_concent').removeClass('appear');//全部清掉
		}
		$('.circle li').removeClass('small_circle');//清掉小圆class
		$('#myCarousel_list li').removeClass('myCarouselList_appear');//清掉所有列表的颜色
		
		$('.headpic_concent').eq(index2).addClass('appear');//让当前图片显示
		$('#myCarousel_list li').eq(index2).addClass('myCarouselList_appear');//让当前li显示颜色
		$('.headpic_concent').eq(index2).stop().animate({'opacity':1},800);//让当前的opacity变成1
		$('.circle li').eq(index2).addClass('small_circle');//让小圆点变色
		index=index2+1;//让定时器记录现在的位置
	       },
	     'mouseleave':function(){
	   	 timer=setInterval(star,5000); 
	   	},
	    });
	    
	    });
	}
	headpic();


	
	$('#right a').mouseover(function(){//显示影片选项卡
		$(this).tab('show');
	});
	$('#left a').mouseover(function(){
		$(this).tab('show');
	});
	$('#next').css('display','none');
	$('#myCarousel2_right').css('display','none');//让即将上映左箭头阴影和右箭头先消失
	$('#myCarousel2_left').css('display','none');
	$('#right').mouseover(function(){
		$('#hot').css('display','none');
		$('#next').css('display','block');
		
		$('#myCarousel2_right').css('display','block');//让即将上映左箭头和右箭头再回来
	    $('#myCarousel2_left').css('display','block');
	});
	$('#left').mouseover(function(){
		$('#hot').css('display','block');
		$('#next').css('display','none');
		
		$('#myCarousel2_right').css('display','none');
	    $('#myCarousel2_left').css('display','none');
	});
	
	$('.carousel-control.left').eq(0).css({//轮播大图箭头左阴影
		top:80,
		width:150,
		height:250,
		
	});
	$('.carousel-control.right').eq(0).css({//轮播大图箭头右阴影
		top:80,
		width:150,
		height:250,
		
	});
    
	//选项卡一
	$('.carousel-control.right').eq(0).css({//右阴影
		right:4,
		top:5,
		width:80,
		height:325,
		'background-image':'linear-gradient(to right, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.1) 100%)',
	});
	
	$('.carousel-control.left').eq(0).css({//左阴影
		right:4,
		top:5,
		width:80,
		height:325,
		'background-image':'linear-gradient(to right, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.1) 100%)',
	});
	//选项卡二
	$('.carousel-control.right').eq(1).css({//右阴影
		right:4,
		top:5,
		width:80,
		height:325,
		'background-image':'linear-gradient(to right, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.1) 100%)',
	});
	$('.carousel-control.left').eq(1).css({//左阴影
		right:14,
		top:5,
		width:80,
		height:325,
		'background-image':'linear-gradient(to right, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0.1) 100%)',
	});
	
	//影评的阴影
	$('.carousel-control.left').eq(2).css({//左阴影
		top:39,
		width:80,
		height:260,
	});
	$('.carousel-control.right').eq(2).css({//右阴影
		top:39,
		width:80,
		height:260,
	});
	
	
    $('#location a').mouseover(function(){//显示票房选项卡
		$(this).tab('show');
	});
	$('#america a').mouseover(function(){
		$(this).tab('show');
	});$('#location a').mouseover(function(){//显示票房选项卡
		$(this).tab('show');
	});
	$('#korea a').mouseover(function(){//显示票房选项卡
		$(this).tab('show');
	});
	
	
	$.each($('.imgbox'), function(index,value) {
		$(this).on({//播放按钮实现透明
		'mouseover':function(){
			        if($(this).find('em').length!=0)
			        { 	
			        	$(this).find('em').css('opacity',0.5);
			        }
		},                                                                                                
		'mouseout':function(){
			         if($(this).find('em').length!=0)
			        {
					    $(this).find('em').css('opacity',1);	
	                }
	
		}              
		});
	});
	//
	$('#search').on({//替换小图标
		'mouseover':function(){
			$('#search_left').css('background','dodgerblue');
			$(this).find('i').addClass('search_left2');
		},
		'mouseout':function(){
			$('#search_left').css('background','white');
			$(this).find('i').removeClass('search_left2');
		}
	});
	
   
	
    $('.mall_list ul li p').hover(function(){/*//控制商品清单鼠标放上去的样式*/
    	                   $(this).css('background','cornflowerblue');
    	                   $(this).find('a').css('color','white').css('text-decoration','none');
                          },
                           function(){
                           	$(this).css('background','white');
                           	 $(this).find('a').css('color','#888');
                           })
    var num=0;
    $.each($('.mall_list ul p'),function(index,value){
    	var timer=null;
    	$(this).on({
    		'mouseenter':function(){
    			clearTimeout(timer);
    			$('.mall_list .mall_lists').eq(index).css('display','block').css('z-index',num++);
    			$('.mall_list .mall_lists').eq(index).stop(true,true).animate({opacity:'1'},400);
    			
    		},
    		'mouseleave':function(){
    		 timer=setTimeout(function(){
    				$('.mall_list .mall_lists').eq(index).stop(true,true).animate({opacity:'0'},400);
    				$('.mall_list .mall_lists').eq(index).css('display','none');
    			},100)		
    		},
    	});
        $('.mall_list .mall_lists').eq(index).on({
        	'mouseenter':function(){
    			clearTimeout(timer);
    		},
    		'mouseleave':function(){
    			$(this).css('display','none');
    		}
        });
    });
	
	//下面是蜡笔精选vedio的opacity
	$('.labi_selectpicleft a:first').hover(
		function(){
		$('.labi_video1').css('opacity',0.5);
	},
	    function(){
		$('.labi_video1').css('opacity',1);
	})
	
	$.each($('.labi_video2'),function(index,value) {//中间三个小vedio
		$(this).parent().parent().hover(function(){
			$('.labi_video2').eq(index).css('opacity',0.5);
		},function(){
			$('.labi_video2').eq(index).css('opacity',1);
		})
	});
	//下面是无缝轮播
/*	$('.comments_left i').on('click',function(){
			if(!$('.comments_pic ul').is(":animated")){
				var pic_width=$('.comments_pic li').eq(0).width();
			   	$('.comments_pic ul').animate({'margin-left':-pic_width},500,function(){//先向左移动
			    $('.comments_pic ul li:first').appendTo($('.comments_pic ul'));//在把移动出去的第一个放到最后一个
			    $('.comments_pic ul').css('margin-left',0);//移动后再复原
			   	});	
		};
	});
	
	$('.comments_right i').on('click',function(){
			if(!$('.comments_pic ul').is(":animated")){
				var pic_width=$('.comments_pic li').eq(0).width();
			   	$('.comments_pic ul').css('marginLeft',-pic_width);  //先将整体向左移动
			    $(".comments_pic ul li:last").prependTo($('.comments_pic ul'));  //再将最后一个放在最前面
			    $('.comments_pic ul').animate({marginLeft:"0px"},500)};
			}
	);
	
	   var timer1=setInterval(function(){
	   	$('.comments_left i').click();
	   },4000);
	  
      $('.comments_pic ul').mouseenter(function(){
         clearInterval(timer1);
      });
      $('.comments_left').mouseenter(function(){
         clearInterval(timer1);
      });
      $('.comments_right').mouseenter(function(){
         clearInterval(timer1);
      });
       
       $('.comments_pic ul').mouseleave(function(){
        	 timer1=setInterval(function(){
	   	     $('.comments_left i').click();
	         },4000);
       });*/
	
	

	/*
	'mouseenter':function(){
		        clearInterval(comments_timer);
	           },
	           'mouseleave':function(){
		  var comments_timer=setInterval(comments_pic,2000);
	           }*/
   /*function comments_pic(){//向左
   	var pic_width=$('.comments_pic li').eq(0).width();
   	$('.comments_pic ul').animate({'margin-left':-pic_width},function(){//先向左移动
    $('.comments_pic ul li:first').appendTo($('.comments_pic ul'));//在把移动出去的第一个放到最后一个
    $('.comments_pic ul').css('margin-left',0);//移动后再复原
   	});
   
   }*/

 /* function comments_pic(){//向右
   	var pic_width=$('.comments_pic li').eq(0).width();
   	$('.comments_pic ul').css('marginLeft',-pic_width);  //先将整体向左移动
    $(".comments_pic ul li:last").prependTo($('.comments_pic ul'));  //再将最后一个放在最前面
    $('.comments_pic ul').animate({marginLeft:"0px"})};  //然后执行动画再将整体恢复原状
   var comments_timer=setInterval(comments_pic,2000);*/
	
	
	
	/*$("#myCarousel1").carousel({
		interval:4000,
	})
	*/
	/*$('#right').click(function(){
		$('#next_one').removeClass('active');
		$('#hot_one').addClass('active');
	
	})
	$('#left').click(function(){
			$('#next_one').addClass('active');
		$('#hot_one').removeClass('active');
	})*/
	/*$('.carousel-control').css('line-height',$('.carousel-inner img').height()+'px');//设置箭头的位置
	$(window).resize(function(){//设置指头在改变窗口大小的时候，相应改变箭头的位置
		
		var $height=$('.carousel-inner img').eq(0).height()||
					$('.carousel-inner img').eq(1).height()||
					$('.carousel-inner img').eq(2).height()||
					$('.carousel-inner img').eq(3).height()
		$('.carousel-control').css('line-height',$height+'px');
	})*/
	
	$(window).resize(function(){
		var winWidth=$(window).width();
		$('.regin').css('left',(winWidth-1000)/2);
		
	})
	$('.regin').css('left',($(window).width()-1000)/2);
	
})
