import { useReducer } from 'react';

const initialState = {
  inputValue: '',
  wasTouched: false
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT_CHANGE') {
    return {
      inputValue: action.value,
      wasTouched: state.wasTouched
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      inputValue: state.inputValue,
      wasTouched: true
    };
  }
  if (action.type === 'RESET') {
    return {
      inputValue: '',
      wasTouched: false
    };
  }

  return initialState;
};

const useInput = (validateValueFunc) => {
  const [inputState, dispatchAction] = useReducer(
    inputStateReducer,
    initialState
  );

  // const [enteredValue, setEnteredValue] = useState('');
  // const [wasInputTouched, setWasInputTouched] = useState(false);

  const isValueValid = validateValueFunc(inputState.inputValue);
  const isInputInvalid = !isValueValid && inputState.wasTouched;

  const inputChangeHandler = (e) => {
    dispatchAction({ type: 'INPUT_CHANGE', value: e.target.value });
    // setEnteredValue(e.target.value);
  };

  const inputLostFocusHandler = () => {
    dispatchAction({ type: 'INPUT_BLUR' });
    // setWasInputTouched(true);
  };

  const resetValues = () => {
    dispatchAction({ type: 'RESET' });
    // setEnteredValue('');
    // setWasInputTouched(false);
  };

  return {
    value: inputState.inputValue,
    hasError: isInputInvalid,
    isValid: isValueValid,
    inputChangeHandler,
    inputLostFocusHandler,
    resetValues
  };
};
export default useInput;
