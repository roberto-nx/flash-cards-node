import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();

db.sync();
app.use(express.json());
app.use(routes);

app.listen(3000);