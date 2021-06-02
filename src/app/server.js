const express = require("express");
const app = express();

const port = process.env.PORT || 3333;
const lessonsRoute = require("./routes");

app.use(express.json());
app.use('/api',lessonsRoute);

app.listen(port, (_) => console.log(`server on in localhost:${port}`));
