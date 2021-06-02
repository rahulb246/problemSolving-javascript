/*
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. 
The returned string should only have a single space separating the words. Do not include any extra spaces.
*/
var reverseWords = function(s) {
    let arr = s.split(' '), ret = '';
    for(i = arr.length-1; i>=0; i--) 
        arr[i].length > 0 ? ret+= `${arr[i]} `: ret+='';
    // trim() - o get rid of the space at the end
    return ret.trim(); 
};

/*
// inplace ignoring leading or trailing spaces or multiple spaces between two words
// O(n) time, O(n) space(as strings are immutable in javascript)
function reverseWordsInString(string) {
	const characters = [];
	for (const char of string) {
		characters.push(char);
	}
	
	let wordStartIdx = 0;
	for (let i=0; i<characters.length; i++) {
		if (characters[i] === ' ') {
			if (characters[i-1] !== ' ') reverseListRange(characters, wordStartIdx, i-1);
			if (i+1 < characters.length && characters[i+1] !== ' ') wordStartIdx = i+1;
		} 
	}
	// reverse last word (except when last chars are spaces
	if (characters[characters.length-1] !== ' ') reverseListRange(characters, wordStartIdx, characters.length-1);
	reverseListRange(characters, 0, characters.length-1);
  return characters.join('');
}

function reverseListRange(list, start, end) {
	while (start < end) {
		const temp = list[start];
		list[start] = list[end];
		list[end] = temp;
		start++;
		end--;
	}
}
*/
