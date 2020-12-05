import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { Header } from 'react-native-elements';

class Welcome extends Component {
  render() {
    // TODO: set a local storage if success
    // TODO: get local storage on app.js when success login
    return (
      <View style={styles.parent}>
        <Header
          centerComponent={{
            text: 'AYUDANDO  CANCUN',
            style: { color: '#fff' }
          }}
        />
        <View style={styles.container}>
          <Image
            style={styles.stretch}
            source={require('../assets/images/donation.png')}
          />
        </View>
        <Button
          title='Crear cuenta'
          onPress={() => this.props.navigation.navigate('Signup')}
          size={50}
          color=""
          type="outline"
        />
        <Button
          style={styles.stretch}
          title='Iniciar sesión'
          onPress={() => this.props.navigation.navigate('Login')}
          size={50}
          color=""
          type="outline"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stretch: {
    width: 150,
    height: 150,
    resizeMode: 'stretch'
  }


})

export default Welcome;