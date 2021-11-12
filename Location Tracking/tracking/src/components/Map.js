import React,{useContext} from 'react';
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native';
import MapView,{Polyline,Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map =()=>{
	const {state:{currentLocation,locations}} = useContext(LocationContext);

	if(!currentLocation){
		return <ActivityIndicator size="large" style={{marginTop:190}} /> 
	}
	return (
		<View>
			<MapView style={styles.map}
				// initialRegion={{
				// 	...currentLocation.coords,
				// 	latitudeDelta:0.001,
				// 	longitudeDelta:0.01
				// }}
				region={{
					...currentLocation.coords,
					latitudeDelta:0.001,
					longitudeDelta:0.01
				}}
			>
				<Circle 
					center={currentLocation.coords} 
					radius={30}
					strokeColor="rgba(158 , 158 ,255, 1.0)"
					fillColor="rgba(158,158,255,0.3)"
				/>
				<Polyline coordinates={locations.map(loc=>loc.coords)} />
			</MapView>
		</View>
	);
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    // height:300
  },
});

export default Map;