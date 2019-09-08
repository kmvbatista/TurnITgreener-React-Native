import React, { Component } from 'react'
import { BackHandler } from 'react-native'
import Container1 from '../styles'
import Header from '../Components/Header/index'
import Tabs from '../Tabs/index';

export default function Main( { navigation } ) {
  this._didFocusSubscription = navigation.addListener(  
    'didFocus',
    payload =>
      BackHandler.addEventListener(
        'hardwareBackPress',
        handlebackPress
      )
  )
  function handlebackPress(){
      return navigation.goBack(null);
  }

  return( 
    <Container1>
      <Header></Header>
        <Tabs></Tabs>
    </Container1>
  );
}
