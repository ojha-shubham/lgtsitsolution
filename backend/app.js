const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
require("dotenv").config();
const connectDB = require("./src/config/db");
const allRoutes = require("./endpointConfig/allRoutes")

// Load environment variables from .env file
dotenv.config();

// Setup a global variable to resolve application directory path
global.appDir = path.join(__dirname);

const app = express();
// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false, parameterLimit: 5000 }));

// Static folder for images
app.use('/images', express.static(path.join(global.appDir, 'images')));

// Routes
app.get("/", (req, res) => {
  res.json({ servicename: "first app module" });
});


// Mount all API routes under /api
app.use('/api', allRoutes);

console.log("Server setup complete, ready to accept requests.");

module.exports = app;
