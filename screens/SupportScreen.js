import React, { Component } from 'react'
import { StyleSheet,Text, View ,SafeAreaView,Dimensions,Image,Alert,Button,TouchableOpacity,WebView,Share} from 'react-native'
import CustomHeader from './CustomHeader'
const {width,height} =Dimensions.get('window');
//import Icon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
export default class SupportScreen extends Component {
   
   static navigationOptions ={
      drawerIcon:(
         <Image source ={require('../screens/images/support.png')} style ={{width:30,height:30,resizeMode:'cover'}}/>
    )
  }
    showAlert1() {  
          alert("Hello User")
    }

    loadInBrowser = () => {
      <WebViewExample/>
    };

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
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Payment</Text>
                </View>
                
                
                </View>
                <View style={{width:'90%',height:320,borderColor:'transparent',borderWidth:1,marginHorizontal:20,marginVertical:10}}>
                <Text style={{textAlign:'center',paddingTop:20,fontSize:20,color:'#25CCF7',fontWeight:'bold'}}>ServicesOnDoor Support</Text>
                <Image source={require('../download.jpeg')} style={{width:250,height:250,marginHorizontal:30}}
                />
                </View>

                <View style={{width:'90%',height:100,borderColor:'transparent',borderWidth:1,marginHorizontal:20,flexDirection:'row',justifyContent:'space-around',paddingTop:5}}>

             <TouchableOpacity onPress={this.showAlert1}>
             <Image source={require('../man.png')} style={{width:80,height:80}}
                />
             </TouchableOpacity>
             <TouchableOpacity onPress={ this.onShare }>
             <Image source={require('../man.png')} style={{width:80,height:80}}
                />
             </TouchableOpacity>
             <TouchableOpacity onPress={this.loadInBrowser}>
             <Image source={require('../man.png')} style={{width:80,height:80}}
                />
             </TouchableOpacity>
               
                
                </View>
                <Text style={{textAlign:'center',paddingTop:20,fontSize:20,color:'#25CCF7',fontWeight:'bold'}}>Our Customer Support Agent will Contact You Soon !!</Text>
                
            </SafeAreaView>
        )
    }
}

const WebViewExample = () => {
   return (
      <View style = {styles.container}>
         <WebView
         source = {{ uri:
         'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}
         />
      </View>
   )
}


const styles = StyleSheet.create({
   container: {
      height: 350,
   }
})
