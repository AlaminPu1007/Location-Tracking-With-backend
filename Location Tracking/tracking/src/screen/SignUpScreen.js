import React,{useContext,useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Image} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import Navlink from '../components/Navlink';
import {NavigationEvents} from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen =({navigation,onSubmit})=>{

	const [name , setName] = useState('');
	const [mobile , setMobile] = useState('');
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	

	const {state:{errorMessage},SignUp,ClearErroMessage} = useContext(AuthContext);
	return(
		<SafeAreaView  forceInset={{ top: 'always' }} style={{flex:1}}>
			
				<NavigationEvents 
					onWillBlur={ClearErroMessage}
				/>
				<View style={styles.container}>
					<View style={styles.firstView}>
						<View style={styles.imageView}>
							<Image source={require('./image/signup.png')} style={styles.image}/>
						</View>
					</View>

					<View style={styles.secondView}>
						<Input
						  placeholder="Full Name"
						  onChangeText={(text)=>{setName(text)}}
						/>
						<Text></Text>
						<Input
						  placeholder="Mobile No"
						  onChangeText={(text)=>{setMobile(text)}}
						/>
						<Text></Text>
						<Input
						  placeholder="Email"
						  onChangeText={(text)=>{setEmail(text)}}
						/>
						<Text></Text>
						<Input
						  placeholder="Password"
						  onChangeText={(text)=>{setPassword(text)}}
						  secureTextEntry
						/>
						{errorMessage?<Text style={styles.error}>{errorMessage}</Text>:null}
						<View style={styles.thirdView}>
							<Button title="Sign Up"
								onPress={()=>{SignUp({name,mobile,email,password})}} 
							/>
						</View>
					</View>

					<Navlink
						routename="SignIn"
						text="Already have an account? please SignIn instead!"
					/>	

				</View>
				
				
		</SafeAreaView>
	);
};
SignUpScreen.navigationOptions={
	header: null
};

const styles=StyleSheet.create({
	text:{
		color:'blue',
		fontSize:20,
		marginHorizontal:10
	},
	error:{
		marginTop:5,
		fontSize:18,
		color:'red',
		marginLeft:10,
	},
	container:{
		flex:1,
		backgroundColor:'#FFFFFF',
	},
	firstView:{
		height:'25%',
		backgroundColor:'#226AD6',
		overflow:'hidden'
	},
	secondView:{
		marginVertical:15,
		marginHorizontal:20,

	},
	thirdView:{
		marginTop:30,
		width:200,
		marginHorizontal:80,
		
	},
	image:{
		height:120,
		width:120,
	},
	imageView:{marginTop:5,
		justifyContent:'center',
		alignItems:'center',
	}
});
export default SignUpScreen;


/*
first creae code

import React,{useContext} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import Spacer from '../components/Spacer';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import Navlink from '../components/Navlink';
import {NavigationEvents} from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen =({navigation,onSubmit})=>{
	const {state:{errorMessage},SignUp,ClearErroMessage} = useContext(AuthContext);
	return(
		<SafeAreaView  forceInset={{ top: 'always' }} style={{flex:1}}>
			
			
				<NavigationEvents 
					onWillBlur={ClearErroMessage}
				/>
				<Spacer/>
					<Text h3>SignUp For Tracker </Text>
				<Spacer/>
				<AuthForm onSubmit={({email,password})=>{SignUp({email,password})}} 
					title="Sign Up"
				/>
				{errorMessage?<Text style={styles.error}>{errorMessage}</Text>:null}
				<Navlink
					routename="SignIn"
					text="Already have an account? please SignIn instead!"
				/>	
				
		</SafeAreaView>
	);
};
SignUpScreen.navigationOptions={
	header: null
};

const styles=StyleSheet.create({
	text:{
		color:'blue',
		fontSize:20,
		marginHorizontal:10
	},
	error:{
		fontSize:20,
		color:'red',
		marginLeft:10,
	}
});
export default SignUpScreen;

/*
<LinearGradient
		          colors={['#4c669f', '#3b5998', '#192f6a',]} //#7874FD,#AA2FF1
		          style={{ padding: 15,  borderRadius: 5,height:'100%' }}
	          >
</LinearGradient>	
*/


