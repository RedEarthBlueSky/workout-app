import React from 'react'
import { Text } from 'react-native'

const AppMobile = ({ styles, content }) => {
    const { h2, browserStyles } = styles
    return <Text style={[h2, browserStyles]}>{content}</Text>
}

export { AppMobile }
