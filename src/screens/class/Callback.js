import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class Callback extends Component {
  state = {
    text: 'Text',
  };

  callFirstName = callback => {
    setTimeout(() => {
      callback('Arief');
    }, 1000);
  };

  callLastName = callback => {
    setTimeout(() => {
      callback('Aryudi Syidik');
    }, 1000);
  };

  onClick = () => {
    this.callFirstName(firstResult => {
      this.callLastName(lastResult => {
        const first = firstResult;
        const last = lastResult;
        const name = `${first} ${last}`;
        this.setState({text: name});
      });
    });
  };

  render() {
    const {text} = this.state;
    const {onClick} = this;

    return (
      <View style={styles.container}>
        <Button title="Click" onPress={onClick} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});
