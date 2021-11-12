
require('./models/User');
require('./models/Track');

const express = require ('express');
const mongoose = require('mongoose');
const authRoutes = require ('./routes/authRoutes');
const trackRoutes = require ('./routes/trackRoutes');
const bodyParser = require ('body-parser');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

//
///tracks app this for
//const mongoUri = 'mongodb+srv://admin:admin@cluster0-2wtmd.mongodb.net/anything?retryWrites=true&w=majority';///admin is password
//
///this for tracking app
const mongoUri = 'mongodb+srv://admin:admin@cluster0-2wtmd.mongodb.net/tracking?retryWrites=true&w=majority';///admin is password

mongoose.connect(mongoUri,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

//to check connection or error

mongoose.connection.on('connected',()=>{
	console.log('mongoose is connected');
});

mongoose.connection.on('error',(err)=>{
	console.error('We get some error', err);
});

app.get('/', requireAuth, (req,res)=>{
	res.send(`Your Email: ${req.user.email}`);          
});

app.listen(3000,()=>{
	console.log('listening port on 3000');
});