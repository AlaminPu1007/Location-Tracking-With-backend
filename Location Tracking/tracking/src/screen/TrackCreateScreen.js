import '../_mockLocation';
import React,{useState,useEffect,useContext,useCallback} from 'react';
import {View,StyleSheet} from 'react-native';
import {SafeAreaView,withNavigationFocus} from 'react-navigation';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';
import {Feather} from '@expo/vector-icons';
import {Context as FindTrackingContext} from '../context/FindTrackingContext';

const TrackCreateScreen =({isFocused})=>{

	const {state,state:{recording},addLocation} = useContext(LocationContext);
	const callback=useCallback((location)=>{
		addLocation(location,recording);
	});
	const [error] = useLocation(isFocused||recording,callback);
	
	return(
		<SafeAreaView forceInset={{top:'always'}}>
			<Map />
			{error?<Text style={{margin:5,color:'red'}}>Please Enable Location</Text>:null}
			<TrackForm/>
		</SafeAreaView>
	);
};

TrackCreateScreen.navigationOptions={
	title:'Add Track',
	tabBarIcon:<Feather name="plus" size={30} />
};

const styles=StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);