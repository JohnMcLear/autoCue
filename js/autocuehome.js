function fromEdit(){
  var text = $('#textarea').val();
  var text = text.replace(/\n/g, '<br />');
  $('#auto').html(text);
  $('#example').css({width:"100%"});
  $('#textarea').hide();
  $('#go').hide();
  $('#edit').show();
  $('#example').autoque({'autoPlay':'true','fontColor':'#fff','fontSize':'28px'}); // sets the pad id and puts the pad in the div
  $('#autoqueControls').show();
  $('#autoqueControls').css({'color':'#000'});
}

function toEdit(){
  $('#edit').hide();
  $('#go').show();
  $('#example').css({width:"1px"});
  $('#textarea').show();
  $('#autoqueControls').hide();
}
