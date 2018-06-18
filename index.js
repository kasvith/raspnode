const express = require('express')
const app = express()
const os = require('os')

app.get("/", (req, res) => {
    return res.send(os.release())
})

app.listen(3000, () => {
    console.log("Raspnode running on port 3000")
})
