import { useState } from 'react';

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const handleInputChange = (event) => {
		setEnteredValue(event.target.value);
	};

	const handleInputBlur = (event) => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError /**evaluated to hasError: hasError*/,
		handleInputChange,
		handleInputBlur,
		reset,
	};
};

export default useInput;
