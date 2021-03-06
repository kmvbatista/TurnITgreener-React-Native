import React from 'react'
import { ButtonStyled, ButtonView, ButtonText } from './styles'
import {withNavigation} from 'react-navigation'

export default function Button(props) {
    
    return (
        <ButtonView>
            <ButtonStyled onPress={() => {props.onclick()}}>
                <ButtonText>
                    Descartar Agora
                </ButtonText>
            </ButtonStyled>
        </ButtonView>   
    );
}
