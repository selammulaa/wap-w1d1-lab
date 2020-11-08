function sum(arr){
    var sum = arr.reduce((accum, num) => accum + num);
    return sum;
}

function multiply(arr){
    var mul = arr.reduce((accum, num) => accum * num);
    return mul;
}

function reverse(str){
    var rev = str.split("").reduce((rev, char) => char + rev, '');
    return rev;
}

function findLongestWord(arr){
    let longestWord = arr.reduce((longest, currentWord) => {
        if(currentWord.length > longest.length)
            return currentWord;
        else 
            return longest;
    });
    
    return longestWord;
}

function filterLongWords(strArr, i){
    let longerThanI = strArr.filter(x => {
        return x.length > i;
    });

    return longerThanI;
}

console.log(sum([1,2,3,4]));
console.log(multiply([1,2,3,4]));
console.log(reverse("selam"));
console.log(findLongestWord(['selam','mulugeta', 'alemseged']));
console.log(filterLongWords(['selam','mulugeta', 'alemseged'], 7));
