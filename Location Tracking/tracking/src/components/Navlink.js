import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';
import Spacer from './Spacer';

const Navlink =({navigation,text,routename})=>{
	return(
		<View>
			<TouchableOpacity onPress={()=>{navigation.navigate(routename)}}>
				<Spacer><Text style={styles.link}>{text}</Text></Spacer>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	link:{
		fontSize:20,
		color:'blue',
	}
});
export default withNavigation(Navlink);