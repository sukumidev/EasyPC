import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import Constants from 'expo-constants';
import {Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarIcon from 'react-calendar-icon';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class Registro extends React.Component {
  click=()=> {
    Alert.alert(
      'Registro completado',
      'Bienvenido nuevo usuarix',
        {
          text: 'OK',
        },
    );
  }

  render() {
  return (
    <View style={styles.container}>

      <Text style={styles.titulos}> Bienvenido a </Text>
      <Image style={styles.imagenestilo} source={require('./logo.jpg')} />

      <View style={styles.inputRow}> 
      <TextInput
        marginTop={45}
        placeholder="Username"
        style={styles.inputView}
      />
      </View>

      <View style={styles.inputRow}> 
      <TextInput
        marginTop={45}
        placeholder="Email"
        style={styles.inputView}
      />
      </View>
      
      <View style={styles.inputRow}> 
      <TextInput
        marginTop={45}
        placeholder="Contraseña"
        style={styles.inputView}
        secureTextEntry={true}
      />
      </View>

      <View style={styles.inputRow}> 
      <TextInput
        marginTop={45}
        placeholder="Confirmar Contraseña"
        style={styles.inputView}
        secureTextEntry={true}
      />
      </View>


      <Button
        buttonStyle={{
          backgroundColor: '#FF247B',
          marginTop: 15,
          width: 150,
          alignSelf:"center"
        }}
        title="Registrarse"
        onPress={this.click}
      />

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  imagenestilo: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginBottom: 15
  },
  inputView: {
    width: '90%',
    backgroundColor: '#CEE2FF',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    marginLeft: 20,
    justifyContent: 'center',
    padding: 20,
    
  },
  inputRow:{
    flexDirection: 'row',
   // justifyContent:"center"
  },
   titulos: {
    color: '#FF247B',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom:20,
  },
});

export default Registro;