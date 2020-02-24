import React from 'react';
import { Text, View } from 'react-native';

import { IsBrowser } from './src/components'
import styles from './styles'

// props
// hooks
// render pros

const App = () => {
  const { h2, container } = styles
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
