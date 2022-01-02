/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  LogBox
} from 'react-native';

import Colors from './src/utilities/constants/Colors'
import FontSize from './src/utilities/constants/FontSize'
import Styles from './src/utilities/constants/Styles'
import MainNavigator from './src/navigation/MainNavigator'
import axiosInstance from './src/api/APIConfig'

LogBox.ignoreAllLogs()
const App = () => {
  return (
    <>
        <MainNavigator />
    </>
  );

  // function tokenAPICall() {
  //   axiosInstance.get('/oauth/token')
  // }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.greenColor,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.greenColor,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.greenColor,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: FontSize.Font18,
    fontWeight: '400',
    color: Colors.greenColor,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.greenColor,
    fontSize: FontSize.Font12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
