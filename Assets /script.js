// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const currentDay = dayjs().format('dddd, MMMM D, YYYY');
console.log(currentDay);

const currentHr = dayjs().hour();
console.log(currentHr);



$(document).ready(function(){

  $("#currentDay").text(currentDay);

  $(".saveBtn").on("click", function(){

    let timeBlockId = $(this).parent().attr("id");
    let userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);

  });

  //color change based on time of day
  function eachTimeSlot() {
    $(".time-block").each(function () {
      let timeBlock = parseInt($(this).attr("id").split("hr-")[1]);

      if (timeBlock < currentHr) {
        $(this).addClass("past").removeClass("present future");
      } else if (timeBlock === currentHr) {
        $(this).addClass("present").removeClass("past future");
      } else {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }


  $("#hr-09 .description").val(localStorage.getItem("hr-09"));
  $("#hr-10 .description").val(localStorage.getItem("hr-10"));
  $("#hr-11 .description").val(localStorage.getItem("hr-11"));
  $("#hr-12 .description").val(localStorage.getItem("hr-12"));
  $("#hr-13 .description").val(localStorage.getItem("hr-13"));
  $("#hr-14 .description").val(localStorage.getItem("hr-14"));
  $("#hr-15 .description").val(localStorage.getItem("hr-15"));
  $("#hr-16 .description").val(localStorage.getItem("hr-16"));
  $("#hr-17 .description").val(localStorage.getItem("hr-17"));

  eachTimeSlot();

});
