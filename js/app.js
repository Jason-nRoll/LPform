function submitTest()
{
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.disabled = true;
    setTimeout(function() {
        alert("Task has been added");
        btnSubmit.disabled = false;
    }, 1500);
    return false;
}

$(document).foundation()
