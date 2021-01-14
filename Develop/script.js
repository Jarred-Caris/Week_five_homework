// Current date and time
const momentElement = moment();
$(currentDay).text(momentElement.format("dddd Mo MMMM YYYY"));

// variable for current hour
var currentHour = moment().hour();

console.log({ currentHour });

// function to pull saved data from local storage
function taskLog() {
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#1").val(localStorage.getItem("13"));
  $("#2").val(localStorage.getItem("14"));
  $("#3").val(localStorage.getItem("15"));
  $("#4").val(localStorage.getItem("16"));
  $("#5").val(localStorage.getItem("17"));

  console.log(taskLog);
}

taskLog();

//save button function to set hour and text to local storage
$(".saveBtn").on("click", function (event) {
  $(this).prev().val();
  event.preventDefault();

  var parent = $(this).parent();
  var time = parent.data("hour");
  var task = $(this).siblings(".task").first().val();

  localStorage.setItem(time, task);

  console.log(localStorage.getItem(time));
});

// determining current hour on planner and prompting the colour scheme changes
$(".time-block").each(function () {
  var savedHour = parseInt($(this).data("hour"));
  console.log({ savedHour });

  if (savedHour < currentHour) {
    $(this).addClass("past");
  } else if (savedHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});
