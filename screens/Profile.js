import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title='Home' onPress={() => navigation.navigate('Home')} />
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

export default Profile
