import React from 'react'
import {Button, StyleSheet, TextInput, View, Alert} from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
    isFormValid: false,
  }
  

  handleNameChange = name => {
    this.setState({name})
  }

  handlePhoneChange = phone => {
    const numericRegex = /^([0-9]{1,100})*$/
    if(!numericRegex.test(phone)) {
      Alert.alert('Error', 'Please enter only numbers in this field')
    }
    else {
      this.setState({phone})
    }
    console.log(phone);
  }
  handleSubmit = ()=>{
    this.props.addContact(this.state)
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhoneChange}
          placeholder="Phone"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  }
}
