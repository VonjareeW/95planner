// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// constant to grab current date and Hour of day

const currentDay = dayjs().format('dddd, MMMM D, YYYY');
console.log(currentDay);

const currentHr = dayjs().hour();
console.log(currentHr);


// when user inputs data in specifc time block/text box and clicks save , data is store locally
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

// Time block based on hours from 9am to 5pm , info retrieve from specific item storage
for(let i = 9; i <= 17; i++) {  // Changed 'O' to '9' and '<' to '<='
  $("#" + "hr-" + i + " .description").val(localStorage.getItem("hr-" + i));  // Changed 'getltem' to 'getItem'
}

eachTimeSlot();

});