var pushedCount = 0;
var totalNumeric = 0;

function pushedButton(bt) {
    if (bt == "Clear") {
        document.getElementById('text').textContent = "0";
        document.getElementById('counter_label').textContent = "";
        totalNumeric = 0;
        pushedCount = 0;
    } else if (bt == "AVG") {
        document.getElementById('text').textContent = Math.ceil((totalNumeric / pushedCount) * 100) /100;
        document.getElementById('counter_label').textContent = "Σ👤" + totalNumeric + " / " + pushedCount;
    } else {
        pushedCount++;
        totalNumeric += parseInt(bt);
        document.getElementById('text').textContent = totalNumeric;
        document.getElementById('counter_label').textContent += " 👤:" + bt + " ";
    }
}