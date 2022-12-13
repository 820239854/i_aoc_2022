const fs = require('fs');

const input = fs.readFileSync("input.txt", {encoding: 'utf8', flag: 'r'});
const inputArr = input.split("\n")
    .map(str => str.substring(0, str.length - 1))
    .map(str => Number.parseInt(str));
let groupArr = [];
let currArr = [];
for (let i = 0; i < inputArr.length; i++) {
    if (!!inputArr[i]) {
        currArr.push(inputArr[i]);
    } else {
        groupArr.push(currArr);
        currArr = [];
    }
}
let goroupCount = groupArr.map(arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
    }
    return count;
})

const max = Math.max(...goroupCount)

console.log(max)
