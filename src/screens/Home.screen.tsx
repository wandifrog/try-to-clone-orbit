import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import OText from '../components/OText'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <OText bottom={100}>asdasda</OText>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Click Me</Text>
      </TouchableOpacity>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda</OText>
      <OText bottom={100}>asdasda 3</OText>
    </ScrollView>
  )
}

export default HomeScreen
