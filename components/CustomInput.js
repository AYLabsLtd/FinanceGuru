import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'numeric',
  isSlider = false,
  minValue = 0,
  maxValue = 100,
  step = 1,
  disabled = false,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, disabled && styles.disabledInput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          editable={!disabled}
        />
        {isSlider && (
          <Slider
            style={styles.slider}
            value={Number(value) || 0}
            onValueChange={(val) => onChangeText(val.toString())}
            minimumValue={minValue}
            maximumValue={maxValue}
            step={step}
            minimumTrackTintColor="#005a9c"
            maximumTrackTintColor="#000000"
            disabled={disabled}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  disabledInput: {
    backgroundColor: '#f0f0f0',
    color: '#666',
  },
  slider: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
});

export default CustomInput; 