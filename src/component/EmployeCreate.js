import React, { Component } from 'react';
import { 
  View, 
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker
} from 'react-native';
import CardSection from "../component/common/CardSections"
import { connect } from "react-redux";
import {employeeUpdate, employeeCreate} from "../actions";

import Icons from 'react-native-vector-icons/FontAwesome';

class EmployeCreate extends Component {
  
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift })
  }





  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Icons name="user" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Name"
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={text => this.props.employeeUpdate({ prop:"name", value: text })}
                    value={this.props.name}
          />
        </View>
        <View>
          <Icons name="phone" size={28}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="phone number"
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={text => this.props.employeeUpdate({ prop:"phone", value: text })}
                    value={this.props.phone}
          />
        </View>
        <CardSection>
          <Picker
            style={{flex:1}}
            selectedValue={this.props.shift}
            onValueChange={text => this.props.employeeUpdate({ prop:"shift", value: text })}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.buttonText}>
            save 
        </Text>    
      </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift} = state.employeeForm; //from reducer index.js employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate,employeeCreate } )(EmployeCreate);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow:1
  },
  InputIcons:{
    position:"absolute",
    marginTop: 21,
    left:22
  },
  textInput:{
      width:340,
      marginTop: 10,
      fontSize:20,
      height:50,
      borderRadius: 30,
      borderColor:"black", 
      borderWidth: 2,
      paddingLeft: 50,
  },
  button:{
    width:340,
    backgroundColor: "#19B5FE",
    marginVertical: 10,
    paddingVertical: 16,
    borderRadius: 30,
  },
  buttonText:{
      fontSize:16,
      fontWeight:"500",
      textAlign:"center",
      color:"black"
      
  }
});