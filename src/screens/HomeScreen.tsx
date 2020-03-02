import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

const buttons = [ {title: 'Sign Up/Sign In', nav: 'loginFlow'}, {title: 'View My Tracks', nav: 'mainFlow'}, {title: 'My Account', nav: 'Account'} ]

const HomeScreen = ({ navigation }) => {
  const makeButtons = () => {
    return buttons.map((button, index) => {
      return (
        <Button
          key={index}
          title={button.title}
          onPress={() => navigation.navigate(button.nav)}
          type='solid'
          raised
          style={styles.buttonStyles}
        />
      )
    })
  }
  return (
    <View>
      <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Text style={{fontSize: 32}}>Home Main Screen</Text>
      {makeButtons()}
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
