import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { AsyncStorage } from 'react-native';
import Api from '../services/api';

export default class SignUp extends React.Component {
  state = {
    firstName: '', lastName: '', password: '', email: '', phoneNumber: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { firstName, lastName, password, email, phoneNumber } = this.state
    try {
      const { data:User} = await Api.Auth.register(this.state)
      alert('Registro exitoso!'+User.email)
    } catch (err) {
      alert('Ocurrió un error: ' + err)
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.title}>
            CREAR CUENTA
        </Text>
          <Text>
            ¡Es gratis y sólo te tomará un minuto!{"\n"}{"\n"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Nombre(s)*'
            autoCapitalize="words"
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('firstName', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Apellido(s)*'
            autoCapitalize="words"
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('lastName', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Correo electrónico*'
            autoCapitalize="none"
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Contraseña*'
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('password', val)}
          />
          <TextInput
            style={styles.input}
            placeholder='Número celular*'
            placeholderTextColor='gray'
            onChangeText={val => this.onChangeText('phoneNumber', val)}
          />
          <Button
            title='Registrarse'
            onPress={this.signUp.bind(this)}
          />
          <Text>
            {"\n"}¿Ya tienes una cuenta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.login}>
              Inicia sesión aquí
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'steelblue',
    alignItems: "stretch",
    fontSize: 40,
    paddingBottom: 5,
    fontWeight: '300',
  },
  input: {
    width: '90%',
    height: 55,
    borderColor: 'steelblue',
    borderWidth: 1,
    margin: 10,
    paddingStart: 10,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '100',
  },
  login: {
    textDecorationLine: 'underline',
    color: 'steelblue',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
