var nome = prompt('Come ti chiami?');
var cognome = prompt("Qual è il tuo cognome?");
var colore = prompt("Il tuo colore preferito?");
var data= new Date();
var anno2Digit = 2100 - (data.getFullYear())+2000;


document.getElementById('psw-box').setAttribute('class','visible');
document.getElementById('psw-1').innerHTML = nome + cognome + colore;
document.getElementById('psw-2').innerHTML = nome + cognome + colore + '20';
document.getElementById('psw-3').innerHTML = nome + cognome + colore + data.getFullYear();
document.getElementById('psw-4').innerHTML = nome + ';' + cognome + ';' + colore + ';' + data.getFullYear();
console.log(anno2Digit);
document.getElementById('psw-5').innerHTML = nome + ';' + cognome + ';' + colore + ';' + (2100-anno2Digit);
