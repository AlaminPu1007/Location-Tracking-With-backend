import createDataContext from './createDataContext';
import tracker from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {navigate} from '../NavigationRef';

const TrackingReducer=(state,action)=>{
	switch(action.type){
		case 'FindLocation_Id':
			return {...state, findtrackId:action.payload};
		case 'User_id':
			return {...state, findUser:action.payload, email:action.payload1};
		default:
			return state;
	}
};

const FindTrack=(dispatch)=>{
	return async(email)=>{
		try{
			if(email===''){
				alert('Email not Empty!')
			}
			else if(email){

				const response = await tracker.post('/find',{email});

				const alluser = await tracker.get('/user');
					dispatch({type:'User_id',
					payload: alluser.data,
					payload1: email
				});
				navigate('TrackId');
			}else{
				alert('Please Provide a Valid Email!');
			}
			
			//console.log(trackuser.data);
			//console.log(response);
			//const res = await tracker.get(`/tracks/${_id}`);
			//console.log(res.data);

			
		}catch(err){
			alert('Email did not match!');
			//console.log(err.message);
		}
	};
};

const TrackUser =(dispatch)=>{
	return async () =>{
		try{
			const trackuser = await tracker.get('/tracksid');
			//console.log(trackuser.data);
			dispatch({type:'FindLocation_Id',payload: trackuser.data}); 
			//navigate('PassUserId');
		}catch(err){
			console.log(err.message);
		}
	};
};

const passingLocation=()=>{
	return(locationpass)=>{
		console.log('inside findtracingcontext',locationpass);
	}
}

export const {Context,Provider}=createDataContext(
	TrackingReducer,
	{FindTrack,TrackUser,passingLocation},
	{email : '', findtrackId : null, findUser: null,}
);