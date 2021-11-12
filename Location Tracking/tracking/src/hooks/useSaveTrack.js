import {useContext} from 'react';
import {Context as LocationContext} from '../context/LocationContext';
import {Context as TrackContext} from '../context/TrackSaveContext';
import {navigate} from '../NavigationRef';

export default ()=>{
	const {createTrack} =useContext(TrackContext);
	const {state:{name,locations},Reset} = useContext(LocationContext);

	const saveTrack = async ()=>{
		await createTrack(name,locations);
		Reset();
		navigate('TrackList');
	};
	return [saveTrack];
};
