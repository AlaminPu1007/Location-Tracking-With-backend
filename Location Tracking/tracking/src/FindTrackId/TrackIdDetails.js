import React,{useContext,useEffect} from 'react';
import {View,Text,Button,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Context as FindTrackingContext} from '../context/FindTrackingContext';
let id;
const TrackIdDetails =({navigation})=>{

	const {state:{findUser},TrackUser} = useContext(FindTrackingContext);
	//console.log(findUser);
	const filter = findUser.find((blog)=>blog._id === navigation.getParam('id'));
	//console.log(filter);
	 id = navigation.getParam('id');
	 useEffect(()=>{
	 	TrackUser();
	 },[]);

	return(
		<View style={styles.container}>
			<View style={styles.styleView}> 
			{/*<Text>TrackIdDetails page!</Text>*/}
			{/*<Text style={{fontSize:20}}>Email : {filter.email} </Text>
			<Text style={{fontSize:20}}>Id : {filter._id} </Text>*/}
			<View style={styles.button1}>
				
					{/*<Button title="Click For Tracking List"
						onPress={TrackUser}
					 />*/}
					 {/*<TouchableOpacity activeOpacity={0.7} onPress={TrackUser}>
					 	<Text style={styles.buttontext}>Click For Tracking List</Text>
					 </TouchableOpacity>*/}
				
			</View>
			 <Text></Text>
			 <View style={styles.button2}>
				 {/*<Button title ="See All Tracking List"
				 	onPress={()=>{navigation.navigate('PassUserId',{id:navigation.getParam('id')})}}
				  />*/}
				 <TouchableOpacity activeOpacity={0.7} 
				 	onPress={()=>{
				 		navigation.navigate('PassUserId',{id:navigation.getParam('id')})
				 	}}>
					<Text style={styles.buttontext}>See All Tracking List</Text>
				 </TouchableOpacity>
			 </View>
		</View>
		</View>
	);
};
TrackIdDetails.navigationOptions={
	headerStyle: {backgroundColor:'#FAFAFA' },
};
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FAFAFA',
	},
	styleView:{
		marginTop:30,
		marginHorizontal:20,
	},
	button1:{
		marginTop:20,
		overflow:'hidden',
		marginBottom:30,
	},
	buttontext:{
		fontSize:20,
		backgroundColor:'#4388D6',
		color:'#E3F4FF',
		textAlign:'center',
		paddingVertical:10,
		paddingHorizontal:14,
		borderRadius:5,
	},
	button2:{
		marginBottom:5,
		overflow:'hidden'
	}
});
export default TrackIdDetails;

