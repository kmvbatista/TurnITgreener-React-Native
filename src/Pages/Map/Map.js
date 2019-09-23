import Map from '../../../Maps/index'
import {BackHandler, View, Text, Dimensions, Alert} from 'react-native'
import { Container } from './styles'
import React, {useState, useEffect} from 'react';


export default function Main( { navigation } ) {
    this._didFocusSubscription = navigation.addListener(  
        'didFocus',
        payload =>
          BackHandler.addEventListener(
            'hardwareBackPress',
            handlebackPress
          )
    );
    //centralizar no index
    const handleNavigationPermission = (condition) => {
      if(condition){
        navigation.navigate('DiscardPage');
      }
      else {
        Alert.alert("Você não está em uma localidade permitida");
      }
    }

    function handlebackPress(){
        return navigation.navigate('Main');
      }
    return (
      <Container>
  
          <Map handleNavigationPermission= {handleNavigationPermission}>
          </Map>

      </Container>
    );
}