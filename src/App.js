import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './componets/common';
import LoginForm from './componets/auth/LoginForm';

class App extends Component {
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAhdYfci0V59gy6PTRZyR5Wh_-zkUoyN2E',
            authDomain: 'auth-guilhermeestevao.firebaseapp.com',
            databaseURL: 'https://auth-guilhermeestevao.firebaseio.com',
            projectId: 'auth-guilhermeestevao',
            storageBucket: 'auth-guilhermeestevao.appspot.com',
            messagingSenderId: '447812785266'
        });
    }

    render() { 
        return (
            <View>
                <Header headerText="Authentication" /> 
              {/*  <LoginForm /> */}
            </View>
        );
    }
}

export default App;
