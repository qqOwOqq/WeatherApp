import React, {Component} from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { useLayoutEffect } from 'react';
const Stack = createNativeStackNavigator();


function LocationScreen({navigation}) {

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerLeft: () => (
            <Button
            title="Category"
            onPress={ () => navigation.navigate('Category')}
          />
          ),
        })
      })
      return (
        <View style={styles.screen}>
          <Text>지역 검색 스크린</Text>
        </View>
        
      );
    }
    const styles = StyleSheet.create({
        screen:{
          flex: 1,
          alignItems: 'center', 
          justifyContent: 'center' 
        },
    })
    export default LocationScreen