function compute() {
    var principal = document.getElementById("principal").value;
    if(principal > 0) {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var result = document.getElementById("result");
        result.innerHTML = 'If you deposit <span class="amount">' + principal + '</span>,<br>at an interest rate of  <span class="amount">' + rate + '%</span>.<br>You will receive an amount of  <span class="amount">' + interest + '</span>,<br>in the year <span class="amount">' + year + '</span><br><br>The number above are for indication only. Make sure the output contains the relevant values by using the correct variables';
    }
    else if(principal == '') {
    }
    else if(principal <= 0) {
        alert('Enter a positive number');
    };
    document.getElementById("principal").focus();
};

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
};
