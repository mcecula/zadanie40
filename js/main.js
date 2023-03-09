let button = document.getElementById('bt');

let nazwa = document.getElementById("name");
let nazwisko = document.getElementById("surname");
let tel = document.getElementById("phone");

button.addEventListener('click', function () {
    let imie = document.getElementById("imie").value;
    nazwa.textContent = imie;
    let nazwisko2 = document.getElementById("nazwisko").value;
    nazwisko.textContent = nazwisko2
    let tel2 = document.getElementById("numertelefonu").value;
    tel.textContent = tel2
})


