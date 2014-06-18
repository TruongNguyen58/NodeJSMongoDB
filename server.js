/**
 * 
 */
var express = require('express'),
    girl = require('./routes/girls');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 
app.get('/girls', girl.findAll);
app.get('/girls/:id', girl.findById);
app.post('/girls', girl.addGirl);
app.put('/girls/:id', girl.updateGirl);
app.delete('/girls/:id', girl.deleteGirl);
 
app.listen(3000);
console.log('Listening on port 3000...');