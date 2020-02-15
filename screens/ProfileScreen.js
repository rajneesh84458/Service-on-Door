import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Image,ScrollView,Dimensions} from 'react-native';
import CustomHeader from './CustomHeader';
import { Container, Header, Content, Form, Item, Input, Label ,Button} from 'native-base';
const {width,height} =Dimensions.get('window')
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';

console.disableYellowBox = true;
export default class ProfileScreen extends Component {
  static navigationOptions ={
    drawerIcon:(
      <Entypo name ="user" size ={30} color ="#25CCF7" /> 
  )
}
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                
                <View style={{flex:1}}>

                <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Profile</Text>
                </View>

                <ScrollView>
                    <View>
                <Image source ={require('../man.png')} style={{flex:1,width:100,height:100,borderRadius:100,
                marginHorizontal:120,marginTop:10}}/>
                
                </View>
                <Form style={{flex:1,marginHorizontal:12}}>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Mobile Number</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Address</Label>
              <Input numberOfLines ={2}/>
            </Item>
            <Item floatingLabel last>
              <Label>Area</Label>
              <Input numberOfLines ={2} />
            </Item>
            <Item floatingLabel last>
              <Label>City</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Pin Code</Label>
              <Input />
            </Item>
          </Form>
          <Button info style={{justifyContent:'center',width:120,height:50,marginLeft:100,borderRadius:50,marginTop:10}}>
              
              <Text style={{color:'white',fontSize:20,textAlign:'center'}}>UPDATE</Text>
              </Button>
              </ScrollView>
          </View>

            </SafeAreaView>
        )
    }
}
