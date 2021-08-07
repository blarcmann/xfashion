import React from 'react'
import { Header } from '../../../components'
import { Box, Text } from '../../../components/Theme'
import { HomeNavigationProps } from '../../../Navigation'

import Graph, { DataPoint } from './Graph';

const data: DataPoint[] = [
  { 
    date: new Date('2019-02-08').getTime(),
    color: "lightblue",
    value: 0,
    step: 0,
  },
  { 
    date: new Date('2019-05-01').getTime(),
    color: "green",
    value: 140,
    step: 0,
  },
  { 
    date: new Date('2019-09-14').getTime(),
    color: "orange",
    value: 223.7,
    step: 0,
  },
  { 
    date: new Date('2019-12-10').getTime(),
    color: "pink",
    value: 0,
    step: 0,
  },
  { 
    date: new Date('2020-01-31').getTime(),
    color: "secondary",
    value: 190.5,
    step: 0,
  },
  { 
    date: new Date('2020-07-14').getTime(),
    color: "violet",
    value: 101.9,
    step: 0,
  },
  { 
    date: new Date('2020-08-22').getTime(),
    color: "danger",
    value: 42.3,
    step: 0,
  },
];


const TransactionHistory = ({ navigation }: HomeNavigationProps<"TransactionHistory">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Header
        title="Transaction History"
        left={{ icon: 'menu', onPress: () => navigation.openDrawer() }}
        right={{ icon: 'share', onPress: () => true }}
      />

      <Box padding="m">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box>
            <Text variant="header" color="gray">Total Spent</Text>
            <Text variant="title" color="secondary">$76,444</Text>
          </Box>
          <Box backgroundColor="lightgreen" borderRadius="l" padding="s" paddingHorizontal="l">
            <Text color="green">All Time</Text>
          </Box>
        </Box>
        <Graph data={data} />
      </Box>
    </Box>
  )
}

export default TransactionHistory

