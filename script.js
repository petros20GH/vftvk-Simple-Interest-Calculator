function compute()
{
    // Retrieve principal amount
    var principal = document.getElementById("principal").value;

    // Validate principal amount from the form
    if ((principal == "") || (principal <= 0))
    {
        window.alert("Please enter a positive number for the principal amount.");

        document.getElementById("principal").focus();

        return;
    }

    // Retrieve the interest rate and number of years from the form
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
 
    // Compute actual year
    var futureYear = parseInt((new Date()).getFullYear()) + parseInt(years);

    // Compute interest
    var interest = principal * years * rate / 100;

    // Write interest results on the form
    document.getElementById("result").innerHTML =
        "If you deposit <mark>" + principal + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "</mark> %.<br>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
        "in the year <mark>" + futureYear + "</mark>.";
}

// Update the displayed value for the interest rate range slider.
function rate() {
    document.getElementById("rateDisplay").innerHTML =
       document.getElementById("rate").value + " %";    
}