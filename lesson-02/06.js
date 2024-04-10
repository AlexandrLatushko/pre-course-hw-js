// Давайте-ка нашего парня, чтобы он не зазнавался переселим в ‘city’ 'Bobryisk' , а потом опять же убедимся в консоли, что мы все правильно скопировали. (Т.е. необходимо создать глубокую копию объекта passportWithAddress, а затем 'LA' заменить на 'Bobryisk' в city).

// let passportWithAddress = {
//     name: "Petr",
//     surname: "Petrov",
//     address: {
//         country: "USA",
//         city: "LA"
//     }
// };
// 📋
// ❗Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log

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
 
 const passportWithAddress = {
     name: "Petr",
     surname: "Petrov",
     address: {
         country: "USA",
         city: "LA"
     }
 };
 
 const passportWithAddress2 = deepClone(passportWithAddress);
 
 passportWithAddress2.address.city = 'Bobryisk';
 
 console.log(passportWithAddress.address.city);
 console.log(passportWithAddress2.address.city);