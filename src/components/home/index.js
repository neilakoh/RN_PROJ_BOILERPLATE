import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default class App extends Component<Props> {
  static navigationOptions = {
    headerTitle: 'HOME',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HOME PAGE</Text>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.push('About')
        }}>
          <View>
            <Text>ABOUT</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('Modal1')
        }}>
          <View>
            <Text>MODAL1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          this.props.navigation.navigate('Modal2')
        }}>
          <View>
            <Text>MODAL2</Text>
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
