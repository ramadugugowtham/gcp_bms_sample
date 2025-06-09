// server.js
const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL config
const client = new Client({
  user: 'postgres',
  host: '34.136.96.95',
  database: 'mydatabase',
  password: '.Ah+*+mSPq#|Xv<2',
  port: 5432,
});
client.connect();

app.post('/log-event', (req, res) => {
  const { eventType, eventData } = req.body;
  const query = 'INSERT INTO events(event_type, event_data) VALUES($1, $2)';
  const values = [eventType, JSON.stringify(eventData)];

  client.query(query, values, (err) => {
    if (err) {
      console.error('Insert failed:', err.stack);
      res.status(500).send('Database error');
    } else {
      res.status(200).send('Event logged');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
