import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { createDrawerNavigator, StackNavigator } from 'react-navigation';
import Icon  from 'react-native-vector-icons/Ionicons';
import GranCanariaScreen from '../GranCanariaScreen/GranCanariaScreen';
import TenerifeScreen from '../TenerifeScreen/TenerifeScreen';
import TenerifeDesdeArribaScreen from '../TenerifeDesdeArribaScreen/TenerifeDesdeArribaScreen';
import HorariosEspanolScreen from '../HorariosEspanolScreen/HorariosEspanolScreen';
import HorariosMatematicasScreen from '../HorariosMatematicasScreen/HorariosMatematicasScreen';
import ListaProfesoresScreen from '../ListaProfesoresScreen/ListaProfesoresScreen';

const GranCanariaStack = StackNavigator({
    GranCanaria: {
        screen: GranCanariaScreen,
        navigationOptions: ({navigation}) => ({
            title: "Horarios de Tutorias",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color= {'#73E0FF'}
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
                        headerStyle: {backgroundColor: '#1752FF'},
                        headerTintColor: 'white'
        })
    },
    HorariosEspanol: {
        screen: HorariosEspanolScreen,
            navigationOptions: ({navigation}) => ({
                title: "Horarios Espanol",           
                headerStyle: {backgroundColor: '#1752FF'},
                headerTintColor: 'white'
            })
        },
    HorariosMatematicas: {
        screen: HorariosMatematicasScreen,
            navigationOptions: ({navigation}) => ({
                title: "Horarios de Matematicas",
                headerStyle: {backgroundColor: '#1752FF'},
                headerTintColor: 'white'
            })
    }    

});

const TenerifeStack = StackNavigator({
    Tenerife: {
        screen: TenerifeScreen,
        navigationOptions: ({navigation}) => ({
            title: "Quienes somos:",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color= {'#73E0FF'}
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
                        headerStyle: {backgroundColor: '#1752FF'},
                        headerTintColor: 'white'
        })
    },

    ServiciosEstudiantiles: {
        screen: TenerifeDesdeArribaScreen,
        navigationOptions: ({navigation}) => ({
            title: "Tenerife Desde Arriba",           
            headerStyle: {backgroundColor: '#1752FF'},
            headerTintColor: 'white'
        })
    }   
});

const ListaProfesoresStack = StackNavigator({
    ListaProfesores: {
        screen: ListaProfesoresScreen,
        navigationOptions: ({navigation}) => ({
            title: "Profesores:",
            headerLeft: <Text>    <Icon name="md-menu"
                                        size={35}
                                        color= {'#73E0FF'}
                                        onPress={ () => navigation.navigate('DrawerOpen')}/>
                        </Text>,
                        headerStyle: {backgroundColor: '#1752FF'},
                        headerTintColor: 'white'
        })
    }  
   
});

const DrawerRaiz = createDrawerNavigator({
    Seleccion : {
        screen: GranCanariaStack
    },
    QuienesSomos: {
        screen: TenerifeStack
    },
    Profesores: {
        screen: ListaProfesoresStack
    }
},   
    {
        drawerBackgroundColor: '#2A56FF',
        contentOptions: {
            activeTintColor: 'white'
        }
});

export default DrawerRaiz;