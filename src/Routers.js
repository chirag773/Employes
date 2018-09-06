import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./component/LoginForm";
import Home from "./component/Home"
class RouterComponent extends Component {
  
  render() {
    return (
      <Router>
          <Scene key="root" >
            <Scene key="login" component={LoginForm} title="Log In" />
            <Scene key="employeeList" component={Home} title="Employes" />
          </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
