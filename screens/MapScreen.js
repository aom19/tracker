import React from 'react';
import { View , Text ,StyleSheet} from 'react-native'

const MapScreen = props =>{
    return (
        <View style ={ styles.display}>
          <Text> 
              Map
        </Text>
    </View>
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
  });

  export default MapScreen;