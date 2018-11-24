import express from 'express';
import rf from 'fs-readfile-promise';
import path from 'path';

const app = express();

(async () => {

  //load index HTML
  const indexHTML = await rf(path.join(__dirname, 'ReactWebApp/index.html'));

  //set up middleware to serve static files in /dist
  app.use('/static', express.static(path.join(__dirname, 'www_static_dist')));

  //routing

    //index
    app.get('/', (req, res) => {
      res.send(indexHTML)
    });

  let port = process.env.PORT || 3000;

  //start server
  app.listen(port, () => console.log(`App running on port ${port}`));

})();