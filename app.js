import express from 'express';
// import memberRoute from './routes/member.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// app.use('/api/members', memberRoute);

import mysql from 'mysql2';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW || '',
  database: process.env.MYSQL_DB,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log('Error connecting to MySQL: ' + err);
  } else {
    console.log('Connected to MySQL!');
    connection.release();
  }
});

app.get('/', (req, res) => {
  pool.query('SELECT * FROM services', function (err, rows, fields) {
    if (err) {
      res.send(500).json({ error: 'Error' });
      return;
    }
    res.json(rows);
  });
});

app.listen();
