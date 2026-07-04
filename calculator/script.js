let numbers = document.querySelectorAll(".number");
let result = document.querySelector(".result");
let Ac = document.querySelector(".Ac");
let Del = document.querySelector(".Del");
let asign = document.querySelectorAll(".asign");
let equal = document.querySelector(".equal");

if (equal){
    equal.addEventListener("click", ()=>{
        if(result.value != ""){
            result.value = result.value.replaceAll("×", "*")
            result.value = result.value.replaceAll("÷", "/")
            result.value = eval(result.value)
        }
    })
}
if (Ac) {
  Ac.addEventListener("click", () => {
    result.value = "";
  });
}
if(Del){
    Del.addEventListener("click", ()=>{
        result.value = result.value.slice(0,-1);
    })
}
if (numbers.length > 0) {
  numbers.forEach((num) => {
    num.addEventListener("click", () => {
      result.value += num.value;
    });
  });
}
if (asign.length > 0) {
  asign.forEach((item) => {
    item.addEventListener("click", () => {
      if (result.value != "") {
        let lastInput = result.value.slice(-1);
        if (
          lastInput != "+" &&
          lastInput != "-" &&
          lastInput != "×" &&
          lastInput != "÷"
        ) {
          result.value += item.value;
        }
      }
    });
  });
}
