import { useEffect, useState } from 'react';

const SomeInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [wasNameInputTouched, setWasNameInputTouched] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);

  const isEnteredNameValid = enteredName.trim() !== '';
  const isNameInputInvalid = !isEnteredNameValid && wasNameInputTouched;

  // useEffect(() => {
  //   if (isEnteredNameValid) {
  //     setIsFormValid(true);
  //   } else {
  //     setIsFormValid(false);
  //   }
  // }, [isEnteredNameValid]);

  // OR

  let isFormValid = false;

  if (isEnteredNameValid) {
    isFormValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputLostFocusHandler = (e) => {
    setWasNameInputTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setWasNameInputTouched(true);

    if (!isEnteredNameValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setWasNameInputTouched(false);
  };

  const nameInputClasses = isNameInputInvalid
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
      <div className="form-actions">
        <button disabled={!isFormValid}>Отправить</button>
      </div>
    </form>
  );
};

export default SomeInput;
