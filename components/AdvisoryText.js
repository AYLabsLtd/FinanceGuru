import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdvisoryText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Advisory: The calculators provided are for illustration purposes only. 
        Actual values may vary based on market conditions and other factors. 
        Please consult with financial experts before making investment decisions.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
    marginTop: 'auto', // Pushes the component to the bottom
  },
  text: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    lineHeight: 18,
    maxWidth: 600, // Limits width on larger screens
  },
});

export default AdvisoryText; 