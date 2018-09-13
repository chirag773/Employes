import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./component/LoginForm";
import Home from "./component/Home"
import EmployeCreate from './component/EmployeCreate';
class RouterComponent extends Component {
  
  render() {
    return (
      <Router>
          <Scene key="root" >
            <Scene key="login" component={LoginForm} title="Log In" />
            
            {/* left={()=>null} is use to disable back button */}
            <Scene 
            key="employeeList" 
            component={Home} 
            title="Employes" 
            left={()=>null}
            rightTitle="Add"
            onRight={()=>Actions.employeCreate()}
            /> 

            <Scene key="employeCreate" component={EmployeCreate} title="Add Employee" />
          </Scene>
          
      </Router>
    );
  }
}

export default RouterComponent;
