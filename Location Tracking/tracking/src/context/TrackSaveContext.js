import createDataContext from './createDataContext';
import tracker from '../api/tracker';

const TrackReducer =(state,action)=>{
	switch(action.type){
		case 'fetch_track':
			return action.payload;
		case 'delete_track':
			return state.filter((some)=>some._id!==action.payload);
		default:
			return state;
	}
};

const fetchTrack=(dispatch)=>{
	return async()=>{
		const response = await tracker.get('/tracks');
		//console.log(response.data);
		dispatch({type:'fetch_track', payload:response.data});
	};
};

const createTrack=(dispatch)=>{
	return async (name,locations)=>{
		if(name!==''){
			try{
				await tracker.post('/tracks',{name,locations});
			}catch(err){
				//console.log("inside tracksavecontext",err.message);
		}
	}else{
		alert('TextInput not empty!');
		
		};
	}
};

const DeleteTrack=(dispatch)=>{
	return async (_id,name)=>{
		try{
		    //console.log(name,_id);
			// const response = await tracker.get('/tracks');
			// console.log("Inside Track save",response.data.name);

			await tracker.delete(`/tracks/${_id}`);
			dispatch({type:'delete_track',payload:_id});
		}catch(err){
			console.log(err.message);
			//console.log(err.response.data);
      		//console.log(err.response.status);
      		//console.log(err.response.headers);
		}
	};
};

export const {Context,Provider} = createDataContext(
	TrackReducer,
	{fetchTrack , createTrack,DeleteTrack},
	[]
);
