import React,{useContext,useEffect} from 'react';
import {View,Text} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveScreen =()=>{
	const {AutomaticSignin} = useContext(AuthContext);
	useEffect(()=>{
		AutomaticSignin();
	},[]);
	return null;
}

export default ResolveScreen;