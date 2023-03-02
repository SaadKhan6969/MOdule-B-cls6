var mobiles = [
    {
        name: "a30",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 2000,
        brand: "samsung"
    },
    {
        name: "note10",
        ram: "6gb",
        rom: "128gb",
        camera: "50px",
        price: 4000,
        brand: "samsung"
    },
    {
        name: "s10",
        ram: "3gb",
        rom: "128gb",
        camera: "10px",
        price: 5000,
        brand: "samsung"
    },
    {
        name: "iphone4",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "iphone"
    },
    {
        name: "iphone4s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 20000,
        brand: "iphone"
    },
    {
        name: "iphone5",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brand: "iphone"
    },
    {
        name: "iphone6",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 30000,
        brand: "iphone"
    },
    {
        name: "redminote10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redminote11",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redmi10",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "redmi10pro",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "xiaomi"
    },
    {
        name: "a3s",
        ram: "4gb",
        rom: "64gb",
        camera: "50px",
        price: 10000,
        brand: "oppo"
    },
];




// let ind=mobiles.findIndex((x)=>x.name == "redmi10pro")
// console.log(ind)


// let status =mobiles.some((x)=>x.name == "note10")
// console.log(status)

// let finddd = mobiles.findIndex((x) => x.name == "a30")
// console.log(finddd)

// let arr1=[1,2,3,["a","b","c",["d","f","g"]]]
// arr1 =arr1.flat(3)
// console.log(arr1)

// let numArr =[1,2,3,4,56,23,34,54,56,77,87,11,22]

// let c =Math.max(...numArr);
// console.log(c)


// promise
// async await





let brands = mobiles.map((x) => x.brand)
brands = [...new Set(brands)]
console.log(brands)
let a = document.getElementById('brand')
let b = document.getElementById('model')

let model;
function init() {
    brands.forEach((x) => {
        a.innerHTML += ` <option value='${x}'>${x}</option>`
    })
}
init()

function getbrand() {
    model = mobiles.filter(x => x.brand == a.value).map(x => x.name)
    // console.log(model)
    b.innerHTML = ""
    model.forEach(x => {
        b.innerHTML += ` <option value='${x}'>${x}</option>`
    })
}


function getMobile() {
    let obj = mobiles.find((x) => x.brand == brands.value && x.name == model.value)
    console.log(obj)
}






