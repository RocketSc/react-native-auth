import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

const styles = {
  error: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
};


class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail = () => {
    this.setState({
      error: 'Authentication failed.',
      loading: false
    });
  }

  emailChange = email => this.setState({ email });

  passwordChange = password => this.setState({ password });

  handleLogin = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  }

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.handleLogin}>Log in!</Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            placeholder="user@gmail.com"
            handler={this.emailChange}
            autoCapitalize="none"
            label="Email"
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            placeholder="password"
            handler={this.passwordChange}
            secureTextEntry
            label="Password"
          />
        </CardSection>

        <Text style={styles.error}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
