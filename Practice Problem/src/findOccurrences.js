/*
  Given:
    a linked list of words
    an index of words
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function findOccurrences(words, index, data) {
  const result = [];
  for(const word in index) {
   if(word === words) {
     index[word].forEach(lineNumber => {
       if(words[lineNumber]) {
         result.push(words[lineNumber])
       }
     })
   }
  }
  return result
 }

module.exports = findOccurrences;