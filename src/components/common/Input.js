import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  label: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const Input = (props) => {
  const {
    label,
    value,
    handler,
    placeholder,
    secureTextEntry,
    autoCapitalize
  } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        value={value}
        placeholder={placeholder}
        onChangeText={handler}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};


Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handler: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCapitalize: PropTypes.string
};

Input.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  autoCapitalize: 'sentences'
};

export { Input };
