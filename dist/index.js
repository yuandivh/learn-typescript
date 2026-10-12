"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: 1,
        name: "Keyboard",
        price: 20000
    },
    {
        id: 2,
        name: "Mouse",
        price: 10000
    }
];
function getTotalPrice(product) {
    const sum = product.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0);
    return sum;
}
console.log(getTotalPrice(products));
// function formatId(id: number | string):string{
//     return typeof id === "number" ? `ID Angka: ${id}` : `ID string: ${id}`
// }
// console.log(formatId(1))
// type User = {
//     id: number,
//     name: string,
//     age?: number,
//     email: string,
//     phone?: string
// }
// const user: User = {
//     id: 1,
//     age: 23,
//     name: "Yuandi",
//     email: "yuandi@gmail.com",
// }
// const user2: User = {
//     id: 2,
//     name:"Budi",
//     email: "budi@example.com"
// }
// function getUserInfo(user:User) : string{
//     return `${user.age !== undefined ? `Umur user: ${user.age} tahun` : 'Umur user belum tersedia'} `
// }
// console.log(getUserInfo(user))
//# sourceMappingURL=index.js.map