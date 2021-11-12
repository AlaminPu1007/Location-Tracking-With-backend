import React,{useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Context as TrackContext} from '../context/TrackSaveContext';
import MapView,{Polyline} from 'react-native-maps';

const TrackDetailScreen =({navigation})=>{
	const {state}  = useContext(TrackContext);
	const _id = navigation.getParam('_id');
	const track = state.find(some=>some._id===_id);
	const initialCoord = track.locations[0].coords;
	return(
		<>
			<MapView
				initialRegion={{
					latitudeDelta:0.001,
					longitudeDelta:0.01,
					...initialCoord
				}}
				style={styles.map}
			>
				<Polyline coordinates={track.locations.map(loc=>loc.coords)} />
			</MapView>
		</>
	);
};



const styles=StyleSheet.create({
	map:{
		height:'100%'
	}
});
export default TrackDetailScreen;