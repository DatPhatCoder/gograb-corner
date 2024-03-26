// CustomText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = (props) => {
  // Combine any styles that the CustomText is called with along with the default styles
  return <Text style={[styles.default, props.style]} {...props} />;
};

// Define your default styles for the component
const styles = StyleSheet.create({
  default: {
    fontFamily: 'Inter-Black', // Make sure this matches the name of the font file
    // You can define other default styles here as well
  },
});

export default CustomText;
