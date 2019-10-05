import React from 'react';
import { BackHandler } from 'react-native';
import {Container1, TextHint, TextHintContainer} from './styles';
import Header from '../../Components/Header/index'
import Tabs from '../../Components/Tabs/index'
import Icon from 'react-native-vector-icons/MaterialIcons';
import headerLogo from '../../../images/recicl-o-simbolo-de-tres-folhas.png'
import Accordion from  '../../Components/Accordion/index'

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
      <Header Text1={`Seja bem vindo, `} Text2={`Kennedy`} logo={headerLogo}></Header>
      <TextHintContainer>
        <TextHint>Gire para opções </TextHint>
        <Icon name="keyboard-arrow-right" size={20} color="#fff"/>
      </TextHintContainer>
      <Tabs></Tabs>
      <Accordion></Accordion>
    </Container1>
  );
}
