import * as hi from './controllers/hi';

var express = require('express');

const next = require('next');

const isDev = process.env.NODE_ENV !== 'production';
const app = next({ isDev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(() => {
    server.get('/hi', hi);
    server.get('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('server ready on port 3000');
    });
  })
  .catch((exception) => {
    console.error(exception.stack);
    process.exit(1);
  });
