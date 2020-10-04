function palindrome(sample) {
    for (var i = 0; i < sample.length/2; i++) {
        if (sample.charAt(i) != sample.charAt(sample.length - i - 1)) {
        return false;
      }
    }
       return true;
   }
  
  console.log(palindrome("kasur rusak")) // true 
  console.log(palindrome("haji ijah")) // true 
  console.log(palindrome("nabasan")) // false
  console.log(palindrome("nababan")) // true 
  console.log(palindrome("jakarta")) // false