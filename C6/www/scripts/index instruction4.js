// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnCalculate").bind("click", function () {

            var hoursWorked; 
            var hourlyRate;

            hoursWorked = $("#txtHoursWorked").val();
            hourlyRate = $("#txtHourlyRate").val();

            var timeDayWorked = getRadioValue("rdoTimedayworked");

            var mywage = timeDayWorked * wages(hoursWorked, hourlyRate);

            localStorage.setItem("hoursworked", hoursWorked);
            localStorage.setItem("hourlyrate", hourlyRate);
            localStorage.setItem("actualwage", mywage);

            window.location = "result.html";
        });
    });

} )();