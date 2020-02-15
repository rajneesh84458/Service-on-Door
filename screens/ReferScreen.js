import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Dimensions,Image,StyleSheet,Share} from 'react-native';
import CustomHeader from './CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'native-base'
const {width,height} = Dimensions.get('window')

console.disableYellowBox = true;
export default class ReferScreen extends Component {
    static navigationOptions ={
        drawerIcon:(
          <Image source ={require('../screens/images/money.png')} style ={{width:30,height:30,resizeMode:'cover'}}/>
           
      )
    }

    state ={
        TextInputValueHolder: ''
    }

    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
               <View style={{width:width,height:80,backgroundColor:'transparent'}}>
               <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Refer & Earn</Text>
                </View>
                
                </View>
                <View style={{width:'100%',height:320,borderColor:'transparent',borderWidth:1,marginHorizontal:2,marginVertical:10}}>
                
                <Image source={require('../download.jpeg')} style={{width:250,height:250,marginHorizontal:55}}
                />

<Text style={{textAlign:'center',paddingTop:20,fontSize:15,color:'#0A79DF',fontWeight:'bold'}}>
    Invite your friend and get a chance to win Coupons</Text>
    <Button  style={styles.buttonStyle}>
              
              <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Invite Friends</Text>
              </Button>        
                </View>
                <View style={{flexDirection:'row',width:'100%',height:60,borderColor:'transparent',borderWidth:1,marginTop:60}}>
                <View style={{width:'45%',borderBottomWidth: StyleSheet.hairlineWidth,marginHorizontal:5,marginBottom:23}}>
                    </View>
                    <Text style={{paddingTop:20,fontSize:20}}>or</Text>
                <View style={{width:'45%',borderBottomWidth: StyleSheet.hairlineWidth,marginHorizontal:5,marginBottom:23}}></View>

            </View>   
            <Text style={{textAlign:'center',color:'#586776'}}>Share your link</Text>
            <View style={{flex:1,backgroundColor: 'rgba(218,224,226,0.3)',marginTop:20,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            
               <Text>SOD12f</Text>
              <Icon name="md-share" size={30} color="#25CCF7" onPress={ this.onShare }/>
              
          </View>
            </SafeAreaView>
        )
    }
}

const styles =StyleSheet.create({
    buttonStyle:{
        justifyContent:'center',
        width:320,
        height:40,
        marginLeft:30,
        borderRadius:50,
        marginTop:40,
        backgroundColor:'#25CCF7'}
    
})