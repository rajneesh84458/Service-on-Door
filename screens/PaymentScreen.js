import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Dimensions,Image} from 'react-native';
//import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from './CustomHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {Item,Input,Button} from 'native-base'
const {width,height} =Dimensions.get('window')

console.disableYellowBox = true;
export default class PaymentScreen extends Component {

    static navigationOptions ={
        drawerIcon:(
            <Image source ={require('../screens/images/hand.png')} style ={{width:30,height:30,resizeMode:'cover'}}/>
              
      )
    }
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{width:width,height:80,backgroundColor:'transparent'}}>
                <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Payment</Text>
                </View>
                
                </View>
                
<View style={{width:'90%',height:300,marginVertical:30,marginHorizontal:15,borderWidth:1,borderColor:'blue'}}>
    
    <Image source={require('../RazorPay.jpeg')} style={{width:300,height:200,marginLeft:10,}}
                />
                 <Text style={{textAlign:'center'}}>Transfer your money via RazorPay</Text>
                </View>
               
                
         
                <View style={{width:'90%',height:65,marginVertical:10,marginHorizontal:15,borderWidth:1,borderColor:'blue'}}>
                <Item success>
                    <Input placeholder="Enter the amount"/>
                </Item>

                <Button rounded  style={{backgroundColor:'#25CCF7',alignItems:'center',justifyContent:'center',width:170,marginLeft:80,marginTop:20}}>
          <Text style={{fontSize:20,color:'white',}}>PAY</Text>
         
        </Button>
       
                </View>
              
            </SafeAreaView>
        )
    }
}
