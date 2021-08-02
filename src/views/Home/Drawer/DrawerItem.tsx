import React from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { RoundedIcon } from '../../../components'
import theme, { Box, Theme, Text } from '../../../components/Theme'
import { HomeRoutes } from '../../../Navigation'
import { DrawerNavigationProp } from '@react-navigation/drawer'


export interface DrawerItemProps {
  icon: string;
  color: keyof Theme['colors'];
  screen: keyof HomeRoutes;
  label: string;
}


const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
  const {navigate} = useNavigation<DrawerNavigationProp<HomeRoutes, 'OutfitIdeas'>>();
  return (
    <RectButton onPress={() => navigate(screen)} style={{ borderRadius: theme.borderRadii.m }}>
      <Box
        flexDirection="row"
        alignItems="center"
        padding="m"
      >
        <RoundedIcon
          iconRatio={0.4}
          name={icon}
          size={32}
          backgroundColor={color}
          color="white"
        />
        <Text
          variant="button"
          color="secondary"
          marginLeft="s"
        >{label}</Text>
      </Box>
    </RectButton>
  )
}

export default DrawerItem

// const Styles = StyleSheet.create({})
