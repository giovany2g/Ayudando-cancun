import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/WelcomeScreen'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const Stack = createStackNavigator();

const noHeader = {
  options: {
    headerShown: false
  }
}

function MyStack(props) {
  const { initialParams } = props;
  //const { params } = route;
  return (
    <Stack.Navigator>
      <Stack.Screen {...noHeader} name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} initialParams={{ ...initialParams }} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
export default MyStack;