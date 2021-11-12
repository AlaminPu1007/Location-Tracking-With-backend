import React ,{useContext} from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import MapView,{Polyline,Circle} from 'react-native-maps';
import {Context as FindTrackingContext} from '../context/FindTrackingContext';

const FindingTrackId=({navigation})=>{
	const {state:{findtrackId}} = useContext(FindTrackingContext);
	//const id =navigation.getParam('id');
	const filter = findtrackId.find((blog)=>blog._id===navigation.getParam('id'));
	//console.log(filter._id);
	const initialCoordLength = filter.locations.length;
	//console.log(initialCoordLength);
	const initialCoord = filter.locations[initialCoordLength-1].coords;
	return(
		<View>
			<MapView style={styles.map}
				initialRegion={{
					latitudeDelta:0.001,
					longitudeDelta:0.01,
					...initialCoord
				}}
			>
				<Circle 
					center={initialCoord} 
					radius={20}
					strokeColor="rgba(158 , 158 ,255, 1.0)"
					fillColor="rgba(158,158,255,0.3)"
				/>
			</MapView>
			<Button title="For more Details"
				onPress={()=>{navigation.navigate('MapDetails',{id: filter._id})}}
			 />
		</View>
	);
}
const styles=StyleSheet.create({
	map:{
		height:'90%'
	}
});
export default FindingTrackId;