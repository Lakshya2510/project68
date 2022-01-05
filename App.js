import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Instagram from './screens/in';
import Facebook from './screens/fb';


export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FACEBOOK: { screen: Facebook },
  INSTAGRAM: { screen: Instagram },
});

const AppContainer = createAppContainer(TabNavigator);
