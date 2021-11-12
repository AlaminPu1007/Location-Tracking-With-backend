///mongoose came from track-server
///mongoose came from track-server-test

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignUpScreen from './src/screen/SignUpScreen'; 
import SignInScreen from './src/screen/SignInScreen'; 
import TrackListScreen from './src/screen/TrackListScreen'; 
import TrackDetailScreen from './src/screen/TrackDetailScreen'; 
import TrackCreateScreen from './src/screen/TrackCreateScreen'; 
import AccountScreen from './src/screen/AccountScreen'; 
import LocationTrack from './src/tracking/LocationTrack';

import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/NavigationRef';
import ResolveScreen from './src/screen/ResolveScreen';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackSaveContext';
import {Feather} from '@expo/vector-icons';

import {Provider as FindTrackProvider} from './src/context/FindTrackingContext';
import TrackId from './src/FindTrackId/TrackId';
import TrackIdDetails from './src/FindTrackId/TrackIdDetails';
import PassUserId from './src/FindTrackId/PassUserId';
import FindingTrackId from './src/FindTrackId/FindingTrackId';
import MapDetails from './src/FindTrackId/MapDetails';
import CurrentLocation from './src/FindTrackId/CurrentLocation';


const trackListFlow = createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen,
      TrackId: TrackId,
      TrackIdDetails: TrackIdDetails,
      PassUserId: PassUserId,
      FindingTrackId: FindingTrackId,
      MapDetails: MapDetails,
      CurrentLocation: CurrentLocation,
  });
  trackListFlow.navigationOptions ={
    title:'Track List',
    tabBarIcon: <Feather name="list" size={30} />
  };

const switchNavigator = createSwitchNavigator(
{
  Resolve: ResolveScreen,
  logInFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
  }),

  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    FindTrack: LocationTrack,
    Account: AccountScreen,
   
  })
}
);

const App = createAppContainer(switchNavigator);

export default ()=>{
  return (
    <FindTrackProvider>
      <TrackProvider>
        <LocationProvider>
           <AuthProvider>
            <App ref={(navigator)=>{setNavigator(navigator)}}/>
           </AuthProvider>
        </LocationProvider>
      </TrackProvider>
    </FindTrackProvider>
  );
};