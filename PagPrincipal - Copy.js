import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarIcon from 'react-calendar-icon';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class PagPrincipal extends React.Component {

  comClick = (navigation) => {
    this.props.navigation.navigate('Compra1');
  };
  
  comClick2 = (navigation) => {
    this.props.navigation.navigate('Compra2');
  };

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image style={styles.logosup} source={require('./logoletras.jpg')} />
        <Text style={styles.titulos}> Los mas vendidos </Text>

        <View style={styles.inputRow}>
          <TouchableOpacity onPress={this.comClick}>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/amd.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/dd.png')}
            />{' '}
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/mouse.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/ram.png')}
            />{' '}
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/RAM2.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.comClick2}>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/teclado.png')}
            />{' '}
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/pros.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/tm.png')}
            />{' '}
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/au.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/tgamer.png')}
            />{' '}
          </TouchableOpacity>
        </View>
        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/monitor.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/dd2.png')}
            />{' '}
          </TouchableOpacity>
        </View>

        <View style={styles.inputRow}>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/amd.png')}
            />{' '}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.imagenestilo}
              source={require('./assets/dd.png')}
            />{' '}
          </TouchableOpacity>
        </View>

        <Image style={styles.imagenestilo} source={require('./logo.jpg')} />
      </ScrollView>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFFFFF',
  },
  imagenestilo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
  logosup: {
    marginTop:15,
    height: 20,
    width: 90,
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default PagPrincipal;