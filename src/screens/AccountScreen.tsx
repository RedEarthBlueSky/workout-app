import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{fontSize: 32}}>Account Screen</Text>
      <Button
        title='Go to Track List Flow'
        onPress={() => navigation.navigate('trackListFlow')}
        type='solid'
        raised
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

export { AccountScreen }
