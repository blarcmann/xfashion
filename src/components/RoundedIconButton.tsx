import React from 'react'
import { TouchableOpacity } from 'react-native'
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';


interface RoundedIconButtonProps extends RoundedIconProps {
  onPress?: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <TouchableOpacity {...{ onPress }}>
      <RoundedIcon {...props} />
    </TouchableOpacity>
  )
}

export default RoundedIconButton