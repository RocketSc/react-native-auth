import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: 40
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600'
  }
};

const Button = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>
      {children}
    </Text>
  </TouchableOpacity>
);


Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
};

export { Button };
