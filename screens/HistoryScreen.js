import React, { Component } from 'react'
import { Button,Text, View,SafeAreaView ,FlatList,TouchableOpacity,ActivityIndicator,Dimensions,ToastAndroid} from 'react-native'
import CustomHeader from './CustomHeader'
import RatingScreen from './TabContainer/RatingScreen'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import {  Rating, AirbnbRating  } from 'react-native-ratings';
console.disableYellowBox = true;
const {width,height} =Dimensions.get('window')
export default class HistoryScreen extends Component {
    state={
           dataSource:[],
           isLoading:true,
           visible:false,
           starCount: 2.5

    }

    componentDidMount(){
           const url ="https://jsonplaceholder.typicode.com/users";
           fetch(url)
           .then(res =>res.json())
           .then(res2 =>{
                 this.setState({dataSource:res2,
                                isLoading:false})
           })
    }


    renderItem = ({item}) =>{
          return(

            <View style={{flex:1,width:'90%',height:250,marginHorizontal:15,marginVertical:8,borderColor:'black',borderWidth:1,padding:10}}>
                        <Text style={{fontSize:15}}>Order id : {item.id}</Text>
                          <View style={{marginLeft:170}}>
                          <Button
                        title="RATE"
                        onPress={() => {
                          this.setState({ visible: true });
                        }}
                      />
                      </View>
                        <Text style={{fontSize:15}}>Address : {item.address.street}</Text>
                          <Text style={{fontSize:15}}>Username : {item.username}</Text>
                          <Text style={{fontSize:15}}>Name : {item.name}</Text>
                          <Text style={{fontSize:15}}>Email: {item.email}</Text>
                          <Text style={{fontSize:15}}>City: {item.address.city}</Text>
                   
                  </View>
                  
          )
    }
    render() {
        return (  
                 this.state.isLoading ? 
                 <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size ="large" color ="blue" animating/>

                 </View>
                 :
                 <SafeAreaView style={{flex:1}}>
                 
           
                <FlatList style ={{flex:1}}
                data ={this.state.dataSource}
                renderItem={this.renderItem}
                keyExtractor ={(item,index)=>{item.id}}
                />

                    <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                      this.setState({ visible: false });
                    }}
                  >
              <DialogContent style={{width:320,height:200}}>
              <View style={{marginLeft:-18,width:width,backgroundColor:'#3498DB',height:50}}>
                                <Text style={{marginLeft:50,fontSize:20,color:'white',paddingTop:15}}>
                                      Review your client here !
                                </Text>
                            </View>
                            <AirbnbRating />
          
                
                 <View style={{marginTop:15}}>
                      <Button 
                            title="NOT NOW"
                            onPress={() => { alert("okay")
                              //this.setState({ visible: false });
                            }}
                          />
                      </View>
            </DialogContent>
          </Dialog>
              
            </SafeAreaView>
        )
    }
}
