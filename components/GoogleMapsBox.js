import React from 'react';
import { Callout } from 'react-native-maps';
import { View, Button, Text, StyleSheet } from 'react-native';

export default CustomMarker = ({
  _id,
  name,
  quantity,
  navigation
}) => (
    <Callout onPress={() =>navigation.navigate('Producto',{productId: _id})}>
      <View style={styles.container}>
        <Text style={styles.title}>Producto:</Text>
        <Text numberOfLines={3}>{name || 'Sin definir'}</Text>
        <Text style={styles.mb}>
          <Text style={styles.title}>Disponibilidad: </Text>
          {quantity || 0}
        </Text>
        <Button color={'#3c3c3c'} title='Ver información' />
      </View>
    </Callout>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold'
  },
  mb: {
    marginBottom: 10
  }
})

