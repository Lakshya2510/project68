import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import instagram from '../assets/instagram.png';

export default class Instagram extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'lightblue',
          paddingTop: 50,
          paddingBottom: 120,
        }}>
        <Image
          source={instagram}
          style={{ width: 280, height: 280, marginLeft: 25 }}
        />
        <Text
          style={{
            fontSize: 50,
            textDecorationLine: 'underline',
            textAlign: 'center',
            paddingTop: 10,
          }}>
          Instagram
        </Text>
      </View>
    );
  }
}
