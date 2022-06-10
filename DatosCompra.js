import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarIcon from 'react-calendar-icon';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class DatosCompra extends React.Component {
  btnClick = (navigation) => {
    this.props.navigation.navigate('PagPrincipal');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulos}> Añadir datos de compra </Text>
        <Image style={styles.imagenestilo} source={require('./logo.jpg')} />

        <View style={styles.inputRow}>
          <TextInput
            marginTop={45}
            placeholder="Direccion"
            style={styles.inputView}
          />
        </View>

        <View style={styles.inputRow}> 
      <TextInput
        marginTop={45}
        placeholder="Ciudad"
        style={styles.inputView}
      />
      </View>

      <View style={styles.inputRow}> 
      <TextInput
        marginTop={45}
        placeholder="Pais"
        style={styles.inputView}
      />
      </View>

        <View style={styles.inputRow}>
          <TextInput
            marginTop={45}
            placeholder="Numero de tarjeta"
            style={styles.inputView}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            marginTop={45}
            placeholder="Fecha de expiracion"
            style={styles.inputView}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            marginTop={45}
            placeholder="CVV"
            style={styles.inputView}
            secureTextEntry={true}
          />
        </View>

        <Button
          buttonStyle={{
            backgroundColor: '#FF247B',
            marginTop: 15,
            width: 150,
            alignSelf: 'center',
          }}
          title="Comprar"
          onPress={this.btnClick}
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
    alignSelf: 'center',
    marginBottom: 15,
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
  inputRow: {
    flexDirection: 'row',
    // justifyContent:"center"
  },
  titulos: {
    color: '#FF247B',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DatosCompra;
