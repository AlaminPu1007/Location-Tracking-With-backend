import React ,{useContext,useState,useEffect} from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Input,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as FindTrackContext} from '../context/FindTrackingContext';
import {Feather} from '@expo/vector-icons';

const LocationTrack =({navigation})=>{
	const {FindTrack} = useContext(FindTrackContext);
	const [email , setEmail] = useState('');
	
	return(
		<View style={styles.container}>
			<SafeAreaView  forceInset={{ top: 'always' }}>
				<Text style={styles.text}>Enter A Valid Email Address!</Text>
				<View style={styles.innerView}>
					<Spacer/>
						<Input label="Email" 
							onChangeText={(text)=>{setEmail(text)}} 
							autoFocus={true}
							keyboardType={'email-address'}
						/>
					<Spacer/>
					<View style={styles.button}>
					<Button title="Search"
						onPress={()=>{FindTrack(email)}}
						style={{fontSize:25,}}
					/>
					</View>
					{/*<Button title="Go for trak id"
						onPress={()=>{navigation.navigate('TrackId')}}
					/>*/}
				</View>
			</SafeAreaView>
		</View>
	);
}


LocationTrack.navigationOptions={
	title:'Find Track',
	tabBarIcon: <Feather name="search" size={30} />
};

const styles= StyleSheet.create({
	container:{
		backgroundColor:'#FAFAFA' ,
	},
	innerView:{
		//marginTop:10,
		marginHorizontal:30,
	},
	text:{
		fontSize:25,
		marginVertical:30,
		marginHorizontal:'5%',
		color:'#3D3D3D'
	},
	button:{
		marginHorizontal:8,
	}
});
export default LocationTrack;
