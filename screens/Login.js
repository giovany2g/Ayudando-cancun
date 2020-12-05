import React, { Component } from 'react';
import { StyleSheet, Header, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import Api from '../services/api';

export default class Login extends Component {

  state = {
    strategy: "local", email: '', password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  login = async () => {
    try {
      const { route } = this.props;
      const { data: {
        accessToken, user
      } } = await Api.Auth.login(this.state)
      // set items on local when exist data
      await AsyncStorage.setItem('accessToken', accessToken)
      await AsyncStorage.setItem('user', JSON.stringify(user))

      console.log('Inicio de sesion exitoso!: ')
      console.log(accessToken, user)
      await route.params.checkAuth();
    } catch (err) {
      alert("Ocurrió un erro")
    }
  }


  render() {
    const { navigation } = this.props;
    return (



      <ScrollView>

        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
        </View>

        <View style={styles.header}>
          <View style={styles.headerContent3}>
            <Text style={styles.tittle}> Datos de inicio de sesión </Text>
          </View>

          <View style={styles.headerContent2}>
            <TextInput style={styles.textbox} placeholder='Nombre de usuario / Correo' onChangeText={val => this.onChangeText('email', val)} />
            <TextInput style={styles.textbox2} placeholder='Contraseña' secureTextEntry={true} onChangeText={val => this.onChangeText('password', val)} />
            <TouchableOpacity style={styles.button} onPress={this.login.bind(this)} >
              <Text style={styles.buttontext}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
  },
  headerContent: {
    marginTop: 80,
    padding: 30,
    alignItems: 'center',
  },
  headerContent2: {
    marginTop: 40,
    padding: 5,
    alignItems: 'center',
  },
  headerContent3: {
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 0,
  },
  tittle: {
    fontSize: 25,
    color: "#000000",
    fontWeight: '600',
  },
  textbox: {
    height: 40,
    width: 300,
    paddingLeft: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  textbox2: {
    marginTop: 20,
    height: 40,
    width: 300,
    paddingLeft: 10,
    borderColor: 'grey',
    borderWidth: 1,
  },
  button: {
    marginTop: 80,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#969696",
  },
  buttontext: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingHorizontal: 15,
  }
});
