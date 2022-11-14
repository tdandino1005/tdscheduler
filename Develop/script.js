
 var today = moment();
 var timeblock1 = document.querySelector('.container');

 $('#currentDay').text(today.format('LLL'));

$('.saveBtn').on('click', function () {

    var textValue = $(this).siblings('.description').val();

    var timeKey = $(this).parent().attr('id');
  
    localStorage.setItem(timeKey, textValue);
  });




$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));

function audit() {
    let currentHour = today.hours();

    $('.time-block').each(function () {
        var time = parseInt($(this).attr('id').split("hour")[1]);

        if (time < currentHour) {
            $(this).addClass('past');
        }

            else if (time === currentHour) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
    });
}

audit();

setTimeout(function ()  {
    location = ''
}, 1000 * 60);
