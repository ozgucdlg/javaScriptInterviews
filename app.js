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




const list = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const askForPeople = propmt("what is yout Fvaorite day");

/* switch (List) {
    case 1:
        askForPeople === "Monday"

        alert(`your decision is Monday are you sure !! `)
        break;

    case 1:
        askForPeople === "Tuesday"

        alert(`your decision is Tuesday are you sure !! `)
        break;

    case 1:
        askForPeople === "Wednesday"

        alert(`your decision is Wednesday are you sure !! `)
        break;
    case 1:
        askForPeople === "Thursday"

        alert(`your decision is Thursday are you sure !! `)
        break;
    case 1:
        askForPeople === "Friday"

        alert(`your decision is Friday are you sure !! `)
        break;
    case 1:
        askForPeople === "Saturday"

        alert(`your decision is Saturday are you sure !! `)
        break;
    case 1:
        askForPeople === "Sunday"

        alert(`your decision is Sunday are you sure !! `)
        break;
}
 */


const employeeList = [
    {name:'Ozguc',
    lastName:'Dalga',
    age:30,
    Department:'It'},
    {name:'Ozge',
    lastName:'Elmas',
    age:30,
    Department:'Finance'}
]


const findingOfEmployee = employeeList.map(employee=>(`the name of Employee ${employee.name }, the department ${employee.Department}` ));

console.log(findingOfEmployee)