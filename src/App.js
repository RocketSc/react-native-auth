import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loading: false,
    loggedIn: false
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAujN6br2n9FACFyBYaHS3p_1sprbJwY7A',
      authDomain: 'auth-af6db.firebaseapp.com',
      databaseURL: 'https://auth-af6db.firebaseio.com',
      projectId: 'auth-af6db',
      storageBucket: 'auth-af6db.appspot.com',
      messagingSenderId: '689355407187'
    });

    this.setState({ loading: true });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loading: false,
          loggedIn: user
        });
      } else {
        this.setState({
          loading: false,
          loggedIn: false
        });
      }
    });
  }

  renderContent = () => {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    if (this.state.loggedIn) {
      return (
        <Button onPress={() => firebase.auth().signOut()}>
          Log out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header title="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
