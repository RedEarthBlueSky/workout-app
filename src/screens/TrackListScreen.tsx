import React from 'react'
import { View, Text, Button } from 'react-native'

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{fontSize: 32}}>Track List Screen</Text>
      <Button
        title='Go to Track Detail'
        onPress={() => navigation.navigate('TrackDetail')}
      />
      <Button
        title='Home'
        onPress={() => navigation.navigate('Home')}
        type='solid'
        raised
      />
    </View>
  )
}

export { TrackListScreen }
