import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// interface OutfitIdeasProps {

// }

const OutfitIdeas = () => {
  return (
    <View style={Styles.container}>
      <Text>Declan Rice</Text>
    </View>
  )
}

export default OutfitIdeas

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  }
})
