const express = require('express');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const todoRoutes = require('./routes/todo');

const PORT = process.env.PORT || 3000;
const app = express();
const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'handlebars'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('views', 'views');

app.use(todoRoutes);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Oleg:971971555@cluster0-zo8tx.mongodb.net/todo', {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log('Сервер запущен');
        })
    } catch (e) {
        console.log(e);
    }
}

start();