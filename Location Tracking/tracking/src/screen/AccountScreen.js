import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity,
	ActivityIndicator,Image,
} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
import {Feather,FontAwesome} from '@expo/vector-icons';
import tracker from '../api/tracker';

let filter;

const AccountScreen =()=>{

const {state,state:{takeEmail,getalldata},signOut,getUserData} =useContext(AuthContext);
	useEffect(()=>{
		getUserData();
	},[]);

if(!getalldata){
	return <ActivityIndicator size="large" style={{marginTop:190}} />
}
	filter = getalldata.find((blog)=>blog.email===takeEmail);
	return(
		<View style={styles.container}>
		<SafeAreaView forceInset={{top:'always'}}>

			<View style={styles.firstView}>
				<View style={styles.signout}>
				<TouchableOpacity onPress={signOut}>
					<FontAwesome name="power-off" size={37} style={styles.signouttext} />
				</TouchableOpacity>
				</View>
			  <View style={styles.imageView}>
				<Image source={require('./image/account.png')} style={styles.image}/>
			  </View>
			</View>
			{<View style={styles.insideView}>
				<Text style={styles.text1}>Name  : {filter.name}</Text> 
				  <Text style={styles.text1}>Mobile : {filter.mobile}</Text> 
					<Text style={styles.text1}>Email   : {filter.email}</Text>
			</View>}
		</SafeAreaView>
		</View>
	);
};

AccountScreen.navigationOptions={
	title:'Setting',
	tabBarIcon: <Feather name="settings" size={30} />
};

const styles=StyleSheet.create({
container:{
	flex:1,
	backgroundColor:'#FAFAFA'
},
signout:{
	alignItems:'flex-end',
	marginRight:15,
	marginLeft:5,
	marginTop:10,
},
signouttext:{
	color:'white',
},
firstView:{
	height:'50%',
	//height:'60%', ///when filter is in comment
	backgroundColor:'#226AD6',
	overflow:'hidden',
},
imageView:{
	justifyContent:'center',
	alignItems:'center',
	backgroundColor:'white',
	width:'28%',
	borderRadius:50,
	height:'53%',
	//height:'65%', ///when filter is in comment
	marginLeft:'35%',
},
image:{
	height:80,
	width:80,
},
text1:{
		fontSize:20,
		padding:8,
		marginBottom:8,
		color:'#494a49',
		backgroundColor:'white'
	},
	insideView:{
		marginHorizontal:20,
		marginTop:20,
		overflow:'hidden',
	},
});
export default AccountScreen;