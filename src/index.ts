async function fetchPrice(price: number) : Promise<number>{
    if(price < 0){
        throw new Error("Price must be positive integer")
    }
    return price
}


async function getProductPrice(price: number): Promise<number>{
    const result = await fetchPrice(price)
    return result
} 

async function main(): Promise<void>{
    try{
        const result = await getProductPrice(0)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}

main()


// interface User {
//     id: number,
//     name: string,
//     email: string
// }

// interface Admin extends User {
//     role: string
// }

// const admin: Admin = {
//     id: 1,
//     name: "Budi",
//     email: "budi@example.com",
//     role: "Engineer"
// }


// type Product = {
//     id: number;
//     name: string;
//     price: number;
// };

// const products: Product[] = [
//     {
//         id: 1,
//         name: "Keyboard",
//         price: 20000
//     },
//     {
//         id: 2,
//         name: "Mouse",
//         price: 10000
//     }
// ]

// function getTotalPrice(products: Product[]): number {
//     const sum = products.reduce((acc,curr)=>{
//         return acc + curr.price
//     },0)
//     return sum
// }   

// console.log(getTotalPrice(products))


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