/*
 Given an array of sentences making up a body of text,
 output an index of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/

function index(data) {
    
    /*const uniqueWords = new Map();
        //const results = new Set();
    
        for(let i = 0; i < data.length; i++) {
            const sentence = data[i].split(/[\s.,';]/).filter(word => word !== '');
    
            sentence.forEach(word => uniqueWords.set(word.toLowerCase()))
    }
    const result = {};
    Array.from(uniqueWords).forEach((value, index) => {
        result[value] = index;
    });
    return result;*/

    const uniqueWords = new Map();
        //loop through the data
        for (let i = 0; i < data.length; i++) {
            //split and filter the iterated data and assign to a variable sentence.  *play around with changing it to forEach(())
            const sentence = data[i].split(/[\s.,';]/).filter(word => word !== '');
            
            //iterating through sentenct, making everything lowercase
            sentence.forEach(word => {
                const lowerWord = word.toLowerCase();
                //if the map does not have lowerWord, set it to the map & index array (if uniqueWord doesn't contain lowerWord, add it to the uniqueWord map with lowerWord as the key and [i] from the for loop as the value)
                if (!uniqueWords.has(lowerWord)) {
                    //lowerword = key, [i] = value
                    uniqueWords.set(lowerWord, [i]);
                } else {
                    //.get(key) gives you the value of the key. Getting the old value to set with the key
                    const indices = uniqueWords.get(lowerWord);
                    //if indices doesn't include the index, add it.
                    if (!indices.includes(i)) {
                        indices.push(i);
                    }
                    //replace the key with the new indices
                    uniqueWords.set(lowerWord, indices);
                }
            });
        }
        
        // Convert Map to object
        const result = {};
        //when looping through a map, it goes value then key
        //loop through the map
        uniqueWords.forEach((value, key) => {
            //assign key with result to value
            result[key] = value;
        });
        
        return result;

}
module.exports = index;