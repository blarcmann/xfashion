import React from 'react'
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Theme, Text } from './Theme';


export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({ name, size, color, backgroundColor }: RoundedIconProps) => {
  const iconSize = size * 0.7;
  return (
    <Box
      alignItems="center"
      justifyContent='center'
      marginRight="s"
      height={size}
      width={size}
      {...{ backgroundColor }}
      style={{ borderRadius: size / 2 }}
    >
      <Text style={{ width: iconSize, height: iconSize}} color={color}>
        <Icon
          size={iconSize}
          {...{ name }}
        />
      </Text>
    </Box>
  )
}

export default RoundedIcon

