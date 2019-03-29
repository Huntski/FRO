let length = document.querySelector('#length');
let weight = document.querySelector('#weight');
let btn_calc = document.querySelector('.btn_calc');
let output_bmi = document.querySelector('.output_bmi');

btn_calc.addEventListener('click', () => {
    calcBMI(weight.value, length.value);
});

function calcBMI(weight, length) {
    let xmlhttp = new XMLHttpRequest(); // get xml http request
    let httpString = "BMI.php?length=" + length + "&weight=" + weight;
    console.log(httpString);
    xmlhttp.open('GET', httpString, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            output_bmi.innerHTML = this.responseText;
        }
    };
}
