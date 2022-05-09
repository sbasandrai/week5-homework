//today's date added

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

// function for each timeblock to highlight in different colour whether it is present/past/future"
$.each(timeBlock, function (i, hour) {
  var hourId = parseInt($(this).attr("id"));
  if (hourId === now) {
    $(this).next().addClass("present");
  } else if (hourId < now) {
    $(this).next().addClass("past");
  } else if (hourId > now) {
    $(this).next().addClass("future");
  }
});

// adds diary event to local storage

$(".saveBtn").on("click", function (event) {
  var calendarItem =
    event.target.parentElement.previousElementSibling.children[0].value;
  localStorage.setItem(event.target.attributes[0].value, calendarItem);
});
