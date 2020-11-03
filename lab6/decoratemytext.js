
let timer = null;

function changeFontSizeUsingTimer(){
    if(timer == null){
        timer = setInterval(changeFontSize, 500);
    }else {
        clearInterval(timer);
        timer = null;
    }
}

function changeFontSize(){
    let txtArea = document.getElementById('txt-area');

    let fSize = parseInt(txtArea.style.fontSize);

    if(isNaN(fSize)){
        fSize = 12;
    }
    txtArea.style.fontSize = fSize + 2 + "pt";

    txtArea.style.textAlign = "right";
    txtArea.style.paddingRight = "20px";

    
}

function changeStyle(){
    let txtArea = document.getElementById('txt-area');
    let ckBox = document.getElementById('ck-box');
    // console.log(ckBox.checked);
    if(ckBox.checked !== true){
        txtArea.style.fontWeight = "Normal";
        txtArea.style.color = "black";
        txtArea.style.textDecoration = "none"
        document.getElementsByTagName('body')[0].style.backgroundImage = "None";
    }else {
        txtArea.style.fontWeight = "Bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline"
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
    }
    
}

function makePigLatin(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";

    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return newStr;
    }
}

function makePigLatinLong(str){
    let strArr = str.split(' ');
    let finalStr = "";
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === "") {
            continue;
        }
        let pigLatin = makePigLatin(strArr[i]);
        finalStr += pigLatin + " ";
    }

    return finalStr;
}

function malkovich(str){
    if(str.length >= 5){
        return "Malkovich"
    }else {
        return str;
    }
}

function malkovichLong(str){
    let strArr = str.split(" ");
    let result = ""; 
    for(let i =0; i < strArr.length; i++){
        result += malkovich(strArr[i]) + " ";
    }

    return result;
}

function pigLatinBtnClicked(){
    let textArea = document.getElementById('txt-area');
    let text = textArea.value;

    let result = makePigLatinLong(text);
    textArea.value = result;
}

function mlButtonClicked(){
    let textArea = document.getElementById('txt-area');
    let text = textArea.value;

    let result = malkovichLong(text);
    textArea.value = result;
}

function main(){
    var button = document.getElementById('bigger-btn');
    button.onclick = changeFontSizeUsingTimer;

    var ckBox = document.getElementById('ck-box');
    ckBox.onchange = changeStyle;

    var pigLatinBtn = document.getElementById('ig-button');
    pigLatinBtn.onclick = pigLatinBtnClicked;

    var mlButton = document.getElementById('ml-button');
    mlButton.onclick = mlButtonClicked;
 
}
window.onload = main;


