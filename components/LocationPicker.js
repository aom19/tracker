import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


import MapPreview from '../screens/MapPreview'


import Colors from '../constants/Colors';

const LocationPicker = props => {
    const [pickedLocation, setPickedLocation] = useState();
    const [isFetching, setIsFetching] = useState(false);

    const veryfyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== "granted") {
            Alert.alert(
                "Insufficient permission !",
                "Youn need to grant location permission to use this app",
                [{ text: 'Okay' }]
            );
            return false;
        }
        return true;
    }



    const getLocationHandler = async () => {
        const hadPermission = await veryfyPermissions();
        if (!hadPermission) {
            return;
        }
        try {
            setIsFetching(true);
            const location = await Location.getCurrentPositionAsync({
                timeout: 5000,
            });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        } catch{
            Alert.alert(
                'Could not fetch location',
                'Please try again later or pick a location on the map',
                [{ texk: 'Okay' }]
            )
        }

        setIsFetching(false);

    }
    pickOnMapHandler = () => {
        props.navigation.navigate('Map')
    }


    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation} onPress = {pickOnMapHandler}>
                {isFetching
                    ? (<ActivityIndicator size='large' color={Colors.primary} />)
                    : (<Text > No location chosen yet </Text>)
                }

            </MapPreview>
            <View style = {styles.actions}>
                <Button
                    title=" Get user Location "
                    color={Colors.primary}
                    onPress={getLocationHandler}

                />
                <Button
                    title=" Picked on map "
                    color={Colors.primary}
                    onPress={pickOnMapHandler}

                />
            </View>
        </View>
    )


}


const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actions :{
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'100%'
    }
})

export default LocationPicker;