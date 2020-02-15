import React, { Component } from 'react'
import { Text, View,SafeAreaView ,FlatList,TouchableOpacity,ActivityIndicator,ToastAndroid,Image} from 'react-native'
import CustomHeader from './CustomHeader'
//import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
export default class OrderScreen extends Component {

    static navigationOptions ={
        drawerIcon:(
            <Image source ={require('../screens/images/order.png')} style ={{width:30,height:30,resizeMode:'cover'}}/>
    
      )
    }
    state={
           dataSource:[],
           isLoading:true,
           visible:false,

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
            <SafeAreaView style={{flex:1}}>
            <View style={{width:'90%',height:250,marginHorizontal:15,marginVertical:8,borderColor:'black',borderWidth:1}}>
                      <TouchableOpacity onPress ={()=>ToastAndroid.show(item.name,ToastAndroid.SHORT)}
                       style={{width:'100%',height:80,justifyContent:'flex-start',marginVertical:10}}>
                          <Text style={{fontSize:15}}>Order id : {item.id}</Text>
                          <Text style={{fontSize:15}}>Address : {item.address.street}</Text>
                          <Text style={{fontSize:15}}>Username : {item.username}</Text>
                          <Text style={{fontSize:15}}>Name : {item.name}</Text>
                          <Text style={{fontSize:15}}>Email: {item.email}</Text>
                          <Text style={{fontSize:15}}>City: {item.address.city}</Text>
                      </TouchableOpacity>
                  </View>
                  </SafeAreaView>
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
                 <View style={{height:80,backgroundColor:'#25CCF7',flexDirection:'row',elevation:0,PaddingTop:20,alignItems:'center'}}>
                <Icon name ="ios-menu" size ={30} color ="white" style={{marginLeft:10}}
                onPress ={()=>this.props.navigation.toggleDrawer()}/> 
                    <Text style={{marginLeft:20,color:'white',fontSize:20,fontWeight:'bold',}}>Order</Text>
                </View>
           
                <FlatList style ={{flex:1}}
                
                data ={this.state.dataSource}
                renderItem={this.renderItem}
                />
              
            </SafeAreaView>
        )
    }
}
