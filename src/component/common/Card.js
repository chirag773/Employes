import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class Card extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

export default Card

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth:1,
    borderRadius: 2,
    borderBottomWidth: 0,
    borderColor: "#E8E8E8",
    shadowColor: '#000',
    shadowOffset: {width:0,height:2},
    shadowRadius: 2,
    shadowOpacity: 0.1,
    elevation:1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
});
