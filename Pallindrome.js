    let num=1221;

    let str=""+num;
    let bag="";
    for(let i=str.length-1; i>=0; i--){
        bag=bag+str[i];
        
    }
    if(bag==num){
        console.log("Yes");
    }
    else{
        console.log("No");
    }