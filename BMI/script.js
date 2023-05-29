function cal() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight && height) {
        var bmi = weight / Math.pow(height / 100, 2);
        document.getElementById("total").innerHTML = "Your BMI is: " + bmi.toFixed(3);
    } else {
        document.getElementById("total").innerHTML = "Please enter both weight and height.";
    }
}

function openWikipedia() {
    window.open("https://en.wikipedia.org/wiki/Body_mass_index", "_blank");
}
