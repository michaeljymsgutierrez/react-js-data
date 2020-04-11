import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fs from "fs";

const app = express();
const currentPath = __dirname;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ success: 200 });
});

const users = JSON.parse(
  fs.readFileSync(`${currentPath}/json/users.json`).toString()
);

const customerProfiles = JSON.parse(
  fs.readFileSync(`${currentPath}/json/customer-profiles.json`).toString()
);

app.get("/api/v1/users", (req, res) => {
  res.json(users);
});

app.get("/api/v1/customer-profiles", (req, res) => {
  res.json(customerProfiles);
});

app.listen("8081", () => {
  console.log(
    "\n  =====================================\n  = STATUS: DEVELOPMENT MODE\n  = SERVER: http://127.0.0.1:8081\n  ====================================="
  );
});
