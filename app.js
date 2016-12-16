$(document).ready( function() {
	var $dateButton = $('#date-button');
	var $weekBack = $('#week-back');
	var $weekForward = $('#week-forward');

	var weekOffset = 0;

	$dateButton.click(function() {
		weekOffset = 0;
		showDates();
	})

	$weekBack.click(function() {
		weekOffset += 1
		showDates()
	})

	$weekForward.click(function() {
		weekOffset -= 1
		showDates()
	})

  function showDates() {
		var today = new Date()
		var numberOfDay = today.getDay();
  	for(i = 0; i < 7; i++) {
  		var dayOffset = (numberOfDay + (weekOffset * 7)) - i 
			var customDay = new Date(Date.now()-((dayOffset * 24)*60*60*1000));
		  $('#day' + i).text((customDay.getMonth() + 1) + "/" + customDay.getDate() + "/" + customDay.getFullYear())
  	}
  	if(weekOffset === 0) {
		  $('#day' + numberOfDay).css("backgroundColor", "#aaf")
  	} else {
  		$('#day' + numberOfDay).css("backgroundColor", "")
  	}
  }

	showDates();
});