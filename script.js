// const input = document.getElementById('inputBox');
// const buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// buttons.forEach(button => {

//      button.addEventListener('click', (e) => {
//         if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }
        
//         else if(e.target.innerHTML =='AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//         string += e.target.innerHTML;
//         input.value = string;
//         }
//      })
// })

// // Improved version  of Js Code -----------------

const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

function updateDisplay() {
    input.value = expression;
}

buttons.forEach(button => {

    button.addEventListener("click", (event) => {

        const value = event.target.textContent;

        if (value === "=") {

            try {
                expression = eval(expression).toString();
            } catch {
                expression = "Error";
            }

        } else if (value === "AC") {

            expression = "";

        } else if (value === "DEL") {

            expression = expression.slice(0, -1);

        } else {

            expression += value;

        }

        updateDisplay();

    });

});