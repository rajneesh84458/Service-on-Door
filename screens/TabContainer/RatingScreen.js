import React, { Component } from 'react'
import { Text, View,TouchableOpacity ,SafeAreaView,Dimensions,ToastAndroid,Button} from 'react-native';
//import {Button} from 'native-base';
import {DialogContent,Dialog} from 'react-native-popup-dialog';
import { AirbnbRating } from 'react-native-ratings';
const {width,height} =Dimensions.get('window');
export default class RatingScreen extends Component {

    state={
        visible:false,
        starCount: 2.5
  }
  
  render() {
      return (
          <SafeAreaView style={{flex:1}}>
              
              <View style={{width:100,height:50,backgroundColor:'#dddddd'}}>
              <Button style={{}}
                      title="RATE"
                      onPress={() => {
                        this.setState({ visible: true });
                      }}
                    />
                <Dialog
                  visible={this.state.visible}
                  onTouchOutside={() => {
                    this.setState({ visible: false });
                  }}
                >
            <DialogContent style={{width:320,height:200}}>
            <View style={{marginLeft:-18,width:width,backgroundColor:'#3498DB',height:50}}>
                              <Text style={{marginLeft:50,fontSize:20,color:'white',paddingTop:15}}>
                                    Review your client here !
                              </Text>
                          </View>
                          <AirbnbRating />
        
              
               <View style={{marginTop:15}}>
                    <Button 
                          title="NOT NOW"
                          onPress={() => { alert("okay")
                            //this.setState({ visible: false });
                          }}
                        />
                    </View>
          </DialogContent>
        </Dialog>
              </View>
          </SafeAreaView>
      )
  }
}
