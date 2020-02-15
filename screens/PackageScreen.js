import React, { Component } from 'react'
import { Text, View ,Dimensions,Image,FlatList,TouchableOpacity,ToastAndroid,ActivityIndicator,CheckBox} from 'react-native';

import {  Header, } from 'native-base';
import CustomHeader from './CustomHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const {width,height} =Dimensions.get('window')
export default class PackageScreen extends Component {

static navigationOptions ={
  drawerIcon:(
    <FontAwesome name ="gift" size ={30} color ="#25CCF7" /> 
)
}

state = {
  dataSource:[ ],
  isLoading:true,
  visible:false,
  isLoading:false

  }

componentDidMount() {
  const url = "https://jsonplaceholder.typicode.com/users"

  fetch(url)
    .then(res => res.json())
    .then((res2)=>{
          this.setState({
            dataSource:res2,
            isLoading:false
          })
    });
    
}

renderItem = ({item}) =>{

  return(
         <View style={{width:'90%',height:140,marginHorizontal:15,marginVertical :2,borderColor:'blue',borderWidth:1,borderRadius:20,marginTop:40}}>
           <View style={{flexDirection:'row',marginTop:15}}>
          <View style={{width:200,height:50,borderWidth:1,borderColor:'transparent',marginHorizontal:5,flexDirection:'row',marginLeft:5}}>
         
          <Image source={require('../man.png')} style={{width:50,height:50}}/>
          <View style={{flexDirection:'column',paddingLeft:10}}>
          <Text>Lite</Text>
          <Text style={{fontSize:15}}>Validity :{item.address.suite}</Text>
          </View>
          </View>
          <View style={{marginLeft:10}}>
           <Text style={{justifyContent:'flex-end',color:'red'}}>Price :{item.id}</Text>
           </View>
           </View>
          <View style={{width:'90%',height:0.5,borderWidth:0.5,borderColor:'blue',marginLeft:10,marginTop:10}}></View>

          <View style={{width:220,height:70,borderWidth:1,borderColor:'transparent',marginVertical:2,marginHorizontal:5,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          <CheckBox value ={true}
                    disabled={false}
          />
            <Text style={{marginTop:5}}>Select</Text>

            
          {/* <EvilIcons name ="eye" size = {24} color ="black" style={{marginLeft:10}}/> */}
          <View style={{flexDirection:'column'}}>
            <Text>View</Text>
            <Text>Packages</Text>
            </View>
          </View>
             
              </View>
  )
    
}
  render() {
    return (
             this.state.isLoading ? <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
             <ActivityIndicator size="large"color='green' animating/>
         </View> 
          :
      <View style={{flex:1,}}>
         <View style={{width:width,height:80,backgroundColor:'transparent'}}>


             <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Packages</Text>
                </View>
                
                </View>
            <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index}
                
                    /><View>
        </View>
        </View>
    )
  }
}
