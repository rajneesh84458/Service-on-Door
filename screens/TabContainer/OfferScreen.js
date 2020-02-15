import React from 'react'
import { View, Text, FlatList, StyleSheet,ActivityIndicator,TouchableOpacity,ToastAndroid,Dimensions,Image } from 'react-native'

class OfferScreen extends React.Component {
  
    static navigationOptions ={
      header:null
    }

 
  state = {
            dataSource:[ ],
            isLoading:true,
            }
           
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos"

    fetch(url)
      .then(res => res.json())
      .then((res2)=>{
            this.setState({
              dataSource:res2,
              isLoading:false
            })
      });
      
  }
  // renderSeparator = () =>{
  //   return(
  //     <View style={{width:'100%',height:1,backgroundColor:'black'}}>

  //     </View>
  //   )
  // }

  renderItem = ({item}) =>{

    return(  
      <View style={{width:'95%',height:200,marginLeft:10,borderColor:'black',borderWidth:1,marginVertical:10,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity  onPress={()=>ToastAndroid.show(item.name,ToastAndroid.SHORT)}
          
                  style={{width:'90%',height:120,margin:10}}>
                  {/* <Text style={{fontSize:15}}>{item.username}</Text>
                  <Text style={{fontSize:20,color:'green'}}>{item.name}</Text>
                  <Text style={{fontSize:15,color:'red'}}>{item.email}</Text> */}

                  <Image source={{uri: 'https://via.placeholder.com/600/d32776'}} style={{width: 100, height: 100}} 
                    
                  />
                  
                </TouchableOpacity>
                </View>
    )
      
  }

  
  render() {
  return (

      this.state.isLoading 
    ? <View style={{flex:1, justifyContent:'center'}}>
        <ActivityIndicator size="large"color='green' animating/>
    </View> 
    : 
      <View style={styles.container}>
        {/* <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>FlatList App</Text> */}
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(index) => index.uri}
        />

      </View>
    )
  }
}

export default OfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})