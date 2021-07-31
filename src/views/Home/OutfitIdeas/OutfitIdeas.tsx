import React from 'react'
import { Header } from '../../../components'
import { Box } from '../../../components/Theme'
import { HomeNavigationProps } from '../../../Navigation'
import Background from './Background';
import Card from './Card';

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <Box flex={1}>
        <Background />
        <Card position={1} />
        <Card position={0.5} />
        <Card position={0} />
      </Box>
    </Box>
  )
}

export default OutfitIdeas

