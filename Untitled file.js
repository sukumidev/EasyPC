import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
 
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
 
  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };
 
  drawerContent = () => {
    return (
      
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
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
            <Text>Open</Text>
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
    backgroundColor: "#38C8EC",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'top',
  }
})