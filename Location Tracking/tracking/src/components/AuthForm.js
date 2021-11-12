import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Text,Button,Input} from 'react-native-elements';
import Spacer from './Spacer';


const AuthForm =({onSubmit,title})=>{
	const [email , setEmail] = useState('');
	const [password , setPassword] = useState('');
	return(
		<View>
			<Spacer>
					<Input label="Email" onChangeText={(text)=>{setEmail(text)}} />
					<Spacer/>
					<Input label="Password" 
						onChangeText={(text)=>{setPassword(text)}} 
						secureTextEntry
					/>
				</Spacer>
				<Spacer>
					<Button title={title} 
						onPress={()=>{onSubmit({email,password})}}
					/>
				</Spacer>
				
		</View>
	);
}

const styles = StyleSheet.create({
	
});

export default AuthForm;