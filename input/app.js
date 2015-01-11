$('#fromDate').datetimepicker({
  pickTime: false
});
$('#toDate').datetimepicker({
  pickTime: false
});

$('#submit').click(function (){
  slabs.send({name:"pie"});
});
