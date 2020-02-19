import { StyleSheet } from 'react-native'
import { detect } from 'detect-browser'

const browser = detect()

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
  },
  // we can use browser to change styles
  browserStyles: {
    fontWeight: (browser) ? 'bold' : null
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
