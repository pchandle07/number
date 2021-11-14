const fs = require('fs')

const content = 'hello'

fs.writeFile('sum.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully
})