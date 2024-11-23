import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Profile from './screens/Profile'

const StackNavigator = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name='Home' component={Home} />
        <StackNavigator.Screen name='Profile' component={Profile} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default App
