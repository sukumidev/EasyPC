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

class Carrito extends React.Component {

  btnClick = (navigation) => {
    this.props.navigation.navigate('DatosCompra');
  };

  render() {
  return (
    <View style={styles.container}>
    <Text style={styles.titulos}> Carrito </Text>
      <Image style={styles.imagenestilo} source={require('./assets/amd.png')} />
       <Button
          buttonStyle={{
            backgroundColor: '#FF247B',
            marginTop: 15,
            width: 150,
            alignSelf: 'center',
          }}
          onPress={this.btnClick}
          title="Comprar"
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
    width: 150,
    height: 150,
    resizeMode: "stretch",
    alignSelf: 'left',
    marginBottom: 20,
    marginLeft: 10,
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

export default Carrito;