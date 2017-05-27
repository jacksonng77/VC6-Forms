(function () {
    "use strict";

    $(document).ready(function () {
        var actualwage;
        actualwage = localStorage.getItem("actualwage");

        var hoursworked;
        hoursworked = localStorage.getItem("hoursworked");

        var hourlyrate;
        hourlyrate = localStorage.getItem("hourlyrate");

        $("#lblActualWage").html("Actual Wage " + actualwage);
        $("#lblHoursWorked").html("Hours Worked " + hoursworked);
        $("#lblHourlyRate").html("Hourly Rate " + hourlyrate);
    });

})();