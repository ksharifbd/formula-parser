const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();

app.set('port', 3001);

const corsOptions = {
    origin: 'http://localhost:3000',
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/formulas', (req, res) => {
    res.status(200).json(
        [
            {
                "formula": "2*x+y-z"
            },
            {
                "formula": "a/d*f+5"
            },
            {
                "formula": "5*x/y"
            }
        ]
    );
});

app.post('/result', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
});

app.listen(app.get('port'), () => {
    console.log(`Server up: http://localhost:${app.get('port')}`);
});
