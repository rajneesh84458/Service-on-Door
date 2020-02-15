import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Image,Dimensions} from 'react-native';
import {Button} from 'native-base';
import CustomHeader from './CustomHeader'
import Icon from 'react-native-vector-icons/Ionicons';

const {width,height} =Dimensions.get('window')
console.disableYellowBox = true;
export default class NewService extends Component {
    static navigationOptions ={
        drawerIcon:(
           <Image source ={require('../screens/images/sale.png')} style ={{width:30,height:30,resizeMode:'cover'}}/>
             
      )
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{width:width,height:80,backgroundColor:'transparent'}}>
                <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>New Service</Text>
                </View>
                </View>
                <Image source ={require('../man.png')} style={{marginHorizontal:25,width:300,height :300,marginVertical:10}}/>
                <Button  style={{justifyContent:'center',width:300,height:50,marginLeft:40,borderRadius:50,marginTop:40,backgroundColor:'#25CCF7'}}>
              
              <Text style={{color:'white',fontSize:20,textAlign:'center'}}>Coming Soon!!</Text>
              </Button>
            </SafeAreaView>
        )
    }
}
