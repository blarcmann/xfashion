import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Text } from '../../../components'
import { Box } from '../../../components/Theme';

const OUTER_RADIUS = 34;
const INNER_RADIUS = 30;

interface CategoryProps {
  category: {
    id: string;
    color: string;
    title: string;
  }
}
const Category = ({ category: { color: backgroundColor, title } }: CategoryProps) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setSelected((prev) => !prev)}>
      <Box marginLeft="m" marginTop="s" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center">
          {selected && <View
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: OUTER_RADIUS,
              borderColor: backgroundColor,
              borderWidth: 1,
            }}
          />}
          <View style={{
            width: INNER_RADIUS * 2,
            height: INNER_RADIUS * 2,
            borderRadius: INNER_RADIUS,
            backgroundColor
          }} />
        </Box>
        <Text textAlign="center" marginTop="s">{title}</Text>
      </Box>
    </TouchableWithoutFeedback>
  )
}

export default Category