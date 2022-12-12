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

// 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