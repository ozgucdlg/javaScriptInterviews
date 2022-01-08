// how to reverse a string  

const revString = (str)=>{
    const arr =str.split("");
    arr.reverse();
    str=arr.join("");
    console.log(str);
}

revString("oguchi");


// how to find max character in a string and how many times it appears in the

const maxChar = (str)=>{
    let obj = {};
    for (let char of str)
    (!obj[char])? obj[char] =1 : obj[char]++;
    console.log(obj);

}
maxChar("elma");


//  how to polybdrom