import React from 'react'

const Header = ({ phonebook }) => {
  return <h1>{phonebook.name}</h1>
}

const Entry = ({ contact }) => {
  return (
    <tr>
      <td style={{ paddingRight: '100px' }}>Name: {contact.name}</td>

      <td>Number: {contact.phonenumber}</td>
    </tr>
  )
}
const Contacts = ({ phonebook }) => {
  return (
    <table>
      <tbody>
        {phonebook.contacts.map((contact) => (
          <Entry key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  )
}

const Phonebook = ({ phonebook }) => {
  return (
    <div>
      <Header phonebook={phonebook} />
      <Contacts phonebook={phonebook} />
    </div>
  )
}

export default Phonebook
