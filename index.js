const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv/config");
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware
app.use(bodyparser.json());

// Routes
const postsRoutes = require("./routes/posts");
app.use("/posts", postsRoutes);

// Database Connection Using Mongoose
(async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Unable To Connect MongoDB Database");
        console.log(error);
    }
})();

// Create Server On Localhost:8000
(async () => {
    try {
        await app.listen(PORT);
        console.log(`Server Started On Localhost:${PORT}`);
    } catch (error) {
        console.log(`Unable To Create Server On Localhost:${PORT}`);
        console.log(error);
    }
})();

module.exports = app;
