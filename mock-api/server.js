import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ success: 200 });
});

app.listen("8081", () => {
  console.log(
    "\n  =====================================\n  = STATUS: DEVELOPMENT MODE\n  = SERVER: http://127.0.0.1:8081\n  ====================================="
  );
});
