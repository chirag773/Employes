import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View ,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ActivityIndicator
    } from 'react-native';
// import firebase from "firebase"
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions"

import Icons from 'react-native-vector-icons/FontAwesome';

class LoginForm extends React.Component {

  static navigationOptions = {
    header:null
}


  // constructor(props) {
  //   super(props);
 
  //  this.state = {
  //      email: "",
  //      passWord: ""
  //     };
  //   }

//   loginUsers = (email, password) => {
//     try{
//       firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
//         console.log(user)
//       })
//     }
//     catch(err){
//       console.log(err.toString);
      
//     }
    
//   }

//     static navigationOptions = {
//         header:null
//     }


onEmailChange(text){
  this.props.emailChanged(text)
}

onPasswordChange(text){
  this.props.passwordChanged(text)
}

onButtonPress(){
  const { email, password } = this.props;
  this.props.loginUser({email,password});
}

renderButton(){
  if(this.props.loading){
    return(
      <View>
        <ActivityIndicator size="large" color="blue"/>
      </View>
    )
  }
  return(
    <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
      <Text style={styles.buttonText}>
          Login 
      </Text>    
    </TouchableOpacity>
  )
}

renderError(){
  if(this.props.error){
    return(
      <View style={{backgroundColor:"#E4F1FE"}}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    )
  }
}
    
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.loginText}>L O G I N</Text>
        </View>
        <View>
        <Icons name="envelope" size={27}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                    placeholder="Email"
                    placeholderTextColor="black"
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
          />
        </View>
        <View>
          <Icons name="lock" size={27}
            style={styles.InputIcons}
          />
          <TextInput style={styles.textInput} 
                      placeholder="Password"
                      placeholderTextColor="black"
                      secureTextEntry={true}
                      underlineColorAndroid="rgba(0,0,0,0)"
                      onChangeText={this.onPasswordChange.bind(this)}
                      value={this.props.password}
          />
        </View>
        {this.renderError()}
        {this.renderButton()}
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password:state.auth.password,
    error:state.auth.error,
    loading:state.auth.loading
  };
}

//another method 
// const mapStateToProps = ({auth}) => {
//   const {email,password,error,loading } = auth;
//   return {
//     email,
//     password,
//     error,
//     loading
//   };
// }


export default connect(mapStateToProps,{
   emailChanged,passwordChanged, loginUser
  })(LoginForm)

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#E4F1FE',    
    justifyContent: 'center',

  },
  top:{
    alignItems: 'center',
  },
  loginText:{
    color:"black",
    fontSize: 28,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor:"rgba(255,255,255,0.1)"
  },
  InputIcons:{
    position:"absolute",
    marginTop: 21,
    left:21
  },
  textInput:{
      width:340,
      marginTop: 10,
      fontSize:20,
      height:50,
      borderRadius: 30,
      borderColor:"black", 
      borderWidth: 2,
      paddingLeft: 52,
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
      
  },
  signuptextcont:{
    alignItems: 'center',
    flexDirection: 'row',
  },
  signuptext:{
    fontSize: 15,
    color:"#67809F",
  },
  signupbutton:{
    fontWeight:"500"

  },
  errorTextStyle:{
    fontSize:20,
    alignSelf: 'center',
    color:"red"
  }
});
