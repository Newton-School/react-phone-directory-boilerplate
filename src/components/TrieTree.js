// we start with the TrieNode
const TrieNode = function (key) {
  // the "key" value will be the character in sequence
  this.key = key;

  // we keep a reference to parent
  this.parent = null;

  // we have hash of children
  this.children = {};

  // check to see if the node is at the end
  this.end = false;

  // get the value the word represents
  this.index = -1;

  this.getWord = function () {};

  this.getData = function () {
    return this.index;
  };
};

const Trie = function () {
  this.root = new TrieNode(null);

  // inserts a word into the trie.
  this.insert = function (word, index) {};

  // check if it contains a whole word.
  this.contains = function (word) {};

  // returns every word with given prefix
  this.find = function (prefix) {};

  // recursive function to find all words in the given node.
  const findAllWords = (node, arr) => {};

  // removes a word from the trie.
  this.remove = function (word) {};
};

export default Trie;
