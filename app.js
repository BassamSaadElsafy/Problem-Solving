module.exports = {
    rearrange : function (elements) {
        const count_ones = $str => $str.match(/1/g).length;
        let list_binary_nums = [];
        let result = [];
        elements.forEach((num) => list_binary_nums.push(num.toString(2))); 
        list_binary_nums.sort( (a, b) => (count_ones(a) == count_ones(b)) ? a - b : (count_ones(a)) - (count_ones(b)) );
        list_binary_nums.forEach(val => result.push(parseInt(val, 2)));
        return result;
    },
    compressWord: function(word, k){
        let word_to_arr = word.split("");  
        let unique_arr  = word_to_arr.filter((v, i, a) =>  a.indexOf(v) === i);
        let result = '';
        let count  = 0;
    
        for(let i = 0; i < unique_arr.length; i++){    
            for(let x = 0; x < word_to_arr.length; x++){
                if(unique_arr[i] === word_to_arr[x]){
                    count++;
                }
            }
            if(count < k){
                result += unique_arr[i].repeat(count);
            }
            count = 0;       //reset count value
        }
        return result;
    }
}//end of module