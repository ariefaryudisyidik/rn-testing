import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class PromiseScreen extends Component {
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

  callLastName = first => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${first} Aryudi Syidik`);
      }, 1000);
    });
  };

  onClick = () => {
    this.callFirstName()
      .then(firstResult => {
        return this.callLastName(firstResult);
      })
      .then(lastResult => {
        this.setState({text: lastResult});
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
