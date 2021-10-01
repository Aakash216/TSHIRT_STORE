const express = require("express");

const app = express();

const port = 3500;

app.get("/", (req,res) => {
return res.send("Home Page");
});

const admin = (req,res) => {
    return res.send("this is admin dashboard");
}

const isAdmin = (req,res,next) => {
    console.log("isAdmin is running");
    next();
}
const isLogggedin = (req,res,next) => {
    console.log("isLoggedin is running successfully");
    next();
}

app.get("/admin", isLogggedin,isAdmin,admin);

app.get("/login", (req,res) => {
    return res.send("You are visiting login route");
    });

    app.get("/logout", (req,res) => {
        return res.send("You are visiting logout route");
        });

        app.get("/signup", (req,res) => {
            return res.send("You are visiting");
            });

        app.get("/hiten", (req,res) => {
            return res.send("Hiten is using instagram");
            });

app.listen(port, () => {
    console.log("Server is up and running");
});