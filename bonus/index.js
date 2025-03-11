

const testoDaConvertire = process.argv.slice(2); //start dal secondo elemento


if (testoDaConvertire.length > 0) {
    const terminalText = testoDaConvertire.join(" "); // ritorna un array di stringhe con spazio vuoto tra loro
    console.log(terminalText.toUpperCase());
} else {
    console.log("Hello World");
}



//node index.js //: Hello World
//node index.js "Hello Boolean" //: HELLO BOOLEAN