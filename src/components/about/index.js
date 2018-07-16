import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component<Props> {
  static navigationOptions = {
    title: 'ABOUT',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ABOUT PAGE</Text>
        <TouchableOpacity onPress={()=>{
          console.log(this.props.navigation);
          this.props.navigation.goBack();
        }}>
          <View>
            <Text>BACK</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
