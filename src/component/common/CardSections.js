import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class CardSections extends React.Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

export default CardSections

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor:"#fff",
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: "#E8E8E8",
    position:"relative"
  }
});
