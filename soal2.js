function DescendingTen(num) {
    // Tulis code kamu di sini
      var limit = num - 9
      var num
      if (num == undefined){
        return '-1'
      }
      else if (num >= 0){
      for (var i = num - 1; i>= limit; i--){
        num += ' ' + i;
      }
    }
    return num
  }
  console.log(DescendingTen(100));
  console.log(DescendingTen(10)) // 10 9 8 7 6 5 4 3 2 1 
  console.log(DescendingTen()) // -1