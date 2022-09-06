require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Routes
app.use('/user', require('./routes/userRouter'))

//connect to mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(
    URI, {

    useNewUrlParser: true,

    useUnifiedTopology: true
},
    (err) => {
        if (err) throw err;
        console.log("Connect to mongodb");
    }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});