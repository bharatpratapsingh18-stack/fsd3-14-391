import { writeFile, readFile, appendFile} from "node:fs/promises";

// await writeFile("stud.txt","Ravikant Singh/nRollNO:82");
// console.log("File Written");
// const data = await readFile("stud.txt", "utf-8");
// console.log(`file contents: ${data}`);


const addContent = async (fname, content) => {
    await writeFile(fname, content);
    console.log(`${content} written in file: ${fname}`);
};

const readContent = async (fname) => {  
    const data = await readFile(fname, "utf-8");
    return data;
};

const appendData = async(fname,content) =>{     
    await appendFile(fname,'/n' + content)
    console.log("data appended");

};

await addContent("nodes.txt", "FS is easy in JS");
console.log("Content:\n", await readContent("nodes.txt"));
await appendData("nodes.txt","it can add, read and update contents");
console.log("Updated Content:\n", await readContent("nodes.txt"));