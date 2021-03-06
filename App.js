import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from "firebase";
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk";
import Routers from "./src/Routers"
// import { createStackNavigator } from "react-navigation";
import reducers from "./src/reducers";
import LoginForm from './src/component/LoginForm';
import Home from "./src/component/Home"
const firebaseConfig = {
    
};
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {
  
  static navigationOptions = {
    header:null
}


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store = {store}>
        <Routers/>
      </Provider>
    );
  }
}

// const AppStackNavigator = createStackNavigator({
//   LoginForm:LoginForm,
//   Home:Home
// })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
