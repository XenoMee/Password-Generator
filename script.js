// TODO: Ability to set a passworl length
// TODO: Add "copy on click"
// TODO: Toggle symbols and numbers on/off
// TODO: Light/Dark mode toggle button

// TODO: Sync number and range inputs
const charactersAmountNumber = document.getElementById("password-length");
const charactersAmountRange = document.getElementById("password-range");

charactersAmountNumber.addEventListener('input', syncCharacterAmount);
charactersAmountRange.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    // const value = e.target.value;
    // charactersAmountNumber.value = value;
    // charactersAmountRange.value = value;
}