import { ScrollView, Text, View } from 'react-native'

import Navigation from './Navigation'
import React from 'react'
import styles from '../Styles'

const NoteList = ({ navigation, notes }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.noteList} contentContainerStyle={styles.center}>
        {notes.map((note, index) => {
          return <Note key={index} name={note} />
        })}
      </ScrollView>

      <Navigation
        title="NEW NOTE"
        navigate={() => navigation.navigate('New note')}
      />
    </View>
  )
}

const Note = ({ name }) => {
  return <Text style={styles.noteList}>{name}</Text>
}

export default NoteList
