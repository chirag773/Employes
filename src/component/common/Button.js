import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';



class Button extends React.Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>{this.props.text}</Text>
        </TouchableOpacity>
    );
  }
}

export default Button

const styles = StyleSheet.create({
  buttonStyle: {
    flex:1,
    alignSelf: 'stretch',
    backgroundColor:"#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle:{
      alignSelf: 'center',
      fontSize: 16,
      color:"#007aff",
      fontWeight:"600",
      paddingBottom: 10,
      paddingTop: 10,
  }
});
