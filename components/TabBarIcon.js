import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <TouchableOpacity onPress={() => {
      props.handlePress()
    }}>
      <Ionicons
        name={props.name}
        size={30}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    </TouchableOpacity>

  );
}
