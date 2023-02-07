let p=50;
for(i=2;i<=p;i++){
  let a=true;
  for(j=2;j<i;j++){
    if(i%j==0){
      a=false;
      break;
    }
  }
  if(a){
    console.log(i);
  }
}