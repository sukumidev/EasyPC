import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
 
class PagPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
  comClick = (navigation) => {
    this.props.navigation.navigate('Compra1');
  };
  
  comClick2 = (navigation) => {
    this.props.navigation.navigate('Compra2');
  };
  foroclick = (navigation) => {
    this.props.navigation.navigate('Foro');
  };
  carritoclick = (navigation) => {
    this.props.navigation.navigate('Carrito');
  };
 
  drawerContent = () => {
    return (
      <View>
      <TouchableOpacity onPress={this.foroclick} style={styles.animatedBox}>
        <Text style={styles.ventana}>Ir al foro</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.carritoclick} style={styles.animatedBox}>
        <Text style={styles.ventana}>Carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text style={styles.ventana}>Close</Text>
      </TouchableOpacity>
      </View>
    );
  };
 
  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Text>Opciones</Text>
          </TouchableOpacity>
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

          
        </MenuDrawer>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#FF247B",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'top',
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
  ventana: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom:20,
  },
})

export default PagPrincipal;