
import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Button, TouchableOpacity } from 'react-native';
import Template from '../components/Template';
import Api from '../services/api'
const BASE_URL = 'https://backend-ayudandonos-cancun.herokuapp.com';

export default class produtcs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Sin definir.',
      description: 'No se encontro una descripción.',
      Contacto: '',
      image: 'https://www.edinamika.com.mx/storage/app/public/images/sin-image.jpg',
    };
  }
  async componentDidMount(){
    try{ 
      const { route: { params: { productId } },navigation } = this.props;
      if(!productId){
        navigation.navigate('Inicio');
      }
      const {data: Product} = await Api.Product.get(productId);
      const {data: Contact} = await Api.User.get(Product.user);
      const {data: Image}= await Api.Image.get(Product.image)
     // const {data: Image} = await Api.Image.import(Product.image);
      console.log(Image.uri)
      Product.image = Image.uri;
      Product.Contacto = Contact;
      console.log(Product);
      this.setState(Product)
    } catch (err) {
      alert("Ha ocurrido un error con el producto");
      console.log(err);
    }

  }
  formatContact(){
    const { Contacto: {
      firstName,
      lastName,
      email,
      phoneNumber
    } }= this.state;
    return `Datos del donante ${firstName} ${lastName}:
    Email: ${email}
    Número telefónico: ${phoneNumber}`;
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header3}>
          <View style={styles.headerContent3}>
            <Text style={styles.name}>Información del producto </Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: this.state.image}} />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.header2}>
            <Text style={styles.tittle}>{this.state.name} </Text>
            <View style={styles.headerContent2}>
              <Text style={styles.subtittle}>Descripción: </Text>
              <Text style={styles.subtittle}> {this.state.description}</Text>
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title='Contacto'
            onPress={() => alert(this.formatContact())}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header2: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center'
  },
  headerContent2: {
    marginTop: 40,
    padding: 5,
    alignItems: 'center',
  },
  headerContent3: {
    marginTop: 30,
    padding: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 230,
    height: 230,
    marginBottom: 0,
  },
  name: {
    fontSize: 30,
    color: "#000000",
    fontWeight: '600',
  },
  tittle: {
    fontSize: 25,
    marginTop: 40,
    color: "#000000",
    fontWeight: '600',

  },
  subtittle: {
    fontSize: 15,
    padding: 15,
    color: "#000000",
    fontWeight: '600',
  },
  button: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },


});
