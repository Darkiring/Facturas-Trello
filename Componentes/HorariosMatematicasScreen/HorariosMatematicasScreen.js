import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button
} from 'react-native';


export class HijoComponente extends Component {
  render(){
    return(
      <View style={styles.Centro}>
        <View  style={this.props.status ? styles.on : styles.off}/>
      </View>
    )
  }
}

export class HijoComponente2 extends Component {
  render(){
    return(
      <View style={styles.Centro}>
        <View  style={this.props.status ? styles.on : styles.off}/>
      </View>
    )
  }
}

export class HijoComponente3 extends Component {
  render(){
    return(
      <View style={styles.Centro}>
        <View  style={this.props.status ? styles.on : styles.off}/>
      </View>
    )
  }
}


export default class HorariosEspanolScreen extends Component {
constructor(props){
  super(props)
  this.state = {status: false}
  this.state = {status2: false}
  this.state = {status3: false}
}
  clicked(){
    this.setState({
      status: !this.state.status
    })
  }

  clickede(){
    this.setState({
      status2: !this.state.status2
    })
  }

  clickede2(){
    this.setState({
      status3: !this.state.status3
    })
  }

  render() {
    return (
      
      
      <View style={styles.container}>
        
        <Text style={{fontSize: 15}}> Para seleccion de horario, presione el boton seleccionar, y cambiara de  color confirmando la seleccion. </Text>
        
          <View>
          <Text style={styles.Texto}>      
              Horario Matutino
              8:00 / 1:00        
          </Text>
      
            <HijoComponente status={this.state.status} />
      
              <Button onPress={this.clicked.bind(this)}
                  title = 'Seleccionar'
                    color = '#6D8BFF'
          
              />   

          </View>

          <View>
          <Text style={styles.Texto}>      
              Horario Vespertino
              2:00 / 4:00        
          </Text>
      
            <HijoComponente2 status={this.state.status2} />
      
              <Button onPress={this.clickede.bind(this)}
                  title = 'Seleccionar'
                    color = '#6D8BFF'
          
              />   

          </View>

          <View>
          <Text style={styles.Texto}>      
              Horario Nocturno
              6:00 / 8:00        
          </Text>
      
            <HijoComponente3 status={this.state.status3} />
      
              <Button onPress={this.clickede2.bind(this)}
                  title = 'Seleccionar'
                    color = '#6D8BFF'
          
              />   

          </View>
          
      </View>
      
     

    );
  }
}

const styles = StyleSheet.create({
  on: {
    width: 80,
    height: 30,
    backgroundColor: '#11FC33'
  },
  off: {
    width: 80,
    height: 30,
    backgroundColor: '#F93535'
  },
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
  Texto: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10 
  },
  Centro: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})