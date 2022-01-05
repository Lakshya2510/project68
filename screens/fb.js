import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import facebook from '../assets/facebook.jpg';

export default class Facebook extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'lightblue', paddingTop: 50, paddingBottom: 120}}>
        <Image
          source={facebook}
          style={{ width: 280, height: 280, marginLeft: 25 }}
        />
        <Text
          style={{
            fontSize: 50,
            textDecorationLine: 'underline',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Facebook
        </Text>
      </View>
    );
  }
}
