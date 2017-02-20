/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// var formatTime = require('minutes-seconds-milsiseconds');
// import Moment from 'moment';

// import formatTime from 'minutes-seconds-milliseconds';
import MyScene from './MyScene';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  style,
  TouchableHighlight,
  timeElapsed,
  setInterval,
  NavigatorIOS
} from 'react-native';


var WatchApp = React.createClass({

  getInitialState: function(){
    return{
      timeElapsed: null
    }
  },
  render: function(){
    return (

       <View style = {styles.container}>

      <NavigatorIOS
      initialRoute={{
        component: MyScene,
        title: 'Watch App',
        passProps: { myProp: 'foo' },
      }}
    />

          
            <View style ={styles.header}>
              <View style = {styles.timerWraper}>
                <Text style ={styles.timer}>
                    {this.state.timeElapsed}
                </Text>
              </View>

              <View style ={styles.buttonWraper}>
                  {this.startStopButton()}
                  {this.labButton()}
              </View>
            </View>
              <View style = {styles.footer}>
                  <Text>
                    Lis of Lab
                  </Text>
              </View>
        </View>
     
    )
  },
  startStopButton: function(){
    return (
      <TouchableHighlight 
        style = {styles.button}
        underlayColor="gray"
        onPress={this.handleStartPress}
        >
        <Text>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    )
  },
  labButton: function(){
    return(
         <TouchableHighlight 
        style = {[styles.button, styles.lab]}
        underlayColor="gray"
        onPress={this.handleStartPress}
        >
          <Text>
            Lab
          </Text>
        </TouchableHighlight>
    )
  },
  handleStartPress: function(){
    
    alert("hello");
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWraper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWraper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  timer: {
    fontSize: 60
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lab: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  test: {
    borderWidth: 4,
    borderColor: '#dddddd',
    backgroundColor: '#333333',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 30
  }
});


AppRegistry.registerComponent('WatchApp', () => WatchApp);
