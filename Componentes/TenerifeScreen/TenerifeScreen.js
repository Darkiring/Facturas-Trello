import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  ScrollView
} from 'react-native';


export default class TenerifeScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../../img/Instituto-Técnico-Superior-Comunitario.jpg')}  style={styles.container}>
      
      <Image source={require('../../img/logo-rrhh.jpg')} style={{width: 400, height: 125, alignContent: 'center'}}/>
      

      <ScrollView >
        <Text style={{fontSize: 30, backgroundColor: 'white', alignContent: 'center'}}> 
        Esta Unidad de Servicios al estudiante tiene como objetivo velar porque la comunidad estudiantil de la Escuela de Medicina desarrolle idóneamente el proceso enseñanza-aprendizaje. Provee orientaciones, asesorías, acompañamientos y seguimiento a los estudiantes desde sus inicios hasta el término de su carrera académica, de manera tal que se garantice el cumplimiento de los objetivos académicos durante cada semestre de su carrera.
          </Text>
      </ScrollView>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    imagen: {
        flex: 1,
        resizeMode: 'cover',
        padding: 0
    },
    container: {
        flex: 1,
        resizeMode: 'cover',
        padding: 0
    },
    OtraImagen: {
     
    }
})