const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const noteRoutes = require("./src/routes/notes_routes");
const { connectDatabase } = require("./db_connection");

//parse the body data
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//allow cors
app.use(cors());

//app to use routes
app.use("/api/v1/notes", noteRoutes);
//check health of server
app.use("/health", (req, res) => {
  res.send({ message: "Ok" });
});

//connect to database
connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
