// // console.log("hellow world");
// // alert("k xa?");
// let response = prompt("what is your name?");
// // console.log(response);
// // alert("hello  " + response);

// console.log(output);
// output.innerText = response;

let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output");
let singlePeoples = ['bikah', 'dinesh', "roshan", 'prajjwal', 'shreejan', 'kushal', 'bishal', 'mandal', 'manish']
// let gayMeter = 1;

function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;
    // console.log(name1, name2);
    // let gayMeter = parseint(Math.random() * 100);

    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "naam hal vai";
    }

    else {

        if ((singlePeoples.includes(name1.toLowerCase()) || singlePeoples.includes(name2.toLowerCase()))) {
            output.innerText = "the given person is gay";
        }
        else {
            let lovePercent = parseInt(Math.random() * 100);
            output.innerText = name1 + " and " + name2 + " are " + lovePercent + " % in love";

        }

        yourName.value = "";
        theirName.value = "";
    }
}