import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface WelcomeProps {
  rice: String;
}

const Welcome = ({ rice }: WelcomeProps) => {
  return (
    <View style={Styles.container}>
      <Text></Text>
    </View>
  )
}

export default Welcome

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
