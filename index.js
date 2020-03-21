const express = require('express');
const mongoose = require('mongoose');
const expresshbs = require('express-handlebars');
const todoRoutes = require('./routes/todo');

const PORT = process.env.PORT || 3000;
const app = express();
const hbs = expresshbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
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

// app.get('/', function(req, res){
//     res.render("index");
// });

start();