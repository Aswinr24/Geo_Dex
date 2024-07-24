// Import required modules
const express = require('express')
const Gun = require('gun')
const app = express()
const port = 8765
app.use(Gun.serve)

// Start the server
const server = app.listen(port, () => {
  console.log(`GunDB server is running at http://localhost:${port}`)
})

Gun({ web: server })
