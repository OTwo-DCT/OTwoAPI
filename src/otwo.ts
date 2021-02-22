import express from 'express';
import {config} from 'dotenv';

const app = express();
config();

app.get('/', (req, res) => {
  res.send('hello all...').status(200);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`listening on ${port}`));
