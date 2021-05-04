import { Button, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import styles from '../Styles'

const NoteForm = ({ navigation, onPress }) => {
  const [newText, setNewText] = useState('')

  const handleNoteChange = (input) => setNewText(input)

  return (
    <View style={styles.noteForm}>
      <TextInput
        placeholder="Write the note here"
        onChangeText={handleNoteChange}
      />
      <Button title="ADD NOTE" onPress={() => onPress(newText)} />
    </View>
  )
}

export default NoteForm
