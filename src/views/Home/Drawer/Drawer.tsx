import React from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'
import { Box, Text } from '../../../components/Theme';
import DrawerItem, { DrawerItemProps } from './DrawerItem';
import { RoundedIconButton } from '../../../components';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';


const aspectRatio = 920 / 1600;
const { width } = Dimensions.get('window');
export const DRAWER_WIDTH = width * 0.88;
const height = DRAWER_WIDTH * aspectRatio;

const items: DrawerItemProps[] = [
  { icon: 'zap', label: 'Outfit Ideas', screen: 'OutfitIdeas', color: 'body' },
  { icon: 'heart', label: 'Favorite Outfits', screen: 'FavoriteOutfits', color: 'orange' },
  { icon: 'user', label: 'Edit Profile', screen: 'EditProfile', color: 'yellow' },
  { icon: 'clock', label: 'Transaction History', screen: 'TransactionHistory', color: 'pink' },
  { icon: 'settings', label: 'Notification Settings', screen: 'NotificationSettings', color: 'violet' },
  { icon: 'log-out', label: 'Logout', screen: 'Logout', color: 'secondary' },
]

const Drawer = () => {
  // const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box
        flex={0.15} backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal="m"
        style={{ paddingTop: 40 }}
      >
        <Box
          position="absolute" top={0} left={0} right={0} bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        />
        <RoundedIconButton
          name="x"
          color="white"
          backgroundColor="secondary"
          size={24}
          onPress={() => true}
        />
        <Text variant="body" color="white">MY PROFILE</Text>
        <RoundedIconButton
          name="shopping-bag"
          color="white"
          backgroundColor="secondary"
          size={24}
          onPress={() => true}
        />
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute" top={0} left={0} right={0} bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="xl"
        >
          <Box position="relative" top={-50} left={0} right={0} bottom={0}>
            <Box
              alignSelf="center"
              backgroundColor="green"
              width={100}
              height={100}
              style={{ borderRadius: 50 }}
            />
            <Box marginTop="m">
              <Text variant="title2" textAlign="center">Nina Cinderella</Text>
              <Text variant="body" textAlign="center">sennugatobiloba@yahoo.com</Text>
            </Box>
          </Box>
          {items.map(item => (
            <DrawerItem {...item} key={item.screen} />)
          )}
        </Box>
      </Box>
      <Box flex={0.15} width={DRAWER_WIDTH} height={height * 0.61}>
        <Image
          source={require('../../../components/assets/images/patterns/0.png')}
          style={Styles.patternBottom}
        />
      </Box>

    </Box>
  )
}

export default Drawer

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  patternBottom: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  }

})
