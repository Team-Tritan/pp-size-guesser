import express, { Express, Request, Response } from "express";
import path from "path";

let app: Express = express();
let port = 4200;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "pp.html"));
});

const server = app.listen(port, () => {
  console.log(`running --> port ${port}`);
});
