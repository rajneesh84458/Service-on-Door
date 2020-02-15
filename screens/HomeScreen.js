import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Icon } from 'react-native-elements';
export default class HomeScreen extends Component {
    static navigationOptions ={
        drawerIcon:(
          <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')} />
    
      )
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
