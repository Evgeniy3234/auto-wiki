require('@babel/register');
require('dotenv').config();

const express = require('express');
// HTTP request logger middleware for node.js.
// Логгирование деталей запросов.
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');

// Импорт маршрутов.

const homeRouter = require('./src/routes/homeRoute');
const engineRoute = require('./src/routes/engineRoute');
const suspensionRoute = require('./src/routes/suspensionRoute');
const transmissionRoute = require('./src/routes/transmissionRoute');


const signUpRouter = require('./src/routes/signUpRoute');
const signInRouter = require('./src/routes/signInRoute');
const logoutRouter = require('./src/routes/logOutRoute');
const profileRouter = require('./src/routes/profilRoute');

const truckCallRouter = require('./src/routes/truckCallRouter');

const errorsRouter = require('./src/routes/errorRoute');
const greenLightRouter = require('./src/routes/greenLightRouter');
const redLightRouter = require('./src/routes/redLightRouter');
const orangeLightRouter = require('./src/routes/orangeLightRouter');


const app = express();

const PORT = process.env.PORT || 3900;

// Подключаем логгирование запросов
app.use(logger('dev'));
// Подключаем статику
app.use(express.static(path.join(__dirname, 'public')));
// Обработка POST запросов.
// urlencoded.
app.use(express.urlencoded({ extended: true }));
// json.
app.use(express.json());
// cookies
app.use(cookieParser());
// session
app.use(session({
  store: new FileStore(),
  secret: process.env.SECRET || 'kshfasdaskshsnfl',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

// Подключаем импортированные маршруты с определенным url префиксом.
app.use('/', homeRouter);
app.use('/engine', engineRoute);
app.use('/suspension', suspensionRoute);
app.use('/transmission', transmissionRoute);

app.use('/signIn', signInRouter);
app.use('/signUp', signUpRouter);
app.use('/logout', logoutRouter);
app.use('/profil', profileRouter);

app.use('/trackCall', truckCallRouter);

app.use('/errors', errorsRouter);
app.use('/redLight', redLightRouter);
app.use('/greenLight', greenLightRouter);
app.use('/orangeLight', orangeLightRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
