import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './componets/common';
import LoginForm from './componets/auth/LoginForm';
import AlbumList from './componets/album/AlbumList';

class App extends Component {
    
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAhdYfci0V59gy6PTRZyR5Wh_-zkUoyN2E',
            authDomain: 'auth-guilhermeestevao.firebaseapp.com',
            databaseURL: 'https://auth-guilhermeestevao.firebaseio.com',
            projectId: 'auth-guilhermeestevao',
            storageBucket: 'auth-guilhermeestevao.appspot.com',
            messagingSenderId: '447812785266'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View >
                        <Button onPress={this.signOut}>Log out</Button>
                    </View>
                );
            case false:
                return (
                    <LoginForm />
                );
            default: 
                return <Spinner size="large" />;
        } 
    }

    render() { 
        return (
            <View>
                <Header headerText="Authentication" /> 
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
