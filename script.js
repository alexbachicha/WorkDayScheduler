$(document).ready(function() {
    // Listens for saveBtn click listener (user input and time stamp)
    $(".saveBtn").on("click", function () {
        // Gets nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save items in local storage
        localStorage.setItem(time, value);
    });

    function hourTracker() {
        // Get current number of hours
        var currentHour = moment().hour();

        // Loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            // Check if we have moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    hourTracker();

    // Set up interval to check if current time needs to be updated
    var interval = setInterval(hourTracker, 15000);

    // Loads saved data from localStorage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // Display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do, h:mm:ss a"));
});
