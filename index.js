'use strict';

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 5000;

// App
const app = express();

app.use((req, res, next) => {
  res.setHeader("X-XSS-Protection", "1; mode=block");
  next();
});

// LA CSP es compleja de configurar
app.use(helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'", "https://fonts.googleapis.com", "https://use.typekit.net", "https://p.typekit.net"],
    "script-src": ["'self'", "https://code.jquery.com"],
    "style-src": null,
  }
}));
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(cors())

app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/' + 'index.html');
});


app.listen(PORT, () => {
  console.log(`En el puerto: ${PORT}`);
});