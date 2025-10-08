import useInput from '../hooks/use-input';

const SomeForm = (props) => {
  const isInputEmpty = (val) => val.trim() !== '';
  const isEmailValid = (val) => val.includes('@');

  const {
    value: enteredFirstNameValue,
    hasError: isFirstNameInputInvalid,
    isValid: isFirstNameValueValid,
    inputChangeHandler: firstNameInputChangeHandler,
    inputLostFocusHandler: firstNameInputLostFocusHandler,
    resetValues: firstNameResetValues
  } = useInput(isInputEmpty);

  const {
    value: enteredLastNameValue,
    hasError: isLastNameInputInvalid,
    isValid: isLastNameValueValid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputLostFocusHandler: lastNameInputLostFocusHandler,
    resetValues: lastNameResetValues
  } = useInput(isInputEmpty);

  const {
    value: enteredEmailValue,
    hasError: isEmailInputInvalid,
    isValid: isEmailValueValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: emailResetValues
  } = useInput(isEmailValid);

  let isFormValid = false;

  if (isFirstNameValueValid && isLastNameValueValid && isEmailValueValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(enteredFirstNameValue);
    console.log(enteredLastNameValue);
    console.log(enteredEmailValue);

    firstNameResetValues();
    lastNameResetValues();
    emailResetValues();
  };

  const firstNameInputClasses = isFirstNameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = isLastNameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = isEmailInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="first-name">Введите Имя</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstNameValue}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputLostFocusHandler}
          />
          {isFirstNameInputInvalid && (
            <p className="error-text">Обязательное поле</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="last-name">Введите Фамилию</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastNameValue}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputLostFocusHandler}
          />
          {isLastNameInputInvalid && (
            <p className="error-text">Обязательное поле</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите E-Mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmailValue}
          onChange={emailInputChangeHandler}
          onBlur={emailInputLostFocusHandler}
        />
        {isEmailInputInvalid && <p className="error-text">Обязательное поле</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeForm;
