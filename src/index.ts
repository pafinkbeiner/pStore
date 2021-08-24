import * as bodyParser from 'body-parser';
import express from 'express';
import DBProvider from "./db/DBProvider"

const app = express();

app.use(bodyParser.json())

const db = DBProvider.getInstance();

// get all 
app.get('/', (_req, res) => {
  res.json(db.get())
})

// get by id
app.get('/:id', (_req, res) => {
  res.json(db.getById(_req.params.id))
});

// set by id
app.post('/:id', (_req, res) => {
  res.json(db.set(_req.params.id, _req.body))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
