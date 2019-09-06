$(".avatar > div:gt(0)").hide();

setInterval(function() { 
  $('.avatar > div:first')
    .slideOut(1000)
    .next()
    .slideIn(1000)
    .end()
    .appendTo('.avatar');
},  3000);