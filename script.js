// TODO: Ability to set a passworl length
// TODO: Add "copy on click"
// TODO: Toggle symbols and numbers on/off
// TODO: Light/Dark mode toggle button

const charactersAmountNumber = document.getElementById("password-length");
const charactersAmountRange = document.getElementById("password-range");

charactersAmountNumber.addEventListener('input', syncCharacterAmount);
charactersAmountRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    const value = e.target.value;
    charactersAmountNumber.value = value;
    charactersAmountRange.value = value;
}

// Generate a random password when the generate button is pressed
const generatePasswordButton = document.getElementById("generate-button");
const includeUppercaseEl = document.getElementById("uppercase-check");
const includeNumbersEl = document.getElementById("numbers-check");
const includeSymbolsEl = document.getElementById("symbols-check");
// const generatePassword = document.getElementById("generate-password");
generatePasswordButton.addEventListener('click', function() {
    const length = charactersAmountNumber.value;
    const includeUppercase = includeUppercaseEl.checked;
    const includeNumbers = includeNumbersEl.checked;
    const includeSymbols = includeSymbolsEl.checked;
    const generatedPassword = generateRandomPassword(length, includeUppercase, includeNumbers, includeSymbols);

});

// Create 'generateRandomPassword' functionality
const UPPERCASE_CHAR_CODES = parseASCIICodes(65, 90);
const LOWERCASE_CHAR_CODES = parseASCIICodes(97, 122);
const NUMBER_CHAR_CODES = parseASCIICodes(65, 90);
const SYMBOL_CHAR_CODES = parseASCIICodes(33, 47).concat(
    parseASCIICodes(58, 64).concat(
        parseASCIICodes(91, 96).concat(
            parseASCIICodes(123,126)
        )
    )
);
function generateRandomPassword(length, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase) charCodes =  charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeNumbers) charCodes =  charCodes.concat(NUMBER_CHAR_CODES);
    if(includeSymbols) charCodes =  charCodes.concat(SYMBOL_CHAR_CODES);
    let password = [];
    for(let i = 0; i < length; i++){
        const randomCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        password.push(String.fromCharCode(randomCode));
    }
    return password.join('');
}

// Create function to loop through ASCII codes
function parseASCIICodes(low, high){
    const codes = [];
    for(i = low; i < high; i++){
        codes.push(i);
    }
    return codes;
}