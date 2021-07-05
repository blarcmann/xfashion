import React from 'react'
// import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { RoundedIcon } from '../../../components'
import theme, { Box, Theme, Text } from '../../../components/Theme'


export interface DrawerItemProps {
  icon: string;
  color: keyof Theme['colors'];
  screen: string;
  label: string;
}


const DrawerItem = ({ icon, color, screen, label }: DrawerItemProps) => {
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
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
