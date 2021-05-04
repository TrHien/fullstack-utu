import { Alert, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'

import NoteForm from './NoteForm'
import styles from '../Styles'

const NoteList = () => {
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
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.noteList}>
        {notes.map((note, index) => {
          return <Note key={index} name={note} />
        })}
      </ScrollView>

      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <NoteForm onPress={addNote} />
      </View>
    </View>
  )
}

const Note = ({ name }) => {
  return <Text style={styles.noteList}>{name}</Text>
}

export default NoteList
