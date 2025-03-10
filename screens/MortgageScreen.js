import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ResultsDisplay from '../components/ResultsDisplay';
import AdvisoryText from '../components/AdvisoryText';

const MortgageScreen = () => {
  const [moneyAtHand, setMoneyAtHand] = useState('');
  const [downPaymentOptional, setDownPaymentOptional] = useState('');
  const [houseCost, setHouseCost] = useState('');
  const [housePct, setHousePct] = useState('');
  const [annualInterest, setAnnualInterest] = useState('');
  const [amortYears, setAmortYears] = useState('');
  const [results, setResults] = useState({});

  const calculateMortgage = () => {
    const hCost = parseFloat(houseCost) || 0;
    const hPct = parseFloat(housePct) || 0;
    const aInterest = parseFloat(annualInterest) || 0;
    const years = parseFloat(amortYears) || 0;
    const moneyForDownPayment = parseFloat(downPaymentOptional) || 0;

    // Use manual down payment if provided; otherwise use the percentage
    let downPayment = moneyForDownPayment > 0
      ? moneyForDownPayment
      : hCost * (hPct / 100);

    const loanAmount = hCost - downPayment;
    const monthlyInterest = aInterest / 100 / 12;
    const totalMonths = years * 12;
    let monthlyMortgage = 0;

    if (monthlyInterest > 0) {
      monthlyMortgage = loanAmount * 
        (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
        (Math.pow(1 + monthlyInterest, totalMonths) - 1);
    } else {
      monthlyMortgage = loanAmount / totalMonths;
    }

    const overallMortgage = monthlyMortgage * totalMonths;
    const overpaid = overallMortgage - loanAmount;
    const overpaidByMonth = overpaid / totalMonths;

    setResults({
      'Down Payment': downPayment,
      'Loan Amount': loanAmount,
      'Monthly Mortgage': monthlyMortgage,
      'Overall Mortgage': overallMortgage,
      'Total Interest (Overpaid)': overpaid,
      'Interest per Month': overpaidByMonth,
    });
  };

  const resetForm = () => {
    setMoneyAtHand('');
    setDownPaymentOptional('');
    setHouseCost('');
    setHousePct('');
    setAnnualInterest('');
    setAmortYears('');
    setResults({});
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <CustomInput
            label="Money at Hand"
            value={moneyAtHand}
            onChangeText={setMoneyAtHand}
            placeholder="e.g. $100,000"
          />

          <CustomInput
            label="Money for Down Payment"
            value={downPaymentOptional}
            onChangeText={setDownPaymentOptional}
            placeholder="e.g. $20,000"
          />

          <CustomInput
            label="House Cost"
            value={houseCost}
            onChangeText={setHouseCost}
            placeholder="e.g. $500,000"
          />

          <CustomInput
            label="Down Payment %"
            value={housePct}
            onChangeText={setHousePct}
            placeholder="e.g. 20"
            isSlider={true}
            minValue={0}
            maxValue={100}
            step={0.1}
            disabled={downPaymentOptional !== ''}
          />

          <CustomInput
            label="Interest Rate (Annual %)"
            value={annualInterest}
            onChangeText={setAnnualInterest}
            placeholder="e.g. 7.5"
            isSlider={true}
            minValue={0}
            maxValue={20}
            step={0.1}
          />

          <CustomInput
            label="Amortization Period (Years)"
            value={amortYears}
            onChangeText={setAmortYears}
            placeholder="e.g. 20"
            isSlider={true}
            minValue={1}
            maxValue={30}
            step={1}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Calculate Mortgage"
              onPress={calculateMortgage}
              type="primary"
            />
            <CustomButton
              title="Reset"
              onPress={resetForm}
              type="reset"
            />
          </View>

          <ResultsDisplay results={results} />
        </View>
      </ScrollView>
      <AdvisoryText />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default MortgageScreen; 