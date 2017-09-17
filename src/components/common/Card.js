import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => (
  <View style={styles.containerStyle}>{children}</View>
);

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
