const $css = $('.css-item');
const $cssOptions = $('#css-options');
const $boxCss = $('#box-css');
const $containerCss = $('#container-css');
const $box = $('#box');
const $visualizer = $('#visualizer')
const $errorInfo =$('#error-info')

function getCss() {
	$box.removeAttr('style');

	let items = $('#box-css .css-item');

	for (i = 0; i < items.length; i++) {
		
		html = items[i].innerHTML;
		div = html.split(':');
		div = div[0];
		sel = items[i].children[0].value;

		$('#box').css(div, sel);
	}

	$visualizer.removeAttr('style');
	let errors = []
	let containerItems = $('#container-css .css-item');

	for (i=0;i< containerItems.length;i++){

			html = containerItems[i].innerHTML;
			div = html.split(':');
			div = div[0];
			sel = containerItems[i].children[0].value;

		if (containerItems[i].classList.contains('css-cont')){

			$visualizer.css(div,sel)

		} else {

			errors.push(div)
			$cssOptions.append(containerItems[i])
			
			
		}
	}

	if (errors.length > 0){
		$errorInfo.text(`Treat the container as the BODY. ${errors} don't/doesn't affect the BODY.`)
	}

	let NA_Items = []
}

$('#css-options, #box-css, #container-css')
	.sortable({
		connectWith : '.connectedSortable'
	})
	.disableSelection();


window.setInterval(function() {
	getCss();
}, 2000);



