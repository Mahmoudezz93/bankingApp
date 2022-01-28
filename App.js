import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// React Navigation v6 // 
import AppContainer from "../bankingApp/Navigation/AppContainer"; 


export default function App() {
  return (
    < AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
