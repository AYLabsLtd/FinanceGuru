import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import ResultsDisplay from '../components/ResultsDisplay';

const CarLoanScreen = () => {
  const [moneyAtHand, setMoneyAtHand] = useState('');
  const [downPaymentForCar, setDownPaymentForCar] = useState('');
  const [carCost, setCarCost] = useState('');
  const [carDownPayment, setCarDownPayment] = useState('');
  const [carInterest, setCarInterest] = useState('');
  const [carLoanTerm, setCarLoanTerm] = useState('');
  const [results, setResults] = useState({});

  const calculateCarLoan = () => {
    const cost = parseFloat(carCost) || 0;
    const downPayment = parseFloat(carDownPayment) || 0;
    const interest = parseFloat(carInterest) || 0;
    const term = parseFloat(carLoanTerm) || 0;

    const loanAmount = cost - downPayment;
    const monthlyInterest = interest / 100 / 12;
    const totalMonths = term * 12;
    let monthlyPayment = 0;

    if (monthlyInterest > 0) {
      monthlyPayment = loanAmount * 
        (monthlyInterest * Math.pow(1 + monthlyInterest, totalMonths)) /
        (Math.pow(1 + monthlyInterest, totalMonths) - 1);
    } else {
      monthlyPayment = loanAmount / totalMonths;
    }

    const overallPayment = monthlyPayment * totalMonths;
    const totalInterest = overallPayment - loanAmount;
    const interestPerMonth = totalInterest / totalMonths;

    setResults({
      'Down Payment': downPayment,
      'Loan Amount': loanAmount,
      'Monthly Payment': monthlyPayment,
      'Overall Payment': overallPayment,
      'Total Interest': totalInterest,
      'Interest per Month': interestPerMonth,
    });
  };

  const resetForm = () => {
    setMoneyAtHand('');
    setDownPaymentForCar('');
    setCarCost('');
    setCarDownPayment('');
    setCarInterest('');
    setCarLoanTerm('');
    setResults({});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <CustomInput
          label="Money at Hand"
          value={moneyAtHand}
          onChangeText={setMoneyAtHand}
          placeholder="e.g. 100000"
        />

        <CustomInput
          label="Down Payment for Car"
          value={downPaymentForCar}
          onChangeText={setDownPaymentForCar}
          placeholder="e.g. 50000"
        />

        <CustomInput
          label="Car Cost"
          value={carCost}
          onChangeText={setCarCost}
          placeholder="e.g. 300000"
        />

        <CustomInput
          label="Down Payment"
          value={carDownPayment}
          onChangeText={setCarDownPayment}
          placeholder="e.g. 50000"
          disabled={downPaymentForCar !== ''}
        />

        <CustomInput
          label="Interest Rate (Annual %)"
          value={carInterest}
          onChangeText={setCarInterest}
          placeholder="e.g. 7.5"
          isSlider={true}
          minValue={0}
          maxValue={20}
          step={0.1}
        />

        <CustomInput
          label="Loan Period (Years)"
          value={carLoanTerm}
          onChangeText={setCarLoanTerm}
          placeholder="e.g. 5"
          isSlider={true}
          minValue={1}
          maxValue={8}
          step={1}
        />

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Calculate Car Loan"
            onPress={calculateCarLoan}
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
  },
});

export default CarLoanScreen; 