import React from 'react'
import { StyleSheet } from 'react-native'
import theme, { Box, Text } from '../../../../components/Theme'
import { lerp } from './helpers';

const formatter = Intl.DateTimeFormat('en', { month: "short" });


interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

export const MARGIN = 'xl';


const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[ 1, 0.66, 0.33, 0 ].map((t) => {
          return (
            <Box key={t} flexDirection="row" alignItems="center">
              <Box width={theme.spacing[MARGIN]} >
                <Text color="darkgray" textAlign="right" paddingRight="s">
                  {Math.round(lerp(minY, maxY, t))}
                </Text>
              </Box>
              <Box flex={1} backgroundColor="gray" height={0.5} />
            </Box>
          )
        })}
      </Box>
      <Box marginLeft={MARGIN} height={theme.spacing[MARGIN]} flexDirection="row" alignItems="center">
        {dates.map((date, index) => (
          <Box width={step}>
            <Text key={index} color="darkgray" textAlign="center">
              {formatter.format(new Date(date))}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Underlay
