const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true
})
    .then(db => console.log('DB is connected to', process.env.MONGODB_URI))
    .catch(err => console.error(err));