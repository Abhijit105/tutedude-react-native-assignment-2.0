import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title='Details' onPress={() => navigation.navigate('Profile')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
