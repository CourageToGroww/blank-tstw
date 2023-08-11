import express, { Request, Response } from "express";

const app: express.Application = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Do not forget to replace me!");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
