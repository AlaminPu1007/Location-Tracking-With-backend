
const express  = require ('express');
const mongoose = require ('mongoose');
const requireAuth = require ('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req,res)=>{

	const tracks = await Track.find({userId : req.user._id});
	res.send(tracks);

});


router.post('/tracks', async (req , res)=>{

	const {name,locations} = req.body;

	if(!name || !locations){
		return res.status(422).send({error: 'You must provide name and locations'});
	}

	try{
		const track = new Track({name , locations, userId: req.user._id});
		await track.save();
		res.send(track);
	}catch(err){
		res.status(422).send({error: err.message});
	}
});

//add new myself

///
router.route('/tracks/:id').get((req , res)=>{
	Track.findById(req.params.id)
	.then(track=>res.json(track))
	.catch(err=>res.status(400).json('error:'+ err));
});

router.route('/tracks/:id').delete((req , res)=>{
	Track.findByIdAndDelete(req.params.id)
	.then(()=>res.json('track delete'))
	.catch(err=>res.status(400).json('error:'+err));
});

///end

///receent add
router.get('/tracksid',(req,res)=>{
	Track.find({},(err,users)=>{
		if(err){
			res.send('something went really worng!');
			next();
		}
		res.json(users);
	});
});
//end add

module.exports = router;