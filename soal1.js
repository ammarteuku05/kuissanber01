function balikString(word){
    var balik = "";
    for(var i = word.length-1; i>=0; i--){
        balik += word[i];
    }
    return balik;
}

console.log(balikString("abcde")) // edcba 
console.log(balikString("rusak")) // kasur 
console.log(balikString("racecar")) // racecar 
console.log(balikString("haji")) // ijah