const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPasswordEl = document.getElementById("first-password-el");
let secondPasswordEl = document.getElementById("second-password-el");
let generatePasswordButton = document.getElementById("generate-btn");

generatePasswordButton.addEventListener("click", function(){
    generateRandomPasswords();
})

function generateRandomPasswords() {
    let password = "";
    for (let i = 0; i < 30; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length);
        password += characters[randomCharacter];
    }

    let passwordOne = password.slice(0, 15);
    let passwordTwo = password.slice(15);

    firstPasswordEl.innerHTML = passwordOne;
    secondPasswordEl.innerHTML = passwordTwo;

    return firstPasswordEl.innerHTML, secondPasswordEl.innerHTML;
}