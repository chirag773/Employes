import React, { Component } from 'react';
import { 
    View, 
    TextInput,
    Picker,
    KeyboardAvoidingView,
    StyleSheet
 } from 'react-native';
 import { connect } from "react-redux";
 import Icon from 'react-native-vector-icons/FontAwesome';

import CardSection from "../component/common/CardSections";

import {employeeUpdate} from "../actions";


class EmployeeFrom extends Component {


  render() {
    return (
      <View>
        <View>
          <Icon name="user" size={28}
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
          <Icon name="phone" size={28}
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
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    const { name, phone, shift} = state.employeeForm; //from reducer index.js employeeForm
  
    return { name, phone, shift }
  }


export default connect(mapStateToProps,{employeeUpdate})(EmployeeFrom);

const styles = StyleSheet.create({
   
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
});