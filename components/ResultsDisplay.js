import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ResultsDisplay = ({ results }) => {
  if (!results || Object.keys(results).length === 0) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {Object.entries(results).map(([key, value], index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{key}:</Text>
          <Text style={styles.value}>
            {typeof value === 'number' ? value.toFixed(2) : value}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fafafa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2c7',
    textAlign: 'right',
    flex: 1,
  },
});

export default ResultsDisplay; 