// how to reverse a string  

const revString = (str)=>{
    const arr =str.split("");
    arr.reverse();
    str=arr.join(str);
}

revString("elma");


