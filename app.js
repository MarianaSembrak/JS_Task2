//Task2

const months = prompt("Please, enter month of year");
switch (months) {
  case "1":
  case "2":
  case "12":
    alert("Winter");
    break;
  case "3":
  case "4":
  case "5":
    alert("Spring");
    break;
  case "6":
  case "7":
  case "8":
    alert("Summer");
    break;
  case "9":
  case "10":
  case "11":
    alert("Autumn");
    break;
  default:
    alert("You enter incorrect data!");
    break;
}

//Task1

let count = 0;
let q = prompt("Скільки буде 7*2?");
console.log(q);
if (q == 14) {
  count = count + 1;
}
q = prompt("Скільки буде 7*3?");
console.log(q);
if (q == 21) {
  count = count + 1;
}
q = prompt("Скільки буде 7*4?");
console.log(q);
if (q == 28) {
  count = count + 1;
}
q = prompt("Скільки буде 7*5?");
console.log(q);
if (q == 35) {
  count = count + 1;
}
q = prompt("Скільки буде 7*6?");
console.log(q);
if (q == 42) {
  count = count + 1;
}
q = prompt("Скільки буде 7*7?");
console.log(q);
if (q == 49) {
  count = count + 1;
}
q = prompt("Скільки буде 7*8?");
console.log(q);
if (q == 56) {
  count = count + 1;
}
q = prompt("Скільки буде 7*9?");
console.log(q);
if (q == 63) {
  count = count + 1;
}
q = prompt("Скільки буде 7*10?");
console.log(q);
if (q == 70) {
  count = count + 1;
}
if (count <= 4) {
  console.log("Ви відповіли на", count, "запитань з 9 можливих");
  alert("Вчіться краще");
} else if ((count > 4, count <= 8)) {
  console.log("Ви відповіли на", count, "запитань з 9 можливих");
  alert("Молодець");
} else if (count == 9) {
  console.log("Ви відповіли на", count, "запитань з 9 можливих");
  alert("Ідеально");
}
