import React, { useState } from 'react'

import { Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const header = {
  headerStyle: {
    backgroundColor: '#000000',
  },
  headerTintColor: '#fff',
}

const App = () => {
  const [notes, setNotes] = useState([])

  const addNote = (input) => {
    const existingNote = notes.filter((note) => note === input)
    if (existingNote.length > 0) {
      Alert.alert('Warning!', 'Note already exists', [
        {
          text: 'OK',
          onPress: () => {
            return null
          },
        },
      ])
    } else if (input.length === 0) {
      Alert.alert('Warning!', 'Please input note', [
        {
          text: 'OK',
          onPress: () => {
            return null
          },
        },
      ])
    } else {
      setNotes(notes.concat(input))
    }
  }
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={header.headerStyle.backgroundColor}
        barStyle="light-content"
      />
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Notes"
      >
        <Stack.Screen name="Notes">
          {(props) => <NoteList {...props} notes={notes} />}
        </Stack.Screen>
        <Stack.Screen name="New note">
          {(props) => <NoteForm {...props} onPress={addNote} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
