/**
 * Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
Example 2:

Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.
 */

let words = ["abc","bcd","aaaa","cbc"];

let x = "a";
let match = []

for(let i=0; i<words.length; i++){
    for(let j=0; j<words[i].length; j++){
        if(words[i][j] == x){
            match.push(i);
            break;
        }
    }
}
console.log(match);