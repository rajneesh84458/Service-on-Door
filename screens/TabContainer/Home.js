import React, { Component } from 'react'
import { Text, View,Dimensions,Image,FlatList,Button ,SafeAreaView,StyleSheet} from 'react-native'
 //import {  Button, } from 'native-base';
 import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, List, ListItem,Right,Textarea } from 'native-base'
import RatingScreen from './RatingScreen';
import Dialog, { DialogContent,DialogTitle } from 'react-native-popup-dialog';
import {  Rating, AirbnbRating  } from 'react-native-ratings';
import MapScreen from '../MapScreen';
import Companion from '../Companion';
import HandyMan from '../HandyMan';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
const {width,height} =Dimensions.get('window');

export default class Home extends Component {
  onRegionChange(region) {
    this.setState({ region });
  }
//   static navigationOptions ={
//     drawerIcon:(
//   <Image source={require('./screens/man.png')} style={{width:30,height:30}}/>

//   )
// }
  state={
         name:'',
         email:'',
         id:'',
         visible:false,
        starCount: 2.5
    }       
   
    handleCancel =() => {
         this.setState({visible:false})
    }

    goMap =()=>{
       return(<MapScreen/>)
    }

    componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
       .then(res=>res.json())
       .then(res2 => this.setState({
              name:res2[0].name,
              email:res2[0].email,
              id:res2[0].id
       }))
         
    }

    render(){
      var mapStyle=[{ 
      
     
      "stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill",
      "stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke",
      "stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill",
     // "stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill",
      // "stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry",
      "stylers": [{"color": "#17263c"}]}];
    
      return (  
        <SafeAreaView style={{flex:1,}}>



<MapView
         // mapType={Platform.OS == "ios" ? "standard" : "none"}
        provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 28.579660,   
            longitude: 77.321110,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }}
          //customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
            latitude: 28.579660,   
            longitude: 77.321110,  
             
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Me'}
            description={'My Name'}
          />
        </MapView>
    <Text style={{fontSize:20,color:'#192A56',marginLeft:20,marginVertical:10}}>Welcome Back!! </Text>
   
   <View style={{width:'100%',marginVertical:20,marginHorizontal:20,paddingVertical:20}}>
    <Text  style={{fontSize:20,color:'#192A56'}}>Package Selected</Text>
    <Text  style={{fontSize:20,color:'#192A56'}}>Total Services : {this.state.id}</Text>
    <Text  style={{fontSize:20,color:'#192A56'}}>Remaining Services :{this.state.email}</Text>
    <Text  style={{fontSize:20,color:'#192A56'}}>Remaining Days :{this.state.name}</Text>
   </View>
   
        <View style={{marginHorizontal:20,marginVertical:100,flexDirection:'row',justifyContent:'space-around'}}>
          
          <HandyMan name ="Handy Man"/>
          <Companion name ="Companion"/>
                      
          
        </View>
        <Button title ="Go to Map" onPress ={()=>this.goMap()}/>
     
        
 </SafeAreaView>
    )
}
}  

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});