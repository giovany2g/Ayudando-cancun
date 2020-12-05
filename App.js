import React, { Component } from 'react';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import AppContainer from './navigation';
import { AsyncStorage } from 'react-native';



export default class App extends Component {
  state = {
    isLoadingComplete: false,
    isLoggedIn: false,
  }
  componentDidMount() {
    this.loadResourcesAndDataAsync();
  }

  async loadResourcesAndDataAsync() {
    try {
      SplashScreen.preventAutoHide();
      // Load fonts
      await Font.loadAsync({
        ...Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      });
      await Location.requestPermissionsAsync();
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      this.setState({ isLoadingComplete: true });
      SplashScreen.hide();
    }
  }
  render() {
    const { isLoadingComplete, isLoggedIn } = this.state;
    const { skipLoadingScreen } = this.props;

    return !isLoadingComplete && !skipLoadingScreen ? null : (
      <AppContainer isLoggedIn={isLoggedIn} checkAuth={this.checkAuth.bind(this)} logout={this.logout.bind(this)} />
    )
  }
  async checkAuth  (){
    const token = await AsyncStorage.getItem("accessToken");
    const user = await AsyncStorage.getItem("user");
    if  (token != null && user != null) {//verifica valor no nulo
      this.setState({isLoggedIn : true})
    }
  }

  async logout (){ //Desetea los estados
    try {
      await AsyncStorage.removeItem("accessTokenn");
      await AsyncStorage.removeItem("user");
    }
    catch(exception) {
      console.log("Error while logging out")
    } finally {
      this.checkAuth()
    }
  }

}

