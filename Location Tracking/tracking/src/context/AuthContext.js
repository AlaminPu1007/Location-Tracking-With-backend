import createDataContext from './createDataContext';
import {AsyncStorage} from 'react-native';
import tracker from '../api/tracker';
import {navigate} from '../NavigationRef';

const reducer =(state , action)=>{
	switch(action.type){
		case 'Error_message':
			return {...state , errorMessage: action.payload};
		case 'signIn_Up':
			return {...state,errorMessage:'',token:action.payload ,
			 takeEmail:action.payload1,
			};
		case 'signout':
			return {token:null , errorMessage:''};
		case 'clearError':
			return {...state ,errorMessage: ''};
		case 'all_data':
			return {...state , getalldata:action.payload};
		default:
			return state;
	}
};

const ClearErroMessage =(dispatch)=>{
	return()=>{
		dispatch({type: 'clearError'});
	};
};


const AutomaticSignin =(dispatch)=>{
	return async ()=>{
		const token = await AsyncStorage.getItem('token');
		if(token){
			dispatch({type:'signIn_Up' , payload:token});
			navigate('TrackList');
		}
		else{
			navigate('SignUp');
		}
	};
};


const SignUp =(dispatch)=>{
	return async ({name,mobile,email , password})=>{
		//console.log(email,password);
		try{
			if(name===''||mobile===''||email===''||password===''){
				alert('field is required');
			}
			const response = await tracker.post('/signup',{name,mobile,email , password});
			await AsyncStorage.setItem('token' , response.data.token);
			dispatch({
				type: 'signIn_Up' , 
				payload:response.data.token,
				payload1:email
			});
			navigate('TrackList');
		//dispatch({type: 'sign_Up' , payload:response.data.token });
		}catch(err){
			//console.log(err.message);
			dispatch({type: 'Error_message', payload: 'Something went wrong with Sign Up'});
		}
	};
};


const SignIn =(dispatch)=>{
	return async ({email,password})=>{
		//console.log(email,password);
		try{
			if(email===''||password===''){
				alert('field is required');
			}
			const response = await tracker.post('/signin',{email , password});
			//console.log('inside authcontext',response.config.data);

			await AsyncStorage.setItem('token',response.data.token);

			dispatch({
				type: 'signIn_Up' , 
				payload:response.data.token, 
				payload1:email,
			});

			navigate('TrackList');
		}catch(err){
			//console.log(err.message);
			dispatch({type: 'Error_message', payload:'Something went wrong with Sign in'});
		}
	};
};

const signOut =(dispatch)=>{
	return async ()=>{
		await AsyncStorage.removeItem('token');
		dispatch({type: 'signout' });
		navigate('SignUp');
	};
};

const getUserData=(dispatch)=>{
	return async()=>{
		const alluser = await tracker.get('/user');
		dispatch({type:'all_data',payload:alluser.data});
	};
};

export const {Context , Provider} = createDataContext(
	reducer,
	{SignIn,SignUp,AutomaticSignin,signOut,ClearErroMessage,getUserData},
	{token:null,errorMessage: '',takeEmail: '',alldata:null,getalldata:''}
);