import { useEffect, useState } from 'react';

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState('');
  const [wasEmailInputTouched, setWasEmailInputTouched] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== '';
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  const isEnteredEmailValid = enteredEmail.includes('@');
  const isEmailInputInvalid = !isEnteredEmailValid && wasEmailInputTouched;

  // useEffect(() => {
  //   if (isEnteredNameValid) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // }, [isEnteredNameValid]);

  // OR

  let isFormValid = false;

  if (isEnteredNameValid && isEnteredEmailValid) {
    isFormValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputLostFocusHandler = (e) => {
    setWasNameInputTouched(true);
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const emailInputLostFocusHandler = (e) => {
    setWasEmailInputTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    setEnteredName('');
    setWasNameInputTouched(false);

    setEnteredEmail('');
    setWasEmailInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = isEmailInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Введите Имя</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputLostFocusHandler}
        />
        {isNameInputInvalid && <p className="error-text">Обязательное поле</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Введите email</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
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

export default SomeInput;
