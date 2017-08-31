
             
	 export default function CarouselImg(){
	 	alert("haole")
	//  	 this.defaultOptions={
	// 		selector:".container",
	// 		indexPos:"right",
	// 		arrowsPos:"left",
	// 		width:"600px",
	// 		height:"400px",
	// 		imgArr:["./img/1.jpg","./img/2.jpg","./img/3.jpg","./img/4.jpg"]
	// 	};
	// 		this.content=$("<div class='content'></div>");
	// 		this.arrows = $("<div class='arrows'></div>");
	// 		this.prev = $('<span class="prev"><</span>');
	// 		this.next= $('<span class="next">></span>');
	// 		this.tab = $("<ul class='tab'></ul>");
	// };

	// CarouselImg.prototype.init=function(option){
		
	// 	$.extend(this.defaultOptions,option);
	// 	console.log(option);
	// 	for(var i = 0; i < option.imgArr.length; i++){
	// 		var $img = $("<img src="+option.imgArr[i]+">");
	// 		var $li = $('<li></li>')
	// 		if(option.indexPos.indexOf("center") == -1){
	// 			$li.html(i+1);
	// 			this.tab.addClass("right")
	// 			$li.addClass("right");
	// 		}else{
	// 			this.tab.addClass("center")
	// 			$li.addClass("center");
	// 		}
	// 		this.content.append($img);
	// 		this.tab.append($li);
			
	// 	}
		
	// 	if(option.arrowsPos.indexOf("bottom")==-1){
	// 		this.arrows.addClass("center");
	// 		this.prev.addClass("center");
	// 		this.next.addClass("center");
	// 	}else{
	// 		this.arrows.addClass("bottom");
	// 		this.prev.addClass("bottom");
	// 		this.next.addClass("bottom");
			
	// 	}
	// 	this.arrows.append(this.prev).append(this.next);
	// 	$(option.selector).append(this.content).append(this.tab).append(this.arrows);
	// 	var ImgWidth = $('img',this.content).eq(0).width();
	// 	this.content.append($('img',this.content).eq(0).clone());
	// 	this.content.width(ImgWidth*$('img',this.content).length);
	// 	$('li',this.tab).eq(0).addClass('select')
	// 	this.tab.on('mouseover','li',function(){
	// 		var index=$(this).index();
	// 		changeImg(index);
	// 	});	
	// 	var that = this;
	// 	var iNow = 0;
	// 	this.prev.on('click',function(){
	// 		iNow--;
	// 		if(iNow == -1){
	// 			iNow = $('img',that.content).length-2;
	// 			that.content.css("left",ImgWidth* ($('img',that.content).length));
	// 		}
	// 		changeImg(iNow);
	// 	});
	// 	this.next.on('click',function(){
	// 		iNow++;
	// 		if(iNow == $('img',that.content).length){
	// 			iNow = 1;
	// 			that.content.css("left",0);
	// 		}
	// 		changeImg(iNow);
	// 	});
		
	// 	function run(){
	// 		that.Timer = setInterval(function(){
	// 			that.next.trigger("click");
	// 		},1000)
	// 	};
	// 	$(option.selector).on('mouseover',function(){
	// 		console.log(123);
	// 		clearInterval(that.Timer);
	// 	})
	// 	$(option.selector).on('mouseout',function(){
	// 		run();
	// 	})
	// 	var $ali = $('li',that.tab);
	// 	function changeImg(idx){
	// 		iNow = idx;
			 
	// 		for(var i=0; i<$ali.length;i++){
	// 			$('li',that.tab).eq(idx==$ali.length?0:idx).addClass('select').siblings().removeClass('select');
				
	// 		}
	// 		that.content.animate ({left:-ImgWidth*(idx)});
	// 	}

	}
			
		//return CarouselImg;

