import React,{useContext,useState} from 'react';
import {View,Text,Button,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Context as FindTrackingContext} from '../context/FindTrackingContext';

let Emailfilter;

const TrackId =({navigation})=>{
	const {state,state:{findUser}} = useContext(FindTrackingContext);
	
	if(state.email!==''){
		 Emailfilter = findUser.find((blog)=>blog.email === state.email);
	    
	}
	//console.log(Emailfilter);

	return(
		<View style={styles.container}>
		{/*<Text>TrackId</Text>*/}
		{
			Emailfilter 
			?
			<View >
			  <View style={styles.insideView}> 

				<Text style={styles.text1}>Name  : {Emailfilter.name}</Text> 
				  <Text style={styles.text1}>Mobile : {Emailfilter.mobile}</Text> 
					<Text style={styles.text1}>Email   : {Emailfilter.email}</Text> 
					  <TouchableOpacity activeOpacity={0.7} onPress={()=>{
						navigation.navigate('TrackIdDetails',{id : Emailfilter._id})
					   }}>
						  <View style={styles.buttonView}>
							<Text style={styles.button}>Click For More Details!</Text> 
						   </View>
					   </TouchableOpacity>
						</View>
			  </View>
			: null
		}
			
		</View>
	);
}
const styles = StyleSheet.create({
	container:{
		backgroundColor:'#FAFAFA',
		flex:1,
	},
	text1:{
		fontSize:20,
		//borderWidth:2,
		padding:8,
		marginBottom:8,
		color:'#494a49',
		backgroundColor:'white'
	},
	insideView:{
		marginHorizontal:20,
		marginTop:40,
	},
	buttonView:{
		marginHorizontal:3,
		marginTop:5,
	},
	button:{
		fontSize:18,
		backgroundColor:'#4388D6',
		color:'#E3F4FF',
		textAlign:'center',
		paddingVertical:8,
		paddingHorizontal:14,
		borderRadius:3,
	}
});
export default TrackId;

/*
<FlatList
				data={findUser}
				keyExtractor={id=>id._id}
				renderItem={({item})=>{
					return (
						<React.Fragment>
							<Text style={{fontSize:20}}>Email : {item.email} </Text>

							<TouchableOpacity onPress={()=>{navigation.navigate('TrackIdDetails',{id : item._id})}}>
								<Text style={{fontSize:20}}>Id : {item._id} </Text>
							</TouchableOpacity>
						</React.Fragment>
						);
				}}
			/>
*/