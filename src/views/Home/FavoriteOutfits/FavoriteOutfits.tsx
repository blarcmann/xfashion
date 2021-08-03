import React, { useState, useRef } from 'react'
import { Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Transitioning, Transition, TransitioningView } from 'react-native-reanimated';
import { Header, theme } from '../../../components'
import { Box } from '../../../components/Theme'
import { HomeNavigationProps } from '../../../Navigation'
import Footer from './Footer';
import OutfitCard from './OutfitCard';

const defaultOutfits = [
  { id: 1, color: '#fdffb6', aspectRatio: 160 / 135, selected: false, },
  { id: 2, color: '#d4d5d7', aspectRatio: 110 / 135, selected: false, },
  { id: 3, color: '#caffbf', aspectRatio: 150 / 135, selected: false, },
  { id: 4, color: '#caf0f8', aspectRatio: 110 / 135, selected: false, },
  { id: 5, color: '#80ffdb', aspectRatio: 190 / 135, selected: false, },
  { id: 6, color: '#70e000', aspectRatio: 160 / 135, selected: false, },
  { id: 7, color: '#bdb2ff', aspectRatio: 140 / 135, selected: false, },
  { id: 8, color: '#ff9e00', aspectRatio: 220 / 135, selected: false, },
  { id: 9, color: '#9d4edd', aspectRatio: 150 / 135, selected: false, },
  { id: 10, color: '#ffd6a5', aspectRatio: 170 / 135, selected: false, },
]

const { width: wWidth } = Dimensions.get('window');

const FavoriteOutfits = ({ navigation }: HomeNavigationProps<"FavoriteOutfits">) => {
  const transition = <Transition.Together>
    <Transition.Change interpolation="easeInOut" durationMs={300} />
  </Transition.Together>
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const [outfits, setOutfits] = useState(defaultOutfits);
  // const [selectedOutfits, setSelectedOutfits] = useState<typeof defaultOutfits>([]);
  const [footerHeight, setFooterHeight] = useState(0);
  const items = useRef<TransitioningView>(null);

  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Favorites"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'shopping-bag', onPress: () => true }}
      />
      <Box flex={1}>
        <ScrollView contentContainerStyle={{
          paddingHorizontal: theme.spacing.m,
          paddingTop: theme.spacing.l,
          paddingBottom: footerHeight,
        }}>
          <Transitioning.View
            ref={items}
            transition={transition}
          >

            <Box flexDirection="row">
              <Box marginRight="m">
                {outfits.filter(({ id }) => id % 2 !== 0).map((outfit) => (
                  <OutfitCard key={outfit.id} {... { outfit, width }} />
                ))}
              </Box>
              <Box>
                {outfits.filter(({ id }) => id % 2 === 0).map((outfit) => (
                  <OutfitCard
                    key={outfit.id}
                    {...{ outfit, width }}
                  />
                ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          onLayout={({
            nativeEvent: { layout: { height } } }) =>
            setFooterHeight(height)
          }>
          <Footer
            label="Add to favorites"
            onPress={() => {
              items.current?.animateNextTransition();
              setOutfits(outfits.filter(outfit => !outfit.selected))
            }} />
        </Box>
      </Box>
    </Box>
  )
}

export default FavoriteOutfits
