import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';


export default class TenerifeSTenerifeDesdeArriba extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/Instituto-Técnico-Superior-Comunitario.jpg')}  style={styles.container}>
      
      <View style={{flex: 1}}>
      </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        resizeMode: 'center',
        padding: 0
    },
    container: {
      flex: 1,
      resizeMode: 'cover',
      padding: 0
  }
})