import React from 'react';
import { Text, View } from 'react-native';

import IsBrowser from './src/components/IsBrowser'
import styles from './styles'

const App = () => {
  const { h2, browserStyles, container } = styles
  return (
    <View style={container}>
      <Text style={h2}>Open App.tsx to work on your</Text>
      <IsBrowser
        web='Web App!'
        mobile='Mobile App!'
      />
    </View>
  );
}

export default App
