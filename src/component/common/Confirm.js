import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Modal, 
    StyleSheet, 
    TouchableOpacity
 } from 'react-native';
import CardSections from './CardSections';
import Button from "./Button"
const Confirm = ({ children, visible, onAccept, onDecline }) =>{
  
    const { CardSectionsStyle, textStyle, containerStyle} = styles

    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={()=>{}}
      >
          <View style={containerStyle}>
              <CardSections style={CardSectionsStyle}>
                  <Text style={textStyle}>
                    {children}
                  </Text>
              </CardSections>
              <CardSections>
                <TouchableOpacity onPress={onAccept} style={styles.buttonStyle}>
                    <Text style={styles.ButtontextStyle}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={onDecline} style={styles.buttonStyle}>
                    <Text style={styles.ButtontextStyle}>No</Text>
                </TouchableOpacity>
              </CardSections>
          </View>
      </Modal>
    );
  }

export default Confirm;

const styles = StyleSheet.create({
    CardSectionsStyle:{
        justifyContent: 'center',
    },
    textStyle:{
        flex: 1,
        fontSize: 18,
        textAlign:"center",
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:"rgba(0,0,0,0.75)",
        position: "relative",
        flex:1,
        justifyContent: 'center',
    },
    buttonStyle: {
        flex:1,
        alignSelf: 'stretch',
        backgroundColor:"#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#007aff",
        marginLeft: 5,
        marginRight: 5
      },
      ButtontextStyle:{
          alignSelf: 'center',
          fontSize: 16,
          color:"#007aff",
          fontWeight:"600",
          paddingBottom: 10,
          paddingTop: 10,
      }
})