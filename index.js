import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/componets/Header';
import AlbumList from './src/componets/AlbumList';

const App = () => (

  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
  
);

AppRegistry.registerComponent('albums', () => App);
