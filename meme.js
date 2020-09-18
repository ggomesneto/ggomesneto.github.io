

function createMeme() {

let fontSize = $(`#fontSize`)

let imgSrc = $('#imgSrc').val()

$('#memeImg').attr('src', imgSrc)

$('<canvas>').attr('id', 'canvas').appendTo('.meme')

var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d');
canvas.width = 400;

canvas.crossOrigin = "Anonymous";
canvas.height = 300;

ctx.drawImage($('img').get(0), 0, 0, 400, 300);
ctx.font = `25px Verdana`

$('#inp').remove()
$('#inp2').remove()
$('#br').remove()

$('<p>').attr('id', 'br').appendTo('#formMeme')

$('<input>').attr({
    type: 'text',
    id: 'inp',
    placeholder: 'Add Top Text'
}).appendTo('#formMeme')

$('<p>').attr('id', 'br').appendTo('#formMeme')

$('<input>').attr({
    type: 'text',
    id: 'inp2',
    placeholder: 'Add Bottom Text'
}).appendTo('#formMeme')

$('<p>').attr('id', 'br').appendTo('#formMeme')



$('<p>').attr('id', 'br').appendTo('#formMeme')


$(document).on('input','#inp',function(){
    //refill text
    ctx.fillStyle = "white";
    
    ctx.fillText($(this).val(),0,40);
});

$(document).on('input','#inp2',function(){
    //refill text
    ctx.fillStyle = "white";
    ctx.fillText($(this).val(),0,280);
});

}

$('#subMeme').click(function(evt){
    evt.preventDefault()
    createMeme()
});

$('#resetMeme').click(function(event){
    event.preventDefault()
    $('#canvas').remove()
    $('#inp').remove()
    $('#inp2').remove()
    $('#br').remove()
  
});


