/*
given a bigstring and an array of small strings. return an array of booleans which represents 
if each small string is present in the bigstring or not.

multiStringSearch("this is big string", ["this", "bigger", "is", "a", "blah"]) : [true, false, true, true, false]


multiStringSearch("abcdefghijk", ["abc", "cdef", "cdf", "ace", "hijk"]) : [true, true, false, false, true]

brute force : search each string in all suffixes of big string : O(bns) TC, O(n) SC  
better that brute force : create a suffix trie for big srting without endString. search for all small strings in the trie. : O(b^2 + ns) TC, O(b^2 + n) SC
*/

// n is len of small str array, b is len of big strin, s is len of largest small string
// O(ns + bs) TC, O(ns) SC  
function multiStringSearch(bigString, smallStrings) {
  // Write your code here.
	const trie = new Trie();
	for (const string of smallStrings) 
		trie.insert(string);
	
	const containedStrings = {};
	for (let i=0; i<bigString.length; i++) 
		findSmallStringsIn(bigString, i, trie, containedStrings);
	
	return smallStrings.map(string => string in containedStrings);
}

function findSmallStringsIn(bigString, startIdx, trie, containedStrings) {
	let currNode = trie.root;
	for (let i=startIdx; i<bigString.length; i++) {
		const currChar = bigString[i];
		if (!(currChar in currNode)) break;
		currNode = currNode[currChar];
		if (trie.endString in currNode) containedStrings[currNode[trie.endString]] = true;
	}
}

class Trie {
	constructor() {
		this.root = {};
		this.endString = "*";
	}
	
	insert(string) {
		let node = this.root;
		for (let i=0; i<string.length; i++) {
			if (!(string[i] in node)) node[string[i]] = {}
			node = node[string[i]];
		}
		node[this.endString] = string;
	}
}
