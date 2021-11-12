import React,{useContext,useState} from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import {SafeAreaView,NavigationEvents} from 'react-navigation';
import Navlink from '../components/Navlink';
import {Context as AuthContext} from '../context/AuthContext';

const SignInScreen =()=>{
	const {state:{errorMessage},SignIn,ClearErroMessage} =useContext(AuthContext);
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
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
							<Button title="Sign In"
								onPress={()=>{SignIn({email,password})}} 
							/>
						</View>
					</View>
					<Navlink
						routename="SignUp"
						text="Don't have an account? Please SignUp instead!"
					/>	
				</View>
		</SafeAreaView>
	);
};


SignInScreen.navigationOptions={
	header:null,
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
		height:'30%',
		backgroundColor:'#226AD6',
		overflow:'hidden'
	},
	secondView:{
		marginVertical:15,
		//marginTop:20,
		marginHorizontal:20,

	},
	thirdView:{
		marginTop:30,
		width:200,
		marginHorizontal:80,
		marginBottom:10,

		
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
export default SignInScreen;


/*
first actual screen
import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import Spacer from '../components/Spacer';
import {SafeAreaView,NavigationEvents} from 'react-navigation';
import Navlink from '../components/Navlink';
import {Context as AuthContext} from '../context/AuthContext';

const SignInScreen =()=>{
	const {state:{errorMessage},SignIn,ClearErroMessage} =useContext(AuthContext);
	return(
		<SafeAreaView forceInset={{top:'always'}} >
			<NavigationEvents onWillBlur={ClearErroMessage} />
			<Spacer/>
				<Text h3>SignIn For Track</Text>
			<Spacer/>
			<AuthForm
				title="Sign In"
				onSubmit={ ({email,password})=>{ SignIn({email,password}) } }
			/>
			{errorMessage?<Text style={styles.error}>{errorMessage}</Text>:null}
			<Navlink
				routename="SignUp"
				text="Don't have an account? Please SignUp instead!"
			/>
		</SafeAreaView>
	);
};

SignInScreen.navigationOptions={
	header:null,
};

const styles=StyleSheet.create({
	error:{
		fontSize:20,
		color:'red',
		marginLeft:10,
	}
});
export default SignInScreen;
*/