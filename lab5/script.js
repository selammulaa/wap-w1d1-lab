
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

function myarr(){
    return [1,1];
}

function max(num1, num2){
    return num1 > num2 ? num1 : num2;

}

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else {
        return num3;
    }
}

function isVowel(char){
    if(char === 'A' ||
        char === 'E' ||
        char === 'I' ||
        char === 'O' ||
        char === 'U' ||char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u' ){
            return true;
        }else {
            return false;
        }
}

function sum(arr){
    let s = 0;
    arr.forEach(x => s = s + x);
    return s;
}

function multiply(arr){
    let m = 1;
    arr.forEach(x => m = m*x);
    return m;
}

function reverse(str){
    revStr = "";
    for(let i = str.length-1; i >= 0; i--){
        revStr = revStr + str[i];
    }
    return revStr;
}

function findLongestWord(arr){
    let longest = arr[0].length;
    arr.forEach(x => {
        if(x.length > longest){
            longest = s.length;
        }
    });
    return longest;
}

function filterLongWords(strArr, i){
    ansArr = [];
    strArr.forEach(x => {
        if(x.length > i){
            ansArr.push(x);
        }
    });
    return ansArr;
}

function multiplyBy10(arr){
    let ans = arr.map(x => x*10);
    return ans;
}

function filter3(arr){
    let ans = arr.filter(x => x === 3);
    return ans;
}

function productOfArr(arr){
    let ans = arr.reduce((prevValue, elem) => {
        return prevValue * elem;
    });
    return ans;
}

console.log("Expected output of myarr() is 40  " + myFunctionTest([1,1], function () {
    return myarr();
}));

console.log("Expected output of max(1,23) is 23  " + myFunctionTest(23, function () {
    return max(1,23);
}));

console.log("Expected output of maxOfThree(10,32,45) is 45  " + myFunctionTest(45, function () {
    return maxOfThree(10,32,45);
}));

console.log("Expected output of isVowel('E') is true  " + myFunctionTest(true, function () {
    return isVowel('E');
}));

console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, function () {
    return isVowel('e');
}));

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));

console.log("Expected output of revStr('jag testar') is ratset gaj " + myFunctionTest("ratset gaj", function () {
    return reverse('jag testar');
}));

console.log("Expected output of multiplyBy10([1,2,3,4]) is [10,20,30,40] " + myFunctionTest([10,20,30,40], function () {
    return multiplyBy10([1,2,3,4]);
}));

console.log("Expected output of filter3([1,3,2,3,4,3,67,3]) is [3,3,3,3] " + myFunctionTest([3,3,3,3], function () {
    return filter3([1,2,3,4,3,4,3,67,3]);
}));

console.log("Expected output of productOfArr([1,2,3,4]) is 24 " + myFunctionTest(24, function () {
    return productOfArr([1,2,3,4]);
}));