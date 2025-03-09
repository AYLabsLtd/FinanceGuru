import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ResultsDisplay from '../components/ResultsDisplay';
import AdvisoryText from '../components/AdvisoryText';

const SIPScreen = () => {
  // Lump Sum SIP States
  const [lumpsum, setLumpsum] = useState('');
  const [sipTerm, setSipTerm] = useState('');
  const [sipInterest, setSipInterest] = useState('');
  const [ltcgTax, setLtcgTax] = useState('');
  const [inflation, setInflation] = useState('');
  const [lumpsumResults, setLumpsumResults] = useState({});

  // Monthly SIP States
  const [monthlySIP, setMonthlySIP] = useState('');
  const [monthlyTerm, setMonthlyTerm] = useState('');
  const [monthlySipInterest, setMonthlySipInterest] = useState('');
  const [monthlyLtcgTax, setMonthlyLtcgTax] = useState('');
  const [monthlyInflation, setMonthlyInflation] = useState('');
  const [monthlyResults, setMonthlyResults] = useState({});

  const calculateLumpSumSIP = () => {
    const principal = parseFloat(lumpsum) || 0;
    const term = parseFloat(sipTerm) || 0;
    const interest = parseFloat(sipInterest) || 0;
    const tax = parseFloat(ltcgTax) || 0;
    const inf = parseFloat(inflation) || 0;

    const annualRate = interest / 100;
    const taxRate = tax / 100;
    const inflationRate = inf / 100;

    const valuationEnd = principal * Math.pow(1 + annualRate, term);
    const profit = valuationEnd - principal;
    const valueAfterTax = principal + (profit * (1 - taxRate));
    const actualProfit = valueAfterTax - principal;
    const cagr = (principal > 0 && term > 0)
      ? Math.pow(valuationEnd / principal, 1 / term) - 1
      : 0;

    const presentValue = valueAfterTax / Math.pow(1 + inflationRate, term);
    const realRate = ((1 + cagr) / (1 + inflationRate)) - 1;

    setLumpsumResults({
      'Principal Invested': principal,
      'Valuation at End': valuationEnd,
      'Profit': profit,
      'Value after Tax': valueAfterTax,
      'Actual Profit': actualProfit,
      'CAGR (%)': cagr * 100,
      'Present Value (Inflation adjusted)': presentValue,
      'Real Rate of Return (%)': realRate * 100,
    });
  };

  const calculateMonthlySIP = () => {
    const monthly = parseFloat(monthlySIP) || 0;
    const term = parseFloat(monthlyTerm) || 0;
    const interest = parseFloat(monthlySipInterest) || 0;
    const tax = parseFloat(monthlyLtcgTax) || 0;
    const inf = parseFloat(monthlyInflation) || 0;

    const annualRate = interest / 100;
    const monthlyRate = annualRate / 12;
    const taxRate = tax / 100;
    const inflationRate = inf / 100;
    const n = term * 12;

    const totalInvested = monthly * n;
    const valuationEnd = (monthlyRate > 0)
      ? monthly * ((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate)
      : totalInvested;

    const profit = valuationEnd - totalInvested;
    const valueAfterTax = totalInvested + (profit * (1 - taxRate));
    const actualProfit = valueAfterTax - totalInvested;

    const approximateYears = term - 0.5;
    const cagr = (approximateYears > 0 && totalInvested > 0)
      ? Math.pow(valueAfterTax / (totalInvested / 2), 1 / approximateYears) - 1
      : 0;

    const presentValue = valueAfterTax / Math.pow(1 + inflationRate, term);
    const realRate = ((1 + cagr) / (1 + inflationRate)) - 1;

    setMonthlyResults({
      'Total Money Invested': totalInvested,
      'Valuation at End': valuationEnd,
      'Profit': profit,
      'Value after Tax': valueAfterTax,
      'Actual Profit': actualProfit,
      'Approx. CAGR (%)': cagr * 100,
      'Present Value (Inflation adjusted)': presentValue,
      'Real Rate of Return (%)': realRate * 100,
    });
  };

  const resetLumpSum = () => {
    setLumpsum('');
    setSipTerm('');
    setSipInterest('');
    setLtcgTax('');
    setInflation('');
    setLumpsumResults({});
  };

  const resetMonthly = () => {
    setMonthlySIP('');
    setMonthlyTerm('');
    setMonthlySipInterest('');
    setMonthlyLtcgTax('');
    setMonthlyInflation('');
    setMonthlyResults({});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Lump Sum SIP Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lump Sum SIP Calculator</Text>
          
          <CustomInput
            label="Lump Sum Amount"
            value={lumpsum}
            onChangeText={setLumpsum}
            placeholder="e.g. $100,000"
          />

          <CustomInput
            label="Investment Period (Years)"
            value={sipTerm}
            onChangeText={setSipTerm}
            placeholder="e.g. 5"
            isSlider={true}
            minValue={1}
            maxValue={30}
            step={1}
          />

          <CustomInput
            label="Expected Return Rate (%)"
            value={sipInterest}
            onChangeText={setSipInterest}
            placeholder="e.g. 12"
            isSlider={true}
            minValue={0}
            maxValue={30}
            step={0.1}
          />

          <CustomInput
            label="LTCG Tax Rate (%)"
            value={ltcgTax}
            onChangeText={setLtcgTax}
            placeholder="e.g. 10"
            isSlider={true}
            minValue={0}
            maxValue={30}
            step={0.1}
          />

          <CustomInput
            label="Expected Inflation Rate (%)"
            value={inflation}
            onChangeText={setInflation}
            placeholder="e.g. 5"
            isSlider={true}
            minValue={0}
            maxValue={15}
            step={0.1}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Calculate"
              onPress={calculateLumpSumSIP}
              type="primary"
            />
            <CustomButton
              title="Reset"
              onPress={resetLumpSum}
              type="reset"
            />
          </View>

          <ResultsDisplay results={lumpsumResults} />
        </View>

        {/* Monthly SIP Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly SIP Calculator</Text>
          
          <CustomInput
            label="Monthly Investment"
            value={monthlySIP}
            onChangeText={setMonthlySIP}
            placeholder="e.g. $10,000"
          />

          <CustomInput
            label="Investment Period (Years)"
            value={monthlyTerm}
            onChangeText={setMonthlyTerm}
            placeholder="e.g. 5"
            isSlider={true}
            minValue={1}
            maxValue={30}
            step={1}
          />

          <CustomInput
            label="Expected Return Rate (%)"
            value={monthlySipInterest}
            onChangeText={setMonthlySipInterest}
            placeholder="e.g. 12"
            isSlider={true}
            minValue={0}
            maxValue={30}
            step={0.1}
          />

          <CustomInput
            label="LTCG Tax Rate (%)"
            value={monthlyLtcgTax}
            onChangeText={setMonthlyLtcgTax}
            placeholder="e.g. 10"
            isSlider={true}
            minValue={0}
            maxValue={30}
            step={0.1}
          />

          <CustomInput
            label="Expected Inflation Rate (%)"
            value={monthlyInflation}
            onChangeText={setMonthlyInflation}
            placeholder="e.g. 5"
            isSlider={true}
            minValue={0}
            maxValue={15}
            step={0.1}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Calculate"
              onPress={calculateMonthlySIP}
              type="primary"
            />
            <CustomButton
              title="Reset"
              onPress={resetMonthly}
              type="reset"
            />
          </View>

          <ResultsDisplay results={monthlyResults} />
        </View>

        {/* Advisory at the end of content */}
        <View style={styles.advisoryContainer}>
          <AdvisoryText />
        </View>
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
  section: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005a9c',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  advisoryContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
});

export default SIPScreen; 