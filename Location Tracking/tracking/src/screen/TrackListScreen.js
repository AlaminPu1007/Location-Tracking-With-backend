import React,{useContext} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,ActivityIndicator} from 'react-native';
import {SafeAreaView,NavigationEvents} from 'react-navigation';
import {Context as TrackContext} from '../context/TrackSaveContext';
import {ListItem} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';

let l;
const TrackListScreen =({navigation})=>{
	const {state,fetchTrack,DeleteTrack}=useContext(TrackContext);
	l=state.length;
	//{l?null:<Text style={{fontSize:20,marginTop:'50%',marginLeft:'25%'}}>Create a Tracke First!</Text>}
	
	return(
		<View style={{backgroundColor:'#FAFAFA',flex:1}}>
		{l>0?null:<Text style={styles.error}>Add A Track</Text>}
		<View style={{backgroundColor:'#FAFAFA'}}>
			<NavigationEvents onWillFocus={fetchTrack}/>
			<FlatList 
				data={state}
				keyExtractor={item=>item._id}
				renderItem={({item})=>{
					return (
						<View style={styles.innerView}>
							<TouchableOpacity onPress={()=>{navigation.navigate('TrackDetail',{_id: item._id})}}>
								<View style={styles.container}>

									<Text style={styles.text}>{item.name}</Text>
									<TouchableOpacity onPress={()=>{DeleteTrack(item._id,item.name)}}>
										<Feather name='trash' style={styles.icon}/>
									</TouchableOpacity>
								</View>
							</TouchableOpacity>
						</View>
					);
				}}
			/>
			</View>
		</View>
	);
};

TrackListScreen.navigationOptions ={
	 headerStyle: {backgroundColor:'#FAFAFA' },
	title: 'Track List',
};

const styles=StyleSheet.create({
	innerView:{
		borderBottomWidth:2,
		marginHorizontal:18,
		flex:1,
		marginVertical:10,
	},
	container:{
		flexDirection: 'row',
		justifyContent:'space-between',
		//marginHorizontal:12,
		//marginTop:8,
		
		//marginBottom:3,
		
	},
	error:{
		marginLeft:'40%',
		marginTop:'40%',
		fontSize:20,
	},
	text:{
		fontSize: 20,	
		flex:9,
		paddingBottom:10,
	},
	icon:{
		fontSize:25,
		flex:1,
		marginTop:4,
		paddingBottom:10,
	}
});
export default TrackListScreen;
