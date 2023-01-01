const express = require("express");
const htmlRoutes = require ("./develop/routes/htmlRoutes");
const apiRoutes = require("./develop/routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./develop/public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);