const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT} `);
});
