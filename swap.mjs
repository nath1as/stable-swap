
import fs from "fs";

const getFiles = () => {
    const path = `StableSwap-test-2.csv`;
    const file = fs.readFileSync(path);
    const fc = file.toString();

  console.log(path, file, fc)
};

getFiles();
