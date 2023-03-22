// let str1 = 'My name is:'
// let str2 = 'Viet'
// let str3 = `${str1} ${str2}`
// // console.log(str3);

// let information = {firstname : 'Vu', lastname: 'Viet'}
// let{firstname, lastname} = information;
// // console.log(firstname);


// let [ftname] = ['Vu', 'Viet']
// // console.log(ftname);

// let firname = 'Vu'
// let informations = {firname}

// let str = "hello";
// for (let char of str) {
//     // console.log(char);
// }

// let arr1 = [4,5,6]
// let arr2 = [1, 2, 3]
// let arr3 = [...arr1, ...arr2]
// // console.log(arr3);

// const tich = num => num * num;
// // console.log(tich(2));

// // let str = 'Heloo WOrd'
// // console.log(stri.includes('Heloo'));

class Car {
    constructor(wheels, doors) {
       this.wheels = wheels;
       this.doors = doors;
    }
    describeMe() {
      console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }}
 
 
 const car1 = new Car(4, 2);  
 car1.describeMe(); // Doors: 2 and Wheels: 4

// tsc -W tenfile.ts

function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();