import React, { Component } from 'react';
import { Alert } from 'react-native';
import { FormInput } from 'react-native-elements';

export class ListEntryInput extends Component {

  state = {
    text: ''
  };

  onChangeText = (text) => this.setState({text});

  onSubmitEditing = () => {
    const {submitHandler} = this.props;

    submitHandler(this.state.text)

    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <FormInput
        placeholder={this.state.text}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
        value={this.state.text}
      />
    )
  }

}
