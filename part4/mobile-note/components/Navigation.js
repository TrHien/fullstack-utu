import { Button, View } from 'react-native'

import React from 'react'
import styles from '../Styles'

const Navigation = ({ title, navigate }) => {
  if (title === 'NEW NOTE') {
    return (
      <View style={styles.navigationMain}>
        <View style={styles.navigationButton}>
          <Button title={title} onPress={navigate} color="#9A7197" />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.navigationForm}>
      <View style={styles.navigationButton}>
        <Button title={title} onPress={navigate} color="#9A7197" />
      </View>
    </View>
  )
}

export default Navigation
