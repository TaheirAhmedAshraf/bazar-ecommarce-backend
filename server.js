const express = require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()

// ROUTES
const user = require('./routes/user')
const product = require('./routes/products')

// using middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

// environmental variables
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 8080

// ROUTING
app.use("/api/user", user)
app.use("/api/product", product)

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`))
}).catch((err) => {
    console.log(err.message)
})