function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
 
    const clone = Array.isArray(obj) ? [] : {};
 
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]);
        }
    }
 
    return clone;
 }
 
 let passportMarried = {
     name: "Petr",
     surname: "Petrov",
     address: {
         country: "USA",
         city: "Bobryisk"
     }
 };
 
 let passportMarried2 = deepClone(passportMarried);
 passportMarried2.married = true;
 
 console.log(passportMarried);
 console.log(passportMarried2);