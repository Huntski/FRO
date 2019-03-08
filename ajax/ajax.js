/*
*   author: Wiebe Ranzijn MD1A
*/

let firstname = document.querySelector('.firstname'),
    lastname = document.querySelector('.lastname'),
	age = document.querySelector('.age'),
	email = document.querySelector('.email'),
	btn_submit = document.querySelector('.btn_submit'),
	response = document.querySelector('.response');

btn_submit.addEventListener('click', ajax);

function ajax() {
	let input = document.querySelectorAll('input[type=text]');
	let error;

	for (let i = 0; i < input.length; i++) {
		if (input[i].value == "") {
			input[i].classList.add('error');

			error = true;
		} else {
			input[i].classList.remove('error');
		}
	}

	if (error) {
		console.error('input empty');
		return;
	}

	console.log(input);
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			response.innerHTML = this.responseText;
		}
	};
	let httpString = "form_1.php?firstname=" + firstname.value + "&lastname=" + lastname.value +"&age=" + age.value + "&email=" + email.value;

	console.log(httpString);

	xmlhttp.open('GET', httpString, true);
	xmlhttp.send();
}