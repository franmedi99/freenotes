if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = require('./server');
require('./database');
app.listen(app.get('port') , ()=>{
    console.log('Environment:', process.env.NODE_ENV);
    console.log('server on port', app.get('port'))
});