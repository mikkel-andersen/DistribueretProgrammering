
let string = "Tully hedder i virkeligheden Tully";

const words = string.split(' ');

console.log(words[0]) // => Tully
console.log(words[1])
console.log(words[2])
console.log(words[3])

console.log("\n" + words.length)

//Antal forskellige ord

let uniqueWords = [];

for (let i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
        uniqueWords.push(words[i]);
    }
}

console.log(uniqueWords.length) // => 5