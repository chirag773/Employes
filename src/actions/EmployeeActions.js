import firebase from "firebase";
import {Actions} from "react-native-router-flux"

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from "./types";

//taking value of employee


export const employeeUpdate = ({ prop, value}) => {
    return {
        type:EMPLOYEE_UPDATE,
        payload:{ prop , value}
    }
}

// creating employee

export const employeeCreate = ( {name, phone, shift} ) => {
    console.log(name, phone, shift );
    console.ignoredYellowBox = ['Setting a timer'];
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${ currentUser.uid }/employees`)
            .push({ name, phone, shift })
                .then(()=> {
                    dispatch({ type: EMPLOYEE_CREATE });
                    Actions.employeeList({type:"reset"})
                });
    };  
};


// fetching emplooye


export const employeesFetch = () => {
    console.ignoredYellowBox = ['Setting a timer'];
    const { currentUser } = firebase.auth();

    return(dispatch) => {
        firebase.database().ref(`/users/${ currentUser.uid }/employees`)
            .on("value", snapshot => {
                dispatch({ 
                    type:EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                });
            });
    };
};

//edit and save employee


export const employeeSave = ( {name, phone, shift, uid} ) => {

    console.ignoredYellowBox = ['Setting a timer'];
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${ currentUser.uid }/employees/${uid}`)
            .set({ name, phone, shift })
                .then(()=> {
                    dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                    Actions.employeeList({type:"reset"})
                });
    };  
};


// delete employee

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${ currentUser.uid }/employees/${uid}`)
           .remove()
           .then(()=> {
                Actions.employeeList({type:"reset"})
        });
    }; 
}