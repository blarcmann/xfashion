import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import RoundedIconButton from './RoundedIconButton'
import { Box, Text } from './Theme'

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  },
  right: {
    icon: string;
    onPress: () => void;
  },
  title: string;
  dark: boolean;
}

const Header = ({ left, right, title, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? 'white' : 'secondary';
  const backgroundColor = dark ? 'secondary' : 'dirtywhite';
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m"
      style={{ marginTop: insets.top }}
    >
      <RoundedIconButton
        name={left.icon}
        {...{ color, backgroundColor }}
        size={40}
        iconRatio={0.4}
        onPress={left.onPress}
      />
      <Text variant="header" {...{ color }}>{title}</Text>
      <RoundedIconButton
        name={right.icon}
        {...{ color, backgroundColor }}
        size={40}
        iconRatio={0.4}
        onPress={right.onPress}
      />
    </Box>
  )
}

Header.defaultProps = {
  dark: false,
}

export default Header

