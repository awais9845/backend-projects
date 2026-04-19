const fs = require("fs");
const path = require("path");

// file created
// fs.writeFile("test1.txt", "First File", (error) => {
//   if (error) console.log(error);
//   else console.log("File created");
// });

// file read

// fs.readFile("test1.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// update file

// fs.appendFile("test1.txt", "\n Shakir khan", (err) => {
//   if (err) console.log(err);
//   else console.log("file updated");
// });

// delte file

// fs.unlink("test1.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("file delted");
// });

// fs.rename("test1.txt", "shakir.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("file renamed ");
// });

// fs.mkdir("File1", (err) => {
//   if (err) console.log(err);
//   else console.log("File created ");
// });

// fs.appendFile("File1", "log Data", (err) => {
//   if (err) console.log(err);
//   else console.log("file readed ");
// });

// let name = "Awais khan";
// let age = 12;

// fs.appendFile(
//   "log.txt",
//   `name , ${name}, age , ${age} , Date ${new Date()} `,
//   (err) => {
//     if (err) console.log(err);
//     else console.log("file updated");
//   },
// );

// const filepath = path.join(__dirname, "File2");

// const Nestedfilepath = path.join(filepath, "App2", "Appe3");
// fs.mkdir(Nestedfilepath, { recursive: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("Nested file is created ");
// });
// console.log(filepath);

const targetedpath = path.join(__dirname, "App2");
// fs.rm(targetedpath, { recursive: true, force: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("files successfully deleted");
// });
console.log(targetedpath);
