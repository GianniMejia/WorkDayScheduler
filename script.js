console.log("Loading JS file ");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//set current date and time on the html page 
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var currentTime = moment().hour();
console.log(currentTime);

//reference code JQUERY : https://api.jquery.com/each/

//loop through all the time blocks to change background color 
$(".row").each(function () {

    var time_block_hour =parseInt($(this).attr("id"));
    console.log("Each time block hour", time_block_hour);

    //compare the time-block-hour with the current time 
    if (time_block_hour < currentTime) {
        $(this).find(".description").addClass("past");

    } else if (time_block_hour === currentTime) {
        $(this).find(".description").addClass("present");
    } else {
        $(this).find(".description").addClass("future");
    }
});