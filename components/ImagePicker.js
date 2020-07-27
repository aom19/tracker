import React ,{useState} from 'react';
import { Text, View, Button, StyleSheet, Image, Alert } from 'react-native';


import Colors from '../constants/Colors';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const ImgPicker = props => {
    const [pickedImage, setPickedImage] = useState();

    const veryfyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA);
        if (result.status !== "granted") {
            Alert.alert(
                "Insufficient permission !",
                "Youn need to grant camera permission to use this app",
                [{ text: 'Okay' }]
            );
            return false;
        }
        return true;
    }
    const takeImageHandler = async () => {
      const hasPermission =  await  veryfyPermissions();
      if(!hasPermission){
          return;
      }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing : true,
            aspect: [16, 9],
            quality: 0.5

        });
        setPickedImage(image.uri)
        props.onImageTaken(image.uri);

 

    }
    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
               {!pickedImage ? (
                    <Text> No image picked yet.</Text>
                ):( 
                    <Image style={styles.image} source ={{ uri : pickedImage}} />)
                }
            </View>
            <Button
                title="Take a image"
                color={Colors.primary}
                onPress={takeImageHandler}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15
        
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        paddingTop:70
    },
    image: {
        width: '100%',
        height: '100%'
    }

});


export default ImgPicker;