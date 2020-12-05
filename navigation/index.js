import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

function AppContainer({
  isLoggedIn = false,
  checkAuth,
  logout
}) {
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigation initialParams={{ checkAuth, logout }} /> : <AuthNavigation initialParams={{ checkAuth }} />}
    </NavigationContainer>
  );
}

export default AppContainer;