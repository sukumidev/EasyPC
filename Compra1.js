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

class Compra1 extends React.Component {

  render() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagenestilo} source={require('./assets/compra1.png')} />
       <Button
          buttonStyle={{
            backgroundColor: '#FF247B',
            marginTop: 15,
            width: 150,
            alignSelf: 'center',
          }}
          title="Añadir al carrito"
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
    width: 300,
    height:470,
    marginBottom: 15,
    resizeMode: 'stretch'
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

export default Compra1;