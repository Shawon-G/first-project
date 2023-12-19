// const express = require("express");
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// Parsers:
app.use(express.json());
// Cors:
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;

// console.log(process.cwd());

// "lint": "eslint --ignore-path .eslintignore --ext .js,.ts"
// "lint": "eslint src--ignore-path .eslintignore --ext .ts"
// "lint": "eslint . --ext .ts",
// "lint:fix": "eslint . --ext .ts --fix",
