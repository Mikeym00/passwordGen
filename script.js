const upperCaseStatus = document.getElementById("caps");
const numberStatus = document.getElementById("nums");
const symbolStatus = document.getElementById("symbols");

const slider = document.getElementById("countslider");
const output = document.getElementById("slidervalue");
// Display the default slider value
output.innerHTML = slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

// #################################################################################

const generatePassword = document.getElementById("genpw");
generatePassword.addEventListener("click", generateButton);


// #################################################################################

const numbers = [0,1,2,3,4,5,6,7,8,9];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const symbols = ["!","@","#","$","%","^","&","*"];
 // #################################################################################

function generateButton(){
    // #################################################################################
    const charCount =  Number(slider.value); 
    
    let password = "";
    let holding = [];
    holding = holding.concat(letters);

    if(numberStatus.checked){
        holding = holding.concat(numbers);
    }
    if(upperCaseStatus.checked){
        holding = holding.concat(lettersUpper);
    }
    if(symbolStatus.checked){
        holding = holding.concat(symbols);
    }

    // #################################################################################
    const indices = Array(charCount).fill().map(element => element = Math.floor(Math.random() * holding.length));
    for(index of indices){
        password += holding[index];
    }
    document.getElementById("passwordString").textContent = password; 

    console.log(password);

}

