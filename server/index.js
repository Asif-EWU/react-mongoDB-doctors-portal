const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs-extra');
const fileUpload = require('express-fileupload');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.efdix.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('doctors'));
app.use(fileUpload());

const port = 5000;

app.get('/', (req, res) => {
    res.send("Yoo Bro !!");
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const appointmentCollection = client.db("doctorsPortal").collection("appointments");

    app.post('/addAppointment', (req, res) => {
        const appointment = req.body;
        appointmentCollection.insertOne(appointment)
            .then(result => {
                res.send(result.insertedCount)
            })
    })

    app.post('/addDoctor', (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const file = req.files.file;
        const filePath = `${__dirname}/doctors/${file.name}`; 
        console.log(name, email, file);

        file.mv(filePath, err => {   // __dirname returns root directory path
            if (err) {
                console.log(err);
                return res.status(500).send({ msg: 'Failed to upload Image' });
            }

            const newImg = fs.readFileSync(filePath);
            const encImg = newImg.toString('base64');

            doctorCollection.insrtOne({name, email, img:file.name})
            .then(result => {
                res.send(result.insrtedCount > 0);
            })

            // return res.send({ name: file.name, path: `/${file.name}` });
        });
    });
});

app.listen(process.env.PORT || port);