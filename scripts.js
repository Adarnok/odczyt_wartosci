'use strict';
// var imie;
// var nazwisko;

// nazwisko = "Dziegiel";
// imie = "Michal";

// console.log(imie + nazwisko)

// // Operator konkatenacji czyli łczenia stringów
// console.log('Twoje nazwisko to: ' + nazwisko);


// document.getElementById("resulta").addEventListener("submit", myFunction);
// document.querySelectorAll('form').onsubmit = function(){myFunction};
// document.querySelectorAll('form').addEventListener("submit", myFunction);
//
// const form = document.querySelector('form');
// form.addEventListener("submit", myFunction);
// function myFunction(e) {
//     e.preventDefault();

//     var x = document.querySelectorAll('input');
//     console.log (x)
//     var text = "";
//     var i;
//     for (i = 0; i < x.length ;i++) {
//         text += x.elements[i].value + "<br>";
//     }
//     // document.write(text);
//     document.getElementById("result").innerHTML = text;
// }



const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.elements[0].value
    console.log (name)
    const surname =  form.elements[1].value
    console.log (surname)
    document.querySelector('#result').innerHTML = `Twoje imię to: <b>${name}</b> <br>Twoje nazwisko to: <b>${surname}</b>`;
    name.value=``;
    surname.value=``;
});


// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const name = document.querySelector("input");
//     const surname =  document.querySelector("input", 2);
//     document.querySelector('#result').innerHTML = `Twoje imię to: <b>${name.value}</b> <br>Twoje nazwisko to: <b>${surname.value}</b>`;
//     name.value=``;
//     surname.value=``;
// });