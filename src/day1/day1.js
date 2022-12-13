const fs = require('fs');

const input = fs.readFileSync("input.txt", {encoding: 'utf8', flag: 'r'});
const inputArr = input.split("\n")
    .map(str => str.substring(0, str.length - 1))
    .map(str => parseInt(str));
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
let groupCount = groupArr.map(arr => arr.reduce((sum, num) => sum + num, 0))
let sortedArr = groupCount.sort((a,b)=> b-a);
let res =0;
for(let i=0; i<3;i++){
    res += sortedArr[i];
}
console.log(res)
