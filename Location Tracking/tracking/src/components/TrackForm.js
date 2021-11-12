import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button } from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext}  from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm =()=>{
	const {state:{recording,locations,name},
		startRecording,
	 	stopRecording,
		changeName
	} =useContext(LocationContext);

	const [saveTrack] = useSaveTrack();

	return(
		<>
			<Input label="Enter Track Name"
			 	placeholder="Enter Name" 
			 	value={name}
			 	onChangeText={changeName}
			 />
			 <Text></Text>
				{
					recording ? 
					<View style={styles.button}>
						<Button title="Stop Recording" onPress={stopRecording}/>
					</View>	
					: 
					<View style={styles.button}>
						<Button title="Start Recording" onPress={startRecording} />
					</View>
				}
			<Text></Text>
				{
					!recording && locations.length 
					?
					 <View style={styles.button}>
						<Button title="Save Recording" onPress={saveTrack} /> 
					</View>
					: null
				}
			
		</>
	);
};
const styles=StyleSheet.create({
	button:{
		justifyContent: 'center',
        alignItems: 'center',
        fontSize:25
	}
});
export default TrackForm;