/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.
const CHARS = {2: "abc", 3:"def", 4:"ghi", 5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"};
var letterCombinations = function(digits) {
    let len = digits.length, ans = []
    if (!len) return []
    const dfs = (pos, str) => {
        if (pos === len) ans.push(str)
        else {
            let letters = CHARS[digits[pos]]
            for (let i = 0; i < letters.length; i++)
                dfs(pos+1,str+letters[i])
        }
    }
    dfs(0,"")
    return ans
}
*/

var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) {
        return [];
    }
    const CHARS = {2: "abc", 3:"def", 4:"ghi", 5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"};
    // We will use BFS to find all permutations
    let queue = [""]; // queue contains all permutations in progress
    let depth = 0;
    while (queue.length > 0 && depth < digits.length) {
        let levelLen = queue.length;
        let letters = CHARS[digits[depth]];
        // Create all new permutations using existing permutations
        // by appending possible character
        for (let i = 0 ; i < levelLen; i++) {
            let curStr = queue.shift();
            for (let j = 0; j < letters.length; j++)    {
                queue.push(curStr + letters[j]);
            }
        }
        depth++;
    }
    return queue;
    // Time Complexity: O(3^m * 4^n),
    // m = the number of digits that have 3 chars and n = the number of digits that have 4 chars
    // Space Complexity: O(3^m * 4^n), queue can contain at most O(3^m * 4^n) elements
};

