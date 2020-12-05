import * as React from 'react';
import GoogleMaps from '../components/GoogleMaps';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Template from '../components/Template';

const Tab = createMaterialTopTabNavigator();

function TabNavigation(props) {
  return (
    <Template {...props}>
      <Tab.Navigator
        initialRouteName="Comida"
        tabBarOptions={styles.tabStyle}
      >
        <Tab.Screen
          name="Comida"
          component={GoogleMaps}
          initialParams={{ category: 'food' }}
        />
        <Tab.Screen
          name="Farmacia"
          component={GoogleMaps}
          initialParams={{ category: 'drugstore' }}
        />
        <Tab.Screen
          name="Ropas"
          component={GoogleMaps}
          initialParams={{ category: 'clothes' }}
        />

      </Tab.Navigator>
    </Template>
  );
}
const styles = {
  tabStyle: {
    labelStyle: {
      color: '#fff'
    },
    style: {
      backgroundColor: '#242f3e'
    },
  },
};

export default TabNavigation;