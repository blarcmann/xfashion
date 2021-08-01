import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import Category from './Category';

const categories = [
  {
    id: 'new',
    title: 'New In',
    color: '#FFE8E9'
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#F1E0FF'
  },
  {
    id: 'activewear',
    title: 'Active Wear',
    color: '#BEECC4'
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#BFEAF5'
  },
  {
    id: 'accessories',
    title: 'Accesories',
    color: '#FFDDAE'
  },
]
const Categories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <Category key={category.id} {...{ category }} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories
