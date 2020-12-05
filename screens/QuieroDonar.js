import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Template from '../components/Template';

class QuieroDonar extends Component {
  constructor(props){
    super(props)
    this.state=({
      product:'',
      quantity:'',
      date:'',
      image:'',
      category:''
    })
  }
  changeproduct(product){
    this.setState({product})
  }
  changequantity(quantity){
    this.setState({quantity})
  }
  changedate(date){
    this.setState({date})
  }
  changecategory(category){
    this.setState({category})
  }
  buttonpress(){
    alert("TODO :c")
  }
  render() {
    return (
    <Template {...this.props}>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>Producto:</Text>    
          <TextInput style={styles.Input}
            placeholder=''
            value={this.state.product}
            onChangeText={(product)=>this.changeproduct(product)}
          />
          <Text style={styles.text}>Cantidad:</Text>    
          <TextInput style={styles.Input}
            placeholder=''
            value={this.state.quantity}
            onChangeText={(quantity)=>this.changequantity(quantity)}
          />
          <Text style={styles.text}>Fecha de Caducidad:</Text>    
          <TextInput style={styles.Input}
            placeholder='' 
            value={this.state.date}
            onChangeText={(date)=>this.changedate(date)}
          />
          <Text style={styles.text}>Categoria:</Text>    
          <TextInput style={styles.Input}
            placeholder='' 
            value={this.state.category}
            onChangeText={(category)=>this.changecategory(category)}
          />
          <Text style={styles.text}>Adjuntar foto del Producto</Text>
          <TouchableOpacity style={styles.Touch}>
              <Image style={styles.imagee}
                source={require('../assets/images/image6.png')}
              />
            </TouchableOpacity>
            <Button
              title='Publicar'
              onPress={() => this.buttonpress()}
              color="#1BE1AF"
              height= "10%"
            />       
          </View>
        </View>
      </Template>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9F0',
    alignItems: 'center'
  },
  container2: {
    flexDirection: 'column',
    width: '80%',
    height: '100%',
    backgroundColor: '#E9E9F0'
  },
  Input: {
    height: '7%',
    width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white'
  },
  Touch: {
    height: 150,
    width: '100%',
    alignItems: 'center'
  },
  imagee: {
    height: 135,
    width: 180,
    alignItems: 'center'
  },
  text: {
    textAlign: 'left',
    paddingTop: 4,
    paddingLeft: 4,
    height: '6%',
    width: '100%',
    fontSize: 15
  }
})

export default QuieroDonar;