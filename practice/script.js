let obj = {
    name:'azam',
    age: 19,
    role:'developer'
}

localStorage.setItem('obj', JSON.stringify(obj))

let newobj = localStorage.getItem('obj')

log
console.log(JSON.parse(newobj));



