import firebase from "firebase"
import {Actions} from "react-native-router-flux"
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "./types"

export const emailChanged = (text) => {
    return{
        type:EMAIL_CHANGED,
        payload:text
    };
};

export const passwordChanged = (text) => {
    return{
        type:PASSWORD_CHANGED,
        payload:text
    };
};

export const loginUser = ({ email,password }) => {
    return(dispatch) => {
        //check spinner
        dispatch({
            type:LOGIN_USER
        })
        //login user in
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then( (user) => {
                    loginUserSucess( dispatch, user );
                    
                })
                
                .catch((error)=> {
                    console.log(error);
                    //create new user
                    firebase.auth().createUserWithEmailAndPassword(email,password)
                        .then( user => loginUserSucess( dispatch, user ))
                        .catch(()=> loginUserFail(dispatch));
                })
        
    }
}

const loginUserFail = (dispatch) => {
    dispatch({
        type:LOGIN_USER_FAIL
    })
}

const loginUserSucess = (dispatch,user) =>{
    dispatch({
         type:LOGIN_USER_SUCCESS, 
         payload:user
        });
        // navigate("Home");
        Actions.employeeList();
}

