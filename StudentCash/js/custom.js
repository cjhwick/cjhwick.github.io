function popup(button,type){
	var color = '';
	var src = '';
	var left = '';
	switch(type){
		case 'boom':
			color = 'rgb(223,227,210)';
			src = 'images/boom-arrow.png';
			left = '16.5%';
			break;
		case 'na':
			color = 'rgb(227,210,216)';
			src = 'images/na-arrow.png';
			left =  '47%';
			break;
		case 'buy':
			color = 'rgb(238,238,238)';
			src = 'images/buy-arrow.png';
			left = '77.5%';
			break;
	}
	
	var row = $(button).closest( ".row" );
	var width = $(row).width();
	var padding = 0;
	
	$(row).children('.col-md-5').each(function() { 
	    padding += parseInt($(this).css('padding-left'));
	    padding += parseInt($(this).css('padding-right'));
	});

	$(row)
		.next(".showThis")
		.css({"background-color": color , "width": width-padding, "display": 'block'});
		
	$(row)
		.next(".showThis")
		.find('img:first-child').prop('src',src).css('left',left);	
		
	
}