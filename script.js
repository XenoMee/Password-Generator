const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password-el");
let secondPasswordEl = document.getElementById("second-password-el");
let generatePasswordButton = document.getElementById("generate-btn");

generatePasswordButton.addEventListener("click", function(){
    generateRandomPasswords();
})

function generateRandomPasswords() {
    let passwordOne = "";
    let passwordTwo = "";
    for (let i = 0; i < 16; i++) {
        let randomFirstCharacter = Math.floor(Math.random() * characters.length);
        let randomSecondCharacter = Math.floor(Math.random() * characters.length);
        console.log(randomFirstCharacter, randomSecondCharacter);
        passwordOne += characters[randomFirstCharacter];
        passwordTwo += characters[randomSecondCharacter];
    }

    firstPasswordEl.innerHTML = passwordOne;
    secondPasswordEl.innerHTML = passwordTwo;

    return firstPasswordEl.innerHTML, secondPasswordEl.innerHTML;
}