import React,{useContext} from 'react';
import {navigate} from '../NavigationRef';
import Navlink from '../components/Navlink';
import {View,
	Text,Button,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView
} from 'react-native';
import {Context as FindTrackingContext} from '../context/FindTrackingContext';

let filter;
let L;
const PassUserId = ({navigation})=>{

	const id =navigation.getParam('id');

	const {state,state:{findtrackId}} = useContext(FindTrackingContext);
	if(!findtrackId){
		return <ActivityIndicator size="large" style={{marginTop:190}} />
	}

	filter = findtrackId.filter((blog)=>blog.userId===navigation.getParam('id'));
 	L=filter.length;
 	//console.log(filter);
	return(
		<View style={styles.container}>
			{/*<Text>PassUserId</Text>*/}
			{ L>0?null:<View style={styles.errorHandle}><Text style={styles.error}>Nothing!</Text></View> }
			<FlatList
				data={filter}
				keyExtractor={some=>some._id}
				renderItem={({item})=>{
				  return(
					<View style={styles.textView}>
						<React.Fragment>
						<TouchableOpacity onPress={()=>{
							navigation.navigate('FindingTrackId',{id :item._id})}}>
								<Text style={styles.text}>{item.name}</Text>
						</TouchableOpacity>
						</React.Fragment>
					</View>
				  );
				}}
			/>
		</View>
	);
};
PassUserId.navigationOptions={
	headerStyle: {backgroundColor:'#FAFAFA' },
};
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#FAFAFA',
	},
	text:{
		fontSize: 22,	
		flex:9,
		paddingBottom:10,
	},
	textView:{
		//margin:5,
		borderBottomWidth:2,
		marginHorizontal:18,
		flex:1,
		marginVertical:10,
		
	},
	error:{
		//marginLeft:'40%',
		//marginTop:'40%',
		fontSize:20,
		//justifyContent:'center',
		//alignItems:'center',
	},
	errorHandle:{
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	}
});
export default PassUserId;
