import React, { Component } from 'react'
import { Text, View ,SafeAreaView,Image} from 'react-native'
import { Form,Item, Input, Label,Button ,Textarea} from 'native-base';


export default class FoodScreen extends Component {

  state ={
          foodImage:''
  }

  componentDidMount(){
      const url ="https://jsonplaceholder.typicode.com/photos";
      fetch(url)
      .then((res)=>res.json())
      .then((res2)=>{
        // console.log(res2[0].title)
          this.setState({image:res2[2].url})
      })

  }


  render() {
    return (
      <SafeAreaView style={{flex:1}}>
      <View style={{flex:0.6,borderColor:'transparent',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
         <Image source={{uri:this.state.image}} style={{width: 280, height: 280}} />
                    
        </View>
        <Button rounded info style={{alignItems:'center',justifyContent:'center',width:200,marginLeft:80,marginTop:20}}>
          <Text style={{fontSize:20,color:'white',}}> Coming Soon</Text>
        </Button>
      </SafeAreaView>
    )
  }
}
