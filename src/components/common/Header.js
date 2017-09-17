import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

const Header = ({ title }) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export { Header };
