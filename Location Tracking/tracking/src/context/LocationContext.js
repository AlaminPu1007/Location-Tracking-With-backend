import createDataContext from './createDataContext';

const locationRducer=(state,action)=>{
	switch(action.type){
		case 'add_location':
			return {...state , currentLocation : action.payload};
		case 'start_recording':
			return {...state, recording:true};
		case 'stop_recording':
			return {...state , recording:false};
		case 'record_location':
			return {...state, locations:[...state.locations , action.payload]};
		case 'change_name':
			return {...state, name: action.payload};
		case 'reset':
			return {...state , name: '', locations:[]};
		default:
			return state;
	}
};

const changeName=(dispatch)=>{
	return (name)=>{
		dispatch({type:'change_name', payload:name});
	};
};

const startRecording =dispatch=>()=>{
	dispatch({type:'start_recording'});
};

const stopRecording =dispatch=>()=>{
	dispatch({type:'stop_recording'});
};

const addLocation =dispatch=>(location,recording)=>{
	dispatch({type:'add_location' , payload: location});
	if(recording){///is true
		dispatch({type:'record_location', payload:location});
	}
};

const Reset=(dispatch)=>{
	return()=>{
		dispatch({type: 'reset'});
	};
};

export const {Context,Provider} = createDataContext(
	locationRducer,
	{startRecording, stopRecording, addLocation,changeName,Reset},
	{name:'',recording:false , locations:[], currentLocation:null}
);
