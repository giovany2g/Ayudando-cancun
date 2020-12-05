import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Header } from 'react-native-elements';
import TapBarIcon from './TabBarIcon';

const SandwichConfig = {
  name: 'md-menu',
  color: '#fff',
}
class Template extends Component {
  render() {
    const { children, navigation } = this.props;
    return (
      <View style={styles.parent} >
        <Header
          leftComponent={
            <TapBarIcon
              {...SandwichConfig}
              handlePress={() => { navigation.toggleDrawer() }}
            />
          }
          centerComponent={{
            text: 'AYUDANDO  CANCUN',
            style: { color: '#fff' }
          }}
        />
        <ScrollView>
          {children}
        </ScrollView>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
})

export default Template;