import { NavigationContainer } from '@react-navigation/native'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import React from 'react'
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
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={header.headerStyle.backgroundColor}
        barStyle="light-content"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Notes"
          component={NoteList}
          options={{ title: 'Notes' }}
        />
        <Stack.Screen
          name="AddNote"
          component={NoteForm}
          options={{ title: 'New note' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
