// Current date and time
const momentElement = moment();
$(currentDay).text(momentElement.format("dddd Mo MMMM YYYY"));

// $("div").data({ hour: [9, 10, 11, 12, 1, 2, 3, 4, 5] });

function taskLog() {
  $("#9").val(localStorage.getItem("9"));
  $("#10").val(localStorage.getItem("10"));
  $("#11").val(localStorage.getItem("11"));
  $("#12").val(localStorage.getItem("12"));
  $("#1").val(localStorage.getItem("1"));
  $("#2").val(localStorage.getItem("2"));
  $("#3").val(localStorage.getItem("3"));
  $("#4").val(localStorage.getItem("4"));
  $("#5").val(localStorage.getItem("5"));

  console.log(taskLog);
}

taskLog();

$(".saveBtn").on("click", function (event) {
  $(this).prev().val();
  event.preventDefault();

  var parent = $(this).parent();
  var time = parent.data("hour");
  var task = $(this).siblings(".task").first().val();

  localStorage.setItem(time, task);

  console.log(localStorage.getItem(time));
});
