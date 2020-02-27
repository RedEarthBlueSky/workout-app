import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text style={{fontSize: 32}}>Home Main Screen</Text>
      <Button
        title='Sign Up/Sign In'
        onPress={() => navigation.navigate('loginFlow')}
        type='solid'
        raised
        style={styles.buttonStyles}
      />
      <Button
        title='View My Tracks'
        onPress={() => navigation.navigate('mainFlow')}
        type='solid'
        raised
        style={styles.buttonStyles}
      />
      <Button
        title='My Account '
        onPress={() => navigation.navigate('AccountScreen')}
        type='solid'
        raised
        style={styles.buttonStyles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    borderRadius: 10,
    marginTop: 5,
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

export { HomeScreen }
