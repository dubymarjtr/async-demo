import { promises as fs } from "fs";

fs.readFile("./package.json", "utf-8")
  // then is for a resolved/fulfilled promise
  .then((fileContents) => {
    fs.writeFile("./test.json", fileContents);
  })
  .then(() => {
    console.log(`Finished writing the file`);
  })
  .then(() => fs.readFile("./test.json", "utf-8"))
  .then((testFileResults) => console.log(testFileResults))
  // catch errors for a rejected promise
  .catch((err) => console.error(`Error while reading file, ${err.message}`))
  .finally(() => {
    // finally means that the promise has been settled
    console.log("This is gonna run no matter what");
  });
