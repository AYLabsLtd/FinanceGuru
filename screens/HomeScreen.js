import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AdvisoryText from '../components/AdvisoryText';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to FinanceGuru</Text>
        <Text style={styles.description}>
          Your comprehensive financial planning companion that helps you make informed decisions about loans, investments, and financial goals.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mortgage Calculator</Text>
          <Text style={styles.sectionText}>
            Plan your home loan effectively by calculating EMI, total interest, and more. Input your desired house cost, down payment, interest rate, and loan term to get detailed insights.
          </Text>
          <Text style={styles.example}>
            Example:{'\n'}
            • House Cost: $500,000{'\n'}
            • Down Payment: 20% ($100,000){'\n'}
            • Interest Rate: 8.5% p.a.{'\n'}
            • Loan Term: 20 years{'\n'}
            Results show your monthly EMI, total interest paid, and complete payment schedule.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SIP Calculator</Text>
          <Text style={styles.sectionText}>
            Two powerful calculators in one: Lump Sum and Monthly SIP. Calculate returns on your investments while considering tax implications and inflation adjustment.
          </Text>
          <Text style={styles.subTitle}>Lump Sum Investment</Text>
          <Text style={styles.example}>
            Example:{'\n'}
            • Investment Amount: $100,000{'\n'}
            • Time Period: 10 years{'\n'}
            • Expected Return: 12% p.a.{'\n'}
            • LTCG Tax: 10%{'\n'}
            See your expected returns, post-tax value, and inflation-adjusted growth.
          </Text>
          <Text style={styles.subTitle}>Monthly SIP</Text>
          <Text style={styles.example}>
            Example:{'\n'}
            • Monthly Investment: $10,000{'\n'}
            • Time Period: 15 years{'\n'}
            • Expected Return: 12% p.a.{'\n'}
            • LTCG Tax: 10%{'\n'}
            Calculate your wealth accumulation, actual returns, and real rate of return.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Car Loan Calculator</Text>
          <Text style={styles.sectionText}>
            Make smart decisions about your vehicle financing by understanding the complete cost breakdown, including EMI and total interest payable.
          </Text>
          <Text style={styles.example}>
            Example:{'\n'}
            • Car Cost: $12,000{'\n'}
            • Down Payment: 25% ($3,000){'\n'}
            • Interest Rate: 7.5% p.a.{'\n'}
            • Loan Term: 5 years{'\n'}
            Get insights into monthly payments, total interest, and overall cost.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <Text style={styles.bulletPoint}>• Real-time calculations with instant results</Text>
          <Text style={styles.bulletPoint}>• Consideration of taxes and inflation impacts</Text>
          <Text style={styles.bulletPoint}>• Detailed breakdown of all components</Text>
          <Text style={styles.bulletPoint}>• User-friendly sliders for easy input adjustment</Text>
          <Text style={styles.bulletPoint}>• Comprehensive result analysis</Text>
        </View>

        <AdvisoryText />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#005a9c',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    marginBottom: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#005a9c',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#444',
    marginBottom: 15,
    lineHeight: 22,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginTop: 15,
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    lineHeight: 20,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
    paddingLeft: 15,
    lineHeight: 22,
  },
});

export default HomeScreen; 