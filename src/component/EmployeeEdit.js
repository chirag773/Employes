import _ from "lodash"
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { connect } from "react-redux";
import Communications from "react-native-communications"
import EmployeeForm from './EmployeeForm';
import { employeeUpdate , employeeSave, employeeDelete } from "../actions";
import Confirm from "./common/Confirm"
class EmployeeEdit extends Component {
 

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  //taking previous unput 

  componentWillMount() {
    _.each(this.props.employee, (value , prop)=>{
      this.props.employeeUpdate({ prop, value });
    })
  };


  //edit 

  onButtonPress(){
    const { name, phone, shift } = this.props;
    this.props.employeeSave({name,phone,shift, uid:this.props.employee.uid})
  };

//texting people

onTextPress(){
  const { phone, shift } = this.props;
  Communications.text(phone,`your SHIFT has change to ${shift}`)
}


// on accept delete

onAccept(){
  const { uid } = this.props.employee;
  this.props.employeeDelete({ uid })
}

// on decline delete

onDecline(){
  this.setModalVisible(false)
}

  render() {
    return (
      <View style={styles.container}>
      <EmployeeForm />
        <TouchableOpacity  style={styles.button} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.buttonText}>
              save change
          </Text>    
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={this.onTextPress.bind(this)}>
          <Text style={styles.buttonText}>
              Text
          </Text>    
        </TouchableOpacity>

        <TouchableOpacity  
            style={styles.button} 
            onPress={() => { this.setModalVisible(true); }}
        >
          <Text style={styles.buttonText}>
              Fire
          </Text>    
        </TouchableOpacity>

        <Confirm 
          visible={this.state.modalVisible}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  const { name, phone, shift} = state.employeeForm; //from reducer index.js employeeForm

  return { name, phone, shift }
}

export default connect(
  mapStateToProps, 
  { 
    employeeUpdate,
    employeeSave,
    employeeDelete
     
  })(EmployeeEdit);

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
})