import React, { Component } from 'react'
import {View, TextInput, StyleSheet, Text } from 'react-native'
import { FlatList, ActivityIndicator, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import { GetPlacesArray } from '../../../utils'
import { Container, TextInputContainer, TextInputStyled, ListContainer, Item, ListItemContainer } from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default class Search extends Component{
  state={
    SearchedPlace: null,
    placesInMemory: null,
    places: GetPlacesArray(),
    isLoading: false
  }

  render() {
    const handleFindPlace = (value) => {
        this.state.SearchedPlace = value;
        const filteredPlaces = this.state.places.filter( 
          place => {
            let placeLowerCase = place.title.toLowerCase();
            let searchTermLowerCase = value.toLowerCase();
            return placeLowerCase.indexOf(searchTermLowerCase)> -1;
          }
        )
      this.setState({placesInMemory: filteredPlaces});
    }

    const getResults = () => {
      var places= this.state.placesInMemory;
      if(places){
        
        var placesToShow = places.map(el => {return {key: `${el.title}`}});
        return placesToShow;
      }
    }
    return (
      <Container>
        <TextInputContainer>
          <TextInputStyled
                      autoCapitalize= 'none'
                      style={styles.inputPlace}
                      autoCorrect= {false}
                      placeholder={'Escolha um local pra depositar'}
                      placeholderTextColor={'rgba(0,0,0, 0.7)'}
                      underlineColorAndroid ='transparent'
                      value= {this.state.places.title}
                      onChangeText= {(value) => handleFindPlace(value)}
                      />
        </TextInputContainer>
          
          <ListContainer >
          {this.state.isLoading ?
            <View style={{...StyleSheet.absoluteFill ,alignItems: "center", justifyContent: 'center'}}>
              <ActivityIndicator size="large" color="#000"></ActivityIndicator>
            </View> :null}
            <FlatList
            contentContainerStyle={{ alignItems: "center", justifyContent: "space-between" }}
              data={getResults()}
              renderItem={({item}) => <ListItemContainer><Item><Text>{item.key}</Text></Item></ListItemContainer>}
              ListEmptyComponent= {() => 
               <Text style={{color: '#000'}}>Nada encontrado</Text>
              
              }
             >
          </FlatList>
         </ListContainer>
            
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputPlace: {
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {x: 0, y: 0},
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 18
  }
})