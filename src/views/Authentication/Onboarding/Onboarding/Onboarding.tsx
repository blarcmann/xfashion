import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Onboarding() {
  return (
    <View style={Styles.container}>
      <Text>Rico</Text>
    </View>
  )
}


const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
})
