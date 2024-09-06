const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const helmet = require('helmet');


app.use(helmet.crossOriginOpenerPolicy({ policy: 'same-origin' }));
app.use(helmet.crossOriginEmbedderPolicy({ policy: 'require-corp' }));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", async(req, res) => {
    console.log(req.body.token);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "₹"
    })
    
})

// Example COOP header setup
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    next();
  });
  

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
    });

