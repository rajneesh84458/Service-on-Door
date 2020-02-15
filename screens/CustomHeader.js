import React, { Component } from 'react'
import { Text, View ,ScrollView,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height} =Dimensions.get('window')
export default class CustomHeader extends Component {
    defaultNavigationOptions = (navigation)=>{ 
      
   }
    render() {
       
        return (
            <ScrollView style={{flex:1}}>
        <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>{this.props.name}</Text>
                </View>
            </ScrollView>
        )
    }
}
