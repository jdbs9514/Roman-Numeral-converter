const input = document.querySelector("input");
const convertBtn = document.getElementById("convert-btn");
const outPut = document.getElementById("output");

const convertToRoman = (num) => {
  let romanNum = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

    for (let n of Object.keys(romanNum).sort((a, b) => b - a)) {
      n = parseInt(n);
      if (num >= n) {
        return romanNum[n] + convertToRoman(num - n);
      }
    }

    if (num === 0) {
      return "";
    }
  
    if (num >= 4000) {
      return "Please enter a number less than 4000";
    }
  
    if (num <= 0) {
      return "Please enter a number greater than 0";
    }
  
    if (num === "") {
      return "Please enter a valid number";
    }

};

convertBtn.addEventListener("click", (e) => {

  e.preventDefault();
  
  const num = input.value;
  const result = convertToRoman(num)
  
  if (!num) {
    outPut.innerHTML = "Please enter a valid number";
  } else if (num <= 0) {
    outPut.innerHTML = "Please enter a number greater than or equal to 1";
  } else if (num >= 4000) {
    outPut.innerHTML = "Please enter a number less than or equal to 3999";
  } else {
    outPut.innerHTML = result;
  }
});
