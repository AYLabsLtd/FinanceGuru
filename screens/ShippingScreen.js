import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const ShippingScreen = () => {
  const [senderAddress, setSenderAddress] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [shippingDate, setShippingDate] = useState('');
  const [weight, setWeight] = useState('');
  const [results, setResults] = useState([]);

  const checkShippingPrices = () => {
    // Simulated carrier responses
    const carriers = [
      { name: 'Canada Post', endpoint: 'https://api.canadapost.com/' },
      { name: 'FedEx', endpoint: 'https://api.fedex.com/' },
      { name: 'Purolator', endpoint: 'https://api.purolator.com/' },
      { name: 'UPS', endpoint: 'https://api.ups.com/' },
      { name: 'USPS', endpoint: 'https://api.usps.com/' },
    ];

    const simulatedResults = carriers.map(carrier => {
      const baseRate = 5 + (Math.random() * 5);
      const ratePerKg = 3 + (Math.random() * 2);
      const price = baseRate + (parseFloat(weight) * ratePerKg);
      const eta = Math.floor(Math.random() * 6) + 2;

      return {
        carrier: carrier.name,
        price: price.toFixed(2),
        eta: eta,
      };
    });

    setResults(simulatedResults);
  };

  const resetForm = () => {
    setSenderAddress('');
    setDestinationAddress('');
    setShippingDate('');
    setWeight('');
    setResults([]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <CustomInput
          label="Sender Address"
          value={senderAddress}
          onChangeText={setSenderAddress}
          placeholder="Enter sender's complete address"
          keyboardType="default"
        />

        <CustomInput
          label="Destination Address"
          value={destinationAddress}
          onChangeText={setDestinationAddress}
          placeholder="Enter destination address"
          keyboardType="default"
        />

        <CustomInput
          label="Shipping Date"
          value={shippingDate}
          onChangeText={setShippingDate}
          placeholder="YYYY-MM-DD"
          keyboardType="default"
        />

        <CustomInput
          label="Weight (kg)"
          value={weight}
          onChangeText={setWeight}
          placeholder="e.g. 2.5"
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Check Prices"
            onPress={checkShippingPrices}
            type="primary"
          />
          <CustomButton
            title="Reset"
            onPress={resetForm}
            type="reset"
          />
        </View>

        {results.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsTitle}>Available Shipping Options:</Text>
            {results.map((result, index) => (
              <View key={index} style={styles.resultItem}>
                <Text style={styles.carrierName}>{result.carrier}</Text>
                <View style={styles.resultDetails}>
                  <Text style={styles.price}>Price: ${result.price}</Text>
                  <Text style={styles.eta}>ETA: {result.eta} days</Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  content: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  resultsContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005a9c',
    marginBottom: 15,
  },
  resultItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
  },
  carrierName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  resultDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: '#2c7',
    fontWeight: '500',
  },
  eta: {
    color: '#666',
  },
});

export default ShippingScreen; 