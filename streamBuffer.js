import fs from "fs";

const data = Buffer.from("Hello, World! rfeerfbv erv eveveeve");
const zeros = Buffer.alloc(10, 0); // 0 lardan ibaret buffer yaradir. 1 ci yazdigimiz olcusu(byte) 2 ci yazdigimiz ise buffere ne yazacagidir
console.log(zeros)
// console.log(data);

const readStream = fs.createReadStream("demo.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("write.txt", { encoding: "base64" });

// data.txt faylini oxuduq
// readStream.on("data", (chunk) => {
//   console.log("New chunk recieved: ");
//   writeStream.write(chunk); // demonun icindekileri write.txt ya yazir
// });

// yuxardaki ile eyni isi gorur => pipe ile ikisini birlesdirmek mumkundur
// readStream.pipe(writeStream);

// Eger elave her hansisa bir is goreceyikse on isledmek daha yaxsidir.
