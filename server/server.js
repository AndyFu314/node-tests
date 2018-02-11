const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Test App V1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {name: 'Andy', age: 27},
        {name: 'Kelly', age: 28},
        {name: 'Peggy', age: 26}
    ]);
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
module.exports.app = app;