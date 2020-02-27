import React from 'react'
import { View, StyleSheet } from 'react-native'
import { detect } from 'detect-browser'

const browser = detect()

interface Props {
  children: React.FC
}

const Wrapper: React.FC<Props> = ({ children }) => {
  if (browser) {
    return (
      <View style={styles.wrapper}>
        {children}
      </View>
    )
  }
  return <View>{children}</View>
}

const styles = StyleSheet.create({
  wrapper: {
    maxWidth: 1024,
    width: '100%',
    marginHorizontal: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

export { Wrapper }
