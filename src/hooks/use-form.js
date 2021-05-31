import { useState } from 'react';

const useForm = (checkValidity) => {
    const [isTouched, setIsTouched] = useState(false);
    const [enteredValue, setEnteredValue] = useState('');

    const valueIsValid = checkValidity(enteredValue);

    const hasError = isTouched && !valueIsValid;

    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const onBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setIsTouched(false);
        setEnteredValue('');
    }

    return {
        value: enteredValue,
        hasError,
        valueChangedHandler,
        onBlurHandler,
        reset,
        isValid: valueIsValid
    }
}

export default useForm;