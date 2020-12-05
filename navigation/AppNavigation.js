import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MapNavigator from '../navigation/MapNavigation';
import Profile from '../screens/Profile';
import Thankiu from '../screens/Thankiu';
import QuieroDonar from '../screens/QuieroDonar';
import Products from '../screens/Products';
const Screens = [
  { name: "Encuentra donantes", component: MapNavigator },
  { name: "Perfil", component: Profile },
  { name: "Quiero Donar", component: QuieroDonar },
  { name: "Agradecimientos", component: Thankiu },
]
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      {
        Screens.map(screenData => {
          return (
            <Drawer.Screen key={screenData.name} {...screenData} />
          )
        })
      }
    </Drawer.Navigator >
  );
}

const Stack = createStackNavigator();

const StackScreens = [
  {
    name: "Inicio", component: MyDrawer, options: {
      headerShown: false,
      headerMode: 'screen'
    }
  },
  { name: "Producto", component: Products },
]
function MyStack() {
  return (
    <Stack.Navigator>
      {
        StackScreens.map(screenData => {
          return (
            <Stack.Screen key={screenData.name} {...screenData} />
          )
        })
      }
    </Stack.Navigator>
  )
}

export default MyStack;