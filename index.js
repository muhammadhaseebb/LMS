const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/lms", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to DB"))
.catch((err) => console.log("Error connecting to mongodb", err));

app.use(express.json())

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));