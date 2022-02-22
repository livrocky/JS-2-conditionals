const username = prompt("Iveskite prisijungimo varda");
const pswd = prompt("Iveskite prisijungimo slaptazodi");

if (username === "admin" && pswd === "master") {
  console.log("Sveiki, admin");
} else if ((username !== "admin", pswd === username + 11)) {
  console.log("Neteisingas slaptazodis!");
} else username === null && pswd === null;
console.log("Labankt!");
