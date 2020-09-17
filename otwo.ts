import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send('hello...').status(200);
});

const port = 3500
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
