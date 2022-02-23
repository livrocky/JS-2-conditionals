const username = prompt("Iveskite prisijungimo varda");
const pswd = prompt("Iveskite prisijungimo slaptazodi");

if (username === "admin" && pswd === "master") {
  console.log("Sveiki, admin");
} else if (pswd === username + 11) {
  console.log("Teisingas slaptazodis!");
} else if (!!username === false && !!pswd === false) {
  console.log("Truksta duomenu");
}
