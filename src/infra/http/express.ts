import express from "express";
const app = express();

app.get("/orders/:code", (req: any, res: any) => {
  res.json({
    code: "202100000001"
  });
});

app.listen(3000);