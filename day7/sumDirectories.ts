const input = await Deno.readTextFile("day7/input.txt");
let test = await Deno.readTextFile("day7/test.txt");
const line = test.split(/\n/);

// test's data structure:
// - / (dir)
//   - a (dir)
//     - e (dir)
//       - i (file, size=584)
//     - f (file, size=29116)
//     - g (file, size=2557)
//     - h.lst (file, size=62596)
//   - b.txt (file, size=14848514)
//   - c.dat (file, size=8504156)
//   - d (dir)
//     - j (file, size=4060174)
//     - d.log (file, size=8033020)
//     - d.ext (file, size=5626152)
//     - k (file, size=7214296)

// recursion?

const directories = new Map();
let i = 0;
let j = 0;

while (i < line.length) {
  if (line[i].includes("$ cd") && line[i + 1].includes("$ ls")) {
    const currentDirectory = line[i].replace("$ cd ", "");
    if (!directories.has(currentDirectory)) {
      directories.set(currentDirectory, 0);
    }
    while (!line[j].includes("$ cd")) {
      if (line[j].includes("dir")) {
        const directory = line[j].replace("dir ", "");
        if (!directories.has(directory)) {
          directories.set(directory, 0);
        }
      } else if (/\d/.test(line[j])) {
        const value = +line[j].replace(/\D/g, "");
        directories.set(
          currentDirectory,
          directories.get(currentDirectory) + value
        );
      } else if (line[j + 1].includes("$ cd")) {
        break;
      }
      j++;
    }
    i = j;
  }
  i++;
}

// while (i < line.length) {
// if (line[i].includes("$ cd") && line[i + 1].includes("$ ls")) {
//   const total = 0;
//   const currentDirectory = line[i].replace("$ cd ", "");
//   if (!directories.has(currentDirectory)) {
//   directories.set(currentDirectory, 0);
//   }
//   while(!line[j].includes("$ cd")) {
//     if(line.includes(/\d/)){
//     const value =  +line.replace(/\D/g, "")
//     directories.set(currentDirectory, directories.get(currentDirectory) + value);
//     else if (line[j + ].includes("dir")){
//       const directory = line.replace("dir ", "");
//       if (!directories.has(directory)) {
//         directories.set(directory, 0);
//       }
//     } else if (line[j + 1].includes("$ cd")){
//     break;
//     }
//     j++;
//     }
//   i = j;

// }

// set up a total variable
// if cd follow by ls, then add the directory to the map
// if the line contains a directory, check to see if this key exists on the map
// if not add it to the map and set the key's value to 0
// if it does exist, set the value to the map add total to the value
// if the line contains a directory, add it to the
// if the line contains a number, add it to the map

// console.log(test.split(/\n/).filter((line) => line.includes("/")));
// console.log(test.split(/\n/).filter((line) => line.includes("$ cd")));
// console.log(test.split(/\n/).filter((line) => line.includes("$ ls")));
// console.log(test.split(/\n/).filter((line) => line.includes("dir")));

// Loop through the command line
// If the line contains a directory, add it to the map
// let i = 0;
// let j = 0;
// while (i < commandLine.length) {
//   const line = commandLine[i];
//   if (line.includes("dir")) {
//     while(commandLine[i + j].includes()) {
//     const directory = line.replace("dir ", "");
//     if (!directories.has(line)) {
//       directories.set(directory, 0);
//     } else {
//       directories.set(directory, directories.get(directory) + 1);
//     }
//     j++;
//   }
//   i = j;
// }

console.log(directories);

// .filter((line) => line.includes("dir"))
// .map((line) => {
//   const directory = line.replace("dir ", "");
//   if (!directories.has(line)) {
//     directories.set(directory, 0);
//   } else {
//     directories.set(directory, directories.get(directory) + 1);
//   }
// });

// console.log(filterForCommands);

// const filterForNumber = test
//   .split(/\n/)
//   .filter((line) => /\d/.test(line))
//   .map((line) => +line.replace(/\D/g, ""));

// console.log(filterForNumber);

// I am thinking of using a tree data structure to represent the file system
// I want to be able to traverse the tree and sum the size of all the files

// const parseInputToJSON = (input: string) => {
//   const lines = input.split(/\n/);
//   const json = {};
//   for (let i = 0; i < lines.length; i++) {
//     const line = lines[i];
//     const lineParts = line.split("/");
//     const dir = lineParts[0];
//     const file = lineParts[1];
//     const size = lineParts[2];
//     if (json[dir]) {
//       json[dir].push({ file, size });
//     } else {
//       json[dir] = [{ file, size }];
//     }
//   }
//   return json;
// };

// console.log(parseInputToJSON(test));
