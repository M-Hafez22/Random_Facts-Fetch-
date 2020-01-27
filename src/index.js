import './styles/main.scss';

let loader = document.querySelector(".loaders");

let numberInput = document.getElementById("number");
// fact
let fact = document.querySelector(".fact");
let factText = document.getElementById("factText");
// Buttons
let btnNumber = document.getElementById("btnNumber");
let btnYear = document.getElementById("btnYear");
let btnMath = document.getElementById("btnMath");
let buttons = document.getElementsByClassName("type__buttons__btn ");

//API
let url = 'http://numbersapi.com/';
let type= '';

// Generate Facts when Input
numberInput.addEventListener('input', getFact);

btnNumber.addEventListener('click', changeToNumber);
btnYear.addEventListener('click', changeToYear);
btnMath.addEventListener('click', changeToMath);


// Change API Facts 
// Change API to Number Facts
function changeToNumber(){
	for(let b of buttons){b.classList.remove('active')};
  btnNumber.classList.add('active');
	
	if(numberInput.value){
		type = '';
  	getFact();
	}  
}

// Change API to Year Facts 
function changeToYear(){
  for(let b of buttons){b.classList.remove('active')};
  btnYear.classList.add('active');
  type = '/year';
  getFact();
}

// Change API to Math Facts
function changeToMath(){
	for(let b of buttons){b.classList.remove('active')};
  btnMath.classList.add('active');
  type = '/math';
  getFact();
}


function  getFact(){
  loader.style.display = 'block';
  let number = `${numberInput.value}`;
    fetch(`${url}${number}${type}`)
    .then((resp) => resp.text())
    .then((data) => {
      if(number == ''){
        loader.style.display = 'none';
        fact.style.display = 'none';
        console.log(number);
      }else if(number != ''){
        loader.style.display = 'none';
        fact.style.display = 'block';
        factText.textContent = data;
      }
    })
    .catch((err) => console.log(err));
}
