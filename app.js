console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const number = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr){
        let sum = 0;
        arr.forEach((number) => (sum += number));
        return sum;
    }

console.log(arraySum(number));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const favBook = {};

favBook.title = "Pride and Prejudice";
favBook.author = "Jane Austen";
favBook.pageCount = 504;
favBook.readCount = 1;

console.log(favBook);

favBook.info = function () {
    return `${this.title} by ${this.author} is ${this.pageCount} page(s) and has been read ${this.readCount} time.`;
};

console.log(favBook.info());

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";

let splitUpWords = sentence.split(" ");
let result = "";
for (let word of splitUpWords){
    let myReversedWord = "";
    for (let i = word.length - 1; i >= 0; i--){
    myReversedWord += word[i];
}
result += (myReversedWord + " ");
}
console.log(result.trim());

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let dataSplit = csvData.split("\n");
const headers = (dataSplit[0].split(","));
console.log(headers);
const resultObjects = [];

for (i = 1; i < dataSplit.length; i++){
    const values = dataSplit[i].split(",");
    let obj = {};
    for (let j = 0; j< headers.length; j++){
        obj[headers[j]] = values[j];
    }
    console.log(obj);
    resultObjects.push(obj);
}
console.log(resultObjects);