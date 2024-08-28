// Aufgabe 7a
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Aufgabe 7b
while (true) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
      if (randomNum > 8) {
        break;
     }
   }
   
// Aufgabe 7c
let items = [1, 2, 3, 4, 5];

for (let item of items) {
    console.log(item);
}
