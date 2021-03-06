/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

import Device from 'react-native-device';
console.dir(Device);

var MCDevice = React.NativeModules.MCDevice;
console.dir(MCDevice)

var example = React.createClass({
  componentDidRender: function() {
    React.DeviceEventEmitter.addListener('orientationchange', () => {
      console.log('orientationchange');
      MCDevice.info(function(o) {
        console.dir(o);
      });  
    });

    React.DeviceEventEmitter.addListener('suspend', () => { console.log('suspend')});
    React.DeviceEventEmitter.addListener('resume', () => { console.log('resume')});
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
