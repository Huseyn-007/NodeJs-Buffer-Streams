import fs from "fs";
import { EventEmitter } from "events";

const fileName = "eventtask.txt";

const emitter = new EventEmitter();

emitter.on("checkExtension", () => {
  if (!fileName.endsWith(".txt")) {
    console.error("file not found");
    return;
  }
  emitter.emit("countChars");
});

emitter.on('countChars', () => {
    fs.readFile(fileName, {encoding:"utf8"}, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const charCount = data.length;
        emitter.emit('showResult', charCount);
    });
});


emitter.on('showResult', (countChars)=>{
    console.log(`${fileName} this file ends with txt. Char count is ---> ${countChars} `);
})


emitter.emit('checkExtension');

