import React from 'react'
import { View } from 'react-native'
import { detect } from 'detect-browser'

import { AppWeb, AppMobile } from './appcontent'

import styles from '../../styles'

const browser = detect()

const IsBrowser = ({ web, mobile }) => {
  if (browser) {
    return (
      <View>
        <AppWeb styles={styles} content={web} />
      </View>
    )
  }
  return <View><AppMobile styles={styles} content={mobile} /></View>
}

export default IsBrowser
