import React ,{useState} from 'react';
import { View, Text, StyleSheet ,Button, TextInput,ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import Colors from '../constants/Colors';
import * as placesAction from '../store/actions/places';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker'



const NewPlaceScreen = props => { 

  const [titleValue , setTitle] = useState('');
  const [selectedImage , setSelectedImage] = useState();
  const dispatch = useDispatch();
  

  const titleChangeHandler = text =>{
    setTitle(text);
  }
  const imageTakenHandler = imagePath =>{
    setSelectedImage(imagePath);

  }
  const savePlaceHandler = () => {
    dispatch(placesAction.addPlace(titleValue , selectedImage )) ;
    props.navigation.goBack();
  }

  

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style = {styles.label}> Title </Text>
        <TextInput  
          style = {styles.textInput} 
          onChangeText = {titleChangeHandler} 
          value={titleValue} 
        />
        <ImagePicker onImageTaken = {imageTakenHandler} />
        <LocationPicker navigation={props.navigation} />
        <Button 
          title = "Save a place "
          color ={Colors.primary}
          onPress = {savePlaceHandler}
        />
      </View>
    </ScrollView>

  )
}
NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add a Place'
}

const styles = StyleSheet.create({
  form:{
    margin : 30 
  },
  label:{
    fontSize : 18,
    marginBottom: 15
  },
  textInput:{
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom : 15,
    paddingVertical : 4,
    paddingHorizontal: 2
  }
  
});

export default NewPlaceScreen;