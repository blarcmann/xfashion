import React from 'react'
import { Header } from '../../../components'
import { Box } from '../../../components/Theme'
import { HomeNavigationProps } from '../../../Navigation'

// interface OutfitIdeasProps {

// }

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Outfit Ideas"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
    </Box>
  )
}

export default OutfitIdeas

