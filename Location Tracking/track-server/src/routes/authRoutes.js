
const express = require ('express');

const mongoose = require('mongoose');

const jwt = require ('jsonwebtoken');

const User = mongoose.model('User'); //from User file

const router = express.Router();

router.post('/signup', async (req,res)=>{
	const {name,mobile,email, password} = req.body;
	try{
		const user = new User({name,mobile,email,password});
		await user.save();

		const token = jwt.sign({userId: user._id},'MY_SECRET_KEY');
		res.send({token});
	}catch(err){
		return res.status(422).send(err.message);
	}
	
});


router.post ('/signin', async (req , res)=>{

	const {email,password} = req.body;

	if(!email || !password){
		return res.status(422).send({error : 'Must Provide Email and Password '});
	}

	const user =  await User.findOne({email});
	if(!user){
		return res.status(422).send({error: 'Invalid email or password '});
	}

	try{

		await user.comparePassword(password);

		const token = jwt.sign({userId: user._id},'MY_SECRET_KEY');
		res.send({token});

	}catch(err){

		return res.status(422).send({error: 'Invalid  password or email'});
	}
	
});

///recent add
router.post ('/find', async (req , res)=>{

	const {email} = req.body;

	if(!email ){
		return res.status(422).send({error : 'Must Provide Email'});
	}

	const user =  await User.findOne({email});
	if(!user){
		return res.status(422).send({error: 'Invalid email'});
	}

		const token = jwt.sign({userId: user._id},'MY_SECRET_KEY');
		res.send({token});
		
});

router.get('/user/:id',(req,res)=>{
	User.findById(req.params.id)
	.then(userfound=>{
		if(!userfound){return res.status(404).end();}
		return res.status(200).json(userfound);
	})
	.catch(err=>next(err));
});



router.get('/user',(req,res)=>{
	User.find({},(err,users)=>{
		if(err){
			res.send('something went really worng!');
			next();
		}
		res.json(users);
	});
});

///end add
module.exports = router;