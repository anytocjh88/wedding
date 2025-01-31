// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function () {
    $('#go-to-top').click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        return false;
    });
})

function copyToClipBoard(str) {
	window.navigator.clipboard.writeText(str).then(() => {
	  // 복사가 완료되면 이 부분이 호출된다.
	  alert(str + ' 복사되었습니다');
	});
}

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#main-carousel', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#thumbnail-carousel', {
    fixedWidth  : 100,
    fixedHeight : 120,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    arrows    : true
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
  
  var clipboard1 = new ClipboardJS('.btn-modal-a', {
		container: document.getElementById('modal_a')
	});

	clipboard1.on('success', function(e) {
		alert(e.text + ' 복사되었습니다');
		e.clearSelection();
	});
	
	var clipboard2 = new ClipboardJS('.btn-modal-b', {
		container: document.getElementById('modal_b')
	});

	clipboard2.on('success', function(e) {
		alert(e.text + ' 복사되었습니다');
		e.clearSelection();
	});
} );

// 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