import express from "express";
import cors from "cors";
import routes from "../src/routes/index";

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use(process.env.APP_PREFIX_PATH ?? "/api", routes);

const APP_PORT = process.env.APP_PORT || 8080;
app.listen(APP_PORT, () => {
  console.log(`server is running on the port ${APP_PORT}`);
});
