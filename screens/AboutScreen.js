import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Dimensions,Image} from 'react-native'
import CustomHeader from './CustomHeader'
const {width,height} =Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons';
console.disableYellowBox = true;
export default class AboutScreen extends Component {
    static navigationOptions ={
        drawerIcon:(
            <Image source ={require('../screens/images/businessman.png')} style ={{width:30,height:30,resizeMode:'cover'}}/>
      )
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{width:width,height:80,backgroundColor:'transparent'}}>
                <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>About</Text>
                </View>   
                </View>
                
        
        <Text style={{textAlign:'center',fontWeight:'bold'}}> About Us</Text>
        <Text style={{fontSize:10}}>Services on Door about us contents here....</Text>
        
      
            </SafeAreaView>
        )
    }
}
