const express = require('express')
const app = express()
const { exec } = require('child_process');

app.get("/", (req, res) => {
    exec.call("uname -a", (err, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return res.send(err);
          }
          
        return res.send(stdout);
    })
})

app.listen(3000, () => {
    console.log("Raspnode running on port 3000")
})
