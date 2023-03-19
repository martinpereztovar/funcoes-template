// Resolva o Exercício de Fixação!

// let nome = prompt("Digite seu nome:")

// function printName(name){
//     console.log("Olá,",name);
// }

// const printName = nome => {
//     console.log("Olá,",nome);
// }

// printName("Pedro");
// printName(nome);
// printName("Luan")

// let number = Number(prompt("Digite um numero: "));

// function isPar(number) {
//   let verifica = number % 2 === 0;
//   let soma = number + 10;
//   let multiplica = number * number;
//   return `O numero ${number} é par? ${verifica}. Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo o resultado é: ${multiplica}`;
// }

// const isPar = number => {
//   let verifica = number % 2 === 0;
//   let soma = number + 10;
//   let multiplica = number * number;
//   return `O numero ${number} é par? ${verifica}. Somado com 10 o resultado é ${soma}. Multiplicado por ele mesmo o resultado é: ${multiplica}`;
// }

// console.log(isPar(number));

// console.log(soma);

// -------- ex 2 ----------------

// let login = prompt("Digite seu email:");
// let password = prompt("Digite sua senha:")

// function askLoginAndPassword (login, password) {
//   let loginSaved = "oi";
//   let passwordSaved = "oi";
//   let equalLogin = login === loginSaved;
//   let equalPassword = password === passwordSaved;
//   return `Login: ${equalLogin} - Password: ${equalPassword}`;
// }

// const askLoginAndPassword = (login, password) => {
//   let loginSaved = "oi";
//   let passwordSaved = "oi";
//   let equalLogin = login === loginSaved;
//   let equalPassword = password === passwordSaved;
//   return `Login: ${equalLogin} - Password: ${equalPassword}`;
// }

// console.log(askLoginAndPassword(login, password));

function showPerson(name, bornYear, CurrentYear){
  isAdult = CurrentYear - bornYear >= 18
  return `${name} é maior de idade?: ${isAdult}`
}

console.log(showPerson("Martín", 1992, 2023));
console.log(showPerson("Jose", 2017, 2023));
console.log(showPerson("Pedro", 1996, 2023));

