import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Header } from './src/componets/common';
import AlbumList from './src/componets/album/AlbumList';
import App from './src/App';

/*
const AppAlbum = () => (

  <View style={{ flex: 1 }}>
    <Header headerText="Albums!" />
    <AlbumList />
  </View>
  
);
*/

AppRegistry.registerComponent('albums', () => App);
