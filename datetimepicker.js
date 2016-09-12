<link rel="stylesheet" type="text/css" href="/css/jquery.datetimepicker.css"/>
<script src="/js/jquery.datetimepicker.full.js"></script>

// Установка ограниченного времени на TimePicker
$.datetimepicker.setLocale('ru');
var logic = function( currentDateTime ){
	salon_district = $('select[name=salon_place]').val();
	if (currentDateTime && salon_district == 'Бежицкий'){
		this.setOptions({
			minTime:'10:00',
			maxTime:'20:00',
			step:30
		});
	}
	if (currentDateTime && salon_district == 'Советский'){
		this.setOptions({
			minTime:'10:00',
			maxTime:'21:00',
			step:30
		});
	}else
		this.setOptions({
			minTime:'10:00',
			maxTime:'20:00',
			step:30
		});
};
	
$('.datetimepicker_mask').datetimepicker({
	onChangeDateTime:logic,
	onShow:logic,
	dayOfWeekStart: 1
});

// Или - сделать проверку по дням недели и в воскресенье сделать выходной:

$.datetimepicker.setLocale('ru');
var logic = function( currentDateTime){
	if(currentDateTime.getDay()==1 || currentDateTime.getDay()==2 || currentDateTime.getDay()==3 || currentDateTime.getDay()==4 || currentDateTime.getDay()==5){
		this.setOptions({
			minTime:'09:00',
			maxTime:'18:00',
			step:30
		});
	}
	else if(currentDateTime.getDay()==6){
		this.setOptions({
			minTime:'10:00',
			maxTime:'14:00',
			step:30
		});
	}else{
		this.setOptions({
			minTime:'00:00',
			maxTime:'00:00',
			step:30
		});
	}
};
	
$('.datetimepicker_mask').datetimepicker({
	onChangeDateTime:logic,
	onShow:logic,
	dayOfWeekStart: 1
});