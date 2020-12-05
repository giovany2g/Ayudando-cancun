import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Template from '../components/Template';

class Thankiu extends Component {
  render() {
    return (
      <Template {...this.props}>
        <View style={styles.container}>
          <View style={styles.container2}>
            <View style={styles.Touch}>
              <Image style={styles.imagen}
                source={require('../assets/images/image7.png')}
              />
            </View>
            <Text style={styles.titleText}>¡Gracias por donar, estas apunto de alegrarle la vida a muchas personas!</Text>
            <Button
              title='Inicio'
              color="#1BE1AF"
              height="10%"
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
    backgroundColor: '#E9E9F0',
  },
  imagen: {
    alignSelf: 'center'
  },
  Touch: {
    height: '60%',
    width: '90%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 15,
    height: 140,
    width: '90%',
    textAlign: 'center',
    alignSelf: 'center',
  }
});

export default Thankiu;
