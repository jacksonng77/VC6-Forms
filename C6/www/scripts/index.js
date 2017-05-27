// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    $(document).ready(function () {
        $("#btnLogin").bind("click", function () {
            if ($("#LoginForm").valid()) {
                login();
            }
        });
    });

} )();