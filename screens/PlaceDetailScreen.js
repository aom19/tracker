import React from 'react';
import { View , Text ,StyleSheet} from 'react-native'

const PlaceDetailScreen = props =>{
    return (
        <View style ={ styles.display}>
          <Text> 
              PlaceDetail
        </Text>
    </View>
    )
}



PlaceDetailScreen.navigationOptions = navData => {
  return{
    headerTitle : navData.navigation.getParam('placeTitle')

  }
  
}



const styles = StyleSheet.create({
    display: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default PlaceDetailScreen;