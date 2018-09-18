import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CardaSection from "../component/common/CardSections"
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
 
  onRowPress(){
    Actions.employeeEdit({ employee: this.props.employee });
  }

  render() {
      const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardaSection >
            <Text style={styles.titleStyle}> {name} </Text>
          </CardaSection>
        </View>
      </TouchableWithoutFeedback>
      
    );
  }
}

export default ListItem;

const styles = StyleSheet.create({
    titleStyle: {
       fontSize:18,
       paddingLeft: 15,
      },
});
