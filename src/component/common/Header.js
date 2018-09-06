import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class Header extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

export default Header

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#81CFE0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height:60,
    elevation:4
  },
  textStyle:{
      fontSize: 20,
  }
});
