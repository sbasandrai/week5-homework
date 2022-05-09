//today's date added

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));
