import "reflect-metadata";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";

import AuthenticationRouter from "./routes/AuthenticationRoutes";

const PORT = process.env.PORT || 9000;

const app = express();

// initialize env variables
config();

app.use(cors());
app.use(bodyParser.json());

app.use(AuthenticationRouter);

app.listen(PORT, () => {
  console.log("Listening to: ", PORT);
});
