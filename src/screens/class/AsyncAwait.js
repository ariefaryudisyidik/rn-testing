import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class AsyncAwait extends Component {
  state = {
    text: 'Text',
  };

  callFirstName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Arief');
      }, 1000);
    });
  };

  callLastName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Aryudi Syidik');
      }, 1000);
    });
  };

  onClick = async () => {
    const first = await this.callFirstName();
    const last = await this.callLastName();
    const name = `${first} ${last}`;
    this.setState({text: name});
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
