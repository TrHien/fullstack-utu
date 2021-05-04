import { Button, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import Navigation from './Navigation'
import styles from '../Styles'

const NoteForm = ({ navigation, onPress }) => {
  const [newText, setNewText] = useState('')

  const handleNoteChange = (input) => setNewText(input)

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.noteForm}>
        <TextInput
          placeholder="Write the note here"
          onChangeText={handleNoteChange}
          multiline={true}
          style={styles.noteForm}
        />

        <View style={styles.navigationButton}>
          <Button title="ADD NOTE" onPress={() => onPress(newText)} />
        </View>

        <Navigation
          title="BACK"
          navigate={() => navigation.navigate('Notes')}
        />
      </View>
    </View>
  )
}

export default NoteForm
