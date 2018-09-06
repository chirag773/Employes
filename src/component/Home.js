import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "react-navigation";

class Home extends Component {
  navigationOptions = {
    header:null,
    
}


  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Home;
