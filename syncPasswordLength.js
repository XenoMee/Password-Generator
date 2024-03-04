charactersAmountNumber.addEventListener("input", syncCharacterAmount);
charactersAmountRange.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  charactersAmountNumber.value = value;
  charactersAmountRange.value = value;
}
