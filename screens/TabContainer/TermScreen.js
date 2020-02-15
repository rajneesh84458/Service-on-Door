import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import RatingScreen from './RatingScreen'
import Dialog, { DialogContent } from 'react-native-popup-dialog';

 
export default class TermScreen extends Component {
  state={
    visible:false
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{textAlign:'center',fontWeight:'bold'}}> Terms and Conditions</Text>
        <Text style={{fontSize:10}}>Services on Door Terms and conditions contents here....</Text>
        

  
  </View>


    )
  }
}

 