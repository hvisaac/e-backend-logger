const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
require('./config/databases/mongodb/conexion');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(async (req, res, next) => {
    let token = req.headers.authorization;

    try {
        if (token.startsWith('Bearer ')) {
            token = token.split(' ')[1];
            if (token == await require('./services/security.service').getToken()) {
                next();
            } else {
                res.status(403).json({ message: 'invalid token' });
            }
        }
    } catch (error) {
        res.status(401).json({ message: 'authentication token is required', error: error })
    }

})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/aplication.routes'));
app.use('/api', require('./routes/authorization.routes'));
app.use('/api', require('./routes/logs.routes'));

app.listen(app.get('port'), () => {
    console.log(`server on port: ${app.get('port')}`);
});

module.exports = app;
