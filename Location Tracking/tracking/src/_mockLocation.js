import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation =(increment)=>{
	return{
		timestamp: 10000000,
		coords:{
			speed:0,
			heading: 0,
			accuracy: 5,
			altitudeAccuracy: 5,
			altitude: 5,
			longitude: 90.399452 + increment * tenMetersWithDegrees,
			latitude:  23.777176 + increment * tenMetersWithDegrees,
		}
	};
};

let counter = 0;

setInterval(()=>{
	Location.EventEmitter.emit('Expo.locationChanged',{
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter)
	});
	counter++;
},1000);


/*
-122.0312186
37.33233114
*/