

const fs = require('fs')
var x = document.getElementById('num').value;
console.log(x)
let result = 0;
for (let i = 0; i <= x; i++) {
    result = result + i;
}
console.log(result)

fs.writeFile('sum.txt', result, err => {
    if (err) {
        throw err;
    }
    console.log('success')
})


