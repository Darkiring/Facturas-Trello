import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ScrollView
} from 'react-native';



export default class GranCanariaScreen extends Component {
  render() {
    return (
      
      
      <View style={styles.container}>

      <View style={{flex: 1}}>
        <Text style={styles.title}> Tutorias de Espanol </Text>
          <Button onPress= {() => this.props.navigation.navigate('HorariosEspanol')}
              title="Ver Horarios de Espanol"></Button>

        <ScrollView>
        <Text style={{fontSize: 15, backgroundColor: 'white'}}> 
          Horarios disponibles para estudiantes con bajas academicas en el area de las Espanol.

          Los profesores disponibles son: 
            Jhon Michael y Juana Rodriguez.

            Horarios mostrados a la hora de seleccionar.
        </Text>
          </ScrollView>

      </View>

      <View style={{flex: 2}}>
        <Text style={styles.title}> Tutorias de Matematicas </Text>
          <Button onPress= {() => this.props.navigation.navigate('HorariosMatematicas')}
              title="Ver Horarios de Matematicas"></Button>

              <ScrollView>
        <Text style={{fontSize: 15, backgroundColor: 'white'}}> 
          Horarios disponibles para estudiantes con bajas academicas en el area de las Matematicas.

          Los profesores disponibles son: 
            Carlos Santos y Matilda Encarnacion.

            Horarios mostrados a la hora de seleccionar.
        </Text>
          </ScrollView>

      </View>   


      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        padding: 0
    },
    title: {
      marginTop: 0,
      fontSize: 25,
      textAlign: 'center',
      backgroundColor: 'skyblue'
    }
})
