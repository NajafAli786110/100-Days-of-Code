let address = "1.1.1.1";

// Method #1
// console.log(address.split('.').join("[.]"));



// Method #2 by Creating an another string and save string value one by one in it
// let modifiedAddress = "";
// for (let i = 0; i < address.length; i++) {
//     if (address[i] == ".") {
//         modifiedAddress += "[.]";
//     }
//     else {
//         modifiedAddress += address[i];
//     }
// }
// console.log(modifiedAddress);


// Method #3
// address = address.split('');

// for (let i = 0; i < address.length; i++) {
//     if (address[i] == ".") {
//         address[i] = "[.]"
//     }
// }

// address = address.join('');
// console.log(address);

// Method #4
// console.log(address.replaceAll('.','[.]'));



