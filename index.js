const input = document.querySelector('input');
const convertBtn = document.getElementById('convert-btn');


const convertToRoman = (num) => {

  let romanNum = [{
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }];

  let result = '';
  for (let r in romanNum) {

    result += r.repeat(Math.floor(num / romanNum[r]));
    console.log(result)
    num = num % romanNum[r];
    
  }
  
  return result
  
}


convertBtn.addEventListener('click', convertToRoman);
