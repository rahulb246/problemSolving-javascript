class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

	// O(n^2) TC
	// O(n^2) SC
  populateSuffixTrieFrom(string) {
    // Write your code here.
		for (let i=0; i<string.length; i++) {
			this.insertSubstringStartingAt(i, string);
		}
  }
	
	insertSubstringStartingAt(i, string) {
		let node = this.root;
		for (let j=i; j<string.length; j++) {
			let letter = string[j];
			if (!node[letter]) node[letter] = {};
			node = node[letter];
		}
		node[this.endSymbol] = true;
	}

	// O(m) TC m is len of str
	// O(1) SC
  contains(string) {
    // Write your code here.
		let node = this.root;
		for (let letter of string) {
			if (!node[letter]) return false;
			node = node[letter];
		}
		return node[this.endSymbol] ? node[this.endSymbol] : false;
  }
}

// const trie = new SuffixTrie('babc');
// trie.contains('abc');
// true
