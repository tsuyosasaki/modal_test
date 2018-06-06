////////////////////////////////////////
//　SCRIPT
////////////////////////////////////////
$(function(){
	// var mdwBtn = $('.modalBtn'),
	var mdwBtn = $('[id^=modal-]'),
	overlayOpacity = 0.7,
	fadeTime = 500;

	console.log('mdwBtn', mdwBtn);

	mdwBtn.on('click',(e) => {
		console.log('e', e);
		// console.log('this', this);
		elm = e.currentTarget;
		console.log('currentTarget', elm);
		console.log('target', e.target);

		id = Number(mdwBtn.index(elm));
		console.log('id', id);
		e.preventDefault();

		mdlwParts = $('.mdlw--parts');
		console.log('mdlwParts', mdlwParts);
		console.log('mdlwParts1', mdlwParts.eq(1));

		var setMdw = $(elm),
		setHref = setMdw.attr('href'),
		// setSource = $(setHref).html(),
		setSource = mdlwParts.eq(id).html();
		wdHeight = $(window).height();
		// console.log('setHref', setHref);
		// console.log('setSource', setSource);
		// console.log('wdHeight', wdHeight);

		console.log('setSource', setSource);

		$('body').append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">×</div><div id="contWrap">' + setSource + '</div></div>');

		$('#mdOverlay,#mdWindow').css({display:'block',opacity:'0'});
		$('#mdOverlay').css({height:wdHeight}).stop().animate({opacity:overlayOpacity},fadeTime);
		$('#mdWindow').stop().animate({opacity:'1'},fadeTime);

		$(window).on('resize',function(){
			var adjHeight = $(window).height();
			$('#mdOverlay').css({height:adjHeight});
		});

		$('#mdOverlay,.mdClose').on('click',function(){
			$('#mdWindow,#mdOverlay').stop().animate({opacity:'0'},fadeTime,function(){
				$('#mdOverlay,#mdWindow').remove();
			});
		});
	});
});
