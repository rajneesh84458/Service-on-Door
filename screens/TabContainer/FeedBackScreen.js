import React, { Component } from 'react'
import { Text, View ,SafeAreaView,} from 'react-native'
import { Textarea,Button } from 'native-base'
import CustomHeader from '../CustomHeader'
import { ScrollView } from 'react-native-gesture-handler'


export default class FeedBackScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
          {/* <CustomHeader name ="FeedBack"/> */}
          <ScrollView>

         
          <View style={{height:50,backgroundColor:'#dddddd'}}>
            <Text style={{padding:15,fontSize:16,color:'grey'}}>Help us help you better</Text>
          </View>
      <View style={{width:'80%',height:150,marginLeft:20,justifyContent:'center',marginVertical:10}}>
        <Text style={{color:'grey',fontSize:16}}>Thank you for using our application. Your views and suggestions are essentials 
            in improving our application</Text>
     <Text style={{marginTop:20,color:'grey',fontSize:16}}>Please submit your feedback and help us improve our application</Text>
        </View>
       <View  style={{width:'95%',justifyContent:'center',margin:10,}}>
        <Textarea rowSpan={2} bordered borderColor ="black" placeholder="Title"  style={{paddingTop:10,fontSize:16}} />
        <Textarea rowSpan={5} bordered borderColor ="black" placeholder="Feedback" style={{marginTop:10,paddingTop:10,}} />
        </View>

        <Button rounded info style={{alignItems:'center',justifyContent:'center',width:170,marginLeft:80,marginTop:20,fontSize:16}}>
          <Text style={{fontSize:20,color:'white',}}>Send Feedback</Text>
        </Button>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
