import React from 'react';
import { View , Text ,StyleSheet} from 'react-native';
import MapView from 'react-native-maps'

const MapScreen = props =>{
  const mapRegion ={
    latitude: 37.78,
    longitude : -122.43,
    latitudeDelta : 0.0922 ,
    longitudeDelta :0.00421
   }
    return (
       <MapView 
        region ={ mapRegion}
        style = {styles.map}
       />
    )
}

MapScreen.navigationOptions = {
  headerTitle : 'All places'
}

const styles = StyleSheet.create({
    display: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map:{
      flex : 1
    }
  });

  export default MapScreen;