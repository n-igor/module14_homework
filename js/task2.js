// {"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
const obj = {
    name : "Anton",
    age : 36,
    skills : ["Javascript","HTML","CSS"],
    salary : 80000
}

const jsonObj = JSON.stringify(obj)
console.log(jsonObj)