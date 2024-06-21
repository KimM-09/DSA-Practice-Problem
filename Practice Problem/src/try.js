function findOccurrences(words, index, data) {
    const setWords = new Set(data);
    const result = [];
    for(const word in index) {
     if(setWords.has(word)) {
       index[word].forEach(lineNumber => {
         if(words[lineNumber]) {
           result.push(words[lineNumber])
         }
       })
     }
    }
    return result
   }