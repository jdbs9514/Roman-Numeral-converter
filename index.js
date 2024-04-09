const input = document.querySelector('input');
const convertBtn = document.getElementById('convert-btn');
const outPut = document.getElementById('output');


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
    1000: "M"
  };

  if (num <= 0){
    const p = document.createElement('p');
    p.textContent = "Please enter a number greater than 0";
    outPut.appendChild(p);
  }

  for (let n of Object.keys(romanNum).sort((a,b) => b - a)){
    n = parseInt(n);
    if (num >= n){
      return romanNum[n] + convertToRoman(num - n);
    }
  }
  
}



convertBtn.addEventListener('click', convertToRoman);
