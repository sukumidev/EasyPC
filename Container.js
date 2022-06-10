import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import Registro from './Registro';
import PagPrincipal from './PagPrincipal';
import Compra1 from './Compra1';
import Compra2 from './Compra2';
import Foro from './Foro';
import DatosCompra from './DatosCompra';
import Carrito from './Carrito';


const NavigationStack = createStackNavigator({
  Login:{
    screen: Login,
    navigationOptions: {
        headerShown: false,
      }
  },
  Registro:{
    screen: Registro
  },
  PagPrincipal:{
    screen: PagPrincipal,
    navigationOptions: {
        headerShown: false,
      }
  },
  Compra1:{
    screen: Compra1,
  },
  Compra2:{
    screen: Compra2,
  },
  Foro:{
    screen: Foro
  },
  DatosCompra:{
    screen: DatosCompra
  },
Carrito:{
    screen: Carrito
  }
});

const Container = createAppContainer(NavigationStack);
export default Container;