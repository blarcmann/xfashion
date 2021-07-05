import React from 'react'
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Theme, Text } from './Theme';


export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
  iconRatio: number;
}

const RoundedIcon = ({ name, size, color, backgroundColor, iconRatio }: RoundedIconProps) => {
  const iconSize = size * iconRatio;
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

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
}

export default RoundedIcon

