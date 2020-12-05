import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, } from 'react-native';
import Template from '../components/Template';

export default class UserProfileView extends Component {
  render() {
    return (
      <Template {...this.props}>
        <ScrollView style={styles.container}>
          <View style={styles.header2}>
            <View style={styles.headerContent2}>
              <Text style={styles.name}>Mario Trujeque </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
              </View>
              <View style={styles.headerContent3}>
                <Text style={styles.subtittle}>Donativos: </Text>
                <Text style={styles.subtittle}>Recibidos: </Text>
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.header2}>
              <View style={styles.headerContent2}>
                <Text style={styles.tittle}>Información de usuario </Text>
              </View>
              <View style={styles.headerContent2}>
                <Text style={styles.subtittle}>Dirección: </Text>
                <Text style={styles.subtittle}>Referencias: </Text>
                <Text style={styles.subtittle}>Número de contacto: </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </Template>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F5F5FE",
  },
  header2: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  headerContent2: {
    marginTop: 40,
    padding: 5,
    alignItems: 'center',
  },
  headerContent3: {
    marginTop: 0,
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
  name: {
    fontSize: 30,
    color: "#000000",
    fontWeight: '600',
  },
  tittle: {
    fontSize: 25,
    color: "#000000",
    fontWeight: '600',
  },
  subtittle: {
    fontSize: 15,
    padding: 15,
    color: "#000000",
    fontWeight: '600',
  }
});

