import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity, SafeAreaView, ScrollView 
} from 'react-native';
import Constants from 'expo-constants';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CalendarIcon from 'react-calendar-icon';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Avatar, Card, Title, Paragraph} from 'react-native-paper';

class Foro extends React.Component {
  btnClick = (navigation) => {
    this.props.navigation.navigate('PagPrincipal');
  };
  registroClick = (navigation) => {
    this.props.navigation.navigate('Registro');
  };

  render() {
    return (
       <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
       <Card>
    <Card.Title title="Hola tengo 12k que compu me puedo armar?" subtitle="Manquito :)" />
    <Card.Content>
      <Paragraph>Hola amigos, tengo 12000 pesos y me quiero armar un PC gamer que me corra el maincra con shaders, cual me recomiendan y porque? </Paragraph>
    </Card.Content>
  </Card>

  <Card>
    <Card.Title title="Review sobre el MSI GX740" subtitle="GamerGOD" />
    <Card.Content>
      <Paragraph>El MSI GX740 es un muy buen portátil para el precio que tiene (unos 1000-1050 euros, dependiendo de la tienda). No podemos catalogarlo en gama alta, dado que presenta evidentes carencias de rendimiento en juegos, sin embargo sí que estamos hablando de un portátil de gama media-alta, con una estética exterior impresionante, que hará las delicias de cualquier aficionado a las películas en alta definición con un sonido envolvente extraordinario, y que además quiere utilizar el equipo para trabajar y para jugar. </Paragraph>
    </Card.Content>
  </Card>

  <Card>
    <Card.Title title="Necesito Ayuda" subtitle="LuisF" />
    <Card.Content>
      <Paragraph>Tengo una laptop HP con 4GB  de ram y quisiera ponerle, cual me recomendarian y porque?</Paragraph>
    </Card.Content>
  </Card>

  <Card>
    <Card.Title title="Xtreme PC Gamer Radeon" subtitle="Aaron H" />
    <Card.Content>
      <Paragraph>¿Cómo ven banda? 
AMD Athlon 3000g
16gb RAM 2666mhz
240gb ssd
Monitor 21.5
Wifi
Kit naceb (teclado,mouse,cascos económicos)
Todo por unos 480 dólares. O recomienden algunas otras computadoras por alrededor de 500 dólares</Paragraph>
    </Card.Content>
  </Card>

   <Card>
    <Card.Title title="Hola" subtitle="Sergio" />
    <Card.Content>
      <Paragraph>Hola, mi amigo compró un pc con 12gb de Ram y Ryzen 5 de procesador, va muy rápido su pc en el cliente, pero cuando inicia la partida los FPS se le quedan en menos de 15.
¿Alguien sabe por qué es o conoce la solución?</Paragraph>
    </Card.Content>
  </Card>
   <Image style={styles.imagenestilo} source={'https://previews.123rf.com/images/maxsim/maxsim1309/maxsim130900035/21999582-bot%C3%B3n-a%C3%B1adir-icono-m%C3%A1s.jpg'} />
      </ScrollView>
    </SafeAreaView>
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
    width: 50,
    height: 50,
    alignSelf: 'center',
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

export default Foro;
