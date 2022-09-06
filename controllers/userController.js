const Users = require('../models/userModel')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendMail = require("./sendMail");

const { CLIENT_URL } = process.env;

const userController = {
    register: async(req, res) => {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ msg: "Please enter full fill!!" });
            }
            if (!validateEmail(email)) {
                return res.status(400).json({ msg: "Invalid email!!!" });
            }
            // const userEmail = await Users.findOne({ email });
            // if (userEmail)
            //     return res.status(400).json({ msg: "Email already does not exist!" });

            if (password.length < 6) {
                return res
                    .status(400)
                    .json({ msg: "Password must be at lest 6 characters!" });
            }

            const passwordHash = await bcrypt.hash(password, 12);

            const newUser = {
                name,
                email,
                password: passwordHash,
            };

            const activation_token = createActivationToken(newUser);
            const url = `${CLIENT_URL}/user/activate/${activation_token}`;

            sendMail(email, url, "Verify your email address");
            res.json({
                msg: "Register success! Please activate your email to start",
            });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    activateEmail: async(req, res) => {
        try {
            const { activation_token } = req.body;
            const user = jwt.verify(
                activation_token,
                process.env.ACTIVATION_TOKEN_SECRET
            );
            const { name, email, password } = user;
            // const check = await Users.findOne({ email });
            // if (check)
            //     return res.status(400).json({ msg: "This email is alread exits." });

            console.log(user)
            const newUser = new Users({
                name,
                email,
                password,
            });
            await newUser.save();
            res.json({ msg: "Account has been activated!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
        expiresIn: "5m",
    });
};
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });
};
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFERSH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
};

module.exports = userController