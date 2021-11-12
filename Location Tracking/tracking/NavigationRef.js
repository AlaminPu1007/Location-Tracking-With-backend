import {NavigationActions} from 'react-navigation';

let Navigator;

export const setNavigator =(nav)=>{
	Navigator=nav;
};

export const Navigate = (routename , params)=>{
	Navigator.dispatch(
		NavigationActions.Navigate({
			routename,
			params
		})
	);
};