const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY


const express = require("express")

const app = express()
const fs = require("fs")

// const ejs = require("ejs")

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/store", function(req, response) {
    fs.readFile("items.json", function(err, data) {
        if (error) {
            res.status(500).end()
        } else {
            res.render("store.ejs", {
                items: JSON.parse(data)
            })
        }
    })
})

app.listen(3000)

