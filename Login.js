import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarIcon from 'react-calendar-icon';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class Login extends React.Component {
  btnClick = (navigation) => {
    this.props.navigation.navigate('PagPrincipal');
  };
  registroClick = (navigation) => {
    this.props.navigation.navigate('Registro');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imagenestilo} source={require('./logo.jpg')} />

        <View style={styles.inputRow}>
          <Icon name="user" style={styles.icono} size={25} />
          <TextInput
            marginTop={45}
            placeholder="Usuario"
            style={styles.inputView}
          />
        </View>

        <View style={styles.inputRow}>
          <Icon name="key" style={styles.icono} size={25} />
          <TextInput
            marginTop={45}
            placeholder="Contraseña"
            style={styles.inputView}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>

        <Button
          buttonStyle={{
            backgroundColor: '#FF247B',
            marginTop: 15,
            width: 150,
            alignSelf: 'center',
          }}
          title="Entrar"
          onPress={this.btnClick}
        />
        <TouchableOpacity onPress={this.registroClick}>
          <Text style={styles.loginText}>Registrarse</Text>
        </TouchableOpacity>
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
  icono: {
    alignSelf: 'center',
    color: '#FF247B',
    marginLeft: 10,
  },
  imagenestilo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#CEE2FF',
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    marginLeft: 0,
    justifyContent: 'center',
    padding: 20,
  },
  inputRow: {
    flexDirection: 'row',
    // justifyContent:"center"
  },
  forgot: {
    color: '#0C3167',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 10,
  },
  loginText: {
    color: '#FF247B',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Login;
