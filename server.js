const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send("Proba");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
});