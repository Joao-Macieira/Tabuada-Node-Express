const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const tabuadaRouter = require('./routes/tabuada');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/tabuadas', tabuadaRouter);

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
