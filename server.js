const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const server = express();

server.use(express.static(path.join(__dirname, 'build')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

const readHighscore = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, 'data/highscore.json'), (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            };
        });
    });
};

const writeHighscore = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.join(__dirname, 'data/highscore.json'), data, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            };
        });
    });
};

server.get('/api/highscore', (req, res) => {
    res.sendFile(path.join(__dirname, 'data/highscore.json'));
});

server.put('/api/highscore', (req, res) => {
    let player = req.body;
    readHighscore()
        .then(data => {
            data = JSON.parse(data);
            if (data.some(item => item.score < player.score)) {
                let newData = [...data, player];
                newData.sort((a, b) => b.score - a.score);
                newData.pop();
                data = newData;
                writeHighscore(JSON.stringify(data))
                    .then(() => res.sendFile(path.join(__dirname, 'data/highscore.json')))
                    .catch(error => console.log(error));
            } else {
                res.sendFile(path.join(__dirname, 'data/highscore.json'));
            };
        })
        .catch(error => console.log(error));
});

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 5000;
server.listen(port);
console.log(`Server is listening on port ${port}`);