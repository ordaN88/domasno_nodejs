const mongoos = require('mongoose');

mongoos.connect(
    `mongodb+srv://dbOrdan:mongodbordan@clusternanovoinficirani.s2feh.mongodb.net/js09?retryWrites=true&w=majority`,
    // mongoose.connect('mongodb+srv://dbOrdan:mongodbordan@clusternanovoinficirani.s2feh.mongodb.net/iproperty?retryWrites=true&w=majority'
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },

    err => {
        if(err) {
            return console.log('Could not connect to DB', err);
        }
        console.log('Successfully connected to database');
    }
);