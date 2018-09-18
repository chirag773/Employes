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

import EmployeeForm from "./EmployeeForm";


class EmployeCreate extends Component {
  
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift })
  }



  render() {
    console.log(this.props.employee)
    return (
     
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <EmployeeForm { ...this.props} />
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeCreate);


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow:1
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