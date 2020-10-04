function ularTangga() {
    for(var i=9;i>=0;i--){
          if(i%2==1){
            for(var i2=10;i2>0;i2--){
              process.stdout.write(i2+i*10+" ");
            }
            
            process.stdout.write("\n");
          } else {
            for(var j=1;j<=10;j++){
              process.stdout.write(j+i*10+" ");
            }
            process.stdout.write("\n");
           }
    }
    return " ";
  }
  
  console.log(ularTangga())