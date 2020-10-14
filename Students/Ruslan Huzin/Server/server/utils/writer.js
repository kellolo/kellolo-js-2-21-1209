const fs = require('fs')

module.exports = async (fileUrl,data)=>{
    try{
        await fs.writeFile(fileUrl, JSON.stringify(data, null, ' '), err => {  })
        return true
    }
    catch(err) {
        return false
    }
}