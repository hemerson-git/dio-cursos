document.addEventListener("DOMContentLoaded", () => {
  const btnResult = document.querySelector("#btnResult");
  const result = document.querySelector("#result");

  btnResult.addEventListener("click", () => {
    const num1 = Number(document.querySelector("#number1").value);
    const num2 = Number(document.querySelector("#number2").value);

    let canContinue = validateInput(num1, num2);

    if (!canContinue) {
      alert("Both, number 1 and number 2 must be setted");
      return;
    }

    const isEquals = num1 === num2 ? "are" : "aren't";
    const sum = getSum(num1, num2);
    const isGreaterThan10 = sum > 10 ? "greater" : "lower";
    const isLowerThan20 = sum < 20 ? "lower" : "greater";

    const msg = `The numbers ${num1} and ${num2} ${isEquals} the same.
    its sum is ${sum}, that is ${isGreaterThan10} than 10 and ${isLowerThan20} than 20.`;

    setMessage(result, msg);
  });

  function validateInput(...params) {
    const result = params.some((value) => !isNaN(value));
    return result;
  }

  function setMessage(elem, msg) {
    elem.textContent = msg;
  }

  function getSum(...numbers) {
    const result = numbers.reduce((sum, number) => sum + number);
    return result;
  }
});
