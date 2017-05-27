function wages(hoursWorked, hourlyRate) {
    var totalsalary = hoursWorked * hourlyRate;
    return totalsalary;
}

function home() {
    window.location = "index.html";
}

function hello() {
    window.location = "hello.html";
}

function goodbye() {
    window.location = "goodbye.html";
}

function getRadioValue(groupName) {
    var _result;
    try {
        var o_radio_group = document.getElementsByName(groupName);
        for (var a = 0; a < o_radio_group.length; a++) {
            if (o_radio_group[a].checked) {
                _result = o_radio_group[a].value;
                break;
            }
        }
    } catch (e) { }
    return _result;
}