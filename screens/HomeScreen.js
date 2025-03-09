import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Finance Guru</Text>
        
        <Text style={styles.paragraph}>
          This app is designed to help you explore various aspects of financial planning. 
          Whether you're looking to estimate your mortgage payments or project future 
          investment returns, we aim to provide simple yet illustrative tools that can 
          make the process clearer.
        </Text>

        <Text style={styles.paragraph}>
          The Mortgage Calculator tab provides a suite of calculators covering mortgage 
          and housing costs. These tools allow you to input parameters like annual 
          interest rates, down payment amounts, and see how changes affect your overall 
          financial picture.
        </Text>

        <Text style={styles.paragraph}>
          The SIP (Systematic Investment Plan) tab helps you calculate and plan your 
          investments. Input parameters like investment amount, duration, and expected 
          returns to see projected outcomes.
        </Text>

        <Text style={styles.paragraph}>
          The Car Loan Calculator helps you estimate car loan payments and total costs 
          based on factors like down payment, interest rate, and loan term.
        </Text>

        <Text style={styles.paragraph}>
          The Shipping tab provides a one-stop shop for all your shipping needs across 
          popular service providers. Compare prices by entering sender and receiver 
          addresses, shipping date, and parcel weight.
        </Text>

        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerTitle}>Advisory Note:</Text>
          <Text style={styles.disclaimerText}>
            This app is for testing purposes only and should not be used for actual, 
            real-life financial decisions. The results are purely illustrative and may 
            not account for all factors relevant to your personal financial situation.
          </Text>
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005a9c',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 15,
  },
  disclaimer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  disclaimerText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default HomeScreen; 