import React, {useContext} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MapView,{Polyline,Circle} from 'react-native-maps';
import {Context as FindTrackingContext} from '../context/FindTrackingContext';

const MapDetails =({navigation})=>{

	const {state:{findtrackId}} = useContext(FindTrackingContext);

	//const id =navigation.getParam('id');

	const filter = findtrackId.find((blog)=>blog._id===navigation.getParam('id'));

	//console.log(filter._id);

	const initialCoord = filter.locations[0].coords;
	return(
		<View>
			<MapView style={styles.map}
				initialRegion={{
					latitudeDelta:0.001,
					longitudeDelta:0.01,
					...initialCoord
				}}
			>
				<Polyline coordinates={filter.locations.map(loc=>loc.coords)} />

			</MapView>
		</View>
	);
}

const styles=StyleSheet.create({
	map:{
		height:'100%'
	}
});
export default MapDetails;