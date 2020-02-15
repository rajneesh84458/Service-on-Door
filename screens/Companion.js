import React, { Component } from 'react'
import { Text, View,Dimensions,Image,FlatList,Button ,SafeAreaView } from 'react-native'
import { Container, Header, Content, List, ListItem,Right,Textarea } from 'native-base';
import Dialog, { DialogContent,DialogTitle } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Companion extends Component {
    state = {
         visible:false
    }
    handleCancel =() => {
        this.setState({visible:false})
   }
    render() {
        return (
            <View style={{flex:1}}>
                <Button
                        title={this.props.name}
                        color ="#192A56"
                        onPress={() => {
                          this.setState({ visible: true });
                        }}
                        
                      />
                         

<Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                      this.setState({ visible: false });
                    }}
                  >
              <DialogContent style={{width:340,height:420}}>

          <List style={{flex:1,height:420}}>
            <ListItem style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style ={{fontWeight:'bold',fontSize:15}}>Order Now</Text>
              <Right>
              <Icon name ="ios-close" size ={40} color ="#25CCF7" 
                onPress={this.handleCancel} /> 
            </Right>
            </ListItem>

            <ListItem style={{justifyContent:'space-between'}}>
              <Text>Call Me</Text>
              <Right>
              <Icon name ="ios-call" size ={32} color ="#25CCF7" 
                onPress={this.handleCancel}/> 
            </Right>
            </ListItem>
            <ListItem style={{justifyContent:'space-between'}}>
              <Text>Companion</Text>
              <Right>
              <MaterialIcons name ="person-pin-circle" size ={32} color ="#25CCF7" 
                onPress={this.handleCancel}/> 
            </Right>
            </ListItem>
            <View style={{justifyContent:'space-between',flexDirection:'row',marginVertical:10,marginHorizontal:15}}>
              <Text>See-Off_Recieve</Text>
            <MaterialCommunityIcons name ="human-male-male" size ={32} color ="#25CCF7" 
                onPress={this.handleCancel}/> 
          
            </View>
           
           
            <Textarea rowSpan={5} maxLength ={100} placeholder="Enter text here" />
            
          </List>
          <View style={{borderBottomColor:'black',borderWidth:0.5,marginTop:20}}>

        </View>
                        
          
                
                 <View style={{marginTop:15}}>
                      <Button 
                            title="SEND MESSAGE"
                            onPress={() => { alert("okay")
                              //this.setState({ visible: false });
                            }}
                          />
                      </View>
            </DialogContent>
          </Dialog>
            </View>
        )
    }
}
