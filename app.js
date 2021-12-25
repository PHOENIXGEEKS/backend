const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const { logger, stream } = require('./middlewares/logger');

const app = express();

dotenv.config({ path: './config/.env' });

app.use(cors());
app.use(morgan('combined', { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = process.env.PORT || 5000;
const mode = process.env.NODE_ENV;

app.listen(port, () => logger.info(`Server started at port ${port} in ${mode} mode`));
