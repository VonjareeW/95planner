// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

const currentDay = dayjs().format('dddd, MMMM D, YYYY h:mm A');
console.log(currentDay);

const currentHr = dayjs().hour();
console.log(currentHr);

$(document).ready(function(){

  $("#currentDay").text(currentDay);

  $(".saveBtn").on("click", function() {


  }
}



$("#hr-9  .description").val(localStorage.getItem("hr-9"));
$("#hr-10 .description").val(localStorage.getItem("hr-10"));
$("#hr-11 .description").val(localStorage.getItem("hr-11"));
$("#hr-12 .description").val(localStorage.getItem("hr-12"));
$("#hr-13 .description").val(localStorage.getItem("hr-13"));
$("#hr-14 .description").val(localStorage.getItem("hr-14"));
$("#hr-15 .description").val(localStorage.getItem("hr-15"));
$("#hr-16 .description").val(localStorage.getItem("hr-16"));
$("#hr-17 .description").val(localStorage.getItem("hr-17"));


//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
