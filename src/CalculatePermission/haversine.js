import { getRadioPermitted } from '../Services/LocalizationService'

const getDistanceFromLatLonInMeters = (lat1, long1, curLat, curLong) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(curLat-(lat1));  // deg2rad below
    var dLon = deg2rad(curLong-(long1)); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(curLat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d*1000;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  export default function CalculatePermission (lat, long, places) {
    const radioPermitted = getRadioPermitted();
    const placePermitted = verifyPlaces(radioPermitted, places, lat, long);
    return placePermitted;
  }

  const verifyPlaces = (radioPermitted, places, curLat, curLong) => {
    let nextPlace = places[0];
    let nextPlaceDistance= getDistanceFromLatLonInMeters(nextPlace.latitude,
      nextPlace.longitude, curLat, curLong);
    try {
      places.forEach((curArrayPlace) => {
        let curArrayDistance = getDistanceFromLatLonInMeters(curArrayPlace.latitude,
          curArrayPlace.longitude, curLat, curLong);
        if(curArrayDistance < nextPlaceDistance) {
          nextPlace= curArrayPlace;
          nextPlaceDistance = curArrayDistance;
        }
      });
        if(nextPlaceDistance <=radioPermitted) {
          return nextPlace;
        }
        return undefined;
    }
    catch {
      console.error();
      alert('Houve um erro na verificação do seu local');
    } 
    return undefined;
  }