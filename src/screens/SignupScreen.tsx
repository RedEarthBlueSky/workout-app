import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Spacer, IsBrowser } from '../components'
import { Context as AuthContext } from '../context/AuthContext'

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navTo = (nav) => {
    navigation.navigate(nav)
  }

  return (
    <View style={styles.container}>
      <Text h3>Sign Up Screen</Text>
      <Spacer />
      <Input
        label="Email:  "
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password:  "
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Text>* Password must contain at least one Uppercase letter, one lowercase and one number, be at least 8 characters long and no more than 15.</Text>
      <Spacer />
      {
        state.errorMessage
        ? <Text style={styles.errorStyle}>{state.errorMessage}</Text>
        : null
      }
      <Button
        title="Sign Up"
        onPress={() => signup({ email, password })}
      />
      <Spacer />
      <Text h4>Menu</Text>
      <Button
        title='Home'
        onPress={() => navTo('Home')}
      />
      <Button
        title='Go to Sign In'
        onPress={() => navTo('SignIn')}
      />
      <Button
        title='Go to Main Flow'
        onPress={() => navTo('mainFlow')}
      />
      <IsBrowser
        web='Web App'
        mobile='Mobile App'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  errorStyle: {
    fontSize: 22,
    color: 'red',
    justifyContent: 'center',
  },
})

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

export { SignUpScreen }
