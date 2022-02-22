//1//

const legalAge = 20;
const clientAge = 19;

if (clientAge >= legalAge) {
  console.log("legalus amzius");
} else if (clientAge < legalAge) {
  console.log("nelegalus amzius");
}

//2//

const myName = "Rokassss";

if (myName.length > 6) {
  console.log("ilgas vardas");
} else if (myName.length < 6) {
  console.log();
}

//3//

const myAge = 27;

if (myAge >= 100 || myAge <= 0) {
  console.log("Invalid Age");
} else if (myAge >= 1 && myAge <= 18) {
  console.log("Child");
} else if (myAge >= 19 && myAge <= 99) {
  console.log("Adult");
}

//4//

const car = "BMW";

if ((car === "VW", "Audi", "Bentley", "Bugatti", "Lamborghini", "Porsche")) {
  console.log("VW group");
} else if ((car === "BMW", "Mini", "Rolls-Royce")) {
  console.log("BMW group");
}
