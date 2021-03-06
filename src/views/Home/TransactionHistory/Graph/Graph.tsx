import React from 'react'
import { Dimensions } from 'react-native'
import { theme } from '../../../../components';
import { Box, Theme } from '../../../../components/Theme';
import Underlay, {MARGIN} from './Underlay';
import { lerp } from './helpers';


const { width: wWidth } = Dimensions.get('window');
const aspectRatio = 195 / 305;

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme['colors'];
  step: number;
}

interface GraphProps {
  data: DataPoint[];
}

const Graph = ({ data }: GraphProps) => {
  const canvasWidth = wWidth - (theme.spacing.m * 2);
  const canvasHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvasHeight - theme.spacing[MARGIN];
  const values = data.map(p => p.value);
  const dates = data.map(p => p.date);
  const step = width / data.length;
  // const minX = Math.min(...dates);
  // const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);

  return (
    <Box marginTop="l" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay dates={dates} minY={minY} maxY={maxY} step={step} />
      <Box width={width} height={height}>
        {data.map((point, i) => {
          if (point.value === 0) {
            return null
          }
          return (
            <Box
              key={point.date}
              position="absolute"
              width={step}
              height={lerp(0, height, point.value / maxY)}
              left={i * step}
              bottom={0}
            >
              <Box
                position="absolute"
                top={0}
                bottom={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                backgroundColor={point.color}
                opacity={0.1}
                borderTopRightRadius="m"
                borderTopLeftRadius="m"
              />
              <Box
                position="absolute"
                top={0}
                left={theme.spacing.m}
                right={theme.spacing.m}
                height={32}
                backgroundColor={point.color}
                borderRadius="m"
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Graph
