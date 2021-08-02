import React, { useState } from 'react'
import { BorderlessButton } from 'react-native-gesture-handler';
import { RoundedIcon } from '../../../components';
import { Box } from '../../../components/Theme'

interface OutfitCardProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number,
    selected: boolean;
  }
  width: number;
}


const OutfitCard = ({ outfit, width }: OutfitCardProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton onPress={() => {
      setSelected((prev) => !prev);
      outfit.selected = !outfit.selected
    }}>
      <Box
        borderRadius="s"
        marginBottom="m"
        alignItems="flex-end"
        paddingTop="s"
        style={{
          width,
          backgroundColor: outfit.color,
          height: width * outfit.aspectRatio
        }}>
        {selected && <RoundedIcon
          name="check"
          color="white"
          backgroundColor="green"
          size={24}
        />}
      </Box>
    </BorderlessButton>
  )
}

export default OutfitCard
