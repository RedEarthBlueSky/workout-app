import React from 'react'
import { Text, View } from 'react-native'

const AppMobile = ({ styles, content }) => {
    const { h2, browserStyles } = styles
    return (
      <View>
        <Text style={[h2, browserStyles]}>{content}</Text>
      </View>
    )
}

export { AppMobile }
