import  { useEffect } from 'react';
// import {
//   parseExpression,
//   cashOperandsFields,
//   cutAndHideFieldsValues,
//   changeValue,
//   calcValue,
// } from './helpers';

function parseExpression(expression) {
  // Повертаємо фіксовані дані для тестування
  return {
    str: expression,
    operands: [
      { str: 'a', type: 'number', value: 10 },
      { str: 'b', type: 'number', value: 5 },
    ],
    operators: ['+'],
  };
}

function cashOperandsFields(section, expression) {
  // Нічого не робимо зі сталими значеннями
}

function cutAndHideFieldsValues(expression) {
  // Нічого не робимо зі сталими значеннями
}

function changeValue(section, input, calcElement, value) {
  // Встановлюємо стале значення для тестування
  input.value = value;
}

function calcValue(expression) {
  // Повертаємо фіксоване значення для тестування
  return 15;
}

const InitializeCalculator = ({ sectionId, inputLid }) => {
  useEffect(() => {
    const initializeCalculator = () => {
      const section = document.querySelector(`#rec${sectionId}`);
      if (section) {
        const inputs = section.querySelectorAll(
          `[data-input-lid="${inputLid}"]`
        );
        inputs.forEach(input => {
          if (!input || input.getAttribute('data-init-calc')) return;

          let calcElement = input.querySelector('.t-calc');
          calcElement = calcElement || section.querySelector('.t-calc');
          const expression = calcElement.getAttribute('data-calc-expr');
          if (!expression)
            return console.log(
              `Error: formula field is empty in rec${sectionId}`
            );

          const parsedExpression = parseExpression(expression);
          cashOperandsFields(section, parsedExpression);
          cutAndHideFieldsValues(parsedExpression);
          if (parsedExpression.error === true)
            return console.log(
              `Please check math expression or input names (especially spaces) in rec${sectionId}`
            );

          const handleInputChange = () => {
            changeValue(
              section,
              input,
              calcElement,
              calcValue(parsedExpression)
            );
          };

          Array.prototype.forEach.call(
            section.querySelectorAll('.t-input'),
            input => {
              input.addEventListener('input', handleInputChange);
            }
          );

          inputs.forEach(input => {
            input.addEventListener('change', handleInputChange);
          });

          Array.prototype.forEach.call(
            section.querySelectorAll('.t-inputquantity__btn'),
            btn => {
              btn.addEventListener('click', handleInputChange);
            }
          );

          Array.prototype.forEach.call(
            section.querySelectorAll('.t-range'),
            range => {
              ['click', 'input', 'change'].forEach(event => {
                range.addEventListener(event, handleInputChange);
              });
            }
          );

          changeValue(section, input, calcElement, calcValue(parsedExpression));
          input.setAttribute('data-init-calc', 'y');
        });
      }
    };

    initializeCalculator();

    return () => {
      // Cleanup function if needed
    };
  }, [sectionId, inputLid]);

  return null; // Since this component is for side effects only
};

// Other helper functions

export default InitializeCalculator;
 