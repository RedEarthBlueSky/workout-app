import React from 'react'
import { View, Text, Button } from 'react-native'

const TrackCreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{fontSize: 32}}>Track Create Screen</Text>
      <Button
        title='Go to Track List Flow'
        onPress={() => navigation.navigate('trackListFlow')}
      />
    </View>
  )
}

export { TrackCreateScreen }
