import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  spinner: {
    flex: 1,
    justifyContent: 'center'
  }
};

const Spinner = ({ size }) => (
  <View style={styles.spinner}>
    <ActivityIndicator size={size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string
};

Spinner.defaultProps = {
  size: 'large'
};

export { Spinner };
