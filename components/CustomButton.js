import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  title,
  onPress,
  type = 'primary', // primary, secondary, or reset
  disabled = false,
}) => {
  const buttonStyle = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
    reset: styles.resetButton,
  }[type];

  const textStyle = {
    primary: styles.primaryText,
    secondary: styles.secondaryText,
    reset: styles.resetText,
  }[type];

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  primaryButton: {
    backgroundColor: '#29a',
  },
  secondaryButton: {
    backgroundColor: '#005a9c',
  },
  resetButton: {
    backgroundColor: '#e77',
  },
  disabledButton: {
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#fff',
  },
  secondaryText: {
    color: '#fff',
  },
  resetText: {
    color: '#fff',
  },
});

export default CustomButton; 