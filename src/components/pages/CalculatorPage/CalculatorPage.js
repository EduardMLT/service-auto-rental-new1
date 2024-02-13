import React from 'react';
import InitializeCalculator from './InitializeCalculator';

const CalculatorPage = () => {
    return (
     
    <div>      
      {/* Передача значень sectionId і inputLid */}
      <InitializeCalculator sectionId="123" inputLid="456" />
      {/* Інші елементи вашої сторінки */}
    </div>
  );
};

export default CalculatorPage;
