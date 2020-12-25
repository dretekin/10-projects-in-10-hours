const diplay = document.getElementById('pg__display')
const passwordShadow = document.getElementById('passwordShadow')
const password = document.getElementById('password')
const copyPassword = document.getElementById('copy')
const length = document.getElementById('length')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const number = document.getElementById('number')
const symbol = document.getElementById('symbol')
const genPassBtn = document.getElementById('pg__gen-btn')

let lengthValue = length.value;
length.addEventListener('change', function(e) {
    lengthValue = this.value;
})

let uppercaseValue = false;
uppercase.addEventListener('change', function(e) {
    uppercaseValue = this.checked;
})

let lowercaseValue = false;
lowercase.addEventListener('change', function(e) {
    lowercaseValue = this.checked;
})

let numberValue = false;
number.addEventListener('change', function(e) {
    numberValue = this.checked;
})

let symbolValue = false;
symbol.addEventListener('change', function(e) {
    symbolValue = this.checked;
})
var characters = '';
var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
var numberCharacters = '0123456789';
var symbolCharacters = `!"#$%&'()*+,-./:;<=>?@[]`;
var result = '';

function makeid(length) {
    result = '';
    characters = '';
    if(uppercaseValue) characters += uppercaseCharacters;
    if(lowercaseValue) characters += lowercaseCharacters;
    if(numberValue) characters += numberCharacters;
    if(symbolValue) characters += symbolCharacters;

    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    password.textContent = result;
    passwordShadow.value = result;
}
  genPassBtn.addEventListener('click', function() {
    makeid(lengthValue)
 })

 function myFunction() {
    var copyText = passwordShadow;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password copied to clipboard");
  }

  copyPassword.addEventListener('click', function() {
    myFunction()
 })

 